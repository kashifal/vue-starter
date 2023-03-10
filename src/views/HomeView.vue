<template>
    <div class="">
            <h1 class="flex gap-4 py-4 ml-2">@ <Icon icon="material-symbols:home-rounded" /> {{store.count}}</h1>
            <button @click="increment" class="px-4 py-1.5 bg-indigo-600 text-white ml-2 text-wihte rounded-full">Increment By 1</button>
            <button @click="random" class="px-4 py-1.5 bg-indigo-600 text-white ml-6 text-wihte rounded-full">Radnom </button>
    </div>
</template>

<script setup>

import {useCounterStore} from '../store/modules/counter';
 const store = useCounterStore()
import Icon from '@/components/Icon.vue';

 


  function increment(){
    store.increment();
  }

  function random(){
    store.randomizeCounter();
  }

  

</script>

<style lang="scss" scoped>

</style>

 