(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{410:function(t,e,o){"use strict";o.r(e);o(15),o(84);var n=o(27),l={data:function(){return{isModalOpen:!1,offsetTop:null}},mounted:function(){var t=this;this.offsetTop=document.body.scrollTop,n.a.$on("openModalInfos",(function(){t.fixedBody(),t.openModal()})),n.a.$on("closeModalInfos",(function(){t.fluentBody(),t.closeModal()}))},beforeDestroy:function(){n.a.$off("openModalInfos"),n.a.$off("closeModalInfos")},methods:{openDetail:function(){this.offsetTop=window.pageYOffset.toString(),n.a.$emit("openModalInfos")},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1},fixedBody:function(){var body=document.body;body.style.overflowY="hidden",body.style.height="100vh",body.style.right="0",body.style.left="0",body.style.top=-window.scrollY+"px",body.style.position="fixed"},fluentBody:function(){var body=document.body,t=body.style.top;body.style.position="static",body.style.height="100%",body.style.overflowY="",body.style.top="",window.scrollTo(0,-1*parseInt(t||"0"))}}},r=o(25),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"w-full",attrs:{id:"services"}},[e("h2",{staticClass:"font-semibold text-xl"},[t._v("Qu'est ce qu'Apical ?")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"flex flex-col sm:flex-row flex-wrap justify-around items-center my-4"},[e("div",{staticClass:"w-52 h-52 my-2 cursor-pointer",on:{click:t.openDetail}},[e("ActivityCard",{attrs:{"img-src":"flatTree.png","img-alt":"Un arbre"}},[e("strong",[t._v("Taille")]),t._v(" & "),e("strong",[t._v("élagage")])])],1),t._v(" "),e("div",{staticClass:"w-52 h-52 my-2 cursor-pointer",on:{click:t.openDetail}},[e("ActivityCard",{attrs:{"img-src":"souche.png","img-alt":"Un arbre"}},[e("strong",[t._v("Abattage")])])],1),t._v(" "),e("div",{staticClass:"w-52 h-52 my-2 cursor-pointer",on:{click:t.openDetail}},[e("ActivityCard",{attrs:{"img-src":"broyeur.png","img-alt":"Un arbre"}},[e("strong",[t._v("Rémanents")])])],1)]),t._v(" "),t._m(1),t._v(" "),t.isModalOpen?e("ModalInfos"):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"center my-2 text-justify"},[t._v("\n    Je propose mes services d'"),e("em",[t._v("élagage")]),t._v(", de "),e("em",[t._v("taille")]),t._v(" et d'"),e("em",[t._v("abattage")]),t._v("\n    de vos arbres sur toutes les communes de\n    "),e("strong",[t._v("Fouesnant")]),t._v(", "),e("strong",[t._v("Bénodet")]),t._v(",\n    "),e("strong",[t._v("Combrit")]),t._v(", "),e("strong",[t._v("Gouesnach")]),t._v(" et\n    "),e("strong",[t._v("Quimper")]),t._v(", que vous soyez un professionel ou un\n    particulier.\n  ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"center my-2 text-justify"},[t._v("\n    Pour toutes demandes de renseignements ou de devis n'hésitez pas à me\n    "),e("a",{staticClass:"underline text-cyan-600",attrs:{href:"#contact"}},[t._v("contacter")]),t._v(".\n  ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ActivityCard:o(411).default,ModalInfos:o(412).default})}}]);