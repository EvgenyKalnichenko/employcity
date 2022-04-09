<template>
  <div class="container">
    <GoodsSection
      v-for="item in value"
      :key="item.T"
      :title="item.G"
      :items="item.B"
    />
  </div>
</template>

<script>
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
  async mounted () {},
  watch: {
  }
}
</script>
