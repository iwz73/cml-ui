var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([6],{93:function(e,t,n){n(94),n(95)},94:function(e,t){},95:function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),r=function(){function e(){o(this,e),this.props={type:{type:String,default:"loading"},message:{type:String,default:""},duration:{type:Number,default:3e3},show:{type:Boolean,default:!1},mask:{type:Boolean,default:!1},needIcon:{type:Boolean,default:!0}},this.data={transitionStyle:"",IconMap:{loading:n(96),success:n(97),warn:n(98)}},this.computed={typeImg:function(){return this.IconMap[this.type]},maskClass:function(){return this.mask?"has-mask":"no-mask"}},this.watch={show:function(e,t){var n=this;e&&setTimeout(function(){n.$cmlEmit("show",{value:!1})},this.duration)}},this.methods={}}return a(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new r,t.default=i.default.createComponent(t.default).getOptions()},96:function(e,t,n){e.exports=n.p+"static/img/loading_1f26c50.gif"},97:function(e,t,n){e.exports=n.p+"static/img/succ_1ecca56.png"},98:function(e,t,n){e.exports=n.p+"static/img/warn_da3ad45.png"}},[93]);