<template>
  <div class="app-layout">
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  padding-bottom: 1rem; /* optional spacing above footer */
}
</style>
