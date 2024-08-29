export const debounce = <T extends any[], U>(func: (...args: T) => U, delay: number) => {
  let timeOutId: ReturnType<typeof setTimeout> | null = null
  return (...args: T) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }

    timeOutId = setTimeout(() => func(...args), delay)
  }
}
