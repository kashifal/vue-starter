<template>
 <div>
<Header />  

 <Transition>
 <router-view></router-view>
 </Transition>
 </div>
</template>

<script setup>
import Header from '@/components/Header.vue';

</script>

<style  scoped> 
.v-enter-active,
.v-leave-active {
  transition: opacity .6s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>