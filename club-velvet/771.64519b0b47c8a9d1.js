"use strict";(self.webpackChunkclub_velvet=self.webpackChunkclub_velvet||[]).push([[771],{3771:(F,m,s)=>{s.r(m),s.d(m,{ClientModule:()=>D});var t=s(1571),l=s(322);let M=(()=>{class o{constructor(){document.body.className="welcome-bg"}ngOnInit(){}ngOnDestroy(){document.body.className=""}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-base"]],decls:6,vars:0,consts:[[1,"container","mt-5","py-3"],[1,"text-center","title","ff-kalam"],[1,"text-center","description"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"VELVET CLUB"),t.qZA(),t.TgZ(3,"h5",2),t._uU(4," Donde tus placeres tienen beneficio \u{1f609} "),t.qZA()(),t._UZ(5,"router-outlet"))},dependencies:[l.lC],styles:[".title[_ngcontent-%COMP%]{color:#fff;font-size:4rem}.description[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width: 768px){.title[_ngcontent-%COMP%]{font-size:3rem}.description[_ngcontent-%COMP%]{font-size:1rem}}"]}),o})();class f{constructor(i){this.document=i.document,this.points=i.points,this.alias=i.alias}}var u=s(2425),d=s(6895);const v=function(o){return{"flip-card-hover":o}};let Z=(()=>{class o{constructor(){this.id="",this.client=null,this.front=!0}ngOnInit(){}toggle(){this.front=!this.front,this.front||this.animateValue(document.getElementById("points__value"),0,this.client?.points,1e3)}animateValue(n,e,a,c){let g=null;const b=C=>{g||(g=C);const _=Math.min((C-g)/c,1);n.innerHTML=Math.floor(_*(a-e)+e),_<1&&window.requestAnimationFrame(b)};window.requestAnimationFrame(b)}hydrateURL(n){const e="5493512497230";return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?`https://wa.me/${e}/?text=${n}`:`https://web.whatsapp.com/send?phone=${e}&text=${n}`}sendMessage(){const e=this.hydrateURL(`Hola \u{1f60a}!! Soy ${this.client?.alias||""} y me gustar\xeda canjear mis ${this.client?.points||0} puntos!`);window.open(e,"_blank")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-card"]],inputs:{client:"client"},decls:24,vars:5,consts:[[1,"flip-card",3,"ngClass","click"],[1,"flip-card-inner"],[1,"flip-card-front"],[1,"card","mx-auto","p-3"],["src","assets/imgs/flower-2.png","alt","",1,"img","img-fluid","flower","flower-top"],[1,"title","ml-auto","mr-3"],["id","club"],["id","document",1,"mx-auto","my-auto"],["src","assets/imgs/flower-2.png","alt","flowers",1,"img","img-fluid","flower"],[1,"flip-card-back"],["id","points",1,"mt-5"],["id","points__value"],[1,"btn","mx-auto",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return e.toggle()}),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"div",5),t._uU(6,"VELVET "),t.TgZ(7,"span",6),t._uU(8,"CLUB"),t.qZA()(),t.TgZ(9,"div",7),t._uU(10),t.qZA(),t._UZ(11,"img",8),t.qZA()(),t.TgZ(12,"div",9)(13,"div",3),t._UZ(14,"img",4),t.TgZ(15,"div",5),t._uU(16,"PUNTOS"),t.qZA(),t.TgZ(17,"div",10)(18,"span",11),t._uU(19),t.qZA(),t._UZ(20,"br"),t.TgZ(21,"button",12),t.NdJ("click",function(){return e.sendMessage()}),t._uU(22,"\xa1Canjear!"),t.qZA()(),t._UZ(23,"img",8),t.qZA()()()()),2&n&&(t.Q6J("ngClass",t.VKq(3,v,!e.front)),t.xp6(10),t.hij(" DNI: ",null==e.client?null:e.client.document," "),t.xp6(9),t.Oqu(null==e.client?null:e.client.points))},dependencies:[d.mk],styles:[".card[_ngcontent-%COMP%]{font-family:JosefinSans;perspective:1000px;width:500px;height:300px;border-radius:20px;background:rgb(222,178,200);display:flex;flex-direction:column;box-shadow:5px 2px 7px #00000040;-webkit-box-shadow:5px 2px 7px 0px rgba(0,0,0,.25);-moz-box-shadow:5px 2px 7px 0px rgba(0,0,0,.25)}.card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:2rem;margin-top:1rem;color:#f7edec;filter:drop-shadow(1px 0px 1px #555);text-decoration:underline}.card[_ngcontent-%COMP%]   #club[_ngcontent-%COMP%]{font-size:1.5rem;color:#fff}.card[_ngcontent-%COMP%]   #document[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   #points[_ngcontent-%COMP%]{filter:drop-shadow(1px 0px 1px #555);font-family:arial;color:#fff;font-size:2.2rem;letter-spacing:15px}.card[_ngcontent-%COMP%]   #points[_ngcontent-%COMP%]{text-align:center;font-size:3rem;font-weight:700}.card[_ngcontent-%COMP%]   .flower[_ngcontent-%COMP%]{position:absolute;height:5rem;opacity:.1}.card[_ngcontent-%COMP%]   .flower-top[_ngcontent-%COMP%]{rotate:-20deg}.card[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:absolute;height:5rem;opacity:.5}@media screen and (max-width: 570px){.card[_ngcontent-%COMP%]{scale:.8;width:100%}}.flip-card-inner[_ngcontent-%COMP%]{position:relative;transition:transform .8s;transform-style:preserve-3d;background:transparent;height:100%;width:100%}.flip-card-hover[_ngcontent-%COMP%]   .flip-card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flip-card-back[_ngcontent-%COMP%]{transform:rotateY(180deg);background:rgb(222,178,200)}"]}),o})(),O=(()=>{class o{constructor(n,e){this.clientService=n,this.route=e,this.id="",this.client=null}fillClientData(n){this.clientService.get(n).subscribe({next:e=>{this.client=new f(e)},error:e=>{console.error("an error occured: "+JSON.stringify(e))}})}ngOnInit(){this.sub=this.route.params.subscribe(n=>{this.id=n.id,this.fillClientData(this.id)})}ngOnDestroy(){this.sub.unsubscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.y),t.Y36(l.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:5,vars:2,consts:[[1,"hr-divisor","my-5"],[1,"container","text-center"],[1,"text-white"],[3,"client"]],template:function(n,e){1&n&&(t._UZ(0,"hr",0),t.TgZ(1,"div",1)(2,"h3",2),t._uU(3),t.qZA(),t._UZ(4,"app-card",3),t.qZA()),2&n&&(t.xp6(3),t.hij("\xa1Un gusto verte ",null==e.client?null:e.client.alias,"!"),t.xp6(1),t.Q6J("client",e.client))},dependencies:[Z]}),o})();var y=s(5226),p=s.n(y),r=s(433),h=s(5851);const x=["createAccount"],P=function(o){return{"mt-3 mx-auto btn":!0,activeLoading:o}},w=function(){return["../register"]},T=function(o){return{"mt-3 mx-auto btn":!0,activeLoading:o}},U=[{path:"",component:M,children:[{path:"",redirectTo:"login",pathMatch:"prefix"},{path:"login",component:(()=>{class o{constructor(n,e){this.clientService=n,this.router=e,this.createAccount=null,this.document="",this.submited=!1}ngOnInit(){}fireNotFound(){const n={title:"Sin resultados",showConfirmButton:!1,html:this.createAccount?.nativeElement.innerHTML,confirm:!1};p().fire(n)}login(){this.submited=!this.submited,this.clientService.get(this.document).subscribe({next:n=>{this.router.navigate(["welcome",this.document])},error:n=>{this.fireNotFound(),this.submited=!this.submited}})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.y),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],viewQuery:function(n,e){if(1&n&&t.Gf(x,5),2&n){let a;t.iGM(a=t.CRH())&&(e.createAccount=a.first)}},decls:27,vars:9,consts:[[1,"container","mt-5"],["autocomplete","off",1,"d-flex","flex-column"],[1,"group"],["OnlyNumber","true","type","number","name","document","required","",3,"ngModel","ngModelChange"],[1,"highlight"],[1,"bar"],["id","login-btn","type","submit",3,"disabled","ngClass","click"],[3,"hidden"],[1,"load","loading",3,"hidden"],[1,"d-none"],["createAccount",""],[1,"mt-3"],[1,"join-club","mt-3","d-flex","flex-column"],[1,"mb-3"],[1,"btn","w-auto","join-club",3,"routerLink"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"input",3),t.NdJ("ngModelChange",function(c){return e.document=c}),t.qZA(),t._UZ(4,"span",4)(5,"span",5),t.TgZ(6,"label"),t._uU(7,"Documento"),t.qZA()(),t.TgZ(8,"button",6),t.NdJ("click",function(){return e.login()}),t.TgZ(9,"span",7),t._uU(10," \xa1Entrar!"),t.qZA(),t._UZ(11,"span",8),t.qZA()()(),t.TgZ(12,"div",9,10)(14,"div",11),t._uU(15," El documento a\xfan no es parte de "),t.TgZ(16,"b"),t._uU(17,"Club Velvet"),t.qZA(),t._uU(18,"... \u{1f614} "),t._UZ(19,"br"),t.TgZ(20,"div",12)(21,"span",13),t._uU(22," \xbfA\xfan no sos parte? "),t.qZA(),t._UZ(23,"br"),t.TgZ(24,"a",14)(25,"b"),t._uU(26," \xa1Unirme al Club \u{1f60d}!"),t.qZA()()()()()),2&n&&(t.xp6(3),t.Q6J("ngModel",e.document),t.xp6(5),t.Q6J("disabled",!e.document)("ngClass",t.VKq(6,P,e.submited)),t.xp6(1),t.Q6J("hidden",e.submited),t.xp6(2),t.Q6J("hidden",!e.submited),t.xp6(13),t.Q6J("routerLink",t.DdM(8,w)))},dependencies:[d.mk,l.yS,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.On,r.F,h.n],styles:['.group[_ngcontent-%COMP%]{position:relative}input[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:1.3rem;padding:10px 10px 10px 5px;display:block;width:100%;text-align:center;border-radius:.1rem;border:none;border-bottom:1px solid #757575;letter-spacing:.5rem}input[_ngcontent-%COMP%]:focus{outline:none}label[_ngcontent-%COMP%]{color:#999;font-size:1.3rem;font-weight:400;position:absolute;pointer-events:none;left:5px;top:10px;transition:.2s ease all;-moz-transition:.2s ease all;-webkit-transition:.2s ease all}input[_ngcontent-%COMP%]:focus ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid ~ label[_ngcontent-%COMP%]{top:-2rem;font-size:1.3rem;color:var(--basic-input-color)}.bar[_ngcontent-%COMP%]{position:relative;display:block}.bar[_ngcontent-%COMP%]:before, .bar[_ngcontent-%COMP%]:after{content:"";height:2px;width:0;bottom:1px;position:absolute;background:var(--basic-input-color);transition:.2s ease all;-moz-transition:.2s ease all;-webkit-transition:.2s ease all}.bar[_ngcontent-%COMP%]:before{left:50%}.bar[_ngcontent-%COMP%]:after{right:50%}input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus ~ .bar[_ngcontent-%COMP%]:after{width:50%}.highlight[_ngcontent-%COMP%]{position:absolute;height:60%;top:25%;left:0;pointer-events:none;opacity:.5}input[_ngcontent-%COMP%]:focus ~ .highlight[_ngcontent-%COMP%]{animation:inputHighlighter .3s ease}@keyframes inputHighlighter{0%{background:var(--basic-input-color)}to{width:0;background:transparent}}.join-club[_ngcontent-%COMP%]{padding:5px}']}),o})()},{path:"register",component:(()=>{class o{constructor(n,e){this.clientService=n,this.router=e,this.document="",this.alias="",this.submited=!1,p().close()}alreadyExist(){p().fire({title:"\xa1Espera!  \u{1f914}",text:"El documento ingresado ya est\xe1 registrado en nuestro Club..."})}register(){this.clientService.create(this.document,this.alias).subscribe({next:n=>{const e=new f(n);this.router.navigate(["welcome",e.document])},error:n=>{400===n.status&&this.alreadyExist()}})}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(u.y),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-register"]],decls:18,vars:8,consts:[[1,"container","mt-5"],["autocomplete","off",1,"d-flex","flex-column"],[1,"group"],["OnlyNumber","true","type","number","name","document","required","",3,"ngModel","ngModelChange"],[1,"highlight"],[1,"bar"],[1,"group","mt-5"],["type","text","name","alias","required","",3,"ngModel","ngModelChange"],["id","register-btn","type","submit",3,"disabled","ngClass","click"],[3,"hidden"],[1,"load","loading",3,"hidden"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"input",3),t.NdJ("ngModelChange",function(c){return e.document=c}),t.qZA(),t._UZ(4,"span",4)(5,"span",5),t.TgZ(6,"label"),t._uU(7,"Documento"),t.qZA()(),t.TgZ(8,"div",6)(9,"input",7),t.NdJ("ngModelChange",function(c){return e.alias=c}),t.qZA(),t._UZ(10,"span",4)(11,"span",5),t.TgZ(12,"label"),t._uU(13,"Alias (C\xf3mo te dicen habitualmente \u{1f60a})"),t.qZA()(),t.TgZ(14,"button",8),t.NdJ("click",function(){return e.register()}),t.TgZ(15,"span",9),t._uU(16," Registrar!"),t.qZA(),t._UZ(17,"span",10),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngModel",e.document),t.xp6(6),t.Q6J("ngModel",e.alias),t.xp6(5),t.Q6J("disabled",!e.document||!e.alias)("ngClass",t.VKq(6,T,e.submited)),t.xp6(1),t.Q6J("hidden",e.submited),t.xp6(2),t.Q6J("hidden",!e.submited))},dependencies:[d.mk,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.On,r.F,h.n],styles:[".join-club[_ngcontent-%COMP%]{padding:5px}"]}),o})()},{path:":id",component:O}]}];let k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(U),l.Bz]}),o})();var J=s(529),q=s(2271);let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[u.y],imports:[d.ez,k,r.u5,J.JF,q.m]}),o})()}}]);