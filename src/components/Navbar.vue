<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand logo-text" @click="backToHome">Vue Blog System(Using Compostion API)</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{name:'Home'}" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'CreatePost'}" class="nav-link">Create Post</router-link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import {useRouter} from "vue-router"
export default {
    setup(){
        let router = useRouter();

        let backToHome = () =>{
            router.push({name:"Home"});
        }

        return {backToHome}
    }
}
</script>

<style>
.logo-text{
    cursor: pointer;
}
</style>