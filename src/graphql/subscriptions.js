/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
  }
}
`;
export const onCreateCustomer = `subscription OnCreateCustomer {
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
export const onUpdateCustomer = `subscription OnUpdateCustomer {
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
export const onDeleteCustomer = `subscription OnDeleteCustomer {
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
export const onCreateBillingItem = `subscription OnCreateBillingItem {
  onCreateBillingItem {
    id
    customerId
    name
    price
    unit
    quantity
  }
}
`;
export const onUpdateBillingItem = `subscription OnUpdateBillingItem {
  onUpdateBillingItem {
    id
    customerId
    name
    price
    unit
    quantity
  }
}
`;
export const onDeleteBillingItem = `subscription OnDeleteBillingItem {
  onDeleteBillingItem {
    id
    customerId
    name
    price
    unit
    quantity
  }
}
`;
