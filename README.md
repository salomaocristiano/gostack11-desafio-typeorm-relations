![header](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-typeorm-relations/master/assets/header-desafios.png)

<h3 align="center">
  Desafio 09: Relacionamentos com banco de dados no Node.js
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/salomaocristiano/gostack11-desafio-typeorm-relations.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/salomaocristiano/gostack11-desafio-typeorm-relations.svg">

  <a href="https://www.codacy.com/app/salomaocristiano/gostack11-desafio-typeorm-relations?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=salomaocristiano/gostack11-desafio-typeorm-relations&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/04db4b43120b4d05b9b39c9d2da97300.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/salomaocristiano/gostack11-desafio-typeorm-relations.svg">
  <a href="https://github.com/salomaocristiano/gostack11-desafio-typeorm-relations/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/salomaocristiano/gostack11-desafio-typeorm-relations.svg">
  </a>

  <a href="https://github.com/salomaocristiano/gostack11-desafio-typeorm-relations/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/salomaocristiano/gostack11-desafio-typeorm-relations.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/salomaocristiano/gostack11-desafio-typeorm-relations.svg">
</p>

## Screenshot

<p align="center">

![image-example](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-typeorm-relations/master/assets/bootcamp.jpg)

</p>

<p align="center">

![image-example](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-typeorm-relations/master/assets/test.jpg)

</p>

## :rocket: Sobre o desafio

Aplicação permitirá a criação de clientes, produtos e pedidos, onde o cliente pode gerar novos pedidos de compra de certos produtos, como um pequeno e-commerce que irá através Node.js junto ao TypeScript, incluindo o uso de banco de dados com o TypeORM, e relacionamentos ManyToMany para gerar uma API.

### Rotas da aplicação

- **`POST /customers`**: A rota deve receber `name` e `email` dentro do corpo da requisição, sendo o `name` o nome do cliente a ser cadastrado. Ao cadastrar um novo cliente, ele deve ser armazenado dentro do seu banco de dados e deve ser retornado o cliente criado. Ao cadastrar no banco de dados, na tabela `customers` ele deverá possuir os campos possuindo os campos `name`, `email`, `created_at`, `updated_at`.

- **`POST /products`**: Essa rota deve receber `name`, `price` e `quantity` dentro do corpo da requisição, sendo o `name` o nome do produto a ser cadastrado, `price` o valor unitário e `quantity` a quantidade existente em estoque do produto. Com esses dados devem ser criados no banco de dados um novo produto com os seguitnes campos: `name`, `price`, `quantity`, `created_at`, `updated_at`.

- **`POST /orders/`**: Nessa rota você deve receber no corpo da requisição o `customer_id` e um array de products, contendo o `id` e a `quantity` que você deseja adicionar a um novo pedido. Aqui você deve cadastrar na tabela `order` um novo pedido, que estará relacionado ao `customer_id` informado, `created_at` e `updated_at` . Já na tabela `orders_products`, você deve armazenar o `product_id`, `order_id`, `price` e `quantity`, `created_at` e `updated_at`.

- **`GET /orders/:id`**: Essa rota deve retornar as informações de um pedido específico, com todas as informações que podem ser recuperadas através dos relacionamentos entre a tabela `orders`, `customers` e `orders_products`.

### Específicação dos testes

Para esse desafio, temos os seguintes testes:

- **`should be able to create a new customer`**: Para que esse teste passe, sua aplicação deve permitir que um cliente seja criado, e retorne um json com o cliente criado.

- **`should not be able to create a customer with one e-mail thats already registered`**: Para que esse teste passe, sua aplicação deve retornar um erro quando você tentar cadastrar um cliente com um e-mail que já esteja cadastrado no banco de dados.

- **`should be able to create a new product`**: Para que esse teste passe, sua aplicação deve permitir que um produto seja criado, e retorne um json com o produto criado.

- **`should not be able to create a duplicated product`**: Para que esse teste passe, sua aplicação deve retornar um erro quando você tentar cadastrar um produto com um nome que já esteja cadastrado no banco de dados.

- **`should be able to create a new order`**: Para que esse teste passe, sua aplicação deve permitir que um pedido seja criado, e retorne um json com o todos os dados do pedido criado.

- **`should not be able to create an order with a invalid customer`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um cliente que não existe no banco de dados, retornando um erro.

- **`should not be able to create an order with invalid products`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um produtos que não existem no banco de dados, retornando um erro caso um ou mais dos produtos enviados não exista no banco de dados.

- **`should not be able to create an order with products with insufficient quantities`**: Para que esse teste passe, sua aplicação não deve permitir a criação de um novo pedido com um produtos que não possuem quantidade disponível, retornando um erro caso um ou mais dos produtos enviados não possua a quantidade necessária.

- **`should be able to subtract an product total quantity when it is ordered`**: Para que esse teste passe, sua aplicação deve permitir que, quando um novo pedido for criado, seja alterada a quantidade total dos produtos baseado na quantidade pedida.

- **`should be able to list one specific order`**: Para que esse teste passe, você deve permitir que a rota `orders/:id` retorne um pedido, contendo todas as informações do pedido com o relacionamento de `customer` e `order_products`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
