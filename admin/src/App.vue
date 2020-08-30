<template>
<div id="app">
    <Layout></Layout>
</div>
</template>

<script>
import "../public/css/app.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Layout from "@/components/layout/Layout";
export default {
    data() {
        return {
            isActive: true
        };
    },
    components: {
        Layout
    }
};
</script>

<style>
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.flex {
    display: flex !important;
}

.flex-wrap {
    flex-wrap: wrap !important;
}

.flex-grow {
    -webkit-box-flex: 1 !important;
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
}

.truncate {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
}

.text-sm {
    font-size: 0.875rem !important;
}

.grid-view-item .grid-view-img {
    -webkit-transition: 0.35s;
}

.grid-view-item .grid-view-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    transition: 0.35s;
}

.cursor-pointer {
    cursor: pointer !important;
}
</style>
