(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},112:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(111),r=n(113);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},113:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(110)),o=n(112),s={title:"Creating tasks"},c={unversionedId:"tutorials/todo-app/creating-tasks",id:"tutorials/todo-app/creating-tasks",isDocsHomePage:!1,title:"Creating tasks",description:"To enable creation of new tasks, we will need two things:",source:"@site/docs/tutorials/todo-app/creating-tasks.md",slug:"/tutorials/todo-app/creating-tasks",permalink:"/wasp/docs/tutorials/todo-app/creating-tasks",editUrl:"https://github.com/wasp-lang/wasp/edit/master/docs/tutorials/todo-app/creating-tasks.md",version:"current",sidebar:"docs",previous:{title:"Listing tasks",permalink:"/wasp/docs/tutorials/todo-app/listing-tasks"},next:{title:"Updating tasks",permalink:"/wasp/docs/tutorials/todo-app/updating-tasks"}},p=[{value:"Action",id:"action",children:[{value:"Wasp declaration",id:"wasp-declaration",children:[]},{value:"JS implementation",id:"js-implementation",children:[]}]},{value:"React form",id:"react-form",children:[]},{value:"Side note: Automatic invalidation/updating of queries",id:"side-note-automatic-invalidationupdating-of-queries",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To enable creation of new tasks, we will need two things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Wasp action that creates a new task."),Object(i.b)("li",{parentName:"ol"},"React form that calls that action with the new task's data.")),Object(i.b)("h2",{id:"action"},"Action"),Object(i.b)("p",null,"Creating an action is very similar to creating a query."),Object(i.b)("h3",{id:"wasp-declaration"},"Wasp declaration"),Object(i.b)("p",null,"First we declare the action in Wasp:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\naction createTask {\n  fn: import { createTask } from "@ext/actions.js",\n  entities: [Task]\n}\n')),Object(i.b)("h3",{id:"js-implementation"},"JS implementation"),Object(i.b)("p",null,"Next, we define a JS function for that action:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"export const createTask = async (args, context) => {\n  return context.entities.Task.create({\n    data: { description: args.description }\n  })\n}\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We put JS function in new file ",Object(i.b)("inlineCode",{parentName:"p"},"ext/actions.js"),", but we could have put it anywhere we wanted, there are no limitations here, as long as the import statement in Wasp file is correct and it is inside ",Object(i.b)("inlineCode",{parentName:"p"},"ext/")," dir."))),Object(i.b)("h2",{id:"react-form"},"React form"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{5,12,39-61} title="ext/MainPage.js"',"{5,12,39-61}":!0,title:'"ext/MainPage.js"'}),"import React from 'react'\n\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks'\nimport createTask from '@wasp/actions/createTask'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => {\n  return (\n    <div>\n      <input\n        type='checkbox' id={props.task.id}\n        checked={props.task.isDone} readonly\n      />\n      {props.task.description}\n    </div>\n  )\n}\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nconst NewTaskForm = (props) => {\n  const handleSubmit = async (event) => {\n    event.preventDefault()\n    try {\n      const description = event.target.description.value\n      event.target.reset()\n      await createTask({ description })\n    } catch (err) {\n      window.alert('Error: ' + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name='description'\n        type='text'\n        defaultValue=''\n      />\n      <input type='submit' value='Create task' />\n    </form>\n  )\n}\n\nexport default MainPage\n")),Object(i.b)("p",null,"Here we call our action directly (no hooks) because we don't need any reactivity. The rest is just regular React code."),Object(i.b)("p",null,"That's it!\nTry creating a \"Build a Todo App in Wasp\" task and see it appear in the list below.\nTask is created on the server and also saved in the database. Try refreshing the page or opening it in another browser - you'll see the tasks are still here!"),Object(i.b)("img",{alt:"Todo App - creating new task",src:Object(o.a)("img/todo-app-new-task.png"),style:{border:"1px solid black"}}),Object(i.b)("h2",{id:"side-note-automatic-invalidationupdating-of-queries"},"Side note: Automatic invalidation/updating of queries"),Object(i.b)("p",null,"You will notice that when you create a new task, the list of tasks is automatically updated with that new task, although we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with react-query you would invalidate the ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks")," query via its key, or would call its ",Object(i.b)("inlineCode",{parentName:"p"},"refetch()")," method."),Object(i.b)("p",null,"The reason why ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks")," query automatically updates when ",Object(i.b)("inlineCode",{parentName:"p"},"createTask")," action is executed is because Wasp is aware that both of them are working with ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," entity, and therefore assumes that action that operates on ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," (in this case ",Object(i.b)("inlineCode",{parentName:"p"},"createTask"),") might have changed the result of ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks")," query. Therefore, in the background, Wasp nudges ",Object(i.b)("inlineCode",{parentName:"p"},"getTasks")," query to update. This means that ",Object(i.b)("strong",{parentName:"p"},"out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that the actions might have done"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"While this kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as an app grows. In that case, you will be able to override this default behaviour and instead provide more detailed (and performant) instructions on how the specific action should affect queries. This is not yet implemented, but is something we plan to do and you can track the progress ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/63"}),"here")," (or even contribute!)."))))}u.isMDXComponent=!0}}]);