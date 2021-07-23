(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},112:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(111),r=n(113);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},113:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(110)),i=n(112),c={title:"Creating new project"},p={unversionedId:"tutorials/todo-app/creating-new-project",id:"tutorials/todo-app/creating-new-project",isDocsHomePage:!1,title:"Creating new project",description:"Run the following command in your terminal to create a new Wasp project:",source:"@site/docs/tutorials/todo-app/creating-new-project.md",slug:"/tutorials/todo-app/creating-new-project",permalink:"/wasp/docs/tutorials/todo-app/creating-new-project",editUrl:"https://github.com/wasp-lang/wasp/edit/master/docs/tutorials/todo-app/creating-new-project.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/wasp/docs/tutorials/todo-app"},next:{title:"Task entity",permalink:"/wasp/docs/tutorials/todo-app/task-entity"}},s=[{value:"Taking a closer look at the code",id:"taking-a-closer-look-at-the-code",children:[]},{value:"Cleaning up",id:"cleaning-up",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Run the following command in your terminal to create a new Wasp project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp new TodoApp\n")),Object(o.b)("p",null,"Enter the created directory and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ cd TodoApp\n$ wasp start\n")),Object(o.b)("p",null,"You have just ran your app in the development mode!"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"wasp start")," might take a little bit longer, due to the first time setup."))),Object(o.b)("p",null,"You will be seeing a lot of different output from client, server and database setting themselves up.\nOnce ready, a new tab should open in your browser at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),", with simple placeholder page:"),Object(o.b)("img",{alt:"Screenshot of new Wasp app",src:Object(i.a)("img/wasp-new-screenshot.png"),style:{border:"1px solid black"},height:"400px"}),Object(o.b)("p",null,"We just set the foundations of our app! We don't have yet the features to show it, but Wasp already generated for us full front-end and back-end code of the app. Take a peek at ",Object(o.b)("inlineCode",{parentName:"p"},"TodoApp/.wasp/out")," if you are curious and see how it looks like!"),Object(o.b)("h2",{id:"taking-a-closer-look-at-the-code"},"Taking a closer look at the code"),Object(o.b)("p",null,"Let's inspect Wasp project that we just created:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"TodoApp/\n\u251c\u2500\u2500 main.wasp # Here goes our Wasp code.\n\u251c\u2500\u2500 ext/      # Here goes our (external) JS/CSS/HTML/... code.\n\u2502   \u2514\u2500\u2500 MainPage.js\n\u2502   \u2514\u2500\u2500 Main.css\n\u2502   \u2514\u2500\u2500 waspLogo.png\n\u251c\u2500\u2500 .gitignore\n\u2514\u2500\u2500 .wasproot\n")),Object(o.b)("p",null,"Let's start with ",Object(o.b)("inlineCode",{parentName:"p"},"main.wasp")," file which introduces 3 new concepts:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/wasp/docs/language/basic-elements#app"}),"app"),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/wasp/docs/language/basic-elements#page"}),"page")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/wasp/docs/language/basic-elements#route"}),"route"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'app TodoApp { // Main declaration, defines a new web app.\n  title: "TodoApp" // Used as a browser tab title.\n}\n\nroute "/" -> page Main // Render page Main on url `/` (default url).\n\npage Main {\n  // We specify that ReactJS implementation of our page can be\n  // found in `ext/MainPage.js` as a default export (uses standard\n  // js import syntax).\n  component: import Main from "@ext/MainPage.js"\n}\n')),Object(o.b)("p",null,"And now to that React component we referenced in the ",Object(o.b)("inlineCode",{parentName:"p"},"page Main { ... }")," declaration in ",Object(o.b)("inlineCode",{parentName:"p"},"main.wasp"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/MainPage.js"',title:'"ext/MainPage.js"'}),"import React from 'react'\nimport waspLogo from './waspLogo.png'\nimport './Main.css'\n\nconst MainPage = () => {\n  ...\n}\nexport default MainPage\n")),Object(o.b)("p",null,"As we can see, this is just a simple functional React component using css and wasp logo that are next to it."),Object(o.b)("p",null,"This is all the code!\nWasp in the background takes care of everything else needed to define, build and run a web app."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"wasp start")," automatically picks up the changes you make and restarts the app, so keep it running."))),Object(o.b)("h2",{id:"cleaning-up"},"Cleaning up"),Object(o.b)("p",null,"Let's make our first changes!\nTo prepare the clean slate for building the TodoApp, delete all the files from ",Object(o.b)("inlineCode",{parentName:"p"},"ext/")," dir except for ",Object(o.b)("inlineCode",{parentName:"p"},"MainPage.js"),", and let's also make ",Object(o.b)("inlineCode",{parentName:"p"},"MainPage")," component much simpler:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="ext/MainPage.js"',title:'"ext/MainPage.js"'}),"import React from 'react'\n\nconst MainPage = () => {\n  return <div> Hello world! </div>\n}\nexport default MainPage\n")),Object(o.b)("p",null,"At this point, you should be seeing smth like"),Object(o.b)("img",{alt:"Todo App - Hello World",src:Object(i.a)("img/todo-app-hello-world.png"),style:{border:"1px solid black"}}),Object(o.b)("p",null,"Ok, next step, some real Todo app features!"))}u.isMDXComponent=!0}}]);