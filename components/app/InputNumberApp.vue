<template>
  <div
    class="counter"
  >
    <div class="counter__btn" @click="decrement">
      <svg-icon name="minus"/>
    </div>
    <input
      :id="id"
      v-model="counter"
      type="tel"
      class="counter__input"
      @input="mask"
      @change="changeInput"
    >
    <div class="counter__btn" @click="increment">
      <svg-icon name="plus"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumberApp',
  props: {
    id: {
      type: [Number, String]
    },
    maxValue: {
      type: [Number, String],
      required: false
    },
    value: {
      type: [Number, String],
      required: false,
      default: 0
    }
  },
  data () {
    return {
      counter: 0,
      max: this.maxValue
    }
  },
  methods: {
    validate () {
      if (this.maxValue && this.counter > this.maxValue) {
        this.counter = this.maxValue
      }
    },
    increment () {
      this.counter += 1
      this.handlerChangeInput()
    },
    decrement () {
      if (this.counter <= 0) {
        this.counter = 0
      } else {
        this.counter -= 1
      }
      this.handlerChangeInput()
    },
    mask () {
      this.counter = this.counter.replace(/[^0-9]/g, '')
    },
    changeInput () {
      this.mask()
      if (!this.counter) {
        this.counter = 0
      }
      this.handlerChangeInput()
    },
    handlerChangeInput () {
      this.counter = Math.abs(parseInt(this.counter))
      this.validate()
      const data = {
        quantity: this.counter
      }
      this.$emit('changeInput', data)
    }
  },
  created () {
    this.counter = this.value
    this.max = parseInt(this.maxValue)
  },
  watch: {
    'value' () {
      this.counter = this.value
    }
  }
}
</script>

<style scoped>

</style>
