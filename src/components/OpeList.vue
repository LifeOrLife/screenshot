<template>
    <div class="ope-list" ref="list">
        <icon-check class="icon" @click="load"></icon-check>
    </div>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import IconCheck from './icons/IocnCheck.vue'
import { CROPOBJECT, Crop_Object } from '@/utils/inject';
const obj = inject(CROPOBJECT) as Crop_Object
const list = ref<HTMLElement|null>(null)
const load = () => {
    const {left, top, width, height} = (list.value?.parentNode as HTMLElement).getBoundingClientRect()
    const canvas = document.createElement('canvas')
    obj.deal?.initCanvas(canvas, width, height)
    const ctx = canvas.getContext('2d')
    const ratio = obj.deal?.ratio!
    const data = obj.deal?.ctx.getImageData(left * ratio, top * ratio, width * ratio, height * ratio) as ImageData 
    ctx?.putImageData(data, 0, 0 )
    obj.deal?.load(canvas)
    obj.closeCropBox()
}
</script>
<style scoped>
.ope-list{
    position: absolute;
    top: 100%;
    left: 0;
    padding: 0 10px;
    background: #fff;
    display: flex;
    font-size: 24px;
}
.icon{
    cursor: pointer;
}
.icon:hover{
    color: #6cf;
}
</style>
