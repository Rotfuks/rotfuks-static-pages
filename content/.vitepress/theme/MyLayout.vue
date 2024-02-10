<!-- .vitepress/theme/Layout.vue -->
<template>
  
  <Layout>
    <template #layout-bottom>
      <RFFooter></RFFooter>
    </template>
  </Layout>

  
</template>
<script setup>
  import RFFooter from './components/RFFooter.vue'
  import DefaultTheme from 'vitepress/theme'
  const { Layout } = DefaultTheme
</script>
<style scoped>
.logo {
  height: 30px;
}
</style>