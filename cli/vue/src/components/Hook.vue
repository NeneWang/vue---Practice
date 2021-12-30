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
