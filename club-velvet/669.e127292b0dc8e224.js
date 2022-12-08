"use strict";(self.webpackChunkclub_velvet=self.webpackChunkclub_velvet||[]).push([[669],{7669:(H,h,l)=>{l.r(h),l.d(h,{AdminModule:()=>z});var x=l(5226),a=l.n(x),e=l(1571),d=l(2340),_=l(529);let S=(()=>{class n{constructor(t){this.httpClient=t}add(t){return this.httpClient.post(`${d.N.backendUrl}/applied-services/`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),f=(()=>{class n{constructor(t){this.httpClient=t}list(){return this.httpClient.get(`${d.N.backendUrl}/spa-services/`)}edit(t,i){return this.httpClient.patch(`${d.N.backendUrl}/spa-services/${t}/`,i)}remove(t){return this.httpClient.delete(`${d.N.backendUrl}/spa-services/${t}/`)}add(t){return this.httpClient.post(`${d.N.backendUrl}/spa-services/`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=l(2425),m=l(6895),c=l(433);function Z(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"option",9),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("value",t.id),e.xp6(1),e.lnq(" ",t.name," ($",t.price,") | ",t.owner__username," ")}}function M(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"option",9),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("value",t.document),e.xp6(1),e.AsE(" ",t.document," (",t.alias,") ")}}let T=(()=>{class n{constructor(t,i,r){this.appliedService=t,this.spaServicesService=i,this.clientService=r,this.spaServices=[],this.clients=[],this.form={service:null,client:null}}ngOnInit(){this.getSpaServices(),this.getClients()}getClients(){this.clientService.list().subscribe({next:t=>{this.clients=t}})}getSpaServices(){this.spaServicesService.list().subscribe({next:t=>{this.spaServices=t}})}applyService(){a().fire({title:`\xbfAplicar servicio a ${this.form.client}?`,showDenyButton:!0,confirmButtonText:"\xa1Aplicar!",customClass:{denyButton:"order-1",confirmButton:"order-2"}}).then(t=>{if(t.isConfirmed){const i={...this.form};this.clearForm(),this.appliedService.add(i).subscribe({next:r=>{a().fire("Agregado","","success")},error:r=>{console.error(r)}})}})}clearForm(){this.form={service:null,client:null}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S),e.Y36(f),e.Y36(C.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-applied-service"]],decls:23,vars:5,consts:[[1,"container"],[1,"mt-5","mb-5"],[1,"service"],[1,"form-control",3,"ngModel","ngModelChange"],["hidden","","disabled","","selected","","value",""],[4,"ngFor","ngForOf"],[1,"client"],[1,"d-flex"],[1,"btn","mt-3","mx-auto","submit-btn",3,"disabled","click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"br"),e.TgZ(2,"h2",1)(3,"u"),e._uU(4," Aplicar un servicio al cliente:"),e.qZA()(),e.TgZ(5,"div",2)(6,"h4")(7,"u"),e._uU(8," Servicio:"),e.qZA()(),e.TgZ(9,"select",3),e.NdJ("ngModelChange",function(s){return i.form.service=s}),e._UZ(10,"option",4),e.YNc(11,Z,3,4,"ng-container",5),e.qZA()(),e._UZ(12,"br"),e.TgZ(13,"div",6)(14,"h4")(15,"u"),e._uU(16," Cliente:"),e.qZA()(),e.TgZ(17,"select",3),e.NdJ("ngModelChange",function(s){return i.form.client=s}),e._UZ(18,"option",4),e.YNc(19,M,3,3,"ng-container",5),e.qZA()(),e.TgZ(20,"div",7)(21,"button",8),e.NdJ("click",function(){return i.applyService()}),e._uU(22," \xa1Aplicar servicio \u{1f64c}! "),e.qZA()()()),2&t&&(e.xp6(9),e.Q6J("ngModel",i.form.service),e.xp6(2),e.Q6J("ngForOf",i.spaServices),e.xp6(6),e.Q6J("ngModel",i.form.client),e.xp6(2),e.Q6J("ngForOf",i.clients),e.xp6(2),e.Q6J("disabled",!i.form.client||!i.form.service))},dependencies:[m.sg,c.YN,c.Kr,c.EJ,c.JJ,c.On],styles:[".submit-btn[_ngcontent-%COMP%]{width:auto}"]}),n})();var u=l(322);let A=(()=>{class n{constructor(){document.body.className="welcome-bg"}ngOnInit(){}ngOnDestroy(){document.body.className=""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-base"]],decls:3,vars:0,consts:[[1,"text-center","my-3"]],template:function(t,i){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Panel de administraci\xf3n"),e.qZA(),e._UZ(2,"router-outlet"))},dependencies:[u.lC]}),n})(),O=(()=>{class n{transform(t,i){return i&&t?n.filter(t,i):t}static filter(t,i){const r=i.toLowerCase();function s(p,K){for(let g in p)if(null!==p[g]&&null!=p[g]&&("object"==typeof p[g]&&s(p[g],K)||p[g].toString().toLowerCase().includes(r)))return!0;return!1}return t.filter(function(p){return s(p,i)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"filter",type:n,pure:!1}),n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();function k(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.alias),e.xp6(2),e.Oqu(t.document),e.xp6(2),e.Oqu(t.points)}}let P=(()=>{class n{constructor(t){this.clientService=t,this.clients=[]}ngOnInit(){this.getClients()}getClients(){this.clientService.list().subscribe({next:t=>{this.clients=t}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-clients"]],decls:18,vars:5,consts:[[1,"container","text-center"],[1,"mt-3","mb-5"],[1,"form-group","col-6","ml-auto","px-0"],["type","text","placeholder","Buscar...",1,"form-control",3,"ngModel","ngModelChange"],[1,"table"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2",1)(2,"u"),e._uU(3,"Listado de clientes:"),e.qZA()(),e.TgZ(4,"div",2)(5,"input",3),e.NdJ("ngModelChange",function(s){return i.filterTerm=s}),e.qZA()(),e.TgZ(6,"table",4)(7,"thead",5)(8,"tr")(9,"th",6),e._uU(10,"Alias"),e.qZA(),e.TgZ(11,"th",6),e._uU(12,"Documento"),e.qZA(),e.TgZ(13,"th",6),e._uU(14,"Puntos"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,k,7,3,"tr",7),e.ALo(17,"filter"),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngModel",i.filterTerm),e.xp6(11),e.Q6J("ngForOf",e.xi3(17,2,i.clients,i.filterTerm)))},dependencies:[m.sg,c.Fj,c.JJ,c.On,O]}),n})(),J=(()=>{class n{constructor(t){this.router=t}ngOnInit(){}routeTo(t){this.router.navigate([`${t}`])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],decls:21,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-5","box","shadow","mt-3","mt-md-0",3,"click"],["src","assets/imgs/circle-plus.png","alt","",1,"img-fluid"],[1,"box__title"],[1,"col-5","box","shadow","ml-md-3","mt-3","mt-md-0",3,"click"],["src","assets/imgs/nails.png","alt","",1,"img-fluid"],[1,"col-12","box","shadow","mt-3",3,"click"],["src","assets/imgs/group.png","alt","",1,"img-fluid"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.NdJ("click",function(){return i.routeTo("./admin/applied-services")}),e._UZ(3,"img",3)(4,"br")(5,"br"),e.TgZ(6,"span",4),e._uU(7," Nuevo "),e.qZA()(),e.TgZ(8,"div",5),e.NdJ("click",function(){return i.routeTo("./admin/spa-services")}),e._UZ(9,"img",6)(10,"br")(11,"br"),e.TgZ(12,"span",4),e._uU(13," Servicios "),e.qZA()()(),e.TgZ(14,"div",1)(15,"div",7),e.NdJ("click",function(){return i.routeTo("./admin/clients")}),e._UZ(16,"img",8)(17,"br")(18,"br"),e.TgZ(19,"span",4),e._uU(20," Clientes "),e.qZA()()()())},styles:[".box[_ngcontent-%COMP%]{border-style:solid;border-radius:30px;max-width:300px;border-color:#fff;padding:2rem;text-align:center;margin-left:auto;margin-right:auto;color:#000;background-color:#e093ad;overflow:hidden;border-color:#e093ad;cursor:pointer}.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:150px}.box__title[_ngcontent-%COMP%]{font-size:1.5rem}.box[_ngcontent-%COMP%]:hover{background-color:#f48fb1;border-color:#e093ad;transition:background .5s linear .1s,color .5s linear 0s}"]}),n})(),v=(()=>{class n{constructor(t){this.httpClient=t}list(){return this.httpClient.get(`${d.N.backendUrl}/users/`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function U(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",10)(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"div",11),e._uU(5),e.qZA()(),e.TgZ(6,"div",12)(7,"div",13),e._uU(8," Prestador: "),e.TgZ(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"img",14),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(r.id))}),e.qZA(),e.TgZ(12,"img",15),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(r))}),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw().$implicit;e.xp6(3),e.hij("$",t.price,""),e.xp6(2),e.Oqu(t.name),e.xp6(5),e.Oqu(t.owner__username)}}function N(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"option",21),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.username," ")}}function w(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",10),e._uU(2," $"),e.TgZ(3,"input",16),e.NdJ("ngModelChange",function(r){e.CHM(t);const s=e.oxw(3);return e.KtG(s.form.price=r)}),e.qZA(),e.TgZ(4,"textarea",17),e.NdJ("ngModelChange",function(r){e.CHM(t);const s=e.oxw(3);return e.KtG(s.form.name=r)}),e.qZA()(),e.TgZ(5,"div",12)(6,"div",18),e._uU(7," Prestador: "),e.TgZ(8,"select",19),e.NdJ("ngModelChange",function(r){e.CHM(t);const s=e.oxw(3);return e.KtG(s.form.owner=r)}),e.YNc(9,N,3,1,"ng-container",20),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw(3);e.xp6(3),e.Q6J("ngModel",t.form.price),e.xp6(1),e.Q6J("ngModel",t.form.name),e.xp6(4),e.Q6J("ngModel",t.form.owner),e.xp6(1),e.Q6J("ngForOf",t.users)}}function q(n,o){if(1&n&&(e.TgZ(0,"li",8),e.YNc(1,U,13,3,"ng-container",9),e.YNc(2,w,10,4,"ng-container",9),e.qZA()),2&n){const t=o.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==i.selectedEditableSpaServiceId),e.xp6(1),e.Q6J("ngIf",i.selectedEditableSpaServiceId==t.id)}}function F(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.cancel())}),e._uU(2," Cancelar "),e.qZA(),e.TgZ(3,"button",24),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.confirmEdition())}),e._uU(4," Confirmar edici\xf3n "),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("disabled",!t.form.name||!t.form.price||!t.form.owner)}}const b=function(){return["./create"]};function L(n,o){1&n&&(e.TgZ(0,"a",25),e._uU(1,"Crear nuevo servicio"),e.qZA()),2&n&&e.Q6J("routerLink",e.DdM(1,b))}function I(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"ul",4),e.YNc(2,q,3,2,"li",5),e.qZA(),e.YNc(3,F,5,1,"div",6),e.YNc(4,L,2,2,"a",7),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.spaServices),e.xp6(1),e.Q6J("ngIf",null!=t.selectedEditableSpaServiceId),e.xp6(1),e.Q6J("ngIf",null==t.selectedEditableSpaServiceId)}}function Y(n,o){1&n&&(e.TgZ(0,"h3",26),e._uU(1,"A\xfan no hay servicios agregados...\u{1f914}"),e.qZA(),e.TgZ(2,"button",27),e._uU(3," Agregar "),e.qZA()),2&n&&(e.xp6(2),e.Q6J("routerLink",e.DdM(1,b)))}let Q=(()=>{class n{constructor(t,i){this.spaServicesService=t,this.userService=i,this.spaServices=[],this.users=[],this.form={owner:null,name:null,price:null},this.selectedEditableSpaServiceId=null}ngOnInit(){this.getSpaServices(),this.userService.list().subscribe({next:t=>{this.users=t}})}getSpaServices(){this.spaServicesService.list().subscribe({next:t=>{this.spaServices=t}})}remove(t){a().fire({title:"\xbfEliminar servicio?",showDenyButton:!0,confirmButtonText:"Eliminar"}).then(i=>{i.isConfirmed&&this.spaServicesService.remove(t).subscribe({next:()=>{a().fire("Eliminado","","success"),this.getSpaServices()},error:r=>{console.error(r)}})})}edit(t){this.selectedEditableSpaServiceId=t.id,this.form=t}confirmEdition(){const t={...this.form};a().showLoading(),this.spaServicesService.edit(this.selectedEditableSpaServiceId,t).subscribe({next:()=>{a().close(),this.clear()},error:i=>{a().close(),this.clear()}})}clear(){this.selectedEditableSpaServiceId=null,this.form={owner:null,name:null,price:null}}cancel(){this.clear()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list"]],decls:7,vars:2,consts:[[1,"container","text-center"],[1,"mt-3","mb-5"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"task-items","d-flex-inline"],["class","item type1 mx-auto",4,"ngFor","ngForOf"],["class","edit-mode-on d-flex text-center mb-5",4,"ngIf"],["class","btn",3,"routerLink",4,"ngIf"],[1,"item","type1","mx-auto"],[4,"ngIf"],[1,"task"],[1,"name","icon","ml-3"],[1,"ml-auto","d-flex"],[1,"user","mr-5"],["src","assets/imgs/delete.png","alt","delete",1,"actions",3,"click"],["src","assets/imgs/edit.png","alt","edit",1,"ml-3","actions",3,"click"],["ngDefaultControl","","type","text","placeholder","precio",3,"ngModel","ngModelChange"],["ngDefaultControl","","type","text","placeholder","nombre del servicio",1,"ml-3",3,"ngModel","ngModelChange"],[1,"user","mx-auto"],["ngDefaultControl","",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["value","item.id"],[1,"edit-mode-on","d-flex","text-center","mb-5"],[1,"btn","custom-btn","mx-auto",3,"click"],[1,"btn","custom-btn","mx-auto",3,"disabled","click"],[1,"btn",3,"routerLink"],[1,"mt-5"],[1,"btn","mt-5","mt-sm-0",3,"routerLink"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"h2",1)(2,"u"),e._uU(3,"Listado de servicios:"),e.qZA()(),e.YNc(4,I,5,3,"ng-container",2),e.YNc(5,Y,4,2,"ng-template",null,3,e.W1O),e.qZA()),2&t){const r=e.MAs(6);e.xp6(4),e.Q6J("ngIf",i.spaServices.length>0)("ngIfElse",r)}},dependencies:[u.rH,u.yS,m.sg,m.O5,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.On],styles:[".custom-btn[_ngcontent-%COMP%]{width:150px}ul.task-items[_ngcontent-%COMP%]{list-style:none;justify-content:center}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]{display:flex;align-items:center;margin:20px 0;padding:20px;background:#fff;border-radius:5px;box-shadow:0 0 5px 2px #0000001a}ul.task-items[_ngcontent-%COMP%]   li.item.type1[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background:#f48fb1}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]{display:flex;align-items:center}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{background:#eeeeee;padding:.3rem;margin-left:20px;border-radius:15px}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:1em;color:#2e7d32;margin-left:30px}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background:#2e7d32;margin-right:10px;width:14px;height:14px;border-radius:50%}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .icon.risk[_ngcontent-%COMP%]{background:red}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .icon.warning[_ngcontent-%COMP%]{background:#ffa000}ul.task-items[_ngcontent-%COMP%]   li.item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .icon.off[_ngcontent-%COMP%]{background:#bf360c}.actions[_ngcontent-%COMP%]{max-width:25px;cursor:pointer}input[_ngcontent-%COMP%]{letter-spacing:1px;font-size:1rem}"]}),n})();var D=l(5851);function E(n,o){if(1&n&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.username," ")}}const B=[{path:"",component:A,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:J},{path:"spa-services",component:Q},{path:"spa-services/create",component:(()=>{class n{constructor(t,i,r,s){this.fb=t,this.userService=i,this.spaServicesService=r,this.router=s,this.users=[],this.form=this.fb.group({name:["",c.kI.required],owner:["",c.kI.required],price:["",[c.kI.required,c.kI.minLength(0)]]})}onSubmit(){this.form.valid&&(a().showLoading(),this.spaServicesService.add(this.form.value).subscribe({next:()=>{a().hideLoading(),a().fire("Servicio agregado","","success"),this.router.navigate(["./admin/spa-services"])}}))}ngOnInit(){this.userService.list().subscribe({next:t=>{this.users=t}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.qu),e.Y36(v),e.Y36(f),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-spa-services"]],decls:23,vars:3,consts:[[1,"container","text-center"],[1,"mt-3","mb-5"],[3,"formGroup","ngSubmit"],[1,"group"],["type","text","required","","formControlName","name"],[1,"highlight"],[1,"bar"],[1,"group","mt-5"],["formControlName","owner","required","",1,"w-100"],[3,"value",4,"ngFor","ngForOf"],["type","number","formControlName","price","minlength","0","OnlyNumber","true","required",""],["type","submit",1,"btn","float-right","mt-3",3,"disabled"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2",1)(2,"u"),e._uU(3," Agregar un servicio"),e.qZA()(),e.TgZ(4,"form",2),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(5,"div",3),e._UZ(6,"input",4)(7,"span",5)(8,"span",6),e.TgZ(9,"label"),e._uU(10,"Nombre"),e.qZA()(),e.TgZ(11,"div",7)(12,"select",8),e._uU(13," Profesional "),e.YNc(14,E,2,2,"option",9),e.qZA()(),e.TgZ(15,"div",7),e._UZ(16,"input",10)(17,"span",5)(18,"span",6),e.TgZ(19,"label"),e._uU(20,"Precio"),e.qZA()(),e.TgZ(21,"button",11),e._uU(22," Registrar servicio "),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",i.form),e.xp6(10),e.Q6J("ngForOf",i.users),e.xp6(7),e.Q6J("disabled",!i.form.valid))},dependencies:[D.n,m.sg,c._Y,c.YN,c.Kr,c.Fj,c.wV,c.EJ,c.JJ,c.JL,c.Q7,c.wO,c.sg,c.u],styles:["select[_ngcontent-%COMP%]{height:3rem}.title[_ngcontent-%COMP%]{color:#fff}"]}),n})()},{path:"applied-services",component:T},{path:"clients",component:P}]}];let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(B),u.Bz]}),n})();var j=l(2117),G=l(2271);let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v,f,{provide:_.TP,useClass:j.s,multi:!0}],imports:[$,G.m,m.ez,c.u5,c.UX,y]}),n})()}}]);