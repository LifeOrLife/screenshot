<template>
    <div class="ope-list">
        <icon-check class="icon" @click="load"></icon-check>
    </div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import IconCheck from './icons/IocnCheck.vue'
import { CROPOBJECT, Crop_Object } from '@/utils/inject';
const obj = inject(CROPOBJECT) as Crop_Object

const load = () => {
    obj.deal?.export()
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
