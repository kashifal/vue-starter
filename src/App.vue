<template>
 <div>
<div class=" py-4 px-3 shadow"> <router-link to="/">Home</router-link>
 <router-link to="/about" class="ml-4">About</router-link></div>

 <Transition>
 <router-view></router-view>
 </Transition>
 </div>
</template>

<script setup>

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