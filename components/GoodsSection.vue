<template>
  <div
    class="goods"
    :class="{disabled: !Object.keys(items).length}"
  >
    <dropdown-app :open="true">
      <template #toggle>
        <div class="goods__top">
          <h2 class="goods__title">{{ title }}</h2>
          <div class="goods__icon">
            <svg-icon name="arrow-bottom" />
          </div>
        </div>
      </template>
      <template #dropdown>
        <div class="goods__list">
          <trade-offer
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :groupId="groupId"
            :name="item.name"
            :status="item.priceChangeStatus"
            :quantity="item.quantity"
            :price="item.price.RUB"
          />
        </div>
      </template>
    </dropdown-app>
  </div>
</template>

<script>

export default {
  name: 'GoodsSection',
  components: {
    TradeOffer: () => import('~/components/TradeOffer'),
    DropdownApp: () => import('~/components/app/DropdownApp')
  },
  props: {
    title: {
      type: String
    },
    items: {
      type: Object
    },
    groupId: {
      type: String
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style scoped>

</style>
