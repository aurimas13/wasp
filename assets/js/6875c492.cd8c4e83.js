(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8610],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(a),g=n,p=d["".concat(o,".").concat(g)]||d[g]||u[g]||l;return a?r.createElement(p,i(i({ref:t},m),{},{components:a})):r.createElement(p,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(7294),n=a(6010),l=a(3905),i=a(4973),c=a(6742),o=a(9306),s=a(3491),m=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx";var h=function(e){var t,a,h,f=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,v=e.frontMatter,E=e.metadata,Z=e.truncated,y=e.isBlogPostPage,N=void 0!==y&&y,k=E.date,w=E.formattedDate,_=E.permalink,O=E.tags,T=E.readingTime,P=E.title,x=E.editUrl,j=v.author,I=v.image,L=v.keywords,M=v.author_url||v.authorURL,C=v.author_title||v.authorTitle,D=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:L,image:I}),r.createElement("article",{className:N?void 0:"margin-bottom--xl"},(h=N?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:d},N?P:r.createElement(c.Z,{to:_},P)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:k},w),T&&r.createElement(r.Fragment,null," \xb7 ",f(T))),r.createElement("div",{className:"avatar margin-vert--md"},D&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:M},r.createElement("img",{src:D,alt:j})),r.createElement("div",{className:"avatar__intro"},j&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(c.Z,{href:M},j)),r.createElement("small",{className:"avatar__subtitle"},C)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:s.Z},b)),(O.length>0||Z)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[p]=N,t))},O.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),O.map((function(e){var t=e.label,a=e.permalink;return r.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),!N&&Z&&r.createElement("div",{className:"col text--right"},r.createElement(c.Z,{to:E.permalink,"aria-label":"Read more about "+P},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(6742),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",s="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(5474),l=a(3146),i=a(6742),c=a(5601),o=a(4973),s=a(9306);t.default=function(e){var t,a=e.metadata,m=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,p=a.count,h=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:g});return r.createElement(n.Z,{title:f,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(c.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(i.Z,{href:d},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(7294),n=a(4973),l=a(2122),i=a(9756),c=a(6010),o="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,a){"use strict";a.d(t,{N:function(){return d},Z:function(){return g}});var r=a(9756),n=a(2122),l=a(7294),i=a(6010),c=a(4973),o=a(9306),s="enhancedAnchor_2LWZ",m="h1Heading_27L5",u=["id"],d=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0,className:m}),t.children))},g=function(e){return"h1"===e?d:(t=e,function(e){var a,n=e.id,m=(0,r.Z)(e,u),d=(0,o.LU)().navbar.hideOnScroll;return n?l.createElement(t,m,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[s]=!d,a)),id:n}),m.children,l.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,m)});var t}},3491:function(e,t,a){"use strict";var r=a(7294),n=a(6742),l=a(1756),i=a(6159),c={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(n.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(l.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")};t.Z=c}}]);