/*
 * @Author: kelly007
 * @Date:   2016-11-08 13:14:31
 * @Last Modified by:   kelly007
 * @Last Modified time: 2016-11-08 16:43:06
 */

'use strict';
Zepto(function($) {
	/**
	 * [description=计时器]
	 */
    setInterval(function(){
    	/**
         * [currentDate description:当前日期]
         * @type {[type]}
         */
        var currentDate = new Date();
        $(".currentDate").text(formatDateTime(currentDate));
    }, 1000);

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
