<template>
  <div class="hook">
    <h1>Posts</h1>
    <hr />
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p> {{post.body}} </p>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Hook",
  data() {
    return {};
  },
  methods: {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
