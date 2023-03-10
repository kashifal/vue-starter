<template>
  <div class="h-16 shadow border-b border-gray-300">
    <div class="max-w-7xl md:px-4 px-6 mx-auto h-full">
      <div class="w-full h-full flex items-center justify-between">
        <router-link class="flex-1" to="#">ClusterUI</router-link>
        <div class="h-full flex items-center gap-x-6">
          <router-link v-for="link in navlinks" :to="link.to" :key="link.to">{{link.title}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {navlinks} from '@/constants/data.js';
 
</script>

<style lang="scss" scoped>
</style>