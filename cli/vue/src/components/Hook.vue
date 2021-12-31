<template>
  <div class="hook">
    <h1>Posts</h1>

    <hr />
    <input type="text" v-model="seachTrem" placeholder="Search" >
    <div v-for="post in filtersearch" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body | snippet }}</p>
      <div></div>
    </div>
  </div>
</template>


<script>
import axios from'axios'
export default {
	name: 'Hook',
	data(){
		return {
        posts:[],
        seachTrem: ''
		}
    },
    computed:{
      filtersearch(){
          return this.posts.filter(post => {
              return post.title.match(this.seachTrem)
          })
          
      }
    },
    methods:{
         
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
        this.posts = response.data
        })
        .catch(error=>{
            console.log(error)
        })
    }
}	 
</script>

<style scoped></style>
