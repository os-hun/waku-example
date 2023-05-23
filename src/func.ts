'use server'

let counter = 0

export const getCounter = () => counter

export const increment = () => {
  counter += 1
}

export const decrement = () => {
  counter -= 1
}
