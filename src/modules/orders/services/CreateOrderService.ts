import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateProductService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer does not exists');
    }

    const productsId = products.map(product => {
      return { id: product.id };
    });

    const productsItem = await this.productsRepository.findAllById(productsId);

    if (productsId.length !== productsItem.length) {
      throw new AppError('One or more products not found');
    }

    const productsList = productsItem.map(productItem => {
      const product = products.find(
        productFind => productFind.id === productItem.id,
      );

      return {
        product_id: productItem.id,
        price: productItem.price,
        quantity: product?.quantity || 0,
      };
    });

    const order = await this.ordersRepository.create({
      customer,
      products: productsList,
    });

    await this.productsRepository.updateQuantity(products);

    return order;
  }
}

export default CreateProductService;
