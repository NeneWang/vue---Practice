<template>
  <div id="app">
    <Navbar></Navbar>
    <AllFriends @delete="deleteFriend" :friends="friends"></AllFriends>
    <OnlineFriends :friends="friends"></OnlineFriends>
    <Hook></Hook>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllFriends from "./components/AllFriends";
import OnlineFriends from "./components/OnlineFriends";
import Hook from './components/Hook';

export default {
  name: "App",

  data() {
    return {
      title: "Wow Our Vue website is running!",
      friends: [
        { name: "A", online: true },
        { name: "B", online: false },
        { name: "C", online: true },
        { name: "D", online: false },
        { name: "E", online: true },
      ],
    };
  },
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
    Hook,
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    },
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

h1{
  color: red;
  text-align: center;
}
</style>
