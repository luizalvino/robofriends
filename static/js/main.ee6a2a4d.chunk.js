(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(7),c=n.n(r),i=n(6),a=n(8),s=n(12),l=n(13),u=(n(23),n(1)),d=function(e){var t=e.id,n=e.name,o=e.email;return Object(u.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://res.cloudinary.com/luizalvino/image/upload/h_200,w_200/robohash/".concat(t,".webp"),srcSet:"https://res.cloudinary.com/luizalvino/image/upload/h_200,w_200/robohash/".concat(t,".webp 200w, https://res.cloudinary.com/luizalvino/image/upload/h_400,w_400/robohash/").concat(t,".webp 1080w"),width:"200",height:"200"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:o})]})]},t)},h=function(e){var t=e.robots;return console.log("CardList"),Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}))})},b=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){var t=e.children;return Object(u.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:t})},j=n(2),g=n(3),p=n(5),v=n(4),O=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(o.Component),w=(n(25),"CHANGE_SEARCH_FIELD"),m="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS",x="REQUEST_ROBOTS_FAILED",C=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(g.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),Object(u.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.PureComponent),k=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return console.log("Header"),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(u.jsx)(C,{color:"red"})]})}}]),n}(o.Component),S=function(){var e=Object(i.c)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}})),t=e.searchField,n=e.robots,r=e.isPending,c=(e.error,Object(i.b)());Object(o.useEffect)((function(){c((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:y,payload:t})})).catch((function(t){return e({type:x,payload:t})}))}))}),[c]);var a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?Object(u.jsx)("h1",{children:"Loading..."}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)(k,{}),Object(u.jsx)(b,{searchChange:function(e){return c((t=e.target.value,{type:w,payload:t}));var t}}),Object(u.jsx)(f,{children:Object(u.jsx)(O,{children:Object(u.jsx)(h,{robots:a})})})]})},E=(n(26),{searchField:""}),R={isPending:!1,robots:[],error:""},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(s.createLogger)();var L=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{robots:t.payload,isPending:!1});case x:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(a.c)(L,Object(a.a)(l.a));c.a.render(Object(u.jsx)(i.a,{store:T,children:Object(u.jsx)(S,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(t,e)}))}}(),_()}},[[27,1,2]]]);
//# sourceMappingURL=main.ee6a2a4d.chunk.js.map