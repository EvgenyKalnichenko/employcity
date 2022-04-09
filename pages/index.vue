<template>
  <div class="container">
    <div class="page-layout">
      <div class="page-layout__container">
        <goods-section
          v-for="(item, groupId) in productsByGroups"
          :key="groupId"
          :groupId="groupId"
          :title="item.groupName"
          :items="item.products"
        />
      </div>
      <div class="page-layout__basket">
        <basket-state />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    BasketState: () => import('~/components/BasketState'),
    GoodsSection: () => import('~/components/GoodsSection')
  },
  async asyncData ({ store }) {
    await store.dispatch('goods/getProducts')
  },
  data () {
    return {
      value: null
    }
  },
  computed: {
    ...mapGetters('goods', ['productsByGroups'])
  }
}
</script>
