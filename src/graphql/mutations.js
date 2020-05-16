/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createBillingItem = /* GraphQL */ `
  mutation CreateBillingItem(
    $input: CreateBillingItemInput!
    $condition: ModelBillingItemConditionInput
  ) {
    createBillingItem(input: $input, condition: $condition) {
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
export const updateBillingItem = /* GraphQL */ `
  mutation UpdateBillingItem(
    $input: UpdateBillingItemInput!
    $condition: ModelBillingItemConditionInput
  ) {
    updateBillingItem(input: $input, condition: $condition) {
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
export const deleteBillingItem = /* GraphQL */ `
  mutation DeleteBillingItem(
    $input: DeleteBillingItemInput!
    $condition: ModelBillingItemConditionInput
  ) {
    deleteBillingItem(input: $input, condition: $condition) {
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
