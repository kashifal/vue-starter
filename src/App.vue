<template>
 <div>
<Header />  

<div class="pb-8">
 <Transition>
 <router-view></router-view>
 </Transition>


</div>
 <Footer />
 </div>
 
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

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