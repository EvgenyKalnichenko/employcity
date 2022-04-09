<template>
  <div class="basket-state">
    <h2 class="basket-state__title">Корзина</h2>
    <div v-if="cartProducts.length" class="basket-state__container">
      <div class="basket-state__wrap">
        <basket-item
          v-for="item in cartProducts"
          :key="item.productId"
          :value="item"
        />
      </div>
      <div class="basket-state__total">Итого: {{ total }} руб.</div>
    </div>
    <div v-else>
      <p>Ваша корзина пуста</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BasketItem from '~/components/BasketItem'

export default {
  name: 'BasketState',
  components: { BasketItem },
  mounted () {
    this.getCart()
  },
  methods: {
    ...mapActions('cart', ['getCart'])
  },
  computed: {
    ...mapGetters('cart', ['cartProducts']),
    ...mapGetters('goods', ['productsByGroups']),
    total () {
      let result = 0
      for (const {
        groupId,
        productId,
        quantity
      } of this.cartProducts) {
        result += this.productsByGroups[groupId].products[productId].price.RUB * quantity
      }
      return +(result).toFixed(2)
    }
  }
}
</script>

<style scoped>

</style>
