
<template>
  <div>
    
    <div class=" block">
      <div class="border-b border-gray-800">
      <h1 class="text-xl py-4 tracking-wide text-white font-bold">Select Podcast From <span class="border-b">{{Genraltabs[store.tabId].name}}</span></h1>
        <nav class="-mb-px flex space-x-8 max-w-full overflow-auto" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" href="#" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700', 'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">
            {{ tab.name }}
            <span v-if="tab.count" :class="[tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900', 'ml-3  rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block']">{{ tab.count }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useTabsStore} from '@/store/modules/tabs';




const store = useTabsStore();



const tabs = [
  { name: 'All', href: '#', count: '142', current: true },
  { name: 'Football', href: '#', count: '2', current: false},
  { name: 'Cricket', href: '#', count: '52' ,count: '4', current: false },
  { name: 'Volleybal', href: '#', count: '0', current: false },
  { name: 'Basketball', href: '#', count: '10',current: false },
]



const Genraltabs = [
  { name: 'All', href: '#', current: true },
  { name: 'London', href: '#', current: false },
  { name: 'Chicago', href: '#', current: false },
  { name: 'Karachi', href: '#', current: false },
  { name: 'Kabul', href: '#', current: false },
  { name: 'LA', href: '#', current: false }, 
  { name: 'Tokyo', href: '#', current: false }, 
  { name: 'BA', href: '#', current: false },  
]



</script>