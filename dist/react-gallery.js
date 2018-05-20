!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("mixin-decorator"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","mixin-decorator","next-dom-event","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactGallery=t(require("classnames"),require("mixin-decorator"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactGallery=t(e.classnames,e["mixin-decorator"],e["next-dom-event"],e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,a,n,r,o,i){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="/",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),o=n(r);t.default=o.default},function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u,c,f,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(8),m=n(h),v=a(7),y=n(v),g=a(2),b=n(g),x=a(5),_=n(x),k=a(6),w=(n(k),a(4)),j=n(w),E=(s=e(["zoom","fullscreen","keyboard"]),s((f=c=function(e){function t(e){o(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.prev=function(){a.setState({value:--a.state.value},function(){a.change()})},a.next=function(){a.setState({value:++a.state.value},function(){a.change()})},a._onDoubleClick=function(e){a.zoomToggle()},a.state={zoom:1,animating:!1,scrollerWidth:0,value:e.value},a.change(),a}return l(t,e),p(t,[{key:"prevDisabled",get:function(){var e=this.state.value;return 0==e}},{key:"nextDisabled",get:function(){var e=this.props.items,t=this.state.value;return t==e.length-1}},{key:"current",get:function(){var e=this.state.value;return e+1}},{key:"length",get:function(){var e=this.props.items;return e.length}}]),p(t,[{key:"componentDidMount",value:function(){var e=this.refs.root;this._root=e,this.setState({scrollerWidth:e.clientWidth*this.length}),this.attachEvents()}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.value;a!==this.state.value&&this.setState({value:a},function(){t.change()})}},{key:"componentWillUnmount",value:function(){this._root=null,this.detachEvents()}},{key:"attachEvents",value:function(){var e=this;this._resizeRes=j.default.on(window,"resize",function(){e.setState({scrollerWidth:e._root.clientWidth*e.length})}),this._loadRes=j.default.on(window,"load",function(){e.setState({animating:!0})}),this._keyupRes=j.default.on(window,"keyup",function(t){var a=t.code;(e["on"+a]||_.default).call(e)})}},{key:"detachEvents",value:function(){this._resizeRes.destroy(),this._loadRes.destroy(),this._keyupRes.destroy()}},{key:"change",value:function(){var e=this.state.value,t=this.props.onChange;t({target:{value:e}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.items,o=(t.zoom,t.template),i=t.header,l=t.footer,s=t.extra,u=r(t,["className","items","zoom","template","header","footer","extra"]),c=this.state,f=c.scrollerWidth,p=c.value,h=c.animating;return m.default.createElement("section",d({},u,{ref:"root",className:(0,b.default)("react-gallery",a)}),i(this)||m.default.createElement("header",{className:"react-gallery-hd"},this.current+"/"+this.length,"  "),m.default.createElement("div",{className:"react-gallery-bd"},m.default.createElement("div",{className:"react-gallery-scroller","data-animating":h,style:{width:f+"px",transform:"translate3d(-"+p/this.length*f+"px, 0, 0)"}},n.map(function(t,a){return o(t,a,e)||m.default.createElement("figure",{"data-active":p===a,className:"react-gallery-item",key:a,style:{width:100/e.length+"%"}},m.default.createElement("img",{onDoubleClick:e._onDoubleClick,style:{transform:"scale("+e.state.zoom+")"},src:t.src}))}))),m.default.createElement("button",{className:"react-gallery-nav react-gallery-prev",onClick:this.prev,hidden:this.prevDisabled},m.default.createElement("i",{className:"webkit-sassui-icon-line-arrow","data-direction":"left","data-type":"hairline"})),m.default.createElement("button",{className:"react-gallery-nav react-gallery-next",onClick:this.next,hidden:this.nextDisabled},m.default.createElement("i",{className:"webkit-sassui-icon-line-arrow","data-direction":"right","data-type":"hairline"})),l(this)||m.default.createElement("footer",{className:"react-gallery-ft"},n[p].title),s(this))}}]),t}(h.Component),c.propTypes={className:y.default.string,items:y.default.array,value:y.default.number,onChange:y.default.func,zoom:y.default.number,template:y.default.func,header:y.default.func,footer:y.default.func,extra:y.default.func},c.defaultProps={items:[],value:0,onChange:_.default,zoom:1.8,template:_.default,header:_.default,footer:_.default,extra:_.default},u=f))||u);t.default=E}).call(t,a(3))},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-gallery.js.map