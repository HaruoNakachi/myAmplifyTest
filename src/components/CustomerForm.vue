<template>
  <div>
    <div class="form-group">
      <label for="companyName">Company Name</label>
      <input type="text"
            id="companyName"
            class="form-control"
            v-model="customer.companyName">
    </div>

    <div class="form-group">
      <label for="postalCode">Postal Code</label>
      <input type="text"
            id="postalCode"
            class="form-control"
            v-model="customer.postalCode">
    </div>

    <div class='form-group'>
      <label for="address1">Address1</label>
      <input type="text"
            id="address1"
            class="form-control"
            v-model="customer.address1">
    </div>

    <div class="form-group">
      <label for="address2">Address2</label>
      <input type="text"
            id="address2"
            class="form-control"
            v-model="customer.address2">
    </div>

    <div class="form-group">
      <label for="position">Position</label>
      <input type="text"
            id="position"
            class="form-control"
            v-model="customer.position">
    </div>

    <div class="form-group">
      <label for="recipient">Recipient</label>
      <input type="text"
            id="recipient"
            class="form-control"
            v-model="customer.recipient">
    </div>

    <div class="form-group">
      <label for="invoiceNumber">Invoice Number</label>
      <input type="text"
            id="invoiceNumber"
            class="form-control"
            v-model="customer.invoiceNumber">
    </div>

        <div class="form-group">
      <label for="memo">Memo</label>
      <input type="text"
            id="memo"
            class="form-control"
            v-model="customer.memo">
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