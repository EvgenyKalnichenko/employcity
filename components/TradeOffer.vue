<template>
  <div class="trade-offer">
    <div class="trade-offer__name">{{name}}</div>
    <div class="trade-offer__price">{{price}}</div>
  </div>
</template>

<script>
export default {
  name: 'TradeOffer',
  props: {
    name: {
      type: String
    },
    price: {
      type: [Number, String]
    }
  }
}
</script>

<style scoped>

</style>
