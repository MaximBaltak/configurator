<template>
  <NavButtonComponent title="Создать" :route="{name: 'create'}"/>
  <ul class="list">
    <li v-for="coffeeMachine in coffeeMachines" :key="coffeeMachine.id">
      <CardComponent :coffee-machine="coffeeMachine"/>
    </li>
    <li v-if="!coffeeMachines.length">Нет добавленных моделей</li>
  </ul>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import { useAppStore } from '@/store/app'
import NavButtonComponent from '@/ui/NavButtonComponent.vue'
const { coffeeMachines } = useAppStore()
</script>

<style scoped lang="scss">
@import "@/style-container.scss";
.list{
  width: 700px;
  padding: 10px;
  list-style-type: none;
  margin: 32px auto 0;
  @include customWidth(771px) {
    width: 400px;
  }
  @include customWidth(477px) {
    width: 100%;
  }
  &:first-child{
    margin-top: 0;
  }
  li{
    width: 100%;
    margin-top: 20px;
  }
}
</style>
