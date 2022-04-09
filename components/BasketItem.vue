<template>
  <div class="basket-item">
    <div class="basket-item__title">{{ title }}</div>
    <div class="basket-item__counter"></div>
    <div class="basket-item__price"></div>
    <div class="basket-item__remove">x</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BasketItem',
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    ...mapGetters('goods', ['productsByGroups']),
    title () {
      return this.productsByGroups[this.value.groupId].products[this.value.productId].name
    }
  }
}
</script>

<style scoped>

</style>
