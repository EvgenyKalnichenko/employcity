<template>
  <div class="basket-state">
    <div class="basket-state__wrap">
      <basket-item
        v-for="item in cartProducts"
        :key="item.productId"
        :value="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BasketItem from '~/components/BasketItem'

export default {
  name: 'BasketState',
  components: { BasketItem },
  computed: {
    ...mapGetters('cart', ['cartProducts'])
  }
}
</script>

<style scoped>

</style>
