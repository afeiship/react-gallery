!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("medium-zoom"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","medium-zoom","next-dom-event","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactGallery=t(require("classnames"),require("medium-zoom"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactGallery=t(e.classnames,e["medium-zoom"],e["next-dom-event"],e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,a,o,i){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),o=n(a);t.default=o.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,u,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(8),h=n(p),v=r(7),m=n(v),y=r(2),g=n(y),b=r(5),x=n(b),w=r(6),_=(n(w),r(4)),k=n(_),E=r(3),j=n(E),O=(u=c=function(e){function t(e){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.prev=function(){r.setState({activeIndex:--r.state.activeIndex},function(){r.change()})},r.next=function(){r.setState({activeIndex:++r.state.activeIndex},function(){r.change()})},r.state={scrollerWidth:0,activeIndex:0},r}return l(t,e),d(t,[{key:"prevDisabled",get:function(){var e=this.state.activeIndex;return 0==e}},{key:"nextDisabled",get:function(){var e=this.props.value,t=this.state.activeIndex;return t==e.length-1}},{key:"current",get:function(){var e=this.state.activeIndex;return e+1}},{key:"total",get:function(){var e=this.props.value;return e.length}}]),d(t,[{key:"componentDidMount",value:function(){var e=this.refs.root,t=this.props.value;this._root=e,this.setState({scrollerWidth:e.clientWidth*t.length}),this.attachEvents()}},{key:"componentWillUnmount",value:function(){this._root=null,this.detachEvents()}},{key:"attachZoom",value:function(){(0,j.default)('[data-action="zoom"]',{margin:24,background:"#000",scrollOffset:0,metaClick:!1,container:{height:this._root.clientHeight,top:0,bottom:0,right:0,left:0}})}},{key:"attachEvents",value:function(){var e=this;this._resizeRes=k.default.on(window,"resize",function(){e.setState({scrollerWidth:e._root.clientWidth*e.props.value.length})}),this._keyupRes=k.default.on(window,"keyup",function(t){var r=t.code;switch(r){case"ArrowRight":!e.nextDisabled&&e.next();break;case"ArrowLeft":!e.prevDisabled&&e.prev()}})}},{key:"detachEvents",value:function(){this._resizeRes.destroy(),this._keyupRes.destroy()}},{key:"change",value:function(){var e=this.state.activeIndex,t=this.props.onChange;t({target:{value:e}})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.value,n=o(e,["className","value"]),i=this.state,s=i.scrollerWidth,l=i.activeIndex;return h.default.createElement("section",f({},n,{ref:"root",className:(0,g.default)("react-gallery",t)}),h.default.createElement("header",{className:"react-gallery-hd"},this.current+"/"+this.total,"   HEADER INFO"),h.default.createElement("div",{className:"react-gallery-bd"},h.default.createElement("div",{className:"react-gallery-scroller",style:{width:s+"px",transform:"translate3d(-"+l/r.length*s+"px, 0, 0)"}},r.map(function(e,t){var n;return h.default.createElement("figure",{className:"react-gallery-item",key:t,style:{width:100/r.length+"%"}},h.default.createElement("img",(n={"data-action":"zoom",src:e.src,alt:""},a(n,"data-action","zoom"),a(n,"data-original",e.original),n)))}))),h.default.createElement("button",{className:"react-gallery-nav react-gallery-prev",onClick:this.prev,hidden:this.prevDisabled},h.default.createElement("i",{className:"webkit-sassui-icon-line-arrow","data-direction":"left","data-type":"hairline"})),h.default.createElement("button",{className:"react-gallery-nav react-gallery-next",onClick:this.next,hidden:this.nextDisabled},h.default.createElement("i",{className:"webkit-sassui-icon-line-arrow","data-direction":"right","data-type":"hairline"})),h.default.createElement("footer",{className:"react-gallery-ft"},r[l].title))}}]),t}(p.Component),c.propTypes={className:m.default.string,value:m.default.array,onChange:m.default.func},c.defaultProps={value:[],onChange:x.default},u);t.default=O},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-gallery.js.map