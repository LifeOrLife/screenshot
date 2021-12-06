<template>
    <div class="preview-img" ref="previewBox">
        <crop-box></crop-box>
        <div class="close-icon" @click="$emit('close')"></div>
    </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import CropBox from './CropBox.vue'

const previewBox = ref<HTMLElement | null>(null)
const props = defineProps({
    con: {
        type: HTMLCanvasElement
    }
})
defineEmits(['close'])
onMounted(() => {
    previewBox.value?.appendChild(props.con!)
})
</script>
<style scoped>
.preview-img{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    overflow: hidden;
}
.close-icon{
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 50%;
    cursor: pointer;
    width: 50px;
    height: 50px;
    z-index: 20;
    transition: all 100ms;
    transform: rotate(45deg);
}
.close-icon:hover{
    background: rgba(255, 255, 255, .4);
    transform: rotate(135deg);
}
.close-icon::before{
    content: '';
    position: absolute;
    left: 5px;
    top: 23px;
    width: 40px;
    height: 4px;
    background: #fff;
    border-radius: 2px;
}
.close-icon::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 23px;
    width: 4px;
    height: 40px;
    background: #fff;
    border-radius: 2px;
}
</style>
