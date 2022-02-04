<template>
    <PostsListing :posts="filteredPosts"></PostsListing>
</template>

<script>
import PostsListing from '../components/PostsListing'
import getPosts from "../composables/getPosts"
import {useRoute} from 'vue-router'
import { computed } from '@vue/runtime-core'
export default {
  components: { PostsListing },
    setup(){
        let route = useRoute();
        let {error, posts, load} = getPosts();

        load();

        let filteredPosts = computed(() =>{
            return posts.value.filter((post) =>{
                return post.tags.includes(route.params.tag);
            });
        });
        
        return {error, posts, filteredPosts}
    }
}
</script>

<style>

</style>