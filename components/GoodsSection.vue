<template>
  <div class="goods">
    <h2 class="goods__title">{{ title }}</h2>
    <div class="goods__list">
      <trade-offer
        v-for="(item, idx) in items"
        :key="idx"
        :name="item.N"
        :price="item.T"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsSection',
  props: {
    title: {
      type: String
    },
    items: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
