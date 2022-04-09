import { animateEasing, line } from '~/assets/js/utils'
// функции используются для анимаций раскрытия выпадающих списков
export const beforeEnter = (el, done) => {
  el.style.height = 0 + 'px'
}

export const enter = (el, time = 200, done, easing = line) => {
  animateEasing(
    (p) => {
      el.style.overflow = 'hidden'
      el.style.opacity = p
      el.style.height = Math.round(p * el.scrollHeight) + 'px'
    },
    time, easing,
    () => {
      el.style.opacity = 1
      el.style.height = 'auto'
      el.style.overflow = 'auto'
    }
  )
}

export const leave = (el, time = 200, done, easing = line) => {
  animateEasing(
    (p) => {
      el.style.overflow = 'hidden'
      el.style.height = Math.round((1 - p) * el.scrollHeight) + 'px'
    },
    time, easing,
    () => {
      el.style.opacity = 0
      el.style.height = 0 + 'px'
      el.style.display = 'none'
    }
  )
}
