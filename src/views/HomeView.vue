<template>
    <div>
      <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-24">
      <Tabs /> 
      </div>
       <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8 py-8"><Category /></div>
       <Cards />
    </div>
</template>

<script setup>
 
import Icon from '@/components/Icon.vue';
import Tabs from '@/components/HomePageComp/Tabs.vue';
import Category from '@/components/HomePageComp/Category.vue';
import Cards from '@/components/HomePageComp/Cards.vue';
 
  

</script>

<style lang="scss" scoped>

</style>

 