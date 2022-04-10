<template>
  <div class="container">
    <div class="page-layout">
      <div class="page-layout__container">
        <div class="curs">Текущий курс доллара: {{ rate }} руб</div>
        <goods-section
          v-for="(item, groupId) in productsByGroups"
          :key="groupId"
          :groupId="groupId"
          :title="item.groupName"
          :items="item.products"
        />
      </div>
      <div class="page-layout__basket">
        <basket-state/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { randomInteger } from '~/assets/js/utils'

export default {
  name: 'IndexPage',
  components: {
    BasketState: () => import('~/components/BasketState'),
    GoodsSection: () => import('~/components/GoodsSection')
  },
  async asyncData ({ store }) {
    await store.dispatch('goods/getProducts')
    const rate = randomInteger(20, 80)
    return {
      rate
    }
  },
  data () {
    return {
      value: null,
      timeout: null,
      rate: null
    }
  },
  created () {
    this.onChangeExchangeRate(this.rate)
  },
  mounted () {
    this.timeout = setInterval(async () => {
      await this.getProducts()
      this.rate = this.randomInteger(20, 80)
      this.onChangeExchangeRate(this.rate)
    }, 6000)
  },
  beforeDestroy () {
    clearTimeout(this.timeout)
  },
  methods: {
    ...mapActions('goods', ['getProducts']),
    ...mapMutations('goods', ['updateExchangeRates']),
    randomInteger,
    onChangeExchangeRate (val) {
      if (typeof val === 'number' && val >= 20 && val <= 80) {
        this.updateExchangeRates({
          key: 'RUB',
          val
        })
      }
    }
  },
  computed: {
    ...mapGetters('goods', ['productsByGroups'])
  }
}
</script>
