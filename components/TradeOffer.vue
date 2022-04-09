<template>
  <div class="trade-offer" :id="id">
    <div class="trade-offer__container">
      <div class="trade-offer__name">{{ name }} <span>({{ quantity }})</span></div>
      <div class="trade-offer__buy" @click="add">В корзину</div>
    </div>
    <div class="trade-offer__price">{{ price }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TradeOffer',
  props: {
    id: {
      type: [Number, String]
    },
    name: {
      type: String
    },
    price: {
      type: [Number, String]
    },
    quantity: {
      type: [Number, String]
    },
    groupId: {
      type: String
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    add () {
      const params = { id: this.id, groupId: this.groupId, quantity: this.quantity }
      this.addToCart(params)
    }
  }
}
</script>

<style scoped>

</style>
