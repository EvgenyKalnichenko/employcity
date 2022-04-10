<template>
  <div class="dropdown">
    <div class="dropdown__top" @click="toggleDropdown">
      <slot name="toggle"></slot>
    </div>
    <transition v-on:before-enter="beforeEnterF" v-on:enter="enterF" v-on:leave="leaveF" v-bind:css="false">
      <div class="dropdown__container" v-show="isOpen">
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { beforeEnter, enter, leave } from '~/assets/js/dropdownAnimation'

export default {
  name: 'dropdown-app',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: null,
      disabled: false
    }
  },
  created () {
    this.isOpen = this.open
  },
  methods: {
    beforeEnterF (el) {
      beforeEnter(el)
    },
    enterF (el, done) {
      enter(el, 200, done)
    },
    leaveF (el, done) {
      leave(el, 200, done)
    },
    toggleDropdown () {
      if (!this.disabled) {
        this.disabled = true
        this.isOpen = !this.isOpen
        if (this.isOpen) {
          this.$el.classList.add('is-active')
        } else {
          this.$el.classList.remove('is-active')
        }
        setTimeout(() => {
          this.disabled = false
        }, 200)
      }
    }
  }
}
</script>

<style scoped>

</style>
