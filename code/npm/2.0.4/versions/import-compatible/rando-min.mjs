import * as randoJsCopyOfCryptoUUIDa0d75fe829cf4fd0832ddc9c95aa13f5 from 'crypto';
var isUndefined=function(a){return"undefined"===typeof a},isNumber=function(a){return"number"===typeof a&&!isNaN(a)},isString=function(a){return"string"===typeof a},isObject=function(a){return"object"===typeof a},isFunction=function(a){return"function"===typeof a},isArray=function(a){return!isUndefined(a)&&null!==a&&a.constructor===Array};
function cryptoRandom(){try{for(var a,b=[],d;30>(d="."+b.join("")).length;){a=crypto.randomFillSync(new Uint32Array(5));for(var c=0;c<a.length;c++){var e=4E9>a[c]?a[c].toString().slice(1):"";0<e.length&&(b[b.length]=e)}}return Number(d)}catch(f){return Math.random()}}
export function rando(a,b,d){try{if(null!==a&&null!==b&&null!==d){if(isUndefined(a))return cryptoRandom();if(isUndefined(b)&&isObject(a)&&isFunction(a.constructor)&&"jQuery"===a.constructor.name&&isNumber(a.length)&&isFunction(a.eq)&&isObject(a.eq(0))&&isFunction(a.eq(0).constructor)&&"jQuery"===a.eq(0).constructor.name){if(0==a.length)return!1;var c=rando(0,a.length-1);return{index:c,value:a.eq(c)}}if(isNumber(a)&&isNumber(b)&&isString(d)&&"float"==d.toLowerCase().trim()){if(a>b){var e=b;b=a;a=e}return cryptoRandom()*
(b-a)+a}if(isArray(a)&&0<a.length&&isUndefined(b)){var f=cryptoRandom()*a.length<<0;return{index:f,value:a[f]}}if(isObject(a)&&isUndefined(b)){f=a;var g=Object.keys(f);if(0<g.length){var h=g[g.length*cryptoRandom()<<0];return{key:h,value:f[h]}}}if((!0===a&&!1===b||!1===a&&!0===b)&&isUndefined(d))return.5>rando();if(isNumber(a)&&isUndefined(b))return 0<=a?rando(0,a):rando(a,0);if(isNumber(a)&&isString(b)&&"float"==b.toLowerCase().trim()&&isUndefined(d))return 0<=a?rando(0,a,"float"):rando(a,0,"float");
if(isNumber(a)&&isNumber(b)&&isUndefined(d))return a>b&&(e=b,b=a,a=e),a=Math.floor(a),b=Math.floor(b),Math.floor(cryptoRandom()*(b-a+1)+a);if(isString(a)&&0<a.length&&isUndefined(b))return a.charAt(rando(0,a.length-1))}return!1}catch(k){return console.log("ERROR: "+k),!1}}
export function randoSequence(a,b){try{if(isUndefined(a)||null===a||null===b)return!1;var d=[];if(isUndefined(b)&&isObject(a)&&isFunction(a.constructor)&&"jQuery"===a.constructor.name&&isNumber(a.length)&&isFunction(a.eq)&&isObject(a.eq(0))&&isFunction(a.eq(0).constructor)&&"jQuery"===a.eq(0).constructor.name){if(0<a.length){d=randoSequence(a.length-1);for(var c=0;c<d.length;c++)d[c]={index:d[c],value:a.eq(d[c])}}return d}if(isUndefined(b))if(isArray(a)&&isUndefined(b))for(c=0;c<a.length;c++)d[d.length]=
{index:c,value:a[c]};else if(isObject(a)&&isUndefined(b))for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(d[d.length]={key:e,value:a[e]});else if(isString(a)&&isUndefined(b))for(c=0;c<a.length;c++)d[d.length]=a.charAt(c);else{if(isNumber(a)&&isUndefined(b))return 0<=a?randoSequence(0,a):randoSequence(a,0);console.log("invalid.");return!1}else{if(!isNumber(a)||!isNumber(b)||0<a%1||0<b%1)return!1;if(a>b){var f=b;b=a;a=f}for(c=a;c<=b;c++)d[d.length]=c}for(c=d.length-1;0<c;c--){var g=rando(c);
f=d[c];d[c]=d[g];d[g]=f}return d}catch(h){return console.log("ERROR: "+h),!1}};