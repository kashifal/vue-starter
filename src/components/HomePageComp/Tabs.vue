
<template>
  <div>
   


    <!-- Desktop Tab -->
    <div class=" block">
    <h1 class="text-xl py-4 tracking-wide text-white font-bold">Select City:</h1>
      <nav class="isolate flex flex-wrap  divide-x divide-gray-700 gap-2 rounded-lg shadow   overflow-hidden " aria-label="Tabs">
        <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href"  :class="[store.tabId === tabIdx ? 'text-white bg-indigo-600' : 'text-gray-500 bg-gray-800 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-[100px] flex-1 overflow-auto   py-4 px-4 text-center text-sm font-medium hover:bg-indigo-600 hover:text-white focus:z-10']" :aria-current="tab.current ? 'page' : undefined" @click="setTab(tabIdx)">
          <span>{{ tab.name }}</span>
          <!-- <span aria-hidden="true" :class="[tab.current ? 'bg-black ' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" /> -->
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue';
import {useTabsStore} from '@/store/modules/tabs';


const store = useTabsStore();




const currentTab = ref(0);


const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'London', href: '#', current: false },
  { name: 'Chicago', href: '#', current: false },
  { name: 'Karachi', href: '#', current: false },
  { name: 'Kabul', href: '#', current: false },
  { name: 'LA', href: '#', current: false }, 
  { name: 'Tokyo', href: '#', current: false }, 
  { name: 'BA', href: '#', current: false },  
]


function setTab(tab){
    store.setTab(tab);
}
</script>