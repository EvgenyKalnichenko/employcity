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
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.07107 1.53553L4.53554 5.07107L1 1.53553" stroke="currentColor" stroke-width="2"/>
            </svg>
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
