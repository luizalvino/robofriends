(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(7),c=n.n(r),i=n(6),s=n(8),a=n(12),u=n(13),l=(n(23),n(1)),d=function(e){var t=e.id,n=e.name,o=e.email;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:o})]})]},t)},h=function(e){var t=e.robots;return console.log("CardList"),Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}))})},b=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){var t=e.children;return Object(l.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:t})},f=n(2),g=n(3),O=n(5),p=n(4),v=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(o.Component),x=(n(25),"CHANGE_SEARCH_FIELD"),m="REQUEST_ROBOTS_PENDING",w="REQUEST_ROBOTS_SUCCESS",y="REQUEST_ROBOTS_FAILED",C=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(f.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(g.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),Object(l.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.PureComponent),E=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return console.log("Header"),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(C,{color:"red"})]})}}]),n}(o.Component),k=function(){var e=Object(i.c)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}})),t=e.searchField,n=e.robots,r=e.isPending,c=(e.error,Object(i.b)());Object(o.useEffect)((function(){c((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:w,payload:t})})).catch((function(t){return e({type:y,payload:t})}))}))}),[c]);var s=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)(E,{}),Object(l.jsx)(b,{searchChange:function(e){return c((t=e.target.value,{type:x,payload:t}));var t}}),Object(l.jsx)(j,{children:Object(l.jsx)(v,{children:Object(l.jsx)(h,{robots:s})})})]})},R=(n(26),{searchField:""}),S={isPending:!1,robots:[],error:""},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(a.createLogger)();var N=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{isPending:!0});case w:return Object.assign({},e,{robots:t.payload,isPending:!1});case y:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.c)(N,Object(s.a)(u.a));c.a.render(Object(l.jsx)(i.a,{store:T,children:Object(l.jsx)(k,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");L?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):P(e)}))}}(),F()}},[[27,1,2]]]);
//# sourceMappingURL=main.1e53f4b3.chunk.js.map