(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/yGZ":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("gIcY"),t=function(){function l(l,n){this.router=l,this.form=n.group({email:["",e.Validators.compose([e.Validators.required,i])],password:["",e.Validators.compose([e.Validators.required,e.Validators.minLength(6)])]}),this.email=this.form.controls.email,this.password=this.form.controls.password}return l.prototype.onSubmit=function(l){this.form.valid&&(console.log(l),this.router.navigate(["pages/dashboard"]))},l}();function i(l){if(l.value&&!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(l.value))return{invalidEmail:!0}}var r=function(){return function(){}}(),a=u("pMnS"),s=u("ZYCi"),d=u("Ip0R"),c=o["\u0275crt"]({encapsulation:2,styles:[['body::after{content:\'{"main-color":"#124191","default-color":"#0e0f10","dark-color":"#000","primary-color":"#124191","success-color":"#124191","warning-color":"#f79a17","danger-color":"#bf1725","info-color":"#248dad","sidebar-bg-color":"#f4f9fd","gray":"#555","gray-light":"#ccc"}\';display:none}.login-container{display:flex;align-items:center;height:100%;width:100%;position:absolute}.login-container .card{padding:15px}.login-container .card .btn-link{padding:0}.login-container .card .btn-link.forgot{font-size:14px}.login-container .card .btn-link:hover{color:#124191}.auth-sep{margin-top:32px;margin-bottom:24px;line-height:20px;font-size:15px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 14px;color:#555}.auth-sep>span>span{margin-top:-11px;display:block;font-weight:300}.auth-sep:after,.auth-sep:before{border-top:1px solid #ccc;content:"";height:1px;width:35%;display:table-cell}.login-help{margin:0;padding:0}.login-help li{list-style:none;display:inline-block;margin-left:10px}.login-help li:first-child{margin-left:0}.login-help li i{cursor:pointer;transition:all .1s ease;color:#fff;padding:9px 9px 6px;font-size:12px;background-color:#124191}.login-help li i.socicon-facebook{background-color:#3b5998}.login-help li i.socicon-twitter{background-color:#55acee}.login-help li i.socicon-google{background-color:#dd4b39}.login-help li i:hover{opacity:.9}']],data:{}});function g(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","help-block text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Email is required"]))],null,null)}function p(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","help-block text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Invalid email address"]))],null,null)}function m(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","help-block text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Password is required"]))],null,null)}function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[["class","help-block text-danger"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Password isn't long enough, minimum of 6 characters"]))],null,null)}function v(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,57,"div",[["class","login-container"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,56,"div",[["class","col-xl-4 col-md-6 col-10 mx-auto"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,55,"div",[["class","card"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,54,"div",[["class","card-body text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,1,"h2",[["class","card-title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Sign in to Azimuth"])),(l()(),o["\u0275eld"](6,0,null,null,2,"a",[["class","btn btn-link transition bottom-15"],["routerLink","/register"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o["\u0275nov"](l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),o["\u0275did"](7,671744,null,0,s.o,[s.l,s.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),o["\u0275ted"](-1,null,["Don't have an account? Sign up now!"])),(l()(),o["\u0275eld"](9,0,null,null,36,"form",[["class"," text-left"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==o["\u0275nov"](l,11).onSubmit(u)&&e),"reset"===n&&(e=!1!==o["\u0275nov"](l,11).onReset()&&e),"ngSubmit"===n&&(e=!1!==t.onSubmit(t.form.value)&&e),e}),null,null)),o["\u0275did"](10,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](11,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),o["\u0275did"](13,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(l()(),o["\u0275eld"](14,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](15,0,null,null,5,"input",[["class","form-control checking-field"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,16)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,16).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,16)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,16)._compositionEnd(u.target.value)&&e),e}),null,null)),o["\u0275did"](16,16384,null,0,e.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,e.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,e.NG_VALUE_ACCESSOR,(function(l){return[l]}),[e.DefaultValueAccessor]),o["\u0275did"](18,540672,null,0,e.FormControlDirective,[[8,null],[8,null],[6,e.NG_VALUE_ACCESSOR],[2,e["\u0275angular_packages_forms_forms_q"]]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,e.NgControl,null,[e.FormControlDirective]),o["\u0275did"](20,16384,null,0,e.NgControlStatus,[[4,e.NgControl]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,g)),o["\u0275did"](22,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,p)),o["\u0275did"](24,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](25,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](26,0,null,null,5,"input",[["class","form-control checking-field"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==o["\u0275nov"](l,27)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==o["\u0275nov"](l,27).onTouched()&&e),"compositionstart"===n&&(e=!1!==o["\u0275nov"](l,27)._compositionStart()&&e),"compositionend"===n&&(e=!1!==o["\u0275nov"](l,27)._compositionEnd(u.target.value)&&e),e}),null,null)),o["\u0275did"](27,16384,null,0,e.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,e.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,e.NG_VALUE_ACCESSOR,(function(l){return[l]}),[e.DefaultValueAccessor]),o["\u0275did"](29,540672,null,0,e.FormControlDirective,[[8,null],[8,null],[6,e.NG_VALUE_ACCESSOR],[2,e["\u0275angular_packages_forms_forms_q"]]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,e.NgControl,null,[e.FormControlDirective]),o["\u0275did"](31,16384,null,0,e.NgControlStatus,[[4,e.NgControl]],null,null),(l()(),o["\u0275and"](16777216,null,null,1,null,m)),o["\u0275did"](33,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,f)),o["\u0275did"](35,16384,null,0,d.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](36,0,null,null,6,"div",[["class","form-group d-flex justify-content-between"]],null,null,null,null,null)),(l()(),o["\u0275eld"](37,0,null,null,3,"div",[["class","custom-control custom-checkbox"]],null,null,null,null,null)),(l()(),o["\u0275eld"](38,0,null,null,0,"input",[["class","custom-control-input checkbox-main"],["id","login-keep"],["type","checkbox"]],null,null,null,null,null)),(l()(),o["\u0275eld"](39,0,null,null,1,"label",[["class","custom-control-label"],["for","login-keep"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Keep me signed in"])),(l()(),o["\u0275eld"](41,0,null,null,1,"a",[["class","btn btn-link forgot transition pull-right"],["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Forgot password?"])),(l()(),o["\u0275eld"](43,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](44,0,null,null,1,"button",[["class","btn btn-main btn-block"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Sign in"])),(l()(),o["\u0275eld"](46,0,null,null,3,"div",[["class","auth-sep"]],null,null,null,null,null)),(l()(),o["\u0275eld"](47,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),o["\u0275eld"](48,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["or Sign in with one click"])),(l()(),o["\u0275eld"](50,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](51,0,null,null,6,"ul",[["class","login-help"]],null,null,null,null,null)),(l()(),o["\u0275eld"](52,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](53,0,null,null,0,"i",[["class","socicon socicon-facebook transition"]],null,null,null,null,null)),(l()(),o["\u0275eld"](54,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](55,0,null,null,0,"i",[["class","socicon socicon-twitter transition"]],null,null,null,null,null)),(l()(),o["\u0275eld"](56,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](57,0,null,null,0,"i",[["class","socicon socicon-google transition"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,7,0,"/register"),l(n,11,0,u.form),l(n,18,0,u.email),l(n,22,0,u.form.get("email").touched&&u.form.get("email").hasError("required")),l(n,24,0,u.form.get("email").touched&&u.form.get("email").hasError("invalidEmail")),l(n,29,0,u.password),l(n,33,0,u.form.get("password").touched&&u.form.get("password").hasError("required")),l(n,35,0,u.form.get("password").touched&&u.form.get("password").hasError("minlength"))}),(function(l,n){var u=n.component;l(n,6,0,o["\u0275nov"](n,7).target,o["\u0275nov"](n,7).href),l(n,9,0,o["\u0275nov"](n,13).ngClassUntouched,o["\u0275nov"](n,13).ngClassTouched,o["\u0275nov"](n,13).ngClassPristine,o["\u0275nov"](n,13).ngClassDirty,o["\u0275nov"](n,13).ngClassValid,o["\u0275nov"](n,13).ngClassInvalid,o["\u0275nov"](n,13).ngClassPending),l(n,15,0,o["\u0275nov"](n,20).ngClassUntouched,o["\u0275nov"](n,20).ngClassTouched,o["\u0275nov"](n,20).ngClassPristine,o["\u0275nov"](n,20).ngClassDirty,o["\u0275nov"](n,20).ngClassValid,o["\u0275nov"](n,20).ngClassInvalid,o["\u0275nov"](n,20).ngClassPending),l(n,26,0,o["\u0275nov"](n,31).ngClassUntouched,o["\u0275nov"](n,31).ngClassTouched,o["\u0275nov"](n,31).ngClassPristine,o["\u0275nov"](n,31).ngClassDirty,o["\u0275nov"](n,31).ngClassValid,o["\u0275nov"](n,31).ngClassInvalid,o["\u0275nov"](n,31).ngClassPending),l(n,44,0,!u.form.valid)}))}function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"az-login",[],null,null,null,v,c)),o["\u0275did"](1,49152,null,0,t,[s.l,e.FormBuilder],null,null)],null,null)}var b=o["\u0275ccf"]("az-login",t,h,{},{},[]);u.d(n,"LoginModuleNgFactory",(function(){return C}));var C=o["\u0275cmf"](r,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,b]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),o["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),o["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,e.FormsModule,e.FormsModule,[]),o["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](1024,s.j,(function(){return[[{path:"",component:t,pathMatch:"full"}]]}),[])])}))}}]);