<template>
    <li class="list-group-item list-group-item-success" v-for="tag in uniqueTag" :key="tag">
        <router-link :to="{name:'Tag',params:{tag:tag}}">{{tag}}</router-link>
    </li>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
    props:['posts'],
    setup(props){
        
        let tags =ref([]);

        props.posts.forEach((post)=>{
            post.tags.forEach(tag=>{
                tags.value.push(tag);
            });
        });

        let uniqueTag = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag) === index;
        });

        return {uniqueTag}
        
    }
}
</script>

<style scoped>
    a{
        color: #0f5132;
        text-decoration: none;
    }
</style>