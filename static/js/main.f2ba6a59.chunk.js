(this.webpackJsonpts_react_cv=this.webpackJsonpts_react_cv||[]).push([[0],{35:function(e,t,a){e.exports=a(53)},40:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(18),l=(a(40),a(3)),r=a(4),o=a(6),s=a(5),m=a(56),u=a(17),d=a(55),p=a(15),g=a(57),h=a(31),v=a(10),E=[{title:"Home",path:"/",icon:v.h,component:"Home"},{title:"About",path:"/about",icon:v.n,component:"About"},{title:"Resume",path:"/resume",icon:v.a,component:"Resume"}],f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,{className:"navigation__mainNav col-36 col-md-12"},E.map((function(e,t){return c.a.createElement(h.a,{className:"navigation__item",key:t},c.a.createElement(u.c,{className:"nav-link navigation__link",activeClassName:"active disabled",to:e.path,id:e.component,exact:!0,strict:!0},c.a.createElement("span",{className:"navigation__icon"},c.a.createElement(p.a,{icon:e.icon})),c.a.createElement("span",{className:"navigation__title"},e.title)))})))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"col-md-18 col-lg-12 d-none d-md-block"},c.a.createElement("img",{src:"/img/profile.jpg",alt:"B\xf9i Thanh S\u01a1n",className:"navigation__photo ",width:"60",height:"60"}),c.a.createElement("h1",{className:"navigation__name d-none d-md-block"},"B\xf9i Thanh S\u01a1n")),c.a.createElement(f,null))}}]),a}(n.Component),_=a(8),y=a(16),N=a.n(y),k="T\xe2n B\xecnh, HCMC",S="+84909092025",j="thanhson201@gmail.com",C={contact:{address:k,phone:S,email:j,birthday:"1991-01-20",profilePhoto:"https://github.com/sonck201/sonck201.github.io/raw/master/public/images/profile.jpg"},desc:{title:"I am a B\xf9i Thanh S\u01a1n",content:["Experienced Web Design Development with a demonstrated history of working in the information technology and services industry.","Skilled in Search Engine Optimization (SEO), Online Advertising, Cascading Style Sheets (CSS), PHP, and HTML.","Strong information technology professional with a Bachelor degree focused in Information Technology from Kent International."]},spec:[{title:"Age",content:parseInt(N()().subtract(1991,"years").format("Y"))},{title:"Address",content:k},{title:"Email",content:j},{title:"Phone",content:S},{title:"Skype",content:"thanhson_it201"},{title:"Freelance",content:"Available"}],service:[{icon:v.f,title:"Web design",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."},{icon:v.d,title:"Photography",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."},{icon:v.i,title:"Creativity",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."}],funFact:[{icon:v.m,title:"Happy clients",text:Math.ceil(8*N()().diff(N()([2013,1,1]),"years"))},{icon:v.e,title:"Working hours",text:8*N()().diff(N()([2013,1,1]),"days")},{icon:v.b,title:"Award won",text:N()().diff(N()([1991,1,1]),"years")},{icon:v.l,title:"Coffee consumed",text:3*N()().diff(N()([2011,1,1]),"days")}]},w=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"pagePdf__section ".concat(this.props.className)},this.props.children)}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(w,{className:"pagePdf__contact"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-36 col-lg-9"},c.a.createElement("h2",{className:"pagePdf__subTitle"},"Contact")),c.a.createElement("div",{className:"col-36 col-lg-27 row"},c.a.createElement("div",{className:"col-18 mb-3"},c.a.createElement(p.a,{icon:v.j,fixedWidth:!0}),c.a.createElement("span",{className:"ml-1"},C.contact.address)),c.a.createElement("div",{className:"col-18 mb-3"},c.a.createElement(p.a,{icon:v.k,fixedWidth:!0}),c.a.createElement("a",{href:"tel:".concat(C.contact.phone),className:"ml-1"},C.contact.phone)),c.a.createElement("div",{className:"col-18"},c.a.createElement(p.a,{icon:v.c,fixedWidth:!0}),c.a.createElement("span",{className:"ml-1"},C.contact.birthday)),c.a.createElement("div",{className:"col-18"},c.a.createElement(p.a,{icon:v.g,fixedWidth:!0}),c.a.createElement("a",{href:"mailto:".concat(C.contact.email),className:"ml-1"},C.contact.email)))))}}]),a}(n.Component),P=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(w,{className:"pagePdf__header"},c.a.createElement("h1",{className:"pagePdf__title"},"B\xf9i Thanh S\u01a1n"))}}]),a}(n.Component),x=[{name:"Donation",description:"A non profit service for Japanese who want to make donation to charity project",teamSize:8,position:"Technical support",responsibility:["Analyze & mentor members in technical for current system","Design workflow for new feature/request","Support technical"],technology:["NodeJS","Typescript","NuxtJS","Domain driven design","CI/CD","PCF - PaaS","Micro services"]},{name:"GYAO",description:"An entertainment video/clip for japanese",teamSize:10,position:"Technical lead",responsibility:["Development","Review code","Optimize code","Bug fixing","Workflow design","Migration"],technology:["PHP","NodeJS","Typescript","AWS S3 & SQS","BrightCove","Batching","Cassandra","Solr","CI/CD","PCF - PaaS","K8s job/cron","FaaS","DBaaS"]},{name:"Partner",description:"A dating service for helping people get closer",teamSize:12,position:"SSE",responsibility:["Development","Maintenance","Review code","Optimize code","Bug fixing","Automation testing","Migrate current system"],technology:["Cake - Slim Frameworks","Rest API","GULP","Oracle","Docker","Splunk - Forwarder","AWS - S3","Redis","Solr"]},{name:"Middle dream",description:"Management system for japanese language school",teamSize:15,position:"Developer",responsibility:["Development","Review code","Optimize code","Bug fixing"],technology:["CI & MySQL","AWS"]},{name:"Premium water",description:"Management system for drinking water company",teamSize:15,position:"Developer",responsibility:["Development","Review code","Optimize code","Bug fixing"],technology:["CI & MySQL","AWS"]},{name:"ERP",description:"System for managing CRM, contract, sale",teamSize:3,position:"Developer",responsibility:["Analysis and design","Development","Review code","Optimize code","Bug fixing"],technology:["Zend 1"]},{name:"Multi-level system management",description:"Application for managing member, point, salary, event",teamSize:4,position:"Developer",responsibility:["Analysis and design","Development","Review code","Optimize code","Bug fixing"],technology:["Zend 1","Batching"]},{name:"Ads network system",description:"An online advertising network which connects advertisers to websites that want to host advertisements",teamSize:6,position:"Developer",responsibility:["Analysis and design","Development","Review code","Optimize code","Bug fixing"],technology:["CI Framework","PHP & MySQL & MongoDB","Static resource caching"]}],A=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(w,{className:"pagePdf__project"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-36 col-lg-9 mb-3 mb-lg-0"},c.a.createElement("h2",{className:"pagePdf__subTitle"},"Project")),c.a.createElement("div",{className:"col-36 col-lg-27 mb-3"},this.getGroupCardContent())))}},{key:"getGroupCardContent",value:function(){var e=this;return c.a.createElement("div",{id:"pagePdf__projectContent"},x.map((function(t,a){return e.getSimpleContent(t,a)})))}},{key:"getSimpleContent",value:function(e,t){return c.a.createElement("div",{className:"pagePdf__projectContentItem",key:t},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},e.name),c.a.createElement("div",{className:"card-body"},c.a.createElement("table",{className:"table table-border table-sm w-100"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Description"),c.a.createElement("td",null,e.description)),c.a.createElement("tr",null,c.a.createElement("th",null,"Size"),c.a.createElement("td",null,e.teamSize)),c.a.createElement("tr",null,c.a.createElement("th",null,"Position"),c.a.createElement("td",null,e.position)),c.a.createElement("tr",null,c.a.createElement("th",null,"Responsibilities"),c.a.createElement("td",null,c.a.createElement("ul",{className:"row"},this.getListItem(e.responsibility)))),c.a.createElement("tr",null,c.a.createElement("th",null,"Technologies"),c.a.createElement("td",null,c.a.createElement("ul",{className:"row"},this.getListItem(e.technology)))))))))}},{key:"getListItem",value:function(e){return e.map((function(e,t){return c.a.createElement("li",{key:t,className:"col-md-12"},e)}))}}]),a}(n.Component),T=[{title:"Experience",content:[">6 years of experience in web development","Good at problem solving, team working, supporting and sharing in team","Linux server","PHP Framework: Zend 1, CodeIgniter, Laravel, Lumen, Cake, Slim","JAVA Spring boot","NodeJS, Express, Socket IO, React, NextJS, VueJS, NuxtJS, Typescript","HTML5/CSS3, javascript/jQuery, Bootstrap 3/4, SASS, LESS","Webpack, Laravel mix, GULP","Chrome extension","GIT & coding review","Elastic search, Solr","Screwdriver, Concourse, CircleCI","Pivotal cloud foundry :: PaaS, Docker - Kubernetes(K8s) :: CaaS - FaaS - DBaaS","Interviewer"]},{title:"Skill",content:["Agile - Waterfall - JIRA - Redmine - Confluence","Good sense of teamwork and high responsibility","Good testing skills, ability to test the completed features for high quality","Strong debugging and problem-solving skills","Good at reading & writing skills in English","Excitement for the latest trends in web application design","Interest to learn more about new languages, frameworks, technical"]},{title:"Plus",content:["Ability to give training to junior/fresher developer","Parallel working with internal and external teams","Google API","AWS","Facebook app","Joomla, Wordpress","PS, AI","Responsive & Adaptive design","SEO","BEM","12 factors app"]}],R=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(w,{className:"pagePdf__qualification"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-36 col-lg-9"},c.a.createElement("h2",{className:"pagePdf__subTitle"},"Qualification")),c.a.createElement("div",{className:"col-36 col-lg-27"},this.renderQualificationBlock())))}},{key:"renderQualificationBlock",value:function(){var e=this;return T.map((function(t,a){return c.a.createElement("div",{className:"itemQualification",key:a},c.a.createElement("h4",{className:"itemQualification__title mt-3 mt-lg-0"},t.title),c.a.createElement("ul",null,e.renderQualificationItem(t)))}))}},{key:"renderQualificationItem",value:function(e){return e.content.map((function(e,t){return c.a.createElement("li",{key:t},e)}))}}]),a}(n.Component),D={education:[{time:"2012",title:"Zend Framework Certificate",subTitle:"Nhat Nghe Center",description:""},{time:"2009 \u2014 2011",title:"Advanced Diploma of Multimedia",subTitle:"Kent International College",description:""},{time:"2008 \u2014 2009",title:"English course",subTitle:"Kent International College",description:""}],experience:[{title:"Technical lead",subTitle:"TechBase",time:"2017-01 \u2014 Present",description:["Maintenance projects","Frontend & Backend developer","Technical support","Interviewer","Seminar/Sharing technical","Research & Apply & Replace current technologies with latest & modern one","Migrate current system to cloud environment (CaaS, FaaS, PaaS, DBaaS, Kubernetes job/cron)"]},{title:"",subTitle:"Freelancer",time:"2015-02 \u2014 2017-01",description:[]},{title:"Web developer",subTitle:"Adtop Co., JSC",time:"2013-03 \u2014 2015-02",description:["Support, deploy, upgrade for all projects","Maintenance projects"]},{title:"Coder & Designer",subTitle:"Wisdom Co., Ltd",time:"2009-10 \u2014 2011-02",description:[]}],skill:[{title:"HTML",percentage:90},{title:"CSS",percentage:90},{title:"Javascript",percentage:80},{title:"PHP",percentage:90},{title:"NodeJS",percentage:75},{title:"Typescript",percentage:75},{title:"React/NextJS",percentage:75},{title:"VueJS/NuxtJS",percentage:75},{title:"JAVA Spring Boot",percentage:50},{title:"Linux",percentage:70},{title:"Git & Coding review",percentage:80},{title:"Search full text",percentage:75},{title:"CI/CD :: CircleCI Screwdriver Concourse",percentage:65},{title:"PCF :: PaaS, Docker :: CaaS, OpenWhisk :: FaaS, DBaaS",percentage:75},{title:"Agile - Waterfall - JIRA - Redmine - Confluence",percentage:85}]},I=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(w,{className:"pagePdf__work"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-36 col-lg-9"},c.a.createElement("h2",{className:"pagePdf__subTitle"},"Work experience")),c.a.createElement("div",{className:"col-36 col-lg-27 mb-3"},this.getGroupCardContent())))}},{key:"getGroupCardContent",value:function(){var e=this;return c.a.createElement("div",{className:"pagePdf__workContent"},D.experience.map((function(t,a){return e.getSimpleContent(t,a)})))}},{key:"getSimpleContent",value:function(e,t){return c.a.createElement("div",{className:"pagePdf__workContentItem",key:t},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body pagePdf__workInfo"},c.a.createElement("div",{className:"card-title pagePdf__workTitle"},c.a.createElement("div",{className:"pagePdf__workCompanyName"},e.subTitle),c.a.createElement("div",{className:"pagePdf__workCompanyPosition"},e.title),c.a.createElement("div",{className:"pagePdf__workDate d-none d-sm-block float-right"},e.time)),c.a.createElement("ul",null,e.description.map((function(e,t){return c.a.createElement("li",{key:t},e)}))))))}}]),a}(n.Component),B=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{id:"pagePdf",className:"pagePdf pagePdf__container container px-3 px-sm-5"},c.a.createElement(P,null),c.a.createElement(O,null),c.a.createElement(R,null),c.a.createElement(I,null),c.a.createElement(A,null))}},{key:"componentDidMount",value:function(){var e,t,a,n=String(null===(e=document.querySelector(".content__page"))||void 0===e?void 0:e.innerHTML);null===(t=document.querySelector("#mainNavigation"))||void 0===t||t.remove(),null===(a=document.querySelector("#mainContent"))||void 0===a||a.remove(),document.querySelector("#root").innerHTML=n,document.body.setAttribute("id","pagePdf")}}]),a}(n.Component),M=a(26),F=a(59),W=a(58),J=a(33),L=a.n(J),H=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"page page--bgWhite pageAbout"},c.a.createElement("h1",{className:"page__title pageAbout__title"},c.a.createElement("span",null,"About me"),c.a.createElement("div",{className:"page__subTitle"},c.a.createElement("span",null,"Full-stack"),c.a.createElement("span",null,"PHP"),c.a.createElement("span",null,"NodeJS"),c.a.createElement("span",null,"VueJS"),c.a.createElement("span",null,"React"))),c.a.createElement("section",{className:"page__section pageAbout__section"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-36 col-md-18 col-lg-12"},c.a.createElement("img",{src:"/img/profile.jpg",alt:"B\xf9i Thanh S\u01a1n",className:"pageAbout__photo img-fluid",width:"100%",height:"100%"})),c.a.createElement("div",{className:"col-36 mt-5 col-md-18 mt-md-0 col-lg-12 pageAbout__desc"},c.a.createElement("h3",null,C.desc.title),this.renderDesc()),c.a.createElement("div",{className:"col-36 mt-5 col-md-36 mt-md-5 col-lg-12 mt-lg-0 pageAbout__spec"},this.renderSpec()))),c.a.createElement("section",{className:"page__section pageAbout__section pageAbout__sectionService"},c.a.createElement("h3",{className:"page__heading"},"Services"),c.a.createElement("div",{className:"row"},this.renderService())),c.a.createElement("section",{className:"page__section pageAbout__section pageAbout__sectionFunFact mb-lg-5"},c.a.createElement("h3",{className:"page__heading"},"Fun fact"),c.a.createElement("div",{className:"row"},this.renderFunFact())))}},{key:"renderDesc",value:function(){return C.desc.content.map((function(e,t){return c.a.createElement("p",{key:t},e)}))}},{key:"renderSpec",value:function(){var e=this;return C.spec.map((function(t,a){return c.a.createElement("dl",{className:"row",key:a},c.a.createElement("dt",{className:"col-12"},c.a.createElement("div",{className:"dt"},t.title)),c.a.createElement("dd",{className:"col-24"},c.a.createElement("div",{className:"dd"},e.reGenerateSpec(t))))}))}},{key:"reGenerateSpec",value:function(e){var t;switch(e.title){case"Email":t=c.a.createElement("a",{href:"mailto:".concat(e.content,"?subject=").concat(encodeURIComponent("Hello from github Iamck CV"))},e.content);break;case"Phone":t=c.a.createElement("a",{href:"tel:".concat(e.content)},e.content);break;case"Skype":t=c.a.createElement("a",{href:"skype:".concat(e.content,"?chat")},e.content);break;default:t=e.content}return t}},{key:"renderService",value:function(){return C.service.map((function(e,t){return c.a.createElement("div",{className:"col-36 col-lg-12 card-wrapper mb-3",key:t},c.a.createElement("div",{className:"card ".concat(t%2===0?"":"bg__whiteSmoke")},c.a.createElement(p.a,{icon:e.icon,className:"card-img-top"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title m-0"},e.title),c.a.createElement("div",{className:"card-text d-none"},e.text))))}))}},{key:"renderFunFact",value:function(){return C.funFact.map((function(e,t){return c.a.createElement("div",{className:"col-36 col-lg-18 col-xl-9 card-wrapper mb-".concat(3===t?"0":"3"),key:t},c.a.createElement("div",{className:"card ".concat(t%2===0?"bg__whiteSmoke":"")},c.a.createElement(p.a,{icon:e.icon,className:"card-img-top"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},e.title),c.a.createElement("div",{className:"card-text"},c.a.createElement(L.a,{delay:2,end:e.text,duration:5,separator:",",decimals:0,decimal:"."})))))}))}}]),a}(n.Component),z=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Contact"))}}]),a}(n.Component),G=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"page pageHome"},c.a.createElement("div",{className:"pageHome__block"},c.a.createElement("h1",{className:"pageHome__name m-0 p-0"},"B\xf9i Thanh S\u01a1n"),c.a.createElement("div",{className:"pageHome__jobTitle"},"Full-stack developer")))}}]),a}(n.Component),Q=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Project"))}}]),a}(n.Component),q={Home:G,About:H,Resume:function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"page page--bgWhite pageResume"},c.a.createElement("h1",{className:"page__title pageResume__title"},c.a.createElement("span",null,"Resume"),c.a.createElement("div",{className:"page__subTitle"},c.a.createElement("span",null,"+6 years experience"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-36 col-md-18 col-lg-12"},c.a.createElement("h3",{className:"page__heading"},"Education"),c.a.createElement("div",{className:"pageResume__timeline"},this.renderEducation())),c.a.createElement("div",{className:"col-36 col-md-18 col-lg-12"},c.a.createElement("h3",{className:"page__heading"},"Experience"),c.a.createElement("div",{className:"pageResume__timeline"},this.renderExperience())),c.a.createElement("div",{className:"col-36 col-md-36 col-lg-12"},c.a.createElement("h3",{className:"page__heading"},"Skills"),c.a.createElement("div",{className:"pageResume__skill"},this.renderSkill())),c.a.createElement("div",{className:"col-36 my-3 text-center"},c.a.createElement(u.b,{to:"/pdf",target:"_blank",className:"btn btn-outline-primary"},"Download CV"))))}},{key:"renderEducation",value:function(){return D.education.map((function(e,t){return c.a.createElement("div",{className:"pageResume__timelineItem",key:t},c.a.createElement("div",{className:"pageResume__timelineTime"},e.time),c.a.createElement("div",{className:"pageResume__timelineTitle"},e.title),c.a.createElement("div",{className:"pageResume__timelineSubTitle"},e.subTitle),c.a.createElement("div",{className:"pageResume__timelineDesc"},e.description))}))}},{key:"renderExperience",value:function(){return D.experience.map((function(e,t){var a;return a="string"===typeof e.description?c.a.createElement("li",null,e.description):e.description.map((function(e,t){return c.a.createElement("li",{key:t},e)})),c.a.createElement("div",{className:"pageResume__timelineItem",key:t},c.a.createElement("div",{className:"pageResume__timelineTime"},e.time),c.a.createElement("div",{className:"pageResume__timelineTitle"},e.title),c.a.createElement("div",{className:"pageResume__timelineSubTitle"},e.subTitle),c.a.createElement("ul",{className:"pageResume__timelineDesc"},a))}))}},{key:"renderSkill",value:function(){return D.skill.map((function(e,t){var a=e.percentage+5*Math.random();return c.a.createElement("div",{className:"pageResume__skillItem",key:t},c.a.createElement("div",{className:"pageResume__skillTitle"},e.title),c.a.createElement("div",{className:"progress pageResume__skillProgress"},c.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated pageResume__skillProgressBar",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,style:{width:"".concat(a,"%")}})))}))}}]),a}(n.Component),Project:Q,Contact:z},K=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(F.a,{className:"page__container clearfix"},c.a.createElement(W.a,{key:this.props.location.key,classNames:"page__transition",timeout:300},c.a.createElement(_.d,{location:this.props.location},E.map((function(e,t){return c.a.createElement(_.b,{exact:!0,key:t,path:e.path,component:q[e.component]})})),c.a.createElement(_.a,{from:"/*",to:"/"}))))}},{key:"componentDidMount",value:function(){M.a.initialize("UA-170116442-1"),M.a.pageview(window.location.pathname+window.location.search)}}]),a}(n.Component),V=Object(_.g)(K),U=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(_.d,null,c.a.createElement(_.b,{path:"/pdf",component:B}),c.a.createElement(_.b,{path:"*"},c.a.createElement(V,null)))}}]),a}(n.Component),Z=(a(52),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("main",{className:"content",id:"mainContent"},c.a.createElement(m.a,{fluid:!0},c.a.createElement("div",{className:"content__page"},c.a.createElement(U,null)))),c.a.createElement("nav",{className:"navigation",id:"mainNavigation"},c.a.createElement(m.a,{fluid:!0},c.a.createElement(b,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=document.getElementById("root");Y.hasChildNodes()?Object(i.hydrate)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null)),Y):Object(i.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null)),Y),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f2ba6a59.chunk.js.map