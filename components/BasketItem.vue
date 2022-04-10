<template>
  <div class="basket-item">
    <div class="basket-item__title">{{ title }}</div>
    <div class="basket-item__counter">
      <input-number-app
        :value="value.quantity"
        :max-value="maxValue"
        @changeInput="changeInput"
      />
    </div>
    <div class="basket-item__price">
      {{ price }} руб.
    </div>
    <div class="basket-item__remove" @click="remove">
      <svg-icon name="close"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InputNumberApp from '~/components/app/InputNumberApp'

export default {
  name: 'BasketItem',
  components: { InputNumberApp },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    ...mapGetters('cart', ['cartProducts']),
    ...mapGetters('goods', ['productsByGroups']),
    title () {
      return this.productsByGroups[this.value.groupId].products[this.value.productId].name
    },
    maxValue () {
      return this.productsByGroups[this.value.groupId].products[this.value.productId].quantity
    },
    price () {
      return this.productsByGroups[this.value.groupId].products[this.value.productId].price.RUB
    }
  },
  methods: {
    ...mapActions('cart', ['removeFromCart']),
    ...mapActions('cart', ['changeQtyCart']),
    remove () {
      this.removeFromCart({
        id: this.value.productId,
        groupId: this.value.groupId
      })
    },
    changeInput (data) {
      this.changeQtyCart({
        id: this.value.productId,
        groupId: this.value.groupId,
        quantity: data.quantity
      })
    }
  }
}
</script>

<style scoped>

</style>
