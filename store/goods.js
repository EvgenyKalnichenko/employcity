export const state = () => ({
  productsByGroups: {},
  exchangeRates: { RUB: 60 }
})

export const mutations = {
  setProductsByGroups (state, {
    data,
    groups
  }) {
    // Преобразование групп, для дальнейшей работы
    const productsByGroups = Object.fromEntries(Object.entries(groups).map(x => [x[0], {
      groupName: x[1].G,
      products: {}
    }]))
    for (const {
      C: priceInUSD,
      G: groupId,
      T: productId,
      P: quantity
    } of data) {
      // Проверяем есть ли группа и продукт в этой группе
      if (groups[groupId]?.B[productId]) {
        let priceChangeStatus = ''
        // Проверяем был ли такой продукт в прошлом и сравниваем стоимость
        const previousPriceInUSD = state.productsByGroups[groupId]?.products[productId]?.price.USD
        if (previousPriceInUSD !== undefined && previousPriceInUSD !== priceInUSD) {
          priceChangeStatus = priceInUSD > previousPriceInUSD ? 'green' : 'red'
        }
        productsByGroups[groupId].products[productId] = {
          id: productId,
          name: groups[groupId].B[productId].N,
          quantity,
          priceChangeStatus,
          price: {
            USD: priceInUSD,
            RUB: +(state.exchangeRates.RUB * priceInUSD).toFixed(2)
          }
        }
      }
    }
    state.productsByGroups = productsByGroups
  }
}

export const actions = {
  async getProducts ({
    dispatch,
    commit
  }) {
    try {
      const data = await dispatch('fetchGoods')
      const groups = await dispatch('fetchNames')
      commit('setProductsByGroups', { data, groups })
    } catch (e) {
      console.log(e)
    }
  },
  async fetchGoods (context) {
    return await this.$axios.$get('/mock/data.json').then((res) => {
      return res.Value.Goods
    }).catch((error) => {
      console.error(error)
    })
  },
  async fetchNames (context) {
    return await this.$axios.$get('/mock/names.json').then((res) => {
      return res
    }).catch((error) => {
      console.error(error)
    })
  }
}

export const getters = {
  productsByGroups: s => s.productsByGroups
}
