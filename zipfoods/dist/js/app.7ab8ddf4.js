(function(e){function t(t){for(var o,n,s=t[0],c=t[1],p=t[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,p||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},a={app:0},i=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1229:function(e,t,r){e.exports=r.p+"img/4.793712c2.jpg"},"1f02":function(e,t,r){e.exports=r.p+"img/driscolls-strawberries.418d31d2.jpg"},"23a0":function(e,t,r){e.exports=r.p+"img/eggo-nutri-grain-whole-wheat-waffles.baf64196.jpg"},"2ef8":function(e,t,r){e.exports=r.p+"img/gotham-greens-lettuce-medley.08a0e118.jpg"},"30af":function(e,t,r){e.exports=r.p+"img/1.418d31d2.jpg"},"34ff":function(e,t,r){e.exports=r.p+"img/2.f2dfb55e.jpg"},"3b07":function(e,t,r){e.exports=r.p+"img/birds-eye-vegetable-mix.7226e9df.jpg"},"4c00":function(e,t,r){e.exports=r.p+"img/gold-medal-flour.793712c2.jpg"},"4f35":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",[r("ul",[r("li",e._l(e.links,(function(t){return r("router-link",{key:t,attrs:{to:e.paths[t],exact:""}},[e._v(e._s(t))])})),1)])]),r("router-view")],1)},i=[],n={name:"App",data:function(){return{links:["home","products","categories"],paths:{home:"/",products:"/products",categories:"/categories"}}}},s=n,c=(r("5c0b"),r("2877")),p=Object(c["a"])(s,a,i,!1,null,null,null),u=p.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",id:"logo",src:r("58dd")}}),o("p",[e._v(" ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area. ")]),o("show-featured",{attrs:{category:"snacks"}})],1)},f=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"featured"}},[r("h2",[e._v("Featured Products")]),r("ul",{staticClass:"cleanList"},e._l(e.featuredProducts,(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])},h=[],m=(r("4de4"),r("caad"),r("2532"),[{id:1,name:"Driscoll’s Strawberries",sku:"driscolls-strawberries",description:"Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.",price:4.99,available:0,weight:1,perishable:!0,categories:["produce","fruits"]},{id:2,name:"Nestle Toll House Cookie Dough",sku:"nestle-toll-house-cookie-dough",description:"Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the chocolate flavor you’ve come to expect from Nestle Toll House.",price:7.49,available:325,weight:2.25,perishable:!0,categories:["snacks","baking"]},{id:3,name:"Gotham Greens Gourmet Lettuce Medley",sku:"gotham-greens-lettuce-medley",description:"This lovely blend features Gotham Greens’ Tropicana green leaf, Red Sail red leaf, Oak leaf, Lollo Rossa and tender Butterhead lettuces. Perfect for a colorful salad that's (almost) grown right in your own backyard!",price:3.49,available:10,weight:.3,perishable:!0,categories:["produce","vegetables"]},{id:4,name:"Gold Medal All Purpose Flour",sku:"gold-medal-flour",description:"All-purpose bleached flour is great for just about everything but doesn’t add any color. It’s perfect for baked goods like white sandwich bread and cake.",price:2.09,available:299,weight:2,perishable:!1,categories:["baking"]},{id:5,name:"Honey Nut Cheerios",sku:"honey-nut-cheerios",description:"You already know that Honey Nut Cheerios Naturally Flavored has the irresistible taste of golden honey, making it a family favorite. Something that everyone can smile about! ",price:3.99,available:400,weight:.68,perishable:!1,categories:["breakfast"]},{id:6,name:"Eggo Nutri-Grain Whole Wheat Waffles",sku:"eggo-nutri-grain-whole-wheat-waffles",description:"Eggo® Nutri-Grain® waffles made with whole wheat have the same light and crispy texture as our original Eggo® Waffles, only with the added bonus of nutritious whole grain! ",price:3.79,available:236,weight:.25,perishable:!0,categories:["breakfast","frozen"]},{id:7,name:"Amy’s Cheese Pizza",sku:"amys-cheese-pizza",description:"The classic favorite, made with our savory pizza sauce and grated part-skim mozzarella cheese.",price:8.49,available:125,weight:.81,perishable:!0,categories:["frozen","snacks"]},{id:8,name:"Birds Eye Steamfresh Fresh Frozen Vegetable Mix",sku:"birds-eye-vegetable-mix",description:"Delicious Birds Eye vegetables in blends that are just right for side dishes and your recipes.",price:2.99,available:99,weight:.68,perishable:!0,categories:["frozen","vegetables"]},{id:9,name:"Bare Coconut Chips",sku:"bare-coconut-chips",description:"Simply made with coconuts, cane sugar, and sea salt.",price:4.99,available:3,weight:.21,perishable:!1,categories:["snacks"]},{id:10,name:"Snapple Peach Tea",sku:"snapple-peach-tea",description:"To Peach their own. Smooth Snapple tea, perfect peach flavor. We made it just for you from the Best Stuff on Earth.",price:12.99,available:4,weight:12,perishable:!1,categories:["beverages"]}]),b={name:"show-featured",props:["category"],data:function(){return{products:m}},computed:{featuredProducts:function(){var e=this;return this.products.filter((function(t){return t.categories.includes(e.category)}),this.category)}}},v=b,y=Object(c["a"])(v,g,h,!1,null,"98f1d1c6",null),w=y.exports,j={name:"App",components:{"show-featured":w}},_=j,k=Object(c["a"])(_,d,f,!1,null,"6bfef244",null),x=k.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"products"}},[r("h2",[e._v("Products")]),e._l(e.products,(function(e){return r("show-preview",{key:e.id,attrs:{product:e}})}))],2)},z=[],C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"product"},[o("div",{staticClass:"product-name"},[o("a",{attrs:{href:"/products/1"}},[e._v(" "+e._s(e.product.name)+" ")])]),o("img",{staticClass:"product-thumb",attrs:{src:r("634a")("./"+e.product.id+".jpg")}})])},E=[],P={name:"show-product-preview",props:["product"],data:function(){return{}}},S=P,T=Object(c["a"])(S,C,E,!1,null,"486678aa",null),$=T.exports,G={name:"",components:{"show-preview":$},data:function(){return{products:m}}},N=G,F=Object(c["a"])(N,O,z,!1,null,"56eeb3ec",null),M=F.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Categories")]),r("ul",{staticClass:"cleanList"},e._l(e.categories,(function(t,o){return r("li",{key:o},[e._v(" "+e._s(t)+" ")])})),0)])},B=[],D=(r("99af"),r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),L={name:"",data:function(){return{products:m}},computed:{categories:function(){var e=this.products.map((function(e){return e.categories})),t=[].concat.apply([],e);return Object(D["a"])(new Set(t)).sort()}}},W=L,H=Object(c["a"])(W,A,B,!1,null,"98075360",null),J=H.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"product-page"}},[r("h1",[e._v(e._s(e.product.name))]),r("show-product",{key:e.product.id,attrs:{product:e.product}})],1)},U=[],V=(r("7db0"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"product"},[o("div",{staticClass:"product-name"},[e._v(e._s(e.product.name))]),o("img",{staticClass:"product-thumb",attrs:{src:r("634a")("./"+e.product.id+".jpg")}}),o("p",{staticClass:"product-description"},[e._v(e._s(e.product.description))]),o("div",{staticClass:"product-price"},[e._v("$"+e._s(e.product.price))])])}),q=[],I={name:"show-product",props:["product"],data:function(){return{}}},Y=I,Z=Object(c["a"])(Y,V,q,!1,null,"26d833f8",null),K=Z.exports,Q={props:["id"],data:function(){return{products:m}},components:{"show-product":K},computed:{product:function(){var e=this;return this.products.find((function(t){return t.id==e.id}))}}},X=Q,ee=Object(c["a"])(X,R,U,!1,null,null,null),te=ee.exports;o["a"].config.productionTip=!1,o["a"].use(l["a"]);var re=new l["a"]({mode:"history",routes:[{path:"/",component:x},{path:"/products",component:M},{path:"/categories",component:J},{path:"/products/:id",component:te,props:!0}]});new o["a"]({router:re,render:function(e){return e(u)}}).$mount("#app")},"58dd":function(e,t,r){e.exports=r.p+"img/zipfoods-logo.a23a3a29.png"},"5a9a":function(e,t,r){e.exports=r.p+"img/9.16db8a64.jpg"},"5c0b":function(e,t,r){"use strict";r("c58b")},"634a":function(e,t,r){var o={"./1.jpg":"30af","./10.jpg":"e29a","./2.jpg":"34ff","./3.jpg":"a774","./4.jpg":"1229","./5.jpg":"e6f8","./6.jpg":"dd98","./7.jpg":"e61b","./8.jpg":"6740","./9.jpg":"5a9a","./amys-cheese-pizza.jpg":"8bcd","./bare-coconut-chips.jpg":"ba90","./birds-eye-vegetable-mix.jpg":"3b07","./driscolls-strawberries.jpg":"1f02","./eggo-nutri-grain-whole-wheat-waffles.jpg":"23a0","./gold-medal-flour.jpg":"4c00","./gotham-greens-lettuce-medley.jpg":"2ef8","./honey-nut-cheerios.jpg":"f9e0","./image-not-available.jpg":"4f35","./nestle-toll-house-cookie-dough.jpg":"c905","./snapple-peach-tea.jpg":"88c8"};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="634a"},6740:function(e,t,r){e.exports=r.p+"img/8.7226e9df.jpg"},"88c8":function(e,t,r){e.exports=r.p+"img/snapple-peach-tea.410f9d36.jpg"},"8bcd":function(e,t,r){e.exports=r.p+"img/amys-cheese-pizza.491e93f2.jpg"},a774:function(e,t,r){e.exports=r.p+"img/3.08a0e118.jpg"},ba90:function(e,t,r){e.exports=r.p+"img/bare-coconut-chips.16db8a64.jpg"},c58b:function(e,t,r){},c905:function(e,t,r){e.exports=r.p+"img/nestle-toll-house-cookie-dough.f2dfb55e.jpg"},dd98:function(e,t,r){e.exports=r.p+"img/6.baf64196.jpg"},e29a:function(e,t,r){e.exports=r.p+"img/10.410f9d36.jpg"},e61b:function(e,t,r){e.exports=r.p+"img/7.491e93f2.jpg"},e6f8:function(e,t,r){e.exports=r.p+"img/5.baffccef.jpg"},f9e0:function(e,t,r){e.exports=r.p+"img/honey-nut-cheerios.baffccef.jpg"}});
//# sourceMappingURL=app.7ab8ddf4.js.map