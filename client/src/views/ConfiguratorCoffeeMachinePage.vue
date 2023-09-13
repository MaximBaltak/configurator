<template>
  <h1 class="title">Кофемашина: размер {{ state.typeSize }}, колличество напитков {{ state.numberOfDrinks }} шт.</h1>
  <NavButtonComponent title="К списку" :route="{ name:'list' }"/>
  <div class="content">
    <div class="content_image">
      <img v-if="state.typeSize === TypeSizes.BIG" src="../assets/big-coffee-machine.png" alt="logo">
      <img v-if="state.typeSize === TypeSizes.STANDARD" src="../assets/small-coffee-machine.png" alt="logo">
    </div>
    <div class="content_config">
      <div class="wrapper">
        <p>Размер:</p>
        <select v-model="state.typeSize" class="select">
          <option v-for="(option, index) in selectSize"
                  :key="index" selected :value='option'>{{ option }}
          </option>
        </select>
      </div>
      <div class="wrapper">
        <p>Колличество выборов:</p>
        <select v-model="state.numberOfDrinks" class="select select-background-blue">
          <option v-for="(option, index) in selectNumberDrinks"
                  :key="index" selected :value='option'>{{ option }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <button class="add" @click="createCoffeeMachine">Добавить в хранилище</button>
</template>

<script setup lang="ts">
import { TypeSizes } from '@/enums/type-sizes'
import { NumberOfDrinks } from '@/enums/number-of-drinks'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { onMounted, reactive } from 'vue'
import { CreateCoffeeMachine } from '@/types/coffee-machine'
import NavButtonComponent from '@/ui/NavButtonComponent.vue'
import { storeToRefs } from 'pinia'
const { create, getParams } = useAppStore()
const { selectNumberDrinks, selectSize } = storeToRefs(useAppStore())
const router = useRouter()
const state = reactive({
  numberOfDrinks: NumberOfDrinks.SIX,
  typeSize: TypeSizes.STANDARD
})
const createCoffeeMachine = () => {
  const coffeeMachineNew: CreateCoffeeMachine = {
    id: Math.floor(Math.random() * 100000),
    numberDrinks: state.numberOfDrinks,
    size: state.typeSize
  }
  create(coffeeMachineNew)
  router.push({
    name: 'list'
  })
}
onMounted(async () => {
  await getParams()
})
</script>

<style scoped lang="scss">
@import "@/style-container.scss";

.title {
  font-weight: 600;
  font-size: 25px;
  text-align: center;
}

.content {
  margin-top: 32px;
  display: grid;
  width: 100%;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'image config';
  @include customWidth(771px) {
    grid-template-rows: 400px 1fr;
    grid-template-columns: none;
    grid-template-areas: 'image'
                        'config';
  }

  &_image {
    grid-area: image;
    width: 100%;

    img {
      width: 300px;
      height: 300px;
      display: block;
      @include customWidth(771px) {
        margin: 0 auto 0;
      }
      @include customWidth(370px) {
        width: 200px;
        height: 200px;
      }
    }
  }

  &_config {
    grid-area: config;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-flow: column;
    gap: 20px;
  }
}

.add {
  border: none;
  background: #1d7df5;
  display: block;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  width: 253px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  transition: all .2s;
  margin-top: 32px;
  @include customWidth(771px) {
    margin: 32px auto 0;
  }
}

.wrapper {
  width: 400px;
  @include customWidth(459px) {
    width: 100%;
  }

  .select {
    background: rgba(128, 128, 128, 0.1);
    outline: none;
    border: none;
    width: 100%;
    height: 30px;
    font-size: 18px;
  }

  .select-background-blue {
    background: rgba(0, 131, 255, 0.1);
  }
}
</style>
