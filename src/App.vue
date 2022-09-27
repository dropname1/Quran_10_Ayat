<template>
  <div class="mainWrapper">
      <header-component></header-component>
      <div class="sidebrContentWrapper">
        <sidebar-component></sidebar-component>
        <content-one-component></content-one-component>
      </div>
      
  </div>
  
</template>

<script>
import contentOneComponentVue from './components/contentOneComponent.vue'
import headerComponentVue from './components/headerComponent.vue'
import sidebarComponentVue from './components/sidebarComponent.vue'
export default {
components: {
  headerComponent: headerComponentVue,
  sidebarComponent: sidebarComponentVue,
  contentOneComponent: contentOneComponentVue
}
}
</script>

<style scoped>
.mainWrapper {
  height: 100vh;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #dfe6e9;
}
.sidebrContentWrapper {
  display: flex;
}
</style>