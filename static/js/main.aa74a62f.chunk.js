(this.webpackJsonpmanage_cat_0=this.webpackJsonpmanage_cat_0||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(12),n(3)),s=n(4),l=n(6),u=n(5),h=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.item.id,"?set=set2&size=180x180"),alt:"monster"}),r.a.createElement("h2",null,e.item.name),r.a.createElement("h3",null,e.item.email))}),m=function(e){return r.a.createElement("div",{className:"card-list"},e.items.map((function(e){return r.a.createElement(h,{key:e.id,item:e})})))},d=function(e){var t=e.placeholder,n=e.onSearchChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})},f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value},(function(){return console.log(e.state.searchField)}))},e.state={items:[],searchField:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({items:t})}))}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(d,{placeholder:"Search Monsters",onSearchChange:this.onSearchChange}),r.a.createElement(m,{items:a}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.aa74a62f.chunk.js.map