<template>
  <div>
    <div>
      <label for="form-group">Name</label>
      <input type="text"
            id="name"
            class="form-control"
            v-model="billingItem.name"/>
    </div>

    <div>
      <label for="form-group">Price</label>
      <input type="text"
            id="price"
            class="form-control"
            v-model="billingItem.price"/>
    </div>

    <div>
      <label for="form-group">Unit</label>
      <input type="text"
            id="unit"
            class="form-control"
            v-model="billingItem.unit"/>
    </div>

    <div>
      <label for="form-group">Quantity</label>
      <input type="text"
            id="quantity"
            class="form-control"
            v-model="billingItem.quantity"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateBillingItem',
  props: {
    billingItem: Object
  }
}
</script>
