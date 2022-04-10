<template>
  <div class="trade-offer" :id="id">
    <div class="trade-offer__container">
      <div class="trade-offer__name">{{ name }} <span>({{ quantity }})</span></div>
      <div class="trade-offer__buy" @click="add">В корзину</div>
    </div>
    <div class="trade-offer__price"  :class="status">{{ price }} руб</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    },
    status: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('cart', ['cartProducts'])
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    add () {
      const params = {
        id: this.id,
        groupId: this.groupId,
        quantity: 1
      }
      console.log('add', params)
      const cartItemIndex = this.cartProducts.findIndex(x => x.groupId === this.groupId && x.productId === this.id)
      if (this.cartProducts[cartItemIndex]?.quantity === this.quantity) {
        return false
      }
      this.addToCart(params)
    }
  }
}
</script>

<style scoped>

</style>
