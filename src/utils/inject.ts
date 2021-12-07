import { Canvas } from './createCanvas';
export const CROPOBJECT = 'CROP_OBJECT';
export interface Crop_Object {
    deal?: Canvas;
    closeCropBox: () => void;
}
