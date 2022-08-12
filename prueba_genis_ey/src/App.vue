<script>
import { RouterLink, RouterView } from "vue-router";
import Home from "./components/Home.vue";

const API_URL = `https://jsonplaceholder.typicode.com/photos`

export default{
  components:{
    Home
  },
  data(){
    return{
      pictures: [],
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const url = `${API_URL}`
      this.pictures = await (await fetch(url)).json()
    },

    deletePicture: function(id){
      if(window.confirm('¿Are you sure you want to delete image '+id+'?')){
        this.pictures = this.pictures.filter((picture) => picture.id !== id)
      }
    }
  }
}
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/" id="link">Home</RouterLink>
      </nav>
      <h1>Gallery</h1>
      <Home :pictures=pictures @delete-picture="deletePicture" />
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
#link{
  color: $yellow;
}

h1{
  color: $yellow;
  text-align: center;
}
</style>