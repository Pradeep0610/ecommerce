<template>
<div id="app">
    <Layout></Layout>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
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

.vs-sidebar.vs-sidebar-parent {
    position: fixed !important;
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

.items-center {
    align-items: center !important;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between !important;
}

.truncate {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
}

.text-sm {
    font-size: 0.875rem !important;
}

.font-semibold {
    font-weight: 600 !important;
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

.w-full {
    width: 100% !important;
}
</style>
