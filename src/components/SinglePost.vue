<template>
    <div class="card shadow-sm border-secondary mb-3">
        <div class="card-header text-success"><strong>{{post.title}}</strong></div>
        <div class="card-body">
            <p class="card-text">{{limitPostBody}} ....</p>
            <div class="d-grid gap-2">
                <router-link :to="{name:'PostDetail',params:{id:post.id}}" class="btn btn-outline-success">Vue Detail</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
   props: ['post'],
   setup(props){
       let limitPostBody = computed(() =>{
           return props.post.body.substring(0, 100);
       });
       return {limitPostBody}
   }
}
</script>

<style>

</style>