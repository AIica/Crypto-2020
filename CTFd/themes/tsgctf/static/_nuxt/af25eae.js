(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{428:function(e,t,r){"use strict";var n=0;function o(e){if(!n){var s=document.createElement("script");s.setAttribute("src",e),document.body.appendChild(s),n=new Promise((function(e){s.onload=function(){e(window.twttr)}}))}return n}var c={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:o,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},c,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return e.embedComponent(n,t,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},436:function(e,t,r){var content=r(456);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(64).default)("504d216a",content,!0,{sourceMap:!1})},451:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return c.default}});var n=l(r(452)),o=l(r(453)),c=l(r(454));function l(e){return e&&e.__esModule?e:{default:e}}},452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(428).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTweetEmbed.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},453:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(428).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createMoment.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},454:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(428).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTimeline.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},455:function(e,t,r){"use strict";r(436)},456:function(e,t,r){(t=r(63)(!1)).push([e.i,'.About h3{font-size:2rem;font-family:"Fredoka One",cursive;font-weight:300;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}.About .period{text-align:center;font-size:3rem;line-height:3rem}.About ol,.About p,.About ul{font-family:"Roboto";width:100%;max-width:50rem;margin:0 auto;font-size:1.4rem;line-height:2rem}.About ul.socials{display:flex;justify-content:center;flex-wrap:wrap;padding:0}.About ul.socials li{flex:0 0 20rem;height:30rem;overflow-y:auto;display:flex;flex-direction:column;align-items:center;font-size:1rem;margin:0 1rem .6rem}.About img{display:block;width:80vw;max-width:30rem;margin:0 auto 1rem}.About a{color:#90cbff}',""]),e.exports=t},501:function(e,t,r){"use strict";r.r(t);r(21),r(11),r(10),r(6),r(17);var n=r(4),o=r(451),c=r(23);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={components:{Timeline:o.Timeline},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)({contestEnd:"contestEnd",contestStart:"contestStart"})),head:function(){return{title:"About - Crypto 2020"}}},f=(r(455),r(29)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"About"},[e._m(0),e._v(" "),e.contestStart?r("div",{staticClass:"buttons"},[r("h3",[e._v("Period")]),e._v(" "),r("p",{staticClass:"period"},[r("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20200711T16&p1=248",target:"_blank",rel:"noopener"}},[e._v(e._s(new Date(e.contestStart).toLocaleString()))]),e._v("\n\t\t\t-\n\t\t\t"),r("a",{attrs:{href:"https://www.timeanddate.com/worldclock/fixedtime.html?iso=20200712T16&p1=248",target:"_blank",rel:"noopener"}},[e._v(e._s(new Date(e.contestEnd).toLocaleString()))])]),e._v(" "),r("p",{style:{textAlign:"center"}},[e._v("(UTC + 3)")])]):e._e(),e._v(" "),r("h3",[e._v("Crypto 2020 is organized by GRSU")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"title"},[t("span",[this._v("About")])])}],!1,null,null,null);t.default=component.exports}}]);