// ==UserScript==
// @name         百度大扫除
// @namespace    https://greasyfork.org/zh-CN/scripts/409467
// @version      0.0.5
// @icon         https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597932552461&di=a312e872812540cc7b9d6bf1c1753826&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-60390e4a48d89c91c7cb41100f6db4e0_xl.jpg
// @description  去除百度主页、搜索界面广告
// @author       暮云叆叇
// @match        *://www.baidu.com/*
// @match        *://www1.baidu.com/*
// @match        *://ipv6.baidu.com/*
// @match        *://wenku.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.indexOf('www.baidu.com') > 0){
        $("li.hotsearch-item.even").remove();//百度热榜
        $("li.hotsearch-item.odd").remove();
        $(".s-hotsearch-title").remove();
        $("#s_side_wrapper").remove();//二维码
        $(".s-top-left.s-isindex-wrap").remove();//上面的
        $(".s-top-right.s-isindex-wrap").remove();
        $(".s-bottom-layer.s-isindex-wrap").remove();//下面的
        $('#content_right>div').has('a:contains("广告")').remove();//包含关键字的广告
        $('#content_left>div').has('span:contains("广告")').remove();
        $("td").remove();//侧边栏
    }
    if(location.href.indexOf('www.baidu.com') > 0){//百度文库
        $(".operate-wrapper").remove();
    }
})();