<template>
<vs-sidebar v-model="active" spacer default-index="1">
    <div class="header-sidebar" slot="header">
        <div>
            <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
        </div>
    </div>
</vs-sidebar>
</template>

<script>
export default {
    data() {
        return {
            active: true
        };
    }
};
</script>

<style lang="stylus" scoped>
.header-sidebar {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.footer-sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
</style>
