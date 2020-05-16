/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      companyName
      postalCode
      address1
      address2
      position
      recipient
      invoiceNumber
      memo
      to
      cc
      mailName
      billingItems {
        items {
          id
          customerId
          name
          price
          unit
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
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
        position
        recipient
        invoiceNumber
        memo
        to
        cc
        mailName
        billingItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBillingItem = /* GraphQL */ `
  query GetBillingItem($id: ID!) {
    getBillingItem(id: $id) {
      id
      customerId
      name
      price
      unit
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const listBillingItems = /* GraphQL */ `
  query ListBillingItems(
    $filter: ModelBillingItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillingItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerId
        name
        price
        unit
        quantity
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
