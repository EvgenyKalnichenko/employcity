import { setLocalStorage } from '~/assets/js/utils'

export const state = () => ({
  cartProducts: []
})

export const mutations = {
  SET_CART ({ cartProducts }, data) {
    if (data) {
      cartProducts.push(...data)
    }
  },
  ADD_TO_CART ({ cartProducts }, {
    groupId,
    productId,
    quantity
  }) {
    const itemIndex = cartProducts.findIndex(x => x.groupId === groupId && x.productId === productId)
    if (itemIndex !== -1) {
      cartProducts[itemIndex].quantity += quantity
    } else if (Number(quantity) !== 0) {
      cartProducts.push({
        groupId,
        productId,
        quantity
      })
    } else {
      cartProducts.splice(itemIndex, 1)
    }
    setLocalStorage(cartProducts)
  },
  CHANGE_QTY_ITEMS ({ cartProducts }, {
    groupId,
    productId,
    quantity
  }) {
    const itemIndex = cartProducts.findIndex(x => x.groupId === groupId && x.productId === productId)
    if (itemIndex !== -1) {
      if (quantity > 0) {
        cartProducts[itemIndex].quantity = quantity
      } else {
        cartProducts.splice(itemIndex, 1)
      }
    }
    setLocalStorage(cartProducts)
  },
  REMOVE_FROM_CART ({ cartProducts }, {
    groupId,
    productId
  }) {
    const itemIndex = cartProducts.findIndex(x => x.groupId === groupId && x.productId === productId)
    if (itemIndex !== -1) {
      cartProducts.splice(itemIndex, 1)
    }
    setLocalStorage(cartProducts)
  }
}

export const actions = {
  addToCart ({ commit }, {
    id,
    groupId,
    quantity
  }) {
    commit('ADD_TO_CART', {
      quantity,
      groupId,
      productId: id
    })
  },
  changeQtyCart ({ commit }, {
    id,
    groupId,
    quantity
  }) {
    commit('CHANGE_QTY_ITEMS', {
      quantity,
      groupId,
      productId: id
    })
  },
  removeFromCart ({ commit }, {
    id,
    groupId
  }) {
    commit('REMOVE_FROM_CART', {
      groupId,
      productId: id
    })
  },
  getCart ({ commit }) {
    const data = JSON.parse(localStorage.getItem('cart'))
    if (data) {
      commit('SET_CART', data)
    }
  }
}

export const getters = {
  cartProducts: s => s.cartProducts
}
