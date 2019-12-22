/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    companyName
    postalCode
    address1
    address2
    address3
    name
    invoiceNumber
    message
  }
}
`;
export const listCustomers = `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyName
      postalCode
      address1
      address2
      address3
      name
      invoiceNumber
      message
    }
    nextToken
  }
}
`;
