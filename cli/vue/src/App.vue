<template>
  <div id="app">
    <Navbar></Navbar>
    <AllFriends></AllFriends>
    <OnlineFriends></OnlineFriends>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllFriends from "./components/AllFriends";
import OnlineFriends from "./components/OnlineFriends";

export default {
  name: "App",
  data() {
    return {
      title: "Wow Our Vue website is running!",
      
    };
  },
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
