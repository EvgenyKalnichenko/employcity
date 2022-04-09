<template>
  <div class="container">
    <h1>Наши товары</h1>
    <div class="grid-goods">
      <GoodsSection
        v-for="(item, index) in productsByGroups"
        :key="index"
        :title="item.groupName"
        :items="item.products"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  async asyncData ({ $axios }) {
    let value
    await $axios.$get('/mock/names.json').then((res) => {
      console.log(res)
      value = res
    }).catch((error) => {
      console.error(error)
    })
    return {
      value
    }
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    ...mapActions('goods', ['getProducts'])
  },
  computed: {
    ...mapGetters('goods', ['productsByGroups'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>
