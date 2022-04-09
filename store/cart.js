export const state = () => ({
  cartProducts: []
})

export const mutations = {
  addToCart ({ cartProducts }, {
    groupId,
    productId
  }) {
    const itemIndex = cartProducts.findIndex(x => x.groupId === groupId && x.productId === productId)
    if (itemIndex !== -1) {
      cartProducts[itemIndex].quantity++
    } else {
      cartProducts.push({
        groupId,
        productId,
        quantity: 1
      })
    }
  }
}

export const actions = {
  addToCart ({ commit }, { id, groupId, quantity }) {
    commit('addToCart', { groupId, productId: id })
  }
}

export const getters = {
  cartProducts: s => s.cartProducts
}
