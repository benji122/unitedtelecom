/*
* jPreLoader - jQuery plugin
* Create a Loading Screen to preload images and content for you website
*
* Name:			jPreLoader.js
* Author:		Kenny Ooi - http://www.inwebson.com
* Date:			July 11, 2012		
* Version:		2.1
* Example:		http://www.inwebson.com/demo/jpreloader-v2/
*	
*/
!function(a){var b=new Array,c=new Array,d=function(){},e=0,f={splashVPos:"35%",loaderVPos:"75%",splashID:"#jpreContent",showSplash:!0,showPercentage:!0,autoClose:!0,closeBtnText:"Start!",onetimeLoad:!1,debugMode:!1,splashFunction:function(){}},g=function(){if(f.onetimeLoad){for(var c,a=document.cookie.split("; "),b=0;c=a[b]&&a[b].split("=");b++)if("jpreLoader"===c.shift())return c.join("=");return!1}return!1},h=function(a){if(f.onetimeLoad){var b=new Date;b.setDate(b.getDate()+a);var c=null==a?"":"expires="+b.toUTCString();document.cookie="jpreLoader=loaded; "+c}},i=function(){jLoader=a(".preloader-screen"),f.showPercentage&&(jPer=a(".preloading-screen").find(".active-image"))},j=function(c){a(c).find("*:not(script)").each(function(){var c="";if(-1==a(this).css("background-image").indexOf("none")&&-1==a(this).css("background-image").indexOf("-gradient")){if(c=a(this).css("background-image"),-1!=c.indexOf("url")){var d=c.match(/url\((.*?)\)/);c=d[1].replace(/\"/g,"")}}else"img"==a(this).get(0).nodeName.toLowerCase()&&"undefined"!=typeof a(this).attr("src")&&(c=a(this).attr("src"));c.length>0&&b.push(c)})},k=function(){for(var a=0;a<b.length;a++)l(b[a])},l=function(b){var d=new Image;a(d).load(function(){m()}).error(function(){c.push(a(this).attr("src")),m()}).attr("src",b)},m=function(){e++;var c=Math.round(e/b.length*100);f.showPercentage&&a(jPer).css("width",c+"%"),e>=b.length&&(e=b.length,h(),f.showPercentage&&(a(jPer).css("width","100%"),n()))},n=function(){setTimeout(function(){a("body").addClass("document-loaded")},200)};a.fn.jpreLoader=function(b,c){return b&&a.extend(f,b),"function"==typeof c&&(d=c),this.each(function(){g()?(a(f.splashID).remove(),d()):(i(),j(this),k())})}}(jQuery);