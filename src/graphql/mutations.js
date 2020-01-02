/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
  }
}
`;
export const updateTodo = `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
  }
}
`;
export const deleteTodo = `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
  }
}
`;
export const createCustomer = `mutation CreateCustomer(
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
    billingItems {
      items {
        id
        customerId
        name
        price
        unit
        quantity
      }
      nextToken
    }
  }
}
`;
export const updateCustomer = `mutation UpdateCustomer(
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
    billingItems {
      items {
        id
        customerId
        name
        price
        unit
        quantity
      }
      nextToken
    }
  }
}
`;
export const deleteCustomer = `mutation DeleteCustomer(
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
    billingItems {
      items {
        id
        customerId
        name
        price
        unit
        quantity
      }
      nextToken
    }
  }
}
`;
export const createBillingItem = `mutation CreateBillingItem(
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
  }
}
`;
export const updateBillingItem = `mutation UpdateBillingItem(
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
  }
}
`;
export const deleteBillingItem = `mutation DeleteBillingItem(
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
  }
}
`;
