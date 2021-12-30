<template>
  <div id="allfriends">
    <h2>All Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <h6 @click="unfriend(friend.name)">{{ friend.name }}</h6>

    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unfriend(name) {
      this.$emit("delete", { name });
    },
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
