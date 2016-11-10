/*
 * @Author: kelly007
 * @Date:   2016-11-08 13:14:31
 * @Last Modified by:   kelly007
 * @Last Modified time: 2016-11-10 14:37:30
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
        timeElapse(currentDate);
    }, 1000);

    /**
     * [timeElapse description：倒计时]
     * @return {[type]} [description]
     */
    function timeElapse(date){
        /** @type {Date} [description:在一起时间戳] */
        var togetherTime=new Date('2015/04/01 19:00:00.0').getTime();
        /** @type {Date} [description:当前时间戳] */
        var currentTime =date.getTime();
        var seconds = (currentTime - togetherTime) / 1000;
        var days = parseInt(seconds / (3600 * 24));
        seconds = seconds % (3600 * 24);
        var hours = parseInt(seconds / 3600);
        if (hours < 10) {
            hours = "0" + hours;
        }
        seconds = seconds % 3600;
        var minutes = parseInt(seconds / 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        seconds = parseInt(seconds % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $(".together").html(days+"天 "+hours+"时 "+minutes+"分 "+seconds+"秒");
    }

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
