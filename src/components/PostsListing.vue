<template>
  <div class="container mt-3">
    <!-- row -->
    <div class="row" v-if="posts.length">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-6 d-flex" v-for="post in posts" :key="post.id">
            <SinglePost :post="post"></SinglePost>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <ul class="list-group">
          <TagColud :posts="posts"></TagColud>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TagColud from './TagColud'
import SinglePost from './SinglePost'
export default {
  components: {
    TagColud,
    SinglePost },
  props:['posts'],
  setup(){
    
  }
}
</script>

<style>

</style>