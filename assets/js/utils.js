export const animateEasing = (render, duration, easing, endAnimation) => new Promise((resolve) => {
  const start = Date.now()

  function loop () {
    const p = (Date.now() - start) / duration
    if (p > 1) {
      endAnimation()
      resolve()
    } else {
      requestAnimationFrame(loop)
      render(easing(p))
    }
  }

  loop()
})

// тайминг функции
export const line = (x) => {
  return x
}

export const easeInSine = (x) => {
  return 1 - Math.cos((x * Math.PI) / 2)
}
