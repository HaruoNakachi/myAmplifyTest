<template>
  <div>
    <div class="form-group">
      <label for="name">Customer Name</label>
      <input type="text"
            id="name"
            class="form-control"
            v-model="customer.name">
    </div>

    <div class="form-group">
      <label for="description">Customer Description</label>
      <input type="text"
            id="description"
            class="form-control"
            v-model="customer.description">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerForm',
  props: {
    customer: Object
  }
}
</script>