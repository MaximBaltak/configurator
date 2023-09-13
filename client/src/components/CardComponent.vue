<template>
  <div class="card">
    <img v-if="coffeeMachine.size === TypeSizes.BIG" src="../assets/big-coffee-machine.png" alt="logo">
    <img v-if="coffeeMachine.size === TypeSizes.STANDARD"  src="../assets/small-coffee-machine.png" alt="logo">
    <p class="title">Размер: {{coffeeMachine.size}}. Кол-во выборов: {{coffeeMachine.numberDrinks}} шт.</p>
    <div class="actions">
      <button class="button" @click="() => add(coffeeMachine.id)">+</button>
      <p class="count">{{coffeeMachine.count}}</p>
      <button class="button" @click="() => remove(coffeeMachine.id)" style="color: #1d7df5">-</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { CoffeeMachine } from '@/types/coffee-machine'
import { useAppStore } from '@/store/app'
import { TypeSizes } from '@/enums/type-sizes'
defineProps<{
  coffeeMachine: CoffeeMachine
}>()
const { add, remove } = useAppStore()
</script>

<style scoped lang="scss">
@import "@/style-container.scss";
.card{
  width: 100%;
  height: 80px;
  padding: 5px;
  box-shadow: 0 0 6px rgba(128, 128, 128, 0.5);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include customWidth(771px) {
    height: 100% ;
    flex-flow: column;
  }
  img{
    width: 80px;
    height: 80px;
  }
  .title{
    font-size: 16px;
    font-weight: 600;
    @include customWidth(771px) {
      text-align: center;
    }
  }
  .actions{
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(128, 128, 128, 0.1);
    .button{
      border: none;
      outline: none;
      display: block;
      background: none;
      cursor: pointer;
      color: red;
      width: 50px;
      height: 50px;
      font-weight: 500;
      font-size: 40px;
    }
    .count{
      font-size: 20px;
    }
  }
}
</style>
