/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateBillingItem = /* GraphQL */ `
  subscription OnCreateBillingItem {
    onCreateBillingItem {
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
export const onUpdateBillingItem = /* GraphQL */ `
  subscription OnUpdateBillingItem {
    onUpdateBillingItem {
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
export const onDeleteBillingItem = /* GraphQL */ `
  subscription OnDeleteBillingItem {
    onDeleteBillingItem {
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
