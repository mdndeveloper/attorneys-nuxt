(window.webpackJsonp=window.webpackJsonp||[]).push([[15,9,13,14],{280:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-5"},[n("p",{staticClass:"working-with-subtext"},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam\n    cursus metus, at accumsan massa ornare id. Aliquam facilisis ex aliquet,\n    lacinia nunc at, semper nunc. Vivamus vel urna nec quam elementum\n    ultricies. Vivamus sed sem venenatis nibh lacinia imperdiet sit amet sit\n    amet ex. Nam vehicula venenatis odio, id feugiat libero gravida facilisis.\n    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per\n    inceptos himenaeos. Donec commodo ex vitae odio tincidunt sodales vel at\n    massa. Nulla facilisi. Etiam cursus varius urna, vel mattis sapien\n    venenatis at. "),n("br"),n("br"),t._v("Donec et eros eros. Phasellus arcu mi, hendrerit\n    eu nibh eu, condimentum iaculis sapien. Donec eu blandit elit, in ultrices\n    tellus. Maecenas ultricies bibendum sodales. Morbi in tincidunt eros.\n    Vivamus nec ipsum suscipit, sagittis libero eget, vehicula leo. Aliquam\n    erat volutpat. Donec auctor luctus diam, id finibus neque pellentesque\n    vitae. Duis pretium ut velit quis cursus. Aliquam vitae leo nec neque\n    luctus gravida. Nulla vestibulum, felis nec blandit lobortis, neque nisi\n    aliquam nunc, eget vehicula lectus augue interdum leo. Nam vestibulum a\n    sem id ornare. Praesent convallis mollis elementum."),n("br")]),t._v(" "),n("a",{staticClass:"button w-button learn-more attorney",attrs:{href:"#"}},[n("strong",[t._v("LEARN MORE")])])])}],!1,null,null,null);e.default=component.exports},281:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-4 consultation"},[n("div",{staticClass:"w-form"},[n("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form"}},[n("div",{staticClass:"w-row"},[n("p",{staticClass:"contact-description"},[t._v("SCHEDULE A CONSULTATION")]),t._v(" "),n("div",{staticClass:"contact-form-column-two w-col w-col-12"},[n("input",{staticClass:"w-input",attrs:{id:"name",type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"NAME"}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"email",type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"EMAIL",required:""}}),t._v(" "),n("input",{staticClass:"w-input",attrs:{id:"Phone",type:"tel",maxlength:"256",name:"Phone","data-name":"Phone",placeholder:"PHONE",required:""}}),t._v(" "),n("textarea",{staticClass:"textarea w-input",attrs:{placeholder:"MESSAGE",maxlength:"5000",rows:"6",name:"field","data-name":"Field"}}),t._v(" "),n("input",{staticClass:"button contact w-button today-button attorney-button",attrs:{type:"submit",value:"Submit","data-wait":"Please wait..."}})])])]),t._v(" "),n("div",{staticClass:"w-form-done"},[n("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),n("div",{staticClass:"w-form-fail"},[n("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])}],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var o=n(271),r=n.n(o),l=(n(272),n(273),{name:"Carousel",components:{VueSlickCarousel:r.a},data:function(){return{tab1:!0,tab2:!1,tab3:!1,tab4:!1,tab5:!1}},methods:{showPage:function(t){this.$refs.carousel.goTo(t),0===t?(this.tab1=!0,this.tab2=!1,this.tab3=!1,this.tab4=!1,this.tab5=!1,document.getElementById("carousel-item0").classList.add("w--current"),document.getElementById("carousel-item1").classList.remove("w--current"),document.getElementById("carousel-item2").classList.remove("w--current"),document.getElementById("carousel-item3").classList.remove("w--current"),document.getElementById("carousel-item4").classList.remove("w--current")):1===t?(this.tab1=!1,this.tab2=!0,this.tab3=!1,this.tab4=!1,this.tab5=!1,document.getElementById("carousel-item1").classList.add("w--current"),document.getElementById("carousel-item0").classList.remove("w--current"),document.getElementById("carousel-item2").classList.remove("w--current"),document.getElementById("carousel-item3").classList.remove("w--current"),document.getElementById("carousel-item4").classList.remove("w--current")):2===t?(this.tab1=!1,this.tab2=!1,this.tab3=!0,this.tab4=!1,this.tab5=!1,document.getElementById("carousel-item2").classList.add("w--current"),document.getElementById("carousel-item1").classList.remove("w--current"),document.getElementById("carousel-item0").classList.remove("w--current"),document.getElementById("carousel-item3").classList.remove("w--current"),document.getElementById("carousel-item4").classList.remove("w--current")):3===t?(this.tab1=!1,this.tab2=!1,this.tab3=!1,this.tab4=!0,this.tab5=!1,document.getElementById("carousel-item3").classList.add("w--current"),document.getElementById("carousel-item1").classList.remove("w--current"),document.getElementById("carousel-item2").classList.remove("w--current"),document.getElementById("carousel-item4").classList.remove("w--current"),document.getElementById("carousel-item0").classList.remove("w--current")):4===t&&(this.tab1=!1,this.tab2=!1,this.tab3=!1,this.tab4=!1,this.tab5=!0,document.getElementById("carousel-item4").classList.add("w--current"),document.getElementById("carousel-item1").classList.remove("w--current"),document.getElementById("carousel-item2").classList.remove("w--current"),document.getElementById("carousel-item3").classList.remove("w--current"),document.getElementById("carousel-item0").classList.remove("w--current"))}}}),c=n(40),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"working-with-section attorney wf-section"},[n("div",{staticClass:"tabs w-tabs",attrs:{"data-current":"WORKING WITH HOME BUYERS","data-easing":"ease-in-out","data-duration-in":"300","data-duration-out":"100"}},[n("div",{staticClass:"tabs-menu attorney w-tab-menu home-carousel desktop-view"},[n("a",{staticClass:"\n          tab-link-working-with-home-buyers\n          attorney\n          w-inline-block w-tab-link w--current\n        ",attrs:{id:"carousel-item0","data-w-tab":"WORKING WITH HOME BUYERS"},on:{click:function(e){return t.showPage(0)}}},[t._m(0)]),t._v(" "),n("a",{staticClass:"\n          tab-link-working-with-lenders\n          attorney\n          w-inline-block w-tab-link\n        ",attrs:{id:"carousel-item1","data-w-tab":"WORKING WITH LENDERS"},on:{click:function(e){return t.showPage(1)}}},[t._m(1)]),t._v(" "),n("a",{staticClass:"\n          tab-link-working-with-realtors\n          attorney\n          w-inline-block w-tab-link\n        ",attrs:{id:"carousel-item2","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(2)}}},[t._m(2)]),t._v(" "),n("a",{staticClass:"\n          tab-link-working-with-realtors\n          attorney\n          w-inline-block w-tab-link\n        ",attrs:{id:"carousel-item3","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(3)}}},[t._m(3)]),t._v(" "),n("a",{staticClass:"\n          tab-link-working-with-realtors\n          attorney\n          w-inline-block w-tab-link\n        ",attrs:{id:"carousel-item4","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(4)}}},[t._m(4)])]),t._v(" "),n("div",{staticClass:"tabs-menu attorney w-tab-menu home-carousel mobile-view"},[n("div",{staticClass:"mobile-carousel-home"},[n("a",{attrs:{id:"carousel-item0","data-w-tab":"WORKING WITH HOME BUYERS"},on:{click:function(e){return t.showPage(0)}}},[t._m(5)]),t._v(" "),n("a",{attrs:{id:"carousel-item1","data-w-tab":"WORKING WITH LENDERS"},on:{click:function(e){return t.showPage(1)}}},[t._m(6)]),t._v(" "),n("a",{attrs:{id:"carousel-item4","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(4)}}},[t._m(7)]),t._v(" "),n("a",{attrs:{id:"carousel-item2","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(2)}}},[t._m(8)]),t._v(" "),n("a",{attrs:{id:"carousel-item3","data-w-tab":"WORKING WITH REALTORS"},on:{click:function(e){return t.showPage(3)}}},[t._m(9)])])]),t._v(" "),n("div",{staticClass:"carousel-main desktop-view"},[n("VueSlickCarousel",{ref:"carousel",staticClass:"w-tab-content",attrs:{fade:!0}},[n("div",{staticClass:"w-tab-pane w--tab-active",attrs:{"data-w-tab":"WORKING WITH HOME BUYERS"}},[n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n                Criminal"),n("br"),t._v("Defense\n              ")])]),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{staticClass:"w-tab-pane",attrs:{"data-w-tab":"WORKING WITH LENDERS"}},[n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title",staticStyle:{"font-size":"50px"}},[t._v("\n                Immigration\n              ")])]),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{staticClass:"w-tab-pane",attrs:{"data-w-tab":"WORKING WITH REALTORS"}},[n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n                Personal"),n("br"),t._v("Injury\n              ")])]),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{staticClass:"w-tab-pane",attrs:{"data-w-tab":"WORKING WITH REALTORS 2"}},[n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n                Adoption\n              ")])]),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{staticClass:"w-tab-pane",attrs:{"data-w-tab":"WORKING WITH REALTORS 3"}},[n("div",{staticClass:"workingwithtextsection w-row"},[n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n                Maritime\n              ")])]),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)])]),t._v(" "),n("div",{staticClass:"carousel-overlay"})],1),t._v(" "),n("div",{staticClass:"carousel-main mobile-view w-tab-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab1,expression:"tab1"}],staticClass:"w-tab-pane w--tab-active"},[n("div",{staticClass:"workingwithtextsection w-row"},[t._m(10),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab2,expression:"tab2"}],staticClass:"w-tab-pane w--tab-active"},[n("div",{staticClass:"workingwithtextsection w-row"},[t._m(11),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab3,expression:"tab3"}],staticClass:"w-tab-pane w--tab-active"},[n("div",{staticClass:"workingwithtextsection w-row"},[t._m(12),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab4,expression:"tab4"}],staticClass:"w-tab-pane w--tab-active"},[n("div",{staticClass:"workingwithtextsection w-row"},[t._m(13),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.tab5,expression:"tab5"}],staticClass:"w-tab-pane w--tab-active"},[n("div",{staticClass:"workingwithtextsection w-row"},[t._m(14),t._v(" "),n("AttorneysHomeCarouselDetailSection"),t._v(" "),n("AttorneysConsultationSection")],1)]),t._v(" "),n("div",{staticClass:"carousel-overlay"})])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading"},[t._v("CRIMINAL DEFENSE "),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-block-2 tabs-heading"},[t._v("\n          IMMIGRATION"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading"},[t._v("PERSONAL INJURY"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading"},[t._v("ADOPTION"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading"},[t._v("MARITIME"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading-mobile"},[t._v("\n            CRIMINAL DEFENSE "),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-block-2 tabs-heading-mobile"},[t._v("\n            IMMIGRATION"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading-mobile"},[t._v("MARITIME"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading-mobile"},[t._v("\n            PERSONAL INJURY"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-heading-mobile"},[t._v("ADOPTION"),n("strong")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n              Criminal"),n("br"),t._v("Defense\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n              Immigration\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("\n              Personal"),n("br"),t._v("Injury\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("Adoption")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-3"},[n("h1",{staticClass:"working-with-header attorney home-title"},[t._v("Maritime")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysHomeCarouselDetailSection:n(280).default,AttorneysConsultationSection:n(281).default})},292:function(t,e,n){"use strict";n.r(e);var o=n(40),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("AttorneysHomeCarousel"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"wcu-image-one-attr w-col w-col-6 mobile-view"}),t._v(" "),n("div",{staticClass:"attorneys-meet-container"},[n("div",{staticClass:"w-row"},[t._m(3),t._v(" "),n("div",{staticClass:"w-col w-col-6 attr-home-sidebar"},[n("Carousel-meet")],1)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-hero home attorney wf-section"},[n("div",{staticClass:"overlay-section attorney-home w-container"},[n("img",{staticClass:"desktop-view",attrs:{src:"assets/images/Logo Icon.png",loading:"lazy",alt:""}}),t._v(" "),n("h1",{staticClass:"hero-text desktop-view"},[t._v("\n        Experienced and Local"),n("br"),t._v("Attorneys Here for You\n      ")]),t._v(" "),n("h1",{staticClass:"hero-text mobile-view",staticStyle:{"margin-left":"20px"}},[t._v("\n        Experienced and Local Attorneys Here for You\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why-choose-us attorney wf-section",staticStyle:{position:"relative","align-items":"center"}},[n("div",{staticClass:"wcu-images attorney w-row",staticStyle:{"max-width":"1230px"}},[n("div",{staticClass:"wcu-image-one-attr w-col w-col-6 desktop-view"}),t._v(" "),n("div",{staticClass:"wcu-image-two-attr w-col w-col-6"})]),t._v(" "),n("h1",{staticClass:"why-choose-us-title-container attorney",staticStyle:{position:"absolute",bottom:"20%",right:"0","font-size":"70px"}},[t._v("\n      WHO WE ARE\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-grey attorney wf-section"},[n("div",{staticClass:"about-grey-text-section attorney w-row"},[n("div",{staticClass:"w-col w-col-7"},[n("p",{staticClass:"about-grey-text attorney",staticStyle:{width:"90%"}},[t._v("\n          At the law office of Gabe A. Duhon, LLC, attorneys Gabe A. Duhon and\n          Wyman E. Bankston are proud to serve the citizens of Abbeville,\n          Livingston and the rest of Acadiana with personalized local service\n          since 2006."),n("strong",[n("br")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-5"},[n("p",{staticClass:"working-with-subtext attr"},[t._v("\n          We understand when faced with a legal situation it can be a\n          stressful and confusing time and may leave you wondering if you need\n          an atorney. Don't let the greed and callous demeanor of other law\n          firms deter you from seeking the professional legal services you\n          deserve. Contact Gabe A. Duhon, LLC today, we can serve all of your\n          legal needs.\n          "),n("br"),n("br"),t._v("Our experienced lawyers practices a variety of legal\n          services and can navigate through any complex and stressful legal\n          setting. Whether you are seeking legal advice or representation for\n          auto accidents, personal injury, real estate, criminal defense,\n          family law, or willls, you can feel confident that our attorneys\n          will have your best interests in mind."),n("br")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-col w-col-6"},[n("p",{staticClass:"meet-description"},[t._v("\n          When facing any legal situation, you can feel sure that our\n          experienced attorneys will always be working to help you. Our\n          attorneys Gabe A. Duhon and Wyman E. Bankston are proud to be an\n          active member in the community, with membershop and volunteer\n          experience in many different programs.\n        ")]),t._v(" "),n("div",{staticClass:"w-col w-col-6 w-col-medium-3 spec01"},[n("img",{staticClass:"circle-image",attrs:{src:"assets/images/person1.046db6ca.png",loading:"lazy",alt:"",width:"50%"}}),t._v(" "),n("p",{staticClass:"about-grey-text title meet"},[t._v("\n            Gabe A. Duhon"),n("strong",[n("br")])]),t._v(" "),n("p",{staticClass:"about-grey-text title sub-title meet"},[t._v("\n            attorney/owner"),n("strong",[n("br")])])]),t._v(" "),n("div",{staticClass:"w-col w-col-6 w-col-medium-3 second-image"},[n("img",{staticClass:"circle-image",attrs:{src:"assets/images/person2.b2145e19.png",loading:"lazy",alt:"",width:"50%"}}),t._v(" "),n("p",{staticClass:"about-grey-text title meet"},[t._v("\n            Kimberly K. Souriyakhamphong"),n("strong",[n("br")])]),t._v(" "),n("p",{staticClass:"about-grey-text title sub-title meet"},[t._v("\n            associate attorney"),n("strong",[n("br")])]),t._v(" "),n("a",{staticClass:"button w-button desktop-view",staticStyle:{background:"#892432",position:"absolute",bottom:"-110px",right:"150px"},attrs:{href:"#"}},[n("strong",[t._v("MEET OUR ATTORNEYS")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AttorneysHomeCarousel:n(283).default})}}]);