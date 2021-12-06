<template>
    <div class="ope-list">
        <button class="btn" @click="start">截图</button>
    </div>
    <!-- <video ref="vBox" autoplay></video> -->
    <preview-img v-if="showCropBox" :con="can" @close="showCropBox = false"></preview-img>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import PreviewImg from './PreviewImg.vue'
import { Canvas } from '@/utils/createCanvas';
import { sleep } from '@/utils/sleep';
const vBox = ref<HTMLVideoElement | null>(null);

const showCropBox = ref(false)
const can = ref<HTMLCanvasElement | undefined>(undefined)
const start = async () => {
    const _c = new Canvas();
    can.value = _c.el
    await startShot(_c.source);
    await sleep(300);
    _c.draw(_c.source)
    showCropBox.value = true
    // _c.export();
    await stopShot(_c.source);
};

const startShot = async (source: HTMLVideoElement) => {
    try {
        source.srcObject = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
        });
        source.play();
    } catch (error) {
        console.log(error);
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
