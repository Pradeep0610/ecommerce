<template>
<vs-sidebar :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="layout--main" v-model="active" default-index="1" :hidden-background="true" spacer style></vs-sidebar>
</template>

<script>
export default {
    data() {
        return {
            active: true,
            reduce: false,
            notExpand: true
        };
    }
};
</script>
