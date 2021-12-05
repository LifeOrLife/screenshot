export class Canvas {
    source: HTMLVideoElement;
    el: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    constructor() {
        this.el = document.createElement('canvas');
        this.ctx = this.el.getContext('2d')!;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        const ratio = window.devicePixelRatio;
        this.el.width = this.width * ratio;
        this.el.height = this.height * ratio;
        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        this.source = this.createVideo();
    }
    createVideo(): HTMLVideoElement {
        const video = document.createElement('video');
        video.style.width = this.width + 'px';
        video.style.height = this.height + 'px';
        video.autoplay = true;
        return video;
    }
    draw(source: HTMLVideoElement) {
        this.ctx.drawImage(source, 0, 0, this.width, this.height);
    }
    export() {
        this.draw(this.source);
        const str = this.el.toDataURL('image/webp');
        const a = document.createElement('a');
        a.href = str;
        a.download = Date.now() + '.webp';
        a.click();
    }
}
