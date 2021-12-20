const colors: {
    [key: string]: string;
} = {
    success: 'green',
    error: 'red',
    init: 'gray',
    color: '#fff'
};

type Options = {
    time?: number;
    duration?: number;
    color?: string;
    background?: string;
    deviation?: number;
    text: string;
};

export default class Message {
    time: number = 3000;
    duration: number = 800; // ms
    background: string = 'init';
    color: string = 'color';
    deviation: number = 10;
    el: HTMLElement;
    text: string;
    constructor(opt: Options) {
        /**
         * @params opt 参数集合
         * @params Number opt.time 弹窗显示的时间，默认为3秒
         *
         */
        this.time = opt.time ?? 3000;
        this.duration = opt.deviation ?? 800; // 动画过渡时间
        this.background = opt.background ?? 'init'; // 弹窗背景颜色
        this.color = opt.color ?? 'color'; // 弹窗文字颜色
        this.text = opt.text;
        this.deviation = opt.deviation || 10; // 弹窗出现或者消失时偏移的距离
        this.el = this.createEl();
        this.elementStyle(this.el);
        this.el.innerText = this.text;
        this.addLayer();
        setTimeout(() => {
            this.removeLayer();
        }, this.time + 200);
    }
    createEl(tag: string = 'div') {
        return document.createElement(tag);
    }
    addLayer() {
        document.body.appendChild(this.el);
        setTimeout(() => {
            Object.assign(this.el.style, {
                marginTop: '0',
                opacity: 1
            });
        }, 100);
    }
    removeLayer() {
        let style = this.el.style;
        style.marginTop = `${this.deviation}px`;
        style.opacity = '0';
        let t = parseFloat(this.duration + '') * 1000 + 200;
        setTimeout(() => {
            document.body.removeChild(this.el);
        }, t);
    }
    elementStyle(el: HTMLElement) {
        Object.assign(el.style, {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '5px 10px',
            zIndex: 1000,
            transform: 'translate(-50%, -50%)',
            borderRadius: '3px',
            opacity: 0,
            color: colors[this.color],
            marginTop: `${this.deviation}px`,
            transition: `all ${this.duration}`,
            background: this.background
        });
    }
}
