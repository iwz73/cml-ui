var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([21],{116:function(t,e,o){o(117),o(118)},117:function(t,e){},118:function(t,e,o){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),u=o(0),a=function(t){return t&&t.__esModule?t:{default:t}}(u),f=function(){function t(){n(this,t),this.data={mask:!0,show:!1,show2:!1,position:"",pos:["left","top","right","bottom",""],posi:0},this.computed={contentStyle:function(){var t=void 0;switch(this.position){case"left":t="width:200cpx;background:#fff;";break;case"top":t="height:200cpx;background:#fff;";break;case"right":t="width:200cpx;background:#fff;";break;case"bottom":t="height:200cpx;background:#fff;";break;default:t="display:block;width: 500cpx;height: 200cpx;background: #fff;"}return t}},this.watch={},this.methods={showPopup:function(){this.show=!0},showPopup2:function(){this.position=this.pos[this.posi++],this.posi=this.posi%5,this.show2=!0},closePopup:function(){this.show=!1,this.show2=!1}}}return i(t,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),t}();e.default=new f,e.default=a.default.createPage(e.default).getOptions()}},[116]);