/*
 * @Author: kelly007
 * @Date:   2016-11-08 13:14:31
 * @Last Modified by:   kelly007
 * @Last Modified time: 2016-11-08 16:33:08
 */

'use strict';
Zepto(function($) {
    setInterval(function(){
    	timer();
    }, 1000);
    /**
     * [timer 计时器函数]
     * @return {[type=string]} [description:时钟]
     */
    function timer() {
        /**
         * [currentDate description:当前日期]
         * @type {[type]}
         */
        var currentDate = new Date();
        $(".currentDate").text(formatDateTime(currentDate));
    };
    /**
     * [formatDateTime description:格式化时间]
     * @param  {[type]} date [description]
     * @return {[type=string]}      [description:yyyy-mm-dd hh:mm：ss]
     */
    function formatDateTime(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    };
})
