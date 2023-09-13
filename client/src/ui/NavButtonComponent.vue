<template>
  <button class="next-button" @click="to">{{ title }}</button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  title: string,
  route: RouteLocationRaw
}>()
const to = (): void => {
  router.push(props.route)
}
</script>

<style scoped lang="scss">
@import "@/style-container.scss";

.next-button {
  border: none;
  background: none;
  display: block;
  cursor: pointer;
  color: grey;
  font-size: 18px;
  font-weight: 600;
  transition: all .2s;
  margin-top: 32px;
  @include customWidth(771px) {
    margin: 0 auto 0;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
