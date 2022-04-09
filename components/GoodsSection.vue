<template>
  <div class="goods">
    <div class="goods__top">
      <h2 class="goods__title">{{ title }}</h2>
      <div class="goods__icon">
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.07107 1.53553L4.53554 5.07107L1 1.53553" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div class="goods__list">
      <trade-offer
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :quantity="item.quantity"
        :price="item.price.RUB"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GoodsSection',
  props: {
    title: {
      type: String
    },
    items: {
      type: Object
    }
  },
  computed: {
    ...mapGetters('goods', ['goods'])
  },
  mounted () {
    Object.keys(this.items).filter((el) => {
      return el
    })
  }
}
</script>

<style scoped>

</style>
