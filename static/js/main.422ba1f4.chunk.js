(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/loader.5d5d9eef.svg"},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),s=(a(27),a(5)),l=a(6),i=a(8),u=a(7),m=a(9),h=(a(29),a(31),a(39)),d=a(41),p=a(40),f=a(3),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={id:a.props.item.id,username:a.props.item.username,email:a.props.item.email},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f.e,{sm:"6"},r.a.createElement(f.b,{body:!0},r.a.createElement(f.d,null,this.state.username),r.a.createElement(f.c,null,"From ",this.state.email),r.a.createElement(f.a,{outline:!0,color:"secondary"},r.a.createElement(f.h,{href:"".concat(this.state.id,"/posts"),active:!0},"Check Posts")),r.a.createElement("br",null),r.a.createElement(f.a,{outline:!0,color:"secondary"},r.a.createElement(f.h,{href:"".concat(this.state.id,"/todos"),active:!0},"Check todos")))))}}]),t}(n.Component),g=a(13),b=a.n(g),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){console.log(a.state),0===a.state.users.length?fetch("https://jsonplaceholder.typicode.com/users/").then(function(e){return e.json()}).then(function(e){if("object"!==typeof e||function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e))throw new Error("The Json had corrupted data");setTimeout(function(){a.setState({isLoading:!1,users:e})},1e3)}).catch(function(e){a.setState({error:e}),console.log(e)}):a.setState({isLoading:!1})},a.state={isLoading:!0,error:null,users:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.f,{className:"pr-0"},r.a.createElement("h5",{className:"text-center"},r.a.createElement("u",null,"List of Users")),this.state.error&&r.a.createElement("p",null,"OH NOES Something went wrong, please try turning your Computer off, then on. I'm kidding check the CONSOLE for more information"),this.state.isLoading&&!this.state.error&&r.a.createElement("img",{src:b.a,className:"LazyLoader",alt:"logo"}),!this.state.isLoading&&r.a.createElement(f.j,null,this.state.users.map(function(e){return r.a.createElement(E,{key:e.id,item:e})})))}}]),t}(n.Component);var j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"page_404"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 "},r.a.createElement("div",{className:"col-sm-10 col-sm-offset-1  text-center dirty-fix"},r.a.createElement("div",{className:"four_zero_four_bg"},r.a.createElement("h1",{className:"text-center "},"404")),r.a.createElement("div",{className:"contant_box_404"},r.a.createElement("h3",{className:"h2"},"Careful! You wandered in primitive grounds,"),r.a.createElement("p",null,"the page you are looking for was unplugged!"),r.a.createElement("a",{href:"#/",className:"link_404"},"Go to Home")))))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.g,null,r.a.createElement("h1",{className:"display-3"},"First React Project AJAX"),r.a.createElement("p",{className:"lead"},"You can navigate through Users and their posts and to-dos"),r.a.createElement(f.a,{outline:!0,color:"primary"},r.a.createElement(f.h,{href:"/"},"Home")))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props),fetch("https://jsonplaceholder.typicode.com/users/".concat(a.state.id,"/posts")).then(function(e){return e.json()}).then(function(e){if("object"!==typeof e||function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e))throw new Error("The Json had corrupted data");setTimeout(function(){a.setState({isLoading:!1,posts:e})},1e3)}).catch(function(e){a.setState({error:e}),console.log(e)})},a.state={isLoading:!0,error:null,id:a.props.match.params.userID,posts:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.f,{className:"pr-0"},r.a.createElement("h5",{className:"text-center"},r.a.createElement("u",null,"List of Posts")),this.state.error&&r.a.createElement("p",null,"OH NOES Something went wrong, please try turning your Computer off, then on. I'm kidding check the CONSOLE for more information"),this.state.isLoading&&!this.state.error&&r.a.createElement("img",{src:b.a,className:"LazyLoader",alt:"logo"}),!this.state.isLoading&&r.a.createElement(f.j,null,this.state.posts.map(function(e){return r.a.createElement(f.e,{sm:"6",key:e.id},r.a.createElement(f.b,{body:!0},r.a.createElement(f.d,null,"Title: ",e.title),r.a.createElement(f.c,null,"Description: ",e.body)))})))}}]),t}(n.Component);var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props),fetch("https://jsonplaceholder.typicode.com/users/".concat(a.state.id,"/todos")).then(function(e){return e.json()}).then(function(e){if("object"!==typeof e||function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e))throw new Error("The Json had corrupted data");setTimeout(function(){a.setState({isLoading:!1,todos:e})},1e3)}).catch(function(e){a.setState({error:e}),console.log(e)})},a.state={isLoading:!0,error:null,id:a.props.match.params.userID,todos:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.f,{className:"pr-0"},r.a.createElement("h5",{className:"text-center"},r.a.createElement("u",null,"List of To-dos")),this.state.error&&r.a.createElement("p",null,"OH NOES Something went wrong, please try turning your Computer off, then on. I'm kidding check the CONSOLE for more information"),this.state.isLoading&&!this.state.error&&r.a.createElement("img",{src:b.a,className:"LazyLoader",alt:"logo"}),!this.state.isLoading&&r.a.createElement(f.j,null,this.state.todos.map(function(e){return e.progress=Math.floor(100*Math.random()),r.a.createElement(f.e,{sm:"6",key:e.id},r.a.createElement(f.b,{body:!0},r.a.createElement(f.d,null,"Title: ",e.title),e.completed&&r.a.createElement(n.Fragment,null,r.a.createElement("div",null,"Done"),r.a.createElement(f.i,{color:"success",value:"100"})),!e.completed&&r.a.createElement(n.Fragment,null,r.a.createElement("div",null,e.progress),r.a.createElement(f.i,{color:"primary",value:e.progress}))))})))}}]),t}(n.Component);var N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(y,null),r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{exact:!0,path:"/:userID",component:O}),r.a.createElement(p.a,{path:"/:userID/posts",component:v}),r.a.createElement(p.a,{path:"/:userID/todos",component:w}),r.a.createElement(p.a,{component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.422ba1f4.chunk.js.map