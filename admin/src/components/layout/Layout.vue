<template>
<div class="layout--main main-vertical navbar-floating">
    <sidebar></sidebar>
    <div id="content-area" class="content-area-reduced" ref="contentArea">
        <div id="content-overlay"></div>
        <div class="relative">
            <div class="vs-navbar-wrapper navbar-default">
                <Navbar></Navbar>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="router-view">
                <div class="router-content">
                    <div class="router-header flex flex-wrap items-center mb-6"></div>
                    <div class="content-area__content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
    components: {
        Navbar,
        Sidebar
    },
    data() {
        return {
            windowWidth: 0
        };
    },
    mounted() {
        this.$nextTick(function () {
            window.addEventListener("resize", this.getWindowWidth);
            this.getWindowWidth();
        });
    },
    beforeUpdate() {
        if (this.windowWidth >= 1201) {
            this.$refs.contentArea.classList = [];
            this.$refs.contentArea.classList.add("content-area-reduced");
        } else if (this.windowWidth <= 1200) {
            this.$refs.contentArea.classList = [];
            this.$refs.contentArea.classList.add("content-area-full");
            console.log(this.$refs.contentArea.classList);
        }
    },
    methods: {
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth + 15;
        }
    }
};
</script>
