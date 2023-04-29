import { defineStore } from "pinia";

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        tabId: 0,
    }),
    actions: { 
        setTab(index) {
            this.tabId = index;
        }
    },
})