<template>
  <div class="container mt-3">
    <!-- row -->
    <div class="row">
      <div class="col-md-4 d-flex" v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
  props:['posts'],
  setup(){
    
  }
}
</script>

<style>

</style>