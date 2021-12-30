<template>
  <div id="allfriends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span v-if="friend.online" >{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      friends: [
        { name: "A", online: true },
        { name: "B", online: false },
        { name: "C", online: true },
        { name: "D", online: false },
        { name: "E", online: true },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
