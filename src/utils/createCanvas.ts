export class Canvas {
	source: HTMLVideoElement
	el: HTMLCanvasElement
	ctx: CanvasRenderingContext2D
	width: number
	height: number
	ratio: number
	constructor() {
		this.el = document.createElement('canvas')
		this.ctx = this.el.getContext('2d')!
		this.width = window.innerWidth
		this.height = window.innerHeight
		const ratio = window.devicePixelRatio || 1
		this.ratio = ratio
		this.initCanvas(this.el, this.width, this.height)
		this.source = this.createVideo()
	}
	initCanvas(el: HTMLCanvasElement, width: number, height: number) {
		el.width = width * this.ratio
		el.height = height * this.ratio
		el.style.width = width + 'px'
		el.style.height = height + 'px'
	}
	createVideo(): HTMLVideoElement {
		const video = document.createElement('video')
		video.style.width = this.width + 'px'
		video.style.height = this.height + 'px'
		video.autoplay = true
		return video
	}
	draw(source: HTMLVideoElement) {
		this.ctx.drawImage(source, 0, 0, this.width * this.ratio, this.height * this.ratio)
	}
	export() {
		this.draw(this.source)
		this.load(this.el)
	}
	load(el: HTMLCanvasElement) {
		const str = el.toDataURL('image/webp')
		const a = document.createElement('a')
		a.href = str
		a.download = Date.now() + '.webp'
		a.click()
	}
}
