<template>
    <div class="ope-list">
        <button class="btn" @click="start">截图</button>
    </div>
    <!-- <video ref="vBox" autoplay></video> -->
    <preview-img v-if="showCropBox" :con="can" @close="closeCropBox"></preview-img>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue';
import PreviewImg from './PreviewImg.vue'
import { Canvas } from '@/utils/createCanvas';
import { sleep } from '@/utils/sleep';
import { CROPOBJECT, Crop_Object } from '@/utils/inject'
const vBox = ref<HTMLVideoElement | null>(null);
const showCropBox = ref(false)
const can = ref<HTMLCanvasElement>()
const start = async () => {
    const _c = new Canvas();
    CROP_BOX.deal = _c;
    can.value = _c.el
    await startShot(_c.source);
    await sleep(300);
    _c.draw(_c.source)
    showCropBox.value = true
    // _c.export();
    await stopShot(_c.source);
};
const closeCropBox = () => {
    showCropBox.value = false
}
const CROP_BOX: Crop_Object = {
    closeCropBox
}
provide(CROPOBJECT, CROP_BOX)
const startShot = async (source: HTMLVideoElement) => {
    try {
        source.srcObject = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
        });
        source.play();
    } catch (error) {
        console.log(error);
        console.log('%c别截了，浏览器API调用有问题', 'color: red; font-size: 25px; margin: 5px 10px;')
        throw Error('别截了，浏览器API调用有问题')
    }
};

const stopShot = (source: HTMLVideoElement) => {
    const srcObject = source.srcObject;
    if (srcObject && 'getTracks' in srcObject) {
        const tracks = srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        source.srcObject = null;
    }
};
</script>
<style scoped>
.ope-list{
    text-align: center;
    margin: 20px;
}
.btn {
    --color: #6cf;
    --bg-color: #66ccff10;
    --hv-color: #66ccff40;
    display: inline-block;
    padding: 5px 20px;
    cursor: pointer;
    border: 1px solid var(--color);
    background: var(--bg-color);
    color: var(--color);
    border-radius: 5px;
}
.btn:hover {
    background: var(--hv-color);
}
</style>
