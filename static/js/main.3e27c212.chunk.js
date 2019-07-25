(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){e.exports=a.p+"static/media/CoinGecko.896961f6.png"},194:function(e,t,a){e.exports=a(374)},372:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=a(20),o=a(21),s=a(23),m=a(22),u=a(24),d=a(28),p=a(48),h=a.n(p),g=a(377),E=a(380),y=a(382),b=a(102),f=a(378),v={background:"#ffffff",padding:"2rem",margin:0,minHeight:700},k=g.a.Content,x=E.a.Title,O=E.a.Paragraph,j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={coinsList:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.coingecko.com/api/v3/coins/list").then(function(t){e.setState({coinsList:t.data},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.coinsList,a=e.loading,n=[{title:"Id",dataIndex:"id",key:"id"},{title:"Symbol",dataIndex:"symbol",key:"symbol"},{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement(y.a,{color:"purple"},e)}},{title:"View Details",dataIndex:"symbol",key:"symbol",render:function(e){return l.a.createElement(b.a,{type:"primary"},l.a.createElement(d.b,{to:"/empty"},"View"))}}];return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(k,{style:v},l.a.createElement(x,{level:2},"Coins List"),l.a.createElement(O,null,"This page lists all available coins..."),l.a.createElement(f.a,{bordered:!0,loading:a,dataSource:t,columns:n})))}}]),t}(n.Component),C=g.a.Content,I=E.a.Title,w=E.a.Paragraph,S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(C,{className:"text-focus-in",style:v},l.a.createElement(I,{level:2},"Home Page"),l.a.createElement(w,null,"Consequat fugiat exercitation cillum proident aliquip irure non. Ad ad qui labore do nulla. Est pariatur culpa laborum labore aliqua incididunt. Sunt do ex aliqua irure magna adipisicing sint exercitation pariatur adipisicing. Tempor eiusmod minim officia nostrud eiusmod sunt veniam ipsum cillum enim ut consequat. Fugiat eiusmod ut sit ea commodo do eiusmod ex deserunt.")))}}]),t}(n.Component),T=a(192),_=a(187),P=a.n(_),A=g.a.Content,D=E.a.Title,L=E.a.Paragraph,M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(A,{className:"text-focus-in",style:Object(T.a)({},v)},l.a.createElement(D,{level:2},"About Page"),l.a.createElement(L,null,"Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. "),l.a.createElement(D,{level:4},"Purpose"),l.a.createElement(L,null,"This project was built in order to further learning and development of React applications, especially those involving connecting to third party APIs."),l.a.createElement(D,{level:4},"Packages used in this project"),l.a.createElement(L,null,"The following packages were installed via ",l.a.createElement("strong",null,"npm")),l.a.createElement(f.a,{pagination:!1,dataSource:[{name:"antd",version:"^3.20.6",purpose:""},{name:"gh-pages",version:"^2.0.1",purpose:""},{name:"react",version:"^16.8.6",purpose:""},{name:"react-dom",version:"^16.8.6",purpose:""},{name:"react-router-dom",version:"^5.0.1",purpose:""},{name:"react-scripts",version:"3.0.1",purpose:""}],columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Version",dataIndex:"version",key:"version"}]}),l.a.createElement(L,null),l.a.createElement(D,{level:4},"Data source"),l.a.createElement(L,null,"All the data which this application ingests and displays is processed from the CoinGecko API. A free and publicly available cryptocurrency api. Click below to visit CoinGecko official website."),l.a.createElement("a",{href:"https://www.coingecko.com/en/api#"},l.a.createElement("img",{style:{border:"1px solid #f3f3f3"},width:"550",src:P.a}))))}}]),t}(n.Component),N=a(383),H=E.a.Title,q=E.a.Paragraph,G=g.a.Content,F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],count:null,loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.coingecko.com/api/v3/events").then(function(t){console.log(t.data.data),e.setState({data:t.data.data,count:t.data.count},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(G,{style:v},l.a.createElement(H,{level:2},"Events"),l.a.createElement(q,null,"This page shows cryptocurrency related events around the globe..."),l.a.createElement(N.a,{loading:this.state.loading,itemLayout:"vertical",size:"large",dataSource:this.state.data,renderItem:function(e){return l.a.createElement(N.a.Item,{key:e.title,extra:l.a.createElement("img",{width:450,alt:e.title,src:e.screenshot})},l.a.createElement(N.a.Item.Meta,{title:l.a.createElement("a",{href:e.website},e.title),description:e.venue}),e.description.slice(0,500),"...",l.a.createElement("div",{style:{marginTop:"1rem"}},l.a.createElement(y.a,{color:"blue"},"Type: ",e.type),l.a.createElement(y.a,{color:"blue"},"Location: ",e.country),l.a.createElement(y.a,{color:"green"},"Start: ",e.start_date),l.a.createElement(y.a,{color:"green"},"End: ",e.end_date)))}})))}}]),t}(n.Component),R=a(66),U=g.a.Content,V=E.a.Title,B=(E.a.Paragraph,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(U,{className:"text-focus-in",style:v},l.a.createElement(V,{level:2},"In development"),l.a.createElement(R.a,{description:"This page is currently in development. Please check on it at a later time..."})))}}]),t}(n.Component)),K=a(379),z=a(67),J=a(34),Y=a(381),Q=(K.a.Meta,g.a.Content),W=E.a.Paragraph,X=E.a.Title,Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.coingecko.com/api/v3/global").then(function(t){return e.setState({data:t.data.data},e.setState({loading:!e.state.loading}))})}},{key:"render",value:function(){var e={height:"100%"},t={marginBottom:"1rem"},a=this.state.data,n=(a.loading,a.active_cryptocurrencies),r=a.market_cap_change_percentage_24h_usd,c=a.ongoing_icos,i=a.upcoming_icos,o=a.ended_icos,s=(a.updated_at,a.markets);return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(Q,{style:v},l.a.createElement(X,{level:2},"Global Data"),l.a.createElement(W,null,"This page lists global data. Prices were last updated at "),l.a.createElement(z.a,{gutter:16,style:{textAlign:"center"},type:"flex"},l.a.createElement(J.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:t},l.a.createElement(K.a,{style:e},l.a.createElement(Y.a,{title:"Markets",value:s}))),l.a.createElement(J.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:t},l.a.createElement(K.a,{style:e},l.a.createElement(Y.a,{suffix:"%",precision:2,title:"Market Cap Change Percent (24hr USD)",value:r}))),l.a.createElement(J.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:t},l.a.createElement(K.a,{style:e},l.a.createElement(Y.a,{title:"Ended Icos",value:o}))),l.a.createElement(J.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:t},l.a.createElement(K.a,{style:e},l.a.createElement(Y.a,{title:"Active Cryptocurrencies",value:n}))),l.a.createElement(J.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:t},l.a.createElement(K.a,{style:e},l.a.createElement(Y.a,{title:"Ongoing Initial Coin Offerings (ICOS)",value:c}))),l.a.createElement(J.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:t},l.a.createElement(K.a,{style:e},l.a.createElement(Y.a,{title:"Upcoming Initial Coin Offerings (ICOS)",value:i}))))))}}]),t}(n.Component),$=a(52),ee=a(133),te=a(12),ae=g.a.Header,ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={iconType:"twoTone"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.state.iconType;return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae,{className:"header"},l.a.createElement("div",{className:"logo"}),l.a.createElement(ee.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["home"],style:{lineHeight:"64px"}},l.a.createElement(ee.a.Item,{key:"home"},l.a.createElement(d.b,{to:"/"},l.a.createElement(te.a,{type:"home"}),"Home")),l.a.createElement(ee.a.Item,{key:"chart"},l.a.createElement(d.b,{to:"/coins"},l.a.createElement(te.a,{type:"area-chart"}),"Dashboard")),l.a.createElement(ee.a.Item,{key:"about"},l.a.createElement(d.b,{to:"/about"},l.a.createElement(te.a,{type:"info-circle"}),"About")),l.a.createElement(ee.a.Item,{key:"source"},l.a.createElement("a",{href:"https://github.com/danielc92/react-crypto-app"},l.a.createElement(te.a,{theme:"filled",type:"github"}),"Source")))))}}]),t}(n.Component),le=g.a.Sider,re=(g.a.Content,ee.a.SubMenu),ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(le,{width:200,style:{background:"#fff"}},l.a.createElement(ee.a,{mode:"inline",defaultSelectedKeys:["menu-coins"],defaultOpenKeys:["menu-coins","menu-events","menu-global","menu-exchanges"],style:{height:"100%",borderRight:0}},l.a.createElement(re,{key:"menu-coins",title:l.a.createElement("span",null,l.a.createElement(te.a,{type:"dollar"}),"Coins")},l.a.createElement(ee.a.Item,{key:"coin-list"},l.a.createElement(d.b,{to:"/coins"},"Coin List")),l.a.createElement(ee.a.Item,{key:"coin-detail"},l.a.createElement(d.b,{to:"/empty"},"Coin Detail View")),l.a.createElement(ee.a.Item,{key:"coin-market"},l.a.createElement(d.b,{to:"/empty"},"Coin Markets"))),l.a.createElement(re,{key:"menu-events",title:l.a.createElement("span",null,l.a.createElement(te.a,{type:"team"}),"Events")},l.a.createElement(ee.a.Item,{key:"events-list"},l.a.createElement(d.b,{to:"/events/list"},"Events List"))),l.a.createElement(re,{key:"menu-exchanges",title:l.a.createElement("span",null,l.a.createElement(te.a,{type:"bank"}),"Exchanges")},l.a.createElement(ee.a.Item,{key:"exchanges-list"},l.a.createElement(d.b,{to:"/exchanges/list"},"Exchanges List"))),l.a.createElement(re,{key:"menu-global",title:l.a.createElement("span",null,l.a.createElement(te.a,{type:"global"}),"Global")},l.a.createElement(ee.a.Item,{key:"global-main"},l.a.createElement(d.b,{to:"/global"},"Data"))))))}}]),t}(n.Component),ie=g.a.Content,oe=E.a.Paragraph,se=E.a.Title,me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={exchanges:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.coingecko.com/api/v3/exchanges").then(function(t){return e.setState({exchanges:t.data},e.setState({loading:!e.state.loading}))})}},{key:"render",value:function(){var e=[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement(y.a,{color:"purple"},e)}},{title:"Year est.",dataIndex:"year_established",key:"year_established"},{title:"Country",dataIndex:"country",key:"country",render:function(e){return l.a.createElement(y.a,{color:"blue"},e)}},{title:"Trade 24h BTC",dataIndex:"trade_volume_24h_btc",key:"trade_volume_24h_btc"}];return l.a.createElement(g.a,{style:{padding:"1rem"}},l.a.createElement(ie,{style:v},l.a.createElement(se,{level:2},"Exchanges List"),l.a.createElement(oe,null,"This page lists available exchanges."),l.a.createElement(f.a,{bordered:!0,loading:this.state.loading,dataSource:this.state.exchanges,columns:e})))}}]),t}(n.Component),ue=(a(372),g.a.Content,g.a.Sider,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{style:{minHeight:"100vh",lineHeight:"1.6rem"}},l.a.createElement(ne,null),l.a.createElement(g.a,null,l.a.createElement(ce,null),l.a.createElement($.a,{path:"/",exact:!0,component:S}),l.a.createElement($.a,{path:"/about",exact:!0,component:M}),l.a.createElement($.a,{path:"/coins",exact:!0,component:j}),l.a.createElement($.a,{path:"/exchanges/list",exact:!0,component:me}),l.a.createElement($.a,{path:"/global",exact:!0,component:Z}),l.a.createElement($.a,{path:"/empty",exact:!0,component:B}),l.a.createElement($.a,{path:"/events/list",exact:!0,component:F})))}}]),t}(n.Component));a(373);c.a.render(l.a.createElement(d.a,null,l.a.createElement(ue,null)),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.3e27c212.chunk.js.map