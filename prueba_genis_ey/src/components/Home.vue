<script>
export default {
  name: 'Home',
  props: {
    pictures: Array
  }, 
  emits: ['delete-picture'],
  methods: {
    onDelete(id){
      this.$emit('delete-picture', id)
    }
  }
}
</script>

<template>
  <div class="grid-container">
    <div v-for="picture in pictures" :key="picture.id" class="grid-item">
      <h6 id="title">Title: {{ picture.title }}</h6>
      <img id="image" :src="picture.url" v-on:click="onDelete(picture.id)"/>
    </div>
  </div>
</template>

<style lang="scss">
#title {
  color: white;
}
#image{
  width: 100%;
}
img:hover{
  cursor: pointer;
}
.grid-container {
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  padding: .625rem;
}
.grid-item {
  border: .0625rem solid $yellow;
  padding: .9375rem;
  text-align: center;
  margin: .625rem;
  flex: 29%;
}
</style>