<template>
<div id="app">
    <Layout></Layout>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Layout from "@/components/layout/MainLayout";
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
body {
    font-family: Montserrat, Helvetica, Arial, sans-serif !important;
    font-weight: 400 !important;
    overflow-x: hidden;
    max-width: 100%;
    background: #f8f8f8 !important;
}

html {
    font-size: 14px !important;
    width: 100% !important;
    line-height: 1.5 !important;
    letter-spacing: 0.01rem !important;
}

#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: 400;
    min-height: 100%;
}

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

.vs-sidebar--background {
    width: 100%;
    height: 100%;
    position: inherit !important;
    z-index: 20000;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    opacity: 1;
}
</style>
