<template>
<div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-area">
        <div id="nav">
            <router-link to="/products">Products</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <div class="router-view">
            <router-view />
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
    components: {
        Sidebar
    }
};
</script>

<style scoped>
#content-area {
    margin-left: 260px;
}
</style>
