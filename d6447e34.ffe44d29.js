(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=o,h=d["".concat(a,".").concat(p)]||d[p]||u[p]||r;return n?i.a.createElement(h,s(s({ref:t},c),{},{components:n})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";var o=n(0),i=n(19);t.a=function(){const e=Object(o.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},112:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o=n(111),i=n(113);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.a)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},113:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}))},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),i=n(6),r=(n(0),n(110)),a=n(112),s={title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",author:"Martin Sosic",author_title:"Co-founder & CTO @ Wasp",author_url:"https://github.com/martinsos",tags:["discord","nodejs"]},l={permalink:"/wasp/blog/2021/04/29/discord-bot-introduction",source:"@site/blog/2021-04-29-discord-bot-introduction.md",description:'<img alt="Guest introducing themselves and getting full-access."',date:"2021-04-29T00:00:00.000Z",tags:[{label:"discord",permalink:"/wasp/blog/tags/discord"},{label:"nodejs",permalink:"/wasp/blog/tags/nodejs"}],title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",readingTime:8.685,truncated:!0,nextItem:{title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",permalink:"/wasp/blog/2021/03/02/wasp-alpha"}},c=[{value:"High-level approach",id:"high-level-approach",children:[]},{value:"Implementing a Discord Bot (NodeJS)",id:"implementing-a-discord-bot-nodejs",children:[{value:"Defining bot on Discord and adding it to your server.",id:"defining-bot-on-discord-and-adding-it-to-your-server",children:[]},{value:"Creating a basic bot in NodeJS",id:"creating-a-basic-bot-in-nodejs",children:[]},{value:"Detecting a valid introduction from a member",id:"detecting-a-valid-introduction-from-a-member",children:[]},{value:"Removing the &quot;Guest&quot; role upon successful introduction",id:"removing-the-guest-role-upon-successful-introduction",children:[]},{value:"Deploying the bot",id:"deploying-the-bot",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{align:"center"},Object(r.b)("figure",null,Object(r.b)("img",{alt:"Guest introducing themselves and getting full-access.",src:Object(a.a)("img/discord-introduction-example.png")}),Object(r.b)("figcaption",null,'A Guest user getting access by introducing themselves in the "introductions" channel.'))),Object(r.b)("p",null,"At ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://wasp-lang.dev"}),"Wasp"),", we have a Discord server for our community, where we talk with people interested in and using Wasp - Waspeteers!"),Object(r.b)("p",null,"In the beginning, we knew everybody in the community by their name, but as it started growing, we had a lot of people joining that never wrote anything, and the community started feeling less homey, less intimate."),Object(r.b)("p",null,"This was when we decided to make it required for the new members to introduce themselves to gain access to the community.\nWe knew that with this kind of barrier we would probably lose some potential new Waspeteers, but those that would go through it would be more engaged and better integrated."),Object(r.b)("p",null,"We found no other way to accomplish this automatically but to implement our own Discord bot.\nIn this post I will describe in detail how we did it."),Object(r.b)("h2",{id:"high-level-approach"},"High-level approach"),Object(r.b)("p",null,'We want the following: when a new user comes to our Discord server, they should be able to access only "public" channels, like ',Object(r.b)("inlineCode",{parentName:"p"},"rules"),", ",Object(r.b)("inlineCode",{parentName:"p"},"contributing"),", and most importantly, ",Object(r.b)("inlineCode",{parentName:"p"},"introductions"),", where they could introduce themselves."),Object(r.b)("p",null,"Once they introduced themselves in the ",Object(r.b)("inlineCode",{parentName:"p"},"introductions")," channel, they would get access to the rest of the channels."),Object(r.b)("p",{align:"center"},Object(r.b)("figure",null,Object(r.b)("img",{alt:"Channels user can see when Guest vs when full member.",src:Object(a.a)("img/wasp-guest-vs-waspeteer.png"),height:"400px"}),Object(r.b)("figcaption",null,"Left: what Guest sees; Right: what Waspeteer sees."))),Object(r.b)("p",null,"In Discord, access control is performed via roles. There are two ways to accomplish what we need:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Adding a role that grants access"),". When they join, they have no roles. Once they introduce themselves, they are granted a role (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"Member")," or ",Object(r.b)("inlineCode",{parentName:"li"},"Waspeteer"),") that is required to access the rest of the server."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Removing a role that forbids access"),". When they join, they are automatically assigned a role ",Object(r.b)("inlineCode",{parentName:"li"},"Guest"),", for which we configured the non-public channels to deny access. Once they introduce themselves, the role ",Object(r.b)("inlineCode",{parentName:"li"},"Guest")," gets removed and they gain access to the rest of the server.")),Object(r.b)("p",null,"We decided to go with the second approach since it means we don't have to assign all the existing members with a new role. From now on, we will be talking about how to get this second approach working."),Object(r.b)("p",null,"To get this going, we need to do the following:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create role ",Object(r.b)("inlineCode",{parentName:"li"},"Guest"),"."),Object(r.b)("li",{parentName:"ol"},"Ensure that the ",Object(r.b)("inlineCode",{parentName:"li"},"Guest"),' role has permissions to access only "public" channels.\nOne convenient way to go about this is to disable "View Channels" permission for the role ',Object(r.b)("inlineCode",{parentName:"li"},"Guest"),' at the level of Category, so it propagates to all the channels in it, instead of doing it for every single channel.\nOnce you are done, use the "See server as a role" feature of Discord to confirm that you set the permissions as you wanted.'),Object(r.b)("li",{parentName:"ol"},"Automatically inform new members that they must introduce themselves in the ",Object(r.b)("inlineCode",{parentName:"li"},"introductions")," channel with ",Object(r.b)("inlineCode",{parentName:"li"},"!intro <text_about_me>"),' to gain access to the rest of the server.\nThis can be done via Discord\'s "Welcome Screen" feature or via one of the many existing Discord bots out there offering this functionality.'),Object(r.b)("li",{parentName:"ol"},"Automatically assign the ",Object(r.b)("inlineCode",{parentName:"li"},"Guest")," role to a new member when they join the server."),Object(r.b)("li",{parentName:"ol"},"Automatically remove the ",Object(r.b)("inlineCode",{parentName:"li"},"Guest")," role when a member introduces themselves in the public ",Object(r.b)("inlineCode",{parentName:"li"},"introductions")," channel.")),Object(r.b)("p",null,"#1, #2 and #3 are relatively straight-forward."),Object(r.b)("p",null,"For the #4 (automatic assignment of the role when a new member joins the server), since Discord doesn't support this directly, you will need a bot to do it.\nLuckily, many bots allow you to auto-assign roles when new members join, and I ended up using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://mee6.xyz/"}),"MEE6")," for this.\nI set it up so that when a new member joins, they are immediately assigned a ",Object(r.b)("inlineCode",{parentName:"p"},"Guest")," role."),Object(r.b)("p",null,"However, for the #5 (remove or assign the role on a message in a specific channel), the situation is more complicated - I couldn't find a single bot out there that supports this!\nThe closest I got was with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://carl.gg/"}),"Carl Bot"),' and its "tags" feature, which allows you to write custom code, but in the end, it turned out to be too restrictive to accomplish this.\nTherefore, I ended up implementing our own bot (Wasp Bot) that does this.'),Object(r.b)("h2",{id:"implementing-a-discord-bot-nodejs"},"Implementing a Discord Bot (NodeJS)"),Object(r.b)("p",null,"I decided to implement a bot in NodeJS since it is easy to get started quickly and there is a good Discord library."),Object(r.b)("p",null,"I will describe how to create it step by step below, but ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp-bot/tree/4b3858202622c7635aeb6f1d71d9ba9781eea6eb"}),"here is the final code of the bot")," if you want to skip ahead."),Object(r.b)("h3",{id:"defining-bot-on-discord-and-adding-it-to-your-server"},"Defining bot on Discord and adding it to your server."),Object(r.b)("p",null,"Before we even start implementing the bot, we will tell Discord about it first, in order to obtain the neccessary credentials that we will use in our code, and we will add the bot to our server.\nThere are many tutorials already on how to do this, so I will keep it short."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to Discord Developer Portal, create a new Application -> I named it ",Object(r.b)("inlineCode",{parentName:"li"},"Wasp"),"."),Object(r.b)("li",{parentName:"ol"},'Go to the "Bot" part of Application "Settings" and add a new bot. I named it ',Object(r.b)("inlineCode",{parentName:"li"},"WaspBot"),"."),Object(r.b)("li",{parentName:"ol"},'On the "Bot" page of your freshly created bot, there is a "TOKEN" part -> create a mental note about it, we will need this later when running our bot.'),Object(r.b)("li",{parentName:"ol"},'Go to the "OAuth2" part of Application "Settings". Here we will define which permissions our bot will have.\nThis is done by checking the permissions we want to give it and then following the URL that will be generated based on our choices.',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Check the ",Object(r.b)("inlineCode",{parentName:"li"},"bot"),' under the "SCOPES" section.'),Object(r.b)("li",{parentName:"ul"},'Scroll down further to find the "BOT PERMISSIONS" section. There, check the ',Object(r.b)("inlineCode",{parentName:"li"},"Manage Roles"),", ",Object(r.b)("inlineCode",{parentName:"li"},"View Channels"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Read Message History"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"Send Messages"),"."),Object(r.b)("li",{parentName:"ul"},'Under the "SCOPES" section above, you will see a URL. Copy it into the browser and follow the steps to add the bot to your server.')))),Object(r.b)("h3",{id:"creating-a-basic-bot-in-nodejs"},"Creating a basic bot in NodeJS"),Object(r.b)("p",null,"In a directory where your code will be, create a new npm project with ",Object(r.b)("inlineCode",{parentName:"p"},"npm init")," -> set the entry point to ",Object(r.b)("inlineCode",{parentName:"p"},"bot.js")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"index.js"),". This will result in a ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file being generated."),Object(r.b)("p",null,"We will need one important dependency, ",Object(r.b)("inlineCode",{parentName:"p"},"discord.js"),", to make it easy to work with Discord's API.\nAdd it with ",Object(r.b)("inlineCode",{parentName:"p"},"npm install -S discord.js"),"."),Object(r.b)("p",null,"Now, create ",Object(r.b)("inlineCode",{parentName:"p"},"bot.js")," file next to ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," with following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="bot.js"',title:'"bot.js"'}),"const Discord = require('discord.js')\n\nconst BOT_TOKEN = process.env.BOT_TOKEN\n\nconst bot = new Discord.Client()\nbot.login(BOT_TOKEN)\n\nbot.on('ready', function (evt) {\n  console.log(`Logged in as: ${bot.user.tag}.`)\n})\n")),Object(r.b)("p",null,"This is it! Run"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"DISCORD_BOT=<TOKEN_OF_YOUR_DISCORD_BOT> node bot.js\n")),Object(r.b)("p",null,"and you should see output about successful login, in my case it was ",Object(r.b)("inlineCode",{parentName:"p"},"Logged in as: WaspBot#1234"),"."),Object(r.b)("h3",{id:"detecting-a-valid-introduction-from-a-member"},"Detecting a valid introduction from a member"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE"),": For the following part, I was using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://discord.js.org/#/"}),"Discord.js")," docs to figure out how to do it, so if you need more details on a specific step, check them out."),Object(r.b)("p",null,"Now is the moment to define exactly how we want the introduction process to go.\nSo, let's say that the correct way for new members to introduce themselves is by sending a message to the ",Object(r.b)("inlineCode",{parentName:"p"},"introductions")," channel that starts with ",Object(r.b)("inlineCode",{parentName:"p"},"!intro ")," and follows with at least 20 characters of text (to ensure the introduction is not too short).\n",Object(r.b)("inlineCode",{parentName:"p"},"!intro")," makes it easy for our bot to know when to act (in Discord, bot commands often start with ",Object(r.b)("inlineCode",{parentName:"p"},"!<something>"),")."),Object(r.b)("p",null,"Let's add the needed code to ",Object(r.b)("inlineCode",{parentName:"p"},"bot.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'title="bot.js"',title:'"bot.js"'}),"...\n\nconst INTRODUCTIONS_CHANNEL_ID = \"<YOU_WILL_HAVE_TO_FIND_THIS_ON_DISCORD_SERVER>\"\n\nbot.on('message', async msg => {\n  if (msg.content.startsWith('!intro ')) {\n    if (msg.channel.id.toString() !== INTRODUCTIONS_CHANNEL_ID) {\n      const introductionsChannelName =\n        msg.guild.channels.resolve(INTRODUCTIONS_CHANNEL_ID).name\n      return msg.reply(\n        `Please use !intro command in the ${introductionsChannelName} channel!`\n      )\n    }\n\n    const introMsg = msg.content.substring('!intro '.length).trim()\n    const minMsgLength = 20\n    if (introMsg.length < minMsgLength) {\n      return msg.reply(\n        `Please write introduction at least ${minMsgLength} characters long!`\n      )\n    }\n\n    return msg.reply(`Yay successful introduction!`)\n  }\n})\n")),Object(r.b)("p",null,"One thing to notice is that you will have to obtain the ID of the ",Object(r.b)("inlineCode",{parentName:"p"},"introductions")," channel and paste it in your code where I put the placeholder above.\nYou can find out this ID by going to your Discord server in the Discord app, right-clicking on the ",Object(r.b)("inlineCode",{parentName:"p"},"introductions")," channel, and clicking on ",Object(r.b)("inlineCode",{parentName:"p"},"Copy ID"),'. For this to work, you will first have to enable the "Developer Mode" (under "User Settings" > "Advanced").'),Object(r.b)("h3",{id:"removing-the-guest-role-upon-successful-introduction"},'Removing the "Guest" role upon successful introduction'),Object(r.b)("p",null,"What is missing is removing the ",Object(r.b)("inlineCode",{parentName:"p"},"Guest")," role upon successful introduction, so let's do that:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{4,24-35} title="bot.js"',"{4,24-35}":!0,title:'"bot.js"'}),"...\n\nconst INTRODUCTIONS_CHANNEL_ID = \"<YOU_WILL_HAVE_TO_FIND_THIS_ON_DISCORD_SERVER>\"\nconst GUEST_ROLE_ID = \"<YOU_WILL_HAVE_TO_FIND_THIS_ON_DISCORD_SERVER>\"\n\nbot.on('message', async msg => {\n  if (msg.content.startsWith('!intro ')) {\n    if (msg.channel.id.toString() !== INTRODUCTIONS_CHANNEL_ID) {\n      const introductionsChannelName =\n        msg.guild.channels.resolve(INTRODUCTIONS_CHANNEL_ID).name\n      return msg.reply(\n      `Please use !intro command in the ${introductionsChannelName} channel!`\n      )\n    }\n\n    const introMsg = msg.content.substring('!intro '.length).trim()\n    const minMsgLength = 20\n    if (introMsg.length < minMsgLength) {\n      return msg.reply(\n        `Please write introduction at least ${minMsgLength} characters long!`\n      )\n    }\n\n    const member = msg.guild.member(msg.author)\n    try {\n      if (member.roles.cache.get(GUEST_ROLE_ID)) {\n        await member.roles.remove(GUEST_ROLE_ID)\n        return msg.reply(\n          'Nice getting to know you! You are no longer a guest' +\n          ' and have full access, welcome!'\n        )\n      }\n    } catch (error) {\n      return msg.reply(`Error: ${error}`)\n    }\n  }\n})\n")),Object(r.b)("p",null,"Same as with the ID of the ",Object(r.b)("inlineCode",{parentName:"p"},"introductions")," channel, now you will also need to find out the ID of the ",Object(r.b)("inlineCode",{parentName:"p"},"Guest"),' role (which you should have created at some point).\nYou can do it by finding it in the server settings, under the list of roles, right-clicking on it, and then "Copy ID".'),Object(r.b)("p",null,"This is it! You can now run the bot with"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"DISCORD_BOT=<TOKEN_OF_YOUR_DISCORD_BOT> node bot.js\n")),Object(r.b)("p",null,"and if you assign yourself a ",Object(r.b)("inlineCode",{parentName:"p"},"Guest")," role on the Discord server and then type ",Object(r.b)("inlineCode",{parentName:"p"},"!intro Hi this is my introduction, I am happy to be here.")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"introductions")," channel, you should see yourself getting full access together with an appropriate message from your bot."),Object(r.b)("h3",{id:"deploying-the-bot"},"Deploying the bot"),Object(r.b)("p",null,"While there are many ways to deploy the Discord bot, I will shortly describe how we did it via Heroku."),Object(r.b)("p",null,"We created a Heroku app ",Object(r.b)("inlineCode",{parentName:"p"},"wasp-discord-bot"),' and set up the "Automatic deploys" feature on Heroku to automatically deploy every push to the ',Object(r.b)("inlineCode",{parentName:"p"},"production")," branch (our bot is on Github)."),Object(r.b)("p",null,"On Heroku, we set the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"DISCORD_BOT")," to the token of our bot."),Object(r.b)("p",null,"Finally, we added ",Object(r.b)("inlineCode",{parentName:"p"},"Procfile")," to our project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Procfile"',title:'"Procfile"'}),"worker: node bot.js\n")),Object(r.b)("p",null,"That is it! On every push to the ",Object(r.b)("inlineCode",{parentName:"p"},"production")," branch, our bot gets deployed."))}d.isMDXComponent=!0}}]);