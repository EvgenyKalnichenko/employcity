<template>
  <div class="trade-offer">
    <div class="trade-offer__name">{{name}} <span>({{quantity}})</span></div>
    <div class="trade-offer__price">{{price}}</div>
    <slot></slot>
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
    },
    quantity: {
      type: [Number, String]
    }
  }
}
</script>

<style scoped>

</style>
