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

// запись в localStorage
export const setLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

// Получить рандомное число
export function randomInteger (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// тайминг функции
export const line = (x) => {
  return x
}

export const easeInSine = (x) => {
  return 1 - Math.cos((x * Math.PI) / 2)
}
