<template>
  <div id="app">
    <Navbar></Navbar>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  data() {
    return {
      title: "Wow Our Vue website is running!",
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
