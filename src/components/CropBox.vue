<template>
    <div class="shadow-box" ref="el" :style="style">
        <ope-list></ope-list>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'
import OpeList from './OpeList.vue'
const el = ref<HTMLElement | null>(null)
const { style } = useDraggable(el, {
    initialValue: { x: 100, y: 100 }
})
</script>
<style scoped>
.shadow-box{
    position: absolute;
    width: 400px;
    height: 200px;
    outline: 9999px solid rgba(0, 0, 0, .3);
    z-index: 10;
}
</style>
