(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{9101:function(e,t,i){"use strict";i.d(t,{ZP:function(){return u}});let s={_origin:"https://api.emailjs.com"},a=(e,t="https://api.emailjs.com")=>{s._userID=e,s._origin=t},l=(e,t,i)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class n{constructor(e){this.status=e.status,this.text=e.responseText}}let r=(e,t,i={})=>new Promise((a,l)=>{let r=new XMLHttpRequest;r.addEventListener("load",({target:e})=>{let t=new n(e);200===t.status||"OK"===t.text?a(t):l(t)}),r.addEventListener("error",({target:e})=>{l(new n(e))}),r.open("POST",s._origin+e,!0),Object.keys(i).forEach(e=>{r.setRequestHeader(e,i[e])}),r.send(t)}),o=(e,t,i,a)=>{let n=a||s._userID;return l(n,e,t),r("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:n,service_id:e,template_id:t,template_params:i}),{"Content-type":"application/json"})},d=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},c=(e,t,i,a)=>{let n=a||s._userID,o=d(i);l(n,e,t);let c=new FormData(o);return c.append("lib_version","3.2.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),r("/api/v1.0/email/send-form",c)};var u={init:a,send:o,sendForm:c}},4223:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return i(5325)}])},9401:function(e,t,i){"use strict";var s=i(5893);i(7294);let a=e=>{let{children:t,globals:i,getData:a}=e;return(0,s.jsx)("div",{style:{margin:"0 0"},children:(0,s.jsx)("div",{children:(0,s.jsx)("main",{style:i,children:t})})})};t.Z=a},6216:function(e,t){"use strict";let i=(e,t)=>t?"http://localhost:3000":"http://localhost:4000/api/page/".concat(e,".json");t.Z=i},8416:function(e,t,i){"use strict";i(7294);var s=i(6216);let a=(e,t,i)=>fetch((0,s.Z)(t),{method:"post",mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":(0,s.Z)(t,!0)},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({from:e.from,position:e.position,property:e.property,to:e.to,add:e.add,delete:e.delete,switch:e.switch})});t.Z=a},6998:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var s=i(7294),a=i(8416);let l=(e,t,i,l)=>{let[n,r]=(0,s.useState)([]),[o,d]=(0,s.useState)([]),c=(e,t)=>{l.setText(e.target.name),r(e.target.value)},u=(s,l,n,r,o)=>{console.log("here",o);let d={from:e(i)[0]?e(i)[0].component[0]:null,position:s,property:l,to:n,add:o||null,delete:null,switch:null};(0,a.Z)(d,t,r).then(()=>{console.log("got"),r()})};return(0,s.useEffect)(()=>{r(e(i)[0]?e(i)[0].text:"bug")},[]),{element:o,value:n,setValue:r,handleChange:c,sendData:u}},n=(e,t,i,a)=>{let n=()=>e&&e.filter((e,t)=>JSON.stringify(e.component)===a),r=n(a),o=l(n,i,a,t),d=(e,i,s)=>{t.setIndex(i),t.sendValue(o)};return(0,s.useEffect)(()=>{t.setValue(o)},[o.value]),(0,s.useEffect)(()=>{t.setValue(o)},[]),(0,s.useEffect)(()=>{t.setValue(o),t.setText("text")},[o.textValue]),(0,s.useEffect)(()=>{t.setValue(o),t.setText("element")},[o.elementValue]),(0,s.useEffect)(()=>{t.setValue(o),t.setText("list")},[o.listValue]),{check:r,value:o,getFromAndIndex:d}};var r=n},3567:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var s=i(5893);i(7294),i(9101),i(6998);var a=i(8416);function l(e){let t=(t,i,s,l,n,r,o)=>{let d=()=>e.answer&&e.answer.filter((e,t)=>JSON.stringify(e.component)===n);console.log("here",n);let c={from:d(n)[0]?d(n)[0].component[0]:null,position:t,property:i,to:s,add:n||null,delete:null,switch:null};(0,a.Z)(c,r,l).then(()=>{console.log("got"),l()})};return(0,s.jsx)("div",{className:" mt-0 absolute right-0 ",children:(0,s.jsxs)("div",{className:" h-max  my-7 card w-80 bg-base-100  ",children:[(0,s.jsx)("div",{className:"text-right mr-4 cursor-pointer",onClick:e.close,children:"X"}),e.answer&&e.answer.slice(1).map((i,a)=>(console.log(i.component[0]),(0,s.jsxs)("div",{className:"flex space-y-10 my-5 border-2 h-52 card w-80 bg-base-100  ",children:[(0,s.jsx)("figure",{className:"px-10  pb-0 -mb-10 pt-10",children:(0,s.jsx)("img",{src:i.image,width:"100px",height:"100px",alt:"Shoes",className:"rounded-xl"})}),(0,s.jsx)("div",{className:"card-body ",children:(0,s.jsxs)("div",{className:"h-12 flex flex-row space-x-16 justify-bottom border-red",children:[(0,s.jsx)("p",{children:i.component}),(0,s.jsx)("div",{className:"card-actions",children:(0,s.jsx)("button",{className:"btn btn-xs btn-primary text-xs w-12",onClick:()=>t(null,null,null,e.getData,i.component[0],"first-page"),children:"add"})})]})})]})))]})})}},5325:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var s=i(5893),a=i(7294),l=i(9401),n=i(3567);let r=a.forwardRef(function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}),o=[{title:"Shopify",featured:!1,description:"Convenient features to make a simple website quickly; great for new businesses on a budget.",price:"4,000",savings:420,pages:"5+",link:"https://buy.stripe.com/6oE4gI95M3yg1X26oG",yearLink:"https://buy.stripe.com/bIYcNe81I1q8bxC3cv",mainFeatures:[{id:1,value:"Start selling online NOW"},{id:2,value:"Fits all business info"},{id:3,value:"Link all your assets"},{id:4,value:"Partial ecommerce solution"},{id:5,value:"Secures sensitive data"},{id:6,value:"Buy buttons instead of cart"}]},{title:"Custom Solution",featured:!0,description:"The best ecommerce website for your thriving business; great for established businesses that want a developer on call.",price:"7,000",pages:"5+",link:"https://buy.stripe.com/6oE28Agye1q831628j",yearLink:"https://buy.stripe.com/bIY8wYchY5Go59e9AQ",mainFeatures:[{id:1,value:"Revenue directly from site"},{id:2,value:"Better leads & conversions"},{id:3,value:"Inventory management included"},{id:4,value:"Full ecommerce solution"},{id:5,value:"Easily scalable"},{id:6,value:"Better user experience"},{id:7,value:"Secures sensitive data"},{id:8,value:"Link all your assets"},{id:9,value:"Fits all business info"},{id:10,value:"Cart & checkout pages"}]},{title:"Custom Solution + Marketing Stategy",featured:!1,description:"Same great custom solution with a full marketing plan including email, social media, SEO, and Google/FB Ads.",price:"12,000",pages:"10+",link:"https://buy.stripe.com/6oE4gI95M3yg1X26oG",yearLink:"https://buy.stripe.com/bIYcNe81I1q8bxC3cv",mainFeatures:[{id:1,value:"Start selling online NOW"},{id:2,value:"Fits all business info"},{id:3,value:"Link all your assets"},{id:4,value:"Partial ecommerce solution"},{id:5,value:"Secures sensitive data"},{id:6,value:"Buy buttons instead of cart"}]}],d=[{title:"WordPress",featured:!1,description:"Convenient features to make a simple website quickly; great for new businesses on a budget.",price:"3,000",link:"https://buy.stripe.com/28o00s0zgfgYatyeV2",yearLink:"https://buy.stripe.com/fZeaF6eq65Go8lq28l",pages:"5+",mainFeatures:[{id:1,value:"Start your online presence"},{id:2,value:"Full website solution"},{id:3,value:"Fits all business info"},{id:4,value:"Link all your assets"},{id:5,value:"Easily scalable"},{id:6,value:"Centralized business info"}]},{title:"Custom Solution",featured:!0,description:"The best website for your thriving business; great for established businesses that want a developer in house",price:"5,000",pages:"5+",link:"https://buy.stripe.com/aEUbJaa9Q3yg3164gm",yearLink:"https://buy.stripe.com/dR68wYa9Q8SAgRWdR2",mainFeatures:[{id:1,value:"Better leads & conversions"},{id:2,value:"Sell services directly on site"},{id:3,value:"Customers easily find you"},{id:4,value:"Fits all business info"},{id:5,value:"Full website solution"},{id:6,value:"Easily scalable"},{id:7,value:"Centralized business info"}]},{title:"Custom Solution + Marketing Strategy",featured:!1,description:"Same great custom solution with a full marketing plan including email, social media, SEO, and Google/FB Ads.",price:"8,000",link:"https://buy.stripe.com/28o00s0zgfgYatyeV2",yearLink:"https://buy.stripe.com/fZeaF6eq65Go8lq28l",pages:"5+",mainFeatures:[{id:1,value:"Start your online presence"},{id:2,value:"Full website solution"},{id:3,value:"Fits all business info"},{id:4,value:"Link all your assets"},{id:5,value:"Easily scalable"},{id:6,value:"Centralized business info"}]}];function c(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter(Boolean).join(" ")}let u=["Thanks for choosing Websites By Trevor!"," We will reach out ASAP to start collaborating on your new free site"];function m(){let[e,t]=(0,a.useState)(!1),[i,l]=(0,a.useState)("ecom"),m=()=>(0,s.jsx)(s.Fragment,{children:"ecom"===i?(0,s.jsxs)("div",{className:"relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0",children:[(0,s.jsx)("div",{"aria-hidden":"true",className:"hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"}),e?(0,s.jsx)(n.Z,{message:u,confirm:()=>t(!1)}):null,(0,s.jsx)("div",{className:"relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3",children:o.map(e=>(0,s.jsxs)("div",{className:c(e.featured?"bg-white ring-2 ring-indigo-700 shadow-md":"bg-indigo-700 lg:bg-transparent","pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"),children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{className:c(e.featured?"text-indigo-600":"text-white","text-sm font-semibold uppercase tracking-wide"),children:[e.title," ","Custom Solution"===e.title?"- Most Popular":null,(0,s.jsx)("br",{}),e.pages," pages"]}),(0,s.jsx)("p",{className:c(e.featured?"text-gray-500":"text-indigo-200","text-sm"),children:e.description}),(0,s.jsxs)("div",{className:"flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start",children:[(0,s.jsxs)("div",{className:"mt-3 h-24 flex items-start",children:[(0,s.jsxs)("p",{className:c(e.featured?"text-indigo-600":"text-white","text-4xl mb-20 font-extrabold tracking-tight"),children:[(0,s.jsx)("span",{className:"mr-1",children:"$"}),e.price]}),(0,s.jsx)("div",{className:"ml-4 mt-4",children:(0,s.jsx)("p",{className:c(e.featured?"text-gray-700":"text-white","text-sm"),children:"4,000"===e.price?"(100% upfront)":"(50% upfront)"})})]}),(0,s.jsxs)("a",{href:e.link?e.link:null,onClick:e.link?null:()=>t(!0),className:c(e.featured?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-white text-indigo-600 hover:bg-indigo-50","mt-0 w-full h-10 inline-block whitespace-nowrap py-2 px-10 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"),children:["Buy ",e.title]})]})]}),(0,s.jsx)("h4",{className:"sr-only",children:"Features"}),(0,s.jsx)("ul",{role:"list",className:c(e.featured?"border-gray-200 divide-gray-200":"border-indigo-500 divide-indigo-500 divide-opacity-75","mt-7 border-t divide-y lg:border-t-0"),children:e.mainFeatures.map(t=>(0,s.jsxs)("li",{className:"py-2 flex items-center",children:[(0,s.jsx)(r,{className:c(e.featured?"text-indigo-500":"text-indigo-200","w-5 h-5 flex-shrink-0"),"aria-hidden":"true"}),(0,s.jsx)("span",{className:c(e.featured?"text-gray-600":"text-white","ml-3 text-sm font-medium"),children:t.value})]},t.id))})]},e.title))})]}):(0,s.jsxs)("div",{className:"relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0",children:[(0,s.jsx)("div",{"aria-hidden":"true",className:"hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"}),e?(0,s.jsx)(n.Z,{confirm:()=>t(!1)}):null,(0,s.jsx)("div",{className:"relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3",children:d.map(e=>(0,s.jsxs)("div",{className:c(e.featured?"bg-white ring-2 ring-indigo-700 shadow-md":"bg-indigo-700 lg:bg-transparent","pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"),children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{className:c(e.featured?"text-indigo-600":"text-white","text-sm font-semibold uppercase tracking-wide"),children:[e.title,"  ",(0,s.jsx)("br",{}),e.pages," pages"]}),(0,s.jsx)("p",{className:c(e.featured?"text-gray-500":"text-indigo-200","text-sm"),children:e.description}),(0,s.jsxs)("div",{className:"flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start",children:[(0,s.jsxs)("div",{className:"mt-3 h-24 flex items-start",children:[(0,s.jsxs)("p",{className:c(e.featured?"text-indigo-600":"text-white","text-4xl mb-20 font-extrabold tracking-tight"),children:[(0,s.jsx)("span",{className:"mr-1",children:"$"}),e.price]}),(0,s.jsx)("div",{className:"ml-4 mt-4",children:(0,s.jsx)("p",{className:c(e.featured?"text-gray-700":"text-white","text-sm"),children:"3,000"===e.price?"(100% upfront)":"(50% upfront)"})})]}),(0,s.jsxs)("a",{href:e.link?e.link:null,onClick:e.link?null:()=>t(!0),className:c(e.featured?"bg-indigo-600 text-white hover:bg-indigo-700":"bg-white text-indigo-600 hover:bg-indigo-50","mt-0 w-full h-10 inline-block whitespace-nowrap py-2 px-10 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"),children:["Buy ",e.title]})]})]}),(0,s.jsx)("h4",{className:"sr-only",children:"Features"}),(0,s.jsx)("ul",{role:"list",className:c(e.featured?"border-gray-200 divide-gray-200":"border-indigo-500 divide-indigo-500 divide-opacity-75","mt-7 border-t divide-y lg:border-t-0"),children:e.mainFeatures.map(t=>(0,s.jsxs)("li",{className:"py-2 flex items-center",children:[(0,s.jsx)(r,{className:c(e.featured?"text-indigo-500":"text-indigo-200","w-5 h-5 flex-shrink-0"),"aria-hidden":"true"}),(0,s.jsx)("span",{className:c(e.featured?"text-gray-600":"text-white","ml-3 text-sm font-medium"),children:t.value})]},t.id))})]},e.title))})]})});return(0,s.jsx)("div",{className:"bg-gray-50",style:{gridRow:"span 9",gridColumn:"span 7"},children:(0,s.jsxs)("div",{className:"pb-12 relative bg-indigo-600",children:[(0,s.jsx)("div",{"aria-hidden":"true",className:"hidden absolute bg-gray-50 w-full h-6"}),(0,s.jsxs)("div",{className:" relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8",children:[(0,s.jsxs)("h1",{className:"text-4xl font-extrabold tracking-tight text-white sm:text-6xl",children:[(0,s.jsx)("span",{className:"block lg:inline",children:"Simple pricing, "}),(0,s.jsx)("span",{className:"block lg:inline",children:"all-in-one packages."})]}),(0,s.jsxs)("p",{className:"mt-4 text-xl text-indigo-100",children:["Everything you need, nothing you don't.",(0,s.jsx)("br",{}),"Pick a plan that best suits your business and your budget."]})]}),(0,s.jsx)("h2",{className:"sr-only",children:"Plans"}),(0,s.jsx)("div",{className:"relative mt-12 flex justify-center sm:mt-16",children:(0,s.jsxs)("div",{className:"bg-indigo-700 p-0.5 rounded-lg flex",children:[(0,s.jsx)("button",{type:"button",onClick:()=>l("ecom"),className:"".concat("ecom"===i?"relative bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10":"ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"),children:"Ecommerce"}),(0,s.jsx)("button",{type:"button",onClick:()=>l("standard"),className:"".concat("standard"===i?"relative w-36 bg-white py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium text-indigo-700 whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10":"ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"),children:"Standard"})]})}),(0,s.jsx)(m,{})]})})}let g=()=>(0,s.jsx)(l.Z,{title:"Pricing",text:"Affordable packages with no monthly costs",pageLayout:{gridTemplateRows:"[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"},children:(0,s.jsx)(m,{})});var p=g}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4223)}),_N_E=e.O()}]);