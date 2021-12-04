<template>
    <button class="btn" @click="startShot">截图</button>
    <div class="box">
        <video autoplay class="box" ref="vBox"></video>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const vBox = ref<HTMLVideoElement | null>(null);
const startShot = async () => {
    try {
        vBox.value!.srcObject = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
        });
    } catch (error) {
        console.log(error);
    }
};
</script>
<style scoped>
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
