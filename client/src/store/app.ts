import { defineStore } from 'pinia'
import { AppStore } from '@/types/AppStore'
import { CreateCoffeeMachine } from '@/types/coffee-machine'
import axios from '@/api/axios'

export const useAppStore = defineStore('app', {
  state: (): AppStore => {
    return {
      coffeeMachines: [],
      selectNumberDrinks: [],
      selectSize: []
    }
  },
  actions: {
    create (payload: CreateCoffeeMachine) {
      for (let i = 0; i < this.coffeeMachines.length; i++) {
        const el = this.coffeeMachines[i]
        if (el.size === payload.size && el.numberDrinks === payload.numberDrinks) {
          el.count++
          return
        }
      }
      this.coffeeMachines.unshift({
        ...payload,
        count: 1
      })
    },
    async getParams () {
      try {
        const { data } = await axios.get('/params')
        this.selectSize = data.sizes
        this.selectNumberDrinks = data.number_drinks
      } catch (e) {
        console.log(e)
      }
    },
    add (id: number) {
      const index = this.coffeeMachines.findIndex((el) => el.id === id)
      this.coffeeMachines[index].count++
    },
    remove (id: number) {
      const index = this.coffeeMachines.findIndex((el) => el.id === id)
      console.log(this.coffeeMachines[index].count)
      if (this.coffeeMachines[index].count === 1) {
        this.coffeeMachines.splice(index, 1)
        return
      }
      if (this.coffeeMachines[index].count > 1) {
        this.coffeeMachines[index].count--
      }
    }
  }
}
)
