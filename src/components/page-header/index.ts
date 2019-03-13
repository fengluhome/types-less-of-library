
import './style.less';
import { merge, typeOf } from '../../utils/util';
import * as Cookies from 'js-cookie';
const defualtConfig = {
    logo: {
        mainTitle: "主标题",
        subTitle: "subTitle"
    },
    language: "zh",// zh en
    onLanguageChange() {

    }
};
export default class PageHeader {
    opts: any;
    constructor(opts: any) {
        this.opts = merge(defualtConfig, opts);
        this.render();
    }
    /**
     * 获得用户登录信息
     */
    getInfo() {

    }
    /**
     * 退出
     */
    exit() {
        // Cookies.set('name', 'value', { expires: 7, path: '' });
        // Cookies.remove('name');
    }
    languageChange() {
        this.opts.onLanguageChange(this.opts.language);
    }
    render() {
        let dom = typeOf(this.opts.id) === 'string' ? document.getElementById(this.opts.id) : this.opts.id;
        dom.innerHTML = ` 
        <div class="tdui-page-header">
        <div class="item start"></div>
        <div class="item content"></div>
        <div class="item end"></div>
    </div>`;
    }

}
