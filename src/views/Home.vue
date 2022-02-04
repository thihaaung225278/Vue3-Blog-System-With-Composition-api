<template>
  <div v-if="error">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-danger">{{error}}</h3>
        </div>
      </div>
    </div>
  </div>
  <div v-if="posts.length>0">
    <PostsListing :posts="posts"></PostsListing>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostsListing from '../components/PostsListing'
import getPosts from '../composables/getPosts'
// @ is an alias to /src

export default {
  components: {
    Spinner, PostsListing },
  setup(){
    let {error, posts, load} = getPosts();
    load();

    return {error, posts}
  }
}
</script>
