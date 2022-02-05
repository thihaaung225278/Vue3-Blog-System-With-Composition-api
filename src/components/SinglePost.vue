<template>
    <div class="card shadow-sm border-secondary mb-3">
        <div class="card-header text-success d-flex justify-content-between">
            <strong>{{post.title}}</strong>
            <span class="badge rounded-pill bg-secondary">{{formatTime}}</span>
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
            <div class="card-text">{{limitPostBody}} ....</div>
            <div class="my-3">
                <span class="badge bg-success me-1" v-for="tag in post.tags" :key="tag">
                    <router-link :to="{name:'Tag',params:{tag:tag}}" class="link-light">{{tag}}</router-link>
                </span>
            </div>
            <div class="d-grid gap-2">
                <router-link :to="{name:'PostDetail',params:{id:post.id}}" class="btn btn-outline-success">View Detail Post</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default {
   props: ['post'],
   setup(props){
       let limitPostBody = computed(() =>{
           return props.post.body.substring(0, 100);
       });
       let formatTime = computed(() =>{
            return formatDistanceToNow(props.post.created_at.toDate());
       });
       return {limitPostBody,formatTime }
   }
}
</script>

<style scoped>
.badge{
    line-height: 1.5;
}
</style>