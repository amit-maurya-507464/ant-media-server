(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{UO6m:function(e,t,i){"use strict";i.d(t,"a",(function(){return he}));var n,s,a,c=i("lTdr"),r=i("XGgE"),o=i("OLhb"),l=i("U/Bw"),d=i("eikZ"),b=i("+0xr"),u=i("0IaG"),f=i("fXoL"),g=i("3Pt+"),p=i("ofXK"),h=function(){function e(e,t){this.validateEqual=e,this.reverse=t}return Object.defineProperty(e.prototype,"isReverse",{get:function(){return!!this.reverse&&"true"===this.reverse},enumerable:!1,configurable:!0}),e.prototype.validate=function(e){var t=e.value,i=e.root.get(this.validateEqual);return i&&t!==i.value&&!this.isReverse?{validateEqual:!1}:(i&&t===i.value&&this.isReverse&&(delete i.errors.validateEqual,Object.keys(i.errors).length||i.setErrors(null)),i&&t!==i.value&&this.isReverse&&i.setErrors({validateEqual:!1}),null)},e.\u0275fac=function(t){return new(t||e)(f.cc("validateEqual"),f.cc("reverse"))},e.\u0275dir=f.Hb({type:e,selectors:[["","validateEqual","","formControlName",""],["","validateEqual","","formControl",""],["","validateEqual","","ngModel",""]],features:[f.Ab([{provide:g.h,useExisting:Object(f.V)((function(){return e})),multi:!0}])]}),e}(),v=i("mrSG");n=$localize(v.a([":@@editUserCardTitle\u241f5371b1c5378106a120214f43b1646d08f9b16d58\u241f4111930681756918380: Edit User "],[":@@editUserCardTitle\u241f5371b1c5378106a120214f43b1646d08f9b16d58\u241f4111930681756918380: Edit User "])),s=$localize(v.a([":@@newLiveStreamCancelButton\u241fd7b35c384aecd25a516200d6921836374613dfe7\u241f2159130950882492111:Cancel"],[":@@newLiveStreamCancelButton\u241fd7b35c384aecd25a516200d6921836374613dfe7\u241f2159130950882492111:Cancel"])),a=$localize(v.a([":@@newPassword\u241fc7014c6360e94b236286b869c3fe0ea9911c0387\u241f1221596867309460035:New Password"],[":@@newPassword\u241fc7014c6360e94b236286b869c3fe0ea9911c0387\u241f1221596867309460035:New Password"]));var S,m,y=["placeholder",$localize(v.a([":@@password_place_holder\u241fc32ef07f8803a223a83ed17024b38e8d82292407\u241f1431416938026210429:Password"],[":@@password_place_holder\u241fc32ef07f8803a223a83ed17024b38e8d82292407\u241f1431416938026210429:Password"]))];function R(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div",9),f.Sb(1,"label"),f.Wb(2,a),f.Rb(),f.Sb(3,"input",17,18),f.Xb(5,y),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().userEditing.newPassword=e})),f.Rb(),f.Sb(6,"small",19),f.Jc(7," Password is required and at least 6 characters "),f.Rb(),f.Rb()}if(2&e){var n=f.xc(4),s=f.jc(),c=f.xc(2);f.Bb(3),f.qc("required",s.userEditing.newPassword)("ngModel",s.userEditing.newPassword),f.Bb(3),f.qc("hidden",n.valid||!c.submitted)}}function w(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div",9),f.Sb(1,"label"),f.Wb(2,S),f.Rb(),f.Sb(3,"input",20,21),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().newPasswordAgain=e})),f.Rb(),f.Sb(5,"small",19),f.Jc(6," Passwords should match "),f.Rb(),f.Rb()}if(2&e){var n=f.xc(4),s=f.jc(),a=f.xc(2);f.Bb(3),f.qc("required",s.changePassword)("ngModel",s.newPasswordAgain),f.Bb(2),f.qc("hidden",n.valid||!a.submitted)}}function E(e,t){if(1&e&&(f.Sb(0,"option",11),f.Jc(1),f.Rb()),2&e){var i=t.$implicit;f.qc("value",i),f.Bb(1),f.Lc(" ",i," ")}}function L(e,t){if(1&e){var i=f.Tb();f.Sb(0,"select",10),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().userEditing.scope=e})),f.Sb(1,"option",11),f.Jc(2,"Everything"),f.Rb(),f.Hc(3,E,2,2,"option",22),f.Rb()}if(2&e){var n=f.jc();f.qc("name","ApplicationPermission")("ngModel",n.userEditing.scope),f.Bb(1),f.rc("value",n.SYSTEM_SCOPE_OF_ACCESS),f.Bb(2),f.qc("ngForOf",n.applications.applications)}}function C(e,t){1&e&&(f.ac(0,m,1),f.Nb(1,"i",23),f.Yb())}S=$localize(v.a([":@@newPassword\u241fa80ca2c8cdd5c57ec276e5917673c562a988ac04\u241f8663553932392094435:New Password(Again)"],[":@@newPassword\u241fa80ca2c8cdd5c57ec276e5917673c562a988ac04\u241f8663553932392094435:New Password(Again)"])),m=$localize(v.a([":@@newLiveStreamSaveButton\u241f49019640af78cddd3b21bc3584f1499e5d8ed91b\u241f5740235461931807510:",":START_ITALIC_TEXT:",":CLOSE_ITALIC_TEXT:Save"],[":@@newLiveStreamSaveButton\u241f49019640af78cddd3b21bc3584f1499e5d8ed91b\u241f5740235461931807510:",":START_ITALIC_TEXT:",":CLOSE_ITALIC_TEXT:Save"]),"\ufffd*31:1\ufffd\ufffd#1:1\ufffd","\ufffd/#1:1\ufffd\ufffd/*31:1\ufffd");var T,U,B,I,x,M,q=function(){function e(e,t,i){this.dialogRef=e,this.restService=t,this.data=i,this.loading=!1,this.userUpdating=!1,this.userNameEmpty=!1,this.changePassword=!1,this.newPasswordAgain="",this.AdminUserType="ADMIN",this.ReadOnlyUserType="READ_ONLY",this.BasicUserType="USER",this.SYSTEM_SCOPE_OF_ACCESS="system",console.debug(i.email+" - "+i.type),this.userEditing=new l.f(i.email,""),this.userEditing.scope=i.scope,this.userEditing.userType=i.type}return e.prototype.ngOnInit=function(){var e=this;this.restService.getApplications().subscribe((function(t){e.applications=t}),(function(e){Object(o.d)(e)}))},e.prototype.onNoClick=function(){this.dialogRef.close()},e.prototype.updateUser=function(e){var t=this;e&&(this.restService.checkStreamName(this.userEditing.email)?(console.log("user pass word "+this.userEditing.newPassword),""!=this.userEditing.newPassword&&null!=this.userEditing.newPassword&&(this.userEditing.newPassword=Object(o.b)(this.userEditing.newPassword)),this.userUpdating=!0,this.restService.editUser(this.userEditing).subscribe((function(e){console.log("data :"+JSON.stringify(e)),t.userUpdating=!1,e.success?($.notify({icon:"ti-save",message:"User is updated"},{type:"success",delay:900,placement:{from:"top",align:"right"}}),t.dialogRef.close()):$.notify({icon:"ti-alert",message:"User is not updated: "+e.message+" "+e.errorId},{type:"warning",delay:900,placement:{from:"top",align:"right"}})}),(function(e){Object(o.d)(e),t.userUpdating=!1}))):this.userNameEmpty=!0)},e.prototype.cancelEditLiveStream=function(){this.dialogRef.close()},e.\u0275fac=function(t){return new(t||e)(f.Mb(u.g),f.Mb(l.e),f.Mb(u.a))},e.\u0275cmp=f.Gb({type:e,selectors:[["user-edit-dialog"]],decls:34,vars:14,consts:[["method","post","validate","",3,"ngSubmit"],["f","ngForm"],[1,"card-content",2,"padding-top","0px"],[1,"card-title","text-left"],[1,"card-content"],[1,"checkbox"],["enabled","","id","change_password","name","change_password","type","checkbox",3,"ngModel","ngModelChange"],["for","change_password"],["class","form-group text-left",4,"ngIf"],[1,"form-group","text-left"],["type","text","required","",1,"dropdown-toggle","form-control",3,"name","ngModel","ngModelChange"],[3,"value"],["type","text","class","dropdown-toggle form-control","required","",3,"name","ngModel","ngModelChange",4,"ngIf"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-fill","btn-success",3,"disabled"],["class","fa fa-spinner fa-pulse fa-1x fa-fw","aria-hidden","true",4,"ngIf"],["type","button",1,"btn","btn-simple",3,"click"],["type","password","name","password","minlength","6","validateEqual","password_again","reverse","true",1,"form-control",3,"required","ngModel","ngModelChange",6,"placeholder"],["password","ngModel"],[1,"text-danger",3,"hidden"],["type","password","name","password_again","minlength","6","placeholder","Password","reverse","false","validateEqual","password",1,"form-control",3,"required","ngModel","ngModelChange"],["password_again","ngModel"],[3,"value",4,"ngFor","ngForOf"],["aria-hidden","true",1,"fa","fa-spinner","fa-pulse","fa-1x","fa-fw"]],template:function(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div"),f.Sb(1,"form",0,1),f.fc("ngSubmit",(function(){f.zc(i);var e=f.xc(2);return t.updateUser(e.valid)})),f.Sb(3,"div",2),f.Sb(4,"h4",3),f.Wb(5,n),f.Rb(),f.Rb(),f.Sb(6,"div",4),f.Sb(7,"div",5),f.Sb(8,"input",6),f.fc("ngModelChange",(function(e){return t.changePassword=e})),f.Rb(),f.Sb(9,"label",7),f.Jc(10," Change Password "),f.Rb(),f.Rb(),f.Hc(11,R,8,3,"div",8),f.Hc(12,w,7,3,"div",8),f.Sb(13,"fieldset"),f.Sb(14,"div",9),f.Sb(15,"label"),f.Jc(16,"User type"),f.Rb(),f.Sb(17,"select",10),f.fc("ngModelChange",(function(e){return t.userEditing.userType=e})),f.Sb(18,"option",11),f.Jc(19),f.Rb(),f.Sb(20,"option",11),f.Jc(21),f.Rb(),f.Sb(22,"option",11),f.Jc(23),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(24,"div",9),f.Sb(25,"label"),f.Jc(26,"Scope of Access"),f.Rb(),f.Hc(27,L,4,4,"select",12),f.Rb(),f.Sb(28,"div",13),f.Sb(29,"button",14),f.ac(30,m),f.Hc(31,C,2,0,"i",15),f.Yb(),f.Rb(),f.Sb(32,"button",16),f.fc("click",(function(){return t.cancelEditLiveStream()})),f.Wb(33,s),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb()}2&e&&(f.Bb(8),f.qc("ngModel",t.changePassword),f.Bb(3),f.qc("ngIf",t.changePassword),f.Bb(1),f.qc("ngIf",t.changePassword),f.Bb(5),f.qc("name","UserType")("ngModel",t.userEditing.userType),f.Bb(1),f.rc("value",t.AdminUserType),f.Bb(1),f.Kc(t.AdminUserType),f.Bb(1),f.rc("value",t.BasicUserType),f.Bb(1),f.Kc(t.BasicUserType),f.Bb(1),f.rc("value",t.ReadOnlyUserType),f.Bb(1),f.Kc(t.ReadOnlyUserType),f.Bb(4),f.qc("ngIf",t.applications),f.Bb(2),f.qc("disabled",t.userUpdating),f.Bb(2),f.qc("ngIf",t.userUpdating))},directives:[g.x,g.l,g.m,g.a,g.k,g.n,p.n,g.u,g.t,g.o,g.w,g.d,g.g,h,p.m],encapsulation:2}),e}(),P=i("D8EZ"),_=(i("4XzM"),i("S7rW"),i("tk/3")),O=i("tyNb"),N=i("Qu3c"),D=["class","settings"];function A(e,t){1&e&&(f.Sb(0,"div",26),f.Sb(1,"p",33),f.Nb(2,"i",34),f.Jc(3," Please wait.."),f.Rb(),f.Rb())}function j(e,t){if(1&e&&(f.Sb(0,"div",26),f.Sb(1,"p",33),f.Nb(2,"i",35),f.Jc(3),f.Rb(),f.Sb(4,"small",36),f.Jc(5),f.Rb(),f.Rb()),2&e){var i=f.jc(3);f.Bb(3),f.Lc(" ",i.licenseStatus," "),f.Bb(2),f.Kc(i.licenseStatusExplaination)}}function J(e,t){if(1&e&&(f.Sb(0,"div",26),f.Sb(1,"p",33),f.Nb(2,"i",34),f.Jc(3),f.Rb(),f.Rb()),2&e){var i=f.jc(3);f.Bb(3),f.Lc(" ",i.licenseStatus,"..")}}function k(e,t){if(1&e&&(f.Sb(0,"div",26),f.Sb(1,"p",33),f.Nb(2,"i",37),f.Jc(3),f.Rb(),f.Rb()),2&e){var i=f.jc(3);f.Bb(3),f.Nc(" Owner : ",i.currentLicence.owner," | Until : ",i.currentLicence.endDate," ",i._messageReceived,"")}}function z(e,t){if(1&e&&(f.Sb(0,"div",31),f.Sb(1,"label",25),f.Jc(2,"License Status"),f.Rb(),f.Hc(3,A,4,0,"div",32),f.Hc(4,j,6,2,"div",32),f.Hc(5,J,4,1,"div",32),f.Hc(6,k,4,3,"div",32),f.Rb()),2&e){var i=f.jc(2);f.Bb(3),f.qc("ngIf",i.licenseStatusReceiving),f.Bb(1),f.qc("ngIf",!i.licenseStatusReceiving&&("Invalid"===i.licenseStatus||"Suspended"===i.licenseStatus||"Expired"===i.licenseStatus||"Trial expired"===i.licenseStatus)),f.Bb(1),f.qc("ngIf",!i.licenseStatusReceiving&&"Getting license status"===i.licenseStatus),f.Bb(1),f.qc("ngIf",!i.licenseStatusReceiving&&"Valid"===i.licenseStatus)}}function H(e,t){if(1&e){var i=f.Tb();f.Sb(0,"fieldset"),f.Sb(1,"div",24),f.Sb(2,"label",25),f.Jc(3,"Submit License Key"),f.Rb(),f.Sb(4,"div",38),f.Sb(5,"input",39,40),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc(2).serverSettings.licenceKey=e})),f.Rb(),f.Sb(7,"small",41),f.Wb(8,x),f.Rb(),f.Rb(),f.Rb(),f.Rb()}if(2&e){var n=f.xc(6);f.jc();var s=f.xc(3),a=f.jc();f.Bb(5),f.qc("ngModel",a.serverSettings.licenceKey),f.Bb(2),f.qc("hidden",n.valid||!s.submitted)}}function F(e,t){1&e&&(f.Sb(0,"p"),f.Jc(1," This is the Ant Media Server MarketPlace Edition. No need to license activation. "),f.Rb())}function K(e,t){1&e&&(f.Sb(0,"p"),f.Jc(1," This is the Ant Media Server Community Edition. No need to license activation. "),f.Rb())}function W(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div",19),f.Sb(1,"div"),f.Sb(2,"form",20,21),f.fc("ngSubmit",(function(){f.zc(i);var e=f.xc(3);return f.jc().changeServerSettings(e.valid)})),f.Sb(4,"fieldset"),f.Hc(5,z,7,4,"div",22),f.Rb(),f.Hc(6,H,9,2,"fieldset",23),f.Sb(7,"fieldset"),f.Sb(8,"div",24),f.Sb(9,"label",25),f.Jc(10,"Log Status"),f.Rb(),f.Sb(11,"div",26),f.Sb(12,"select",27),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().logLevelChanged(e)}))("ngModelChange",(function(e){return f.zc(i),f.jc().serverSettings.logLevel=e})),f.Sb(13,"option",28),f.Jc(14),f.Rb(),f.Sb(15,"option",28),f.Jc(16),f.Rb(),f.Sb(17,"option",28),f.Jc(18),f.Rb(),f.Sb(19,"option",28),f.Jc(20),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(21,"fieldset"),f.Sb(22,"div",29),f.Sb(23,"button",30),f.Wb(24,I),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Hc(25,F,2,0,"p",23),f.Hc(26,K,2,0,"p",23),f.Rb()}if(2&e){var n=f.jc();f.Bb(5),f.qc("ngIf",!n.serverSettings.buildForMarket&&n.isEnterpriseEdition),f.Bb(1),f.qc("ngIf",!n.serverSettings.buildForMarket&&n.isEnterpriseEdition),f.Bb(6),f.qc("name","resolutionHeight")("ngModel",n.serverSettings.logLevel),f.Bb(1),f.rc("value",n.logLevelInfo),f.Bb(1),f.Kc(n.logLevelInfo),f.Bb(1),f.rc("value",n.logLevelWarn),f.Bb(1),f.Kc(n.logLevelWarn),f.Bb(1),f.rc("value",n.logLevelError),f.Bb(1),f.Kc(n.logLevelError),f.Bb(1),f.rc("value",n.logLevelOff),f.Bb(1),f.Kc(n.logLevelOff),f.Bb(5),f.qc("ngIf",n.isEnterpriseEdition&&n.serverSettings.buildForMarket),f.Bb(1),f.qc("ngIf",!n.isEnterpriseEdition)}}T=$localize(v.a([":licence key settings licence | @@LicenceTabHeader\u241f39d434c3e1e0988a1585ca45293147f1ffc504c8\u241f5385767692216459316:General "],[":licence key settings licence | @@LicenceTabHeader\u241f39d434c3e1e0988a1585ca45293147f1ffc504c8\u241f5385767692216459316:General "])),U=$localize(v.a([":user settings |log@@LogTabHeader\u241fc788cac76d243927421aae8cc4e9a73d102e39b6\u241f4832842301452906736:Users"],[":user settings |log@@LogTabHeader\u241fc788cac76d243927421aae8cc4e9a73d102e39b6\u241f4832842301452906736:Users"])),B=$localize(v.a([":@@newUserButton\u241fa97864c21cd0327003f0b0aa23e426f7c8a9857f\u241f2750332368858308630:New User "],[":@@newUserButton\u241fa97864c21cd0327003f0b0aa23e426f7c8a9857f\u241f2750332368858308630:New User "])),I=$localize(v.a([":@@saveForm\u241f52c9a103b812f258bcddc3d90a6e3f46871d25fe\u241f3768927257183755959:Save"],[":@@saveForm\u241f52c9a103b812f258bcddc3d90a6e3f46871d25fe\u241f3768927257183755959:Save"])),x=$localize(v.a([":@@broadcastNameIsRequired\u241f2935f254a8da07a44a156de5a0a9e7fcde26af92\u241f1710446914149843457: License key should be at least 4 characters. "],[":@@broadcastNameIsRequired\u241f2935f254a8da07a44a156de5a0a9e7fcde26af92\u241f1710446914149843457: License key should be at least 4 characters. "])),M=$localize(v.a([":@@newPassword\u241fc1b7e6d75ff4285c7636c67e5ef259629b81725b\u241f3241357959735682038:Confirm Password"],[":@@newPassword\u241fc1b7e6d75ff4285c7636c67e5ef259629b81725b\u241f3241357959735682038:Confirm Password"]));var Y,X,Q=["placeholder",$localize(v.a([":@@password_place_holder\u241fc32ef07f8803a223a83ed17024b38e8d82292407\u241f1431416938026210429:Password"],[":@@password_place_holder\u241fc32ef07f8803a223a83ed17024b38e8d82292407\u241f1431416938026210429:Password"]))];function G(e,t){if(1&e&&(f.Sb(0,"option"),f.Jc(1),f.Rb()),2&e){var i=t.$implicit;f.Bb(1),f.Lc(" ",i," ")}}function V(e,t){1&e&&(f.ac(0,X,1),f.Nb(1,"i",34),f.Yb())}function Z(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div",4),f.Sb(1,"form",42,21),f.fc("ngSubmit",(function(){f.zc(i);var e=f.xc(2);return f.jc().createUser(e.valid)})),f.Sb(3,"div",43),f.Sb(4,"h4",44),f.Jc(5," New User "),f.Rb(),f.Rb(),f.Sb(6,"div",5),f.Sb(7,"div",31),f.Sb(8,"label"),f.Jc(9,"Username (e-mail)"),f.Rb(),f.Sb(10,"input",45,46),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().User.email=e})),f.Rb(),f.Sb(12,"small",41),f.Jc(13," Username should be at least 4 characters. "),f.Rb(),f.Rb(),f.Sb(14,"div",31),f.Sb(15,"label"),f.Jc(16,"Password"),f.Rb(),f.Sb(17,"input",47,48),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().User.password=e})),f.Rb(),f.Sb(19,"small",41),f.Jc(20," Password should be at least 6 characters. "),f.Rb(),f.Rb(),f.Sb(21,"div",31),f.Sb(22,"label"),f.Wb(23,M),f.Rb(),f.Sb(24,"input",49,50),f.Xb(26,Q),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().confirmPasswordModel=e})),f.Rb(),f.Sb(27,"small",41),f.Jc(28," Passwords should match "),f.Rb(),f.Rb(),f.Sb(29,"div",31),f.Sb(30,"label"),f.Jc(31,"User type \xa0"),f.Nb(32,"i",51),f.Rb(),f.Sb(33,"select",27),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().User.userType=e})),f.Sb(34,"option",28),f.Jc(35),f.Rb(),f.Sb(36,"option",28),f.Jc(37),f.Rb(),f.Sb(38,"option",28),f.Jc(39),f.Rb(),f.Rb(),f.Rb(),f.Sb(40,"div",31),f.Sb(41,"label"),f.Jc(42,"Scope of Access \xa0"),f.Nb(43,"i",52),f.Rb(),f.Sb(44,"select",27),f.fc("ngModelChange",(function(e){return f.zc(i),f.jc().User.scope=e})),f.Sb(45,"option",28),f.Jc(46,"Everything"),f.Rb(),f.Hc(47,G,2,1,"option",53),f.Rb(),f.Rb(),f.Sb(48,"div",29),f.Sb(49,"button",54),f.ac(50,X),f.Hc(51,V,2,0,"i",55),f.Yb(),f.Rb(),f.Sb(52,"button",56),f.fc("click",(function(){return f.zc(i),f.jc().cancelNewUser()})),f.Wb(53,Y),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb()}if(2&e){var n=f.xc(2),s=f.xc(11),a=f.xc(18),c=f.xc(25),r=f.jc();f.Bb(10),f.qc("ngModel",r.User.email),f.Bb(2),f.qc("hidden",s.valid||!n.submitted),f.Bb(5),f.qc("ngModel",r.User.password),f.Bb(2),f.qc("hidden",a.valid||!n.submitted),f.Bb(5),f.qc("ngModel",r.confirmPasswordModel),f.Bb(3),f.qc("hidden",c.valid||!n.submitted),f.Bb(6),f.qc("name","UserType")("ngModel",r.User.userType),f.Bb(1),f.rc("value",r.AdminUserType),f.Bb(1),f.Kc(r.AdminUserType),f.Bb(1),f.rc("value",r.BasicUserType),f.Bb(1),f.Kc(r.BasicUserType),f.Bb(1),f.rc("value",r.ReadOnlyUserType),f.Bb(1),f.Kc(r.ReadOnlyUserType),f.Bb(5),f.qc("name","ApplicationPermission")("ngModel",r.User.scope),f.Bb(1),f.rc("value",r.SYSTEM_SCOPE_OF_ACCESS),f.Bb(2),f.qc("ngForOf",r.applications.applications),f.Bb(2),f.qc("disabled",r.newUserCreating),f.Bb(2),f.qc("ngIf",r.newUserCreating)}}function ee(e,t){if(1&e){var i=f.Tb();f.Sb(0,"div",57),f.Sb(1,"div",58),f.Sb(2,"input",59),f.fc("keyup",(function(e){return f.zc(i),f.jc().applyFilter(e.target.value)})),f.Rb(),f.Rb(),f.Rb()}}function te(e,t){1&e&&(f.Sb(0,"mat-header-cell",73),f.Jc(1,"Username"),f.Rb()),2&e&&f.qc("ngClass","email-column")}function ie(e,t){1&e&&(f.Qb(0),f.Jc(1," [No Name] "),f.Pb())}function ne(e,t){if(1&e&&(f.Sb(0,"mat-cell",74),f.Sb(1,"div",75),f.Jc(2),f.Hc(3,ie,2,0,"ng-container",23),f.Rb(),f.Rb()),2&e){var i=t.$implicit;f.qc("ngClass","email-column"),f.Bb(2),f.Lc(" ",i.email," "),f.Bb(1),f.qc("ngIf",!i.email||0==i.email.length)}}function se(e,t){1&e&&(f.Sb(0,"mat-header-cell",73),f.Jc(1," User Type \xa0"),f.Nb(2,"i",51),f.Rb()),2&e&&f.qc("ngClass","type-column")}function ae(e,t){if(1&e&&(f.Sb(0,"mat-cell",74),f.Sb(1,"div",75),f.Jc(2),f.Rb(),f.Rb()),2&e){var i=t.$implicit;f.qc("ngClass","type-column"),f.Bb(2),f.Lc(" ",i.userType," ")}}function ce(e,t){1&e&&(f.Sb(0,"mat-header-cell",73),f.Jc(1," Scope of Access \xa0"),f.Nb(2,"i",52),f.Rb()),2&e&&f.qc("ngClass","permissions-column")}function re(e,t){1&e&&(f.Qb(0),f.Jc(1," Everything "),f.Pb())}function oe(e,t){1&e&&(f.Qb(0),f.Jc(1," Everything "),f.Pb())}function le(e,t){if(1&e&&(f.Qb(0),f.Jc(1),f.Pb()),2&e){var i=f.jc().$implicit;f.Bb(1),f.Lc(" ",i.scope," ")}}function de(e,t){if(1&e&&(f.Sb(0,"mat-cell",74),f.Sb(1,"div",75),f.Qb(2,76),f.Hc(3,re,2,0,"ng-container",77),f.Hc(4,oe,2,0,"ng-container",77),f.Hc(5,le,2,1,"ng-container",78),f.Pb(),f.Rb(),f.Rb()),2&e){var i=t.$implicit;f.qc("ngClass","permissions-column"),f.Bb(2),f.qc("ngSwitch",i.scope),f.Bb(1),f.qc("ngSwitchCase","system")}}function be(e,t){1&e&&(f.Sb(0,"mat-header-cell",79),f.Jc(1," Actions "),f.Rb())}function ue(e,t){if(1&e){var i=f.Tb();f.Sb(0,"mat-cell",79),f.Sb(1,"button",80),f.fc("click",(function(){f.zc(i);var e=t.$implicit;return f.jc(2).changeType(e)})),f.Sb(2,"span",81),f.Nb(3,"i",82),f.Rb(),f.Ob(4),f.Rb(),f.Sb(5,"button",83),f.fc("click",(function(){f.zc(i);var e=t.$implicit;return f.jc(2).deleteUser(e.email)})),f.Sb(6,"span",81),f.Nb(7,"i",84),f.Rb(),f.Rb(),f.Rb()}}function fe(e,t){1&e&&f.Nb(0,"mat-header-row")}function ge(e,t){1&e&&f.Nb(0,"mat-row")}function pe(e,t){if(1&e&&(f.Sb(0,"div",60),f.Sb(1,"div",61),f.Sb(2,"mat-table",62),f.Qb(3,63),f.Hc(4,te,2,1,"mat-header-cell",64),f.Hc(5,ne,4,3,"mat-cell",65),f.Pb(),f.Qb(6,66),f.Hc(7,se,3,1,"mat-header-cell",64),f.Hc(8,ae,3,2,"mat-cell",65),f.Pb(),f.Qb(9,67),f.Hc(10,ce,3,1,"mat-header-cell",64),f.Hc(11,de,6,3,"mat-cell",65),f.Pb(),f.Qb(12,68),f.Hc(13,be,2,0,"mat-header-cell",69),f.Hc(14,ue,8,0,"mat-cell",70),f.Pb(),f.Hc(15,fe,1,0,"mat-header-row",71),f.Hc(16,ge,1,0,"mat-row",72),f.Rb(),f.Rb(),f.Rb()),2&e){var i=f.jc();f.Bb(2),f.qc("dataSource",i.dataSource),f.Bb(13),f.qc("matHeaderRowDef",i.displayedColumnsStreams),f.Bb(1),f.qc("matRowDefColumns",i.displayedColumnsStreams)}}Y=$localize(v.a([":@@newUserCancelButton\u241fd7b35c384aecd25a516200d6921836374613dfe7\u241f2159130950882492111:Cancel"],[":@@newUserCancelButton\u241fd7b35c384aecd25a516200d6921836374613dfe7\u241f2159130950882492111:Cancel"])),X=$localize(v.a([":@@newUserCreateButton\u241f38a26d7db25acc2c4f8cd99a4c25ffdf833e450a\u241f7931405919512135267:",":START_ITALIC_TEXT:",":CLOSE_ITALIC_TEXT:Create"],[":@@newUserCreateButton\u241f38a26d7db25acc2c4f8cd99a4c25ffdf833e450a\u241f7931405919512135267:",":START_ITALIC_TEXT:",":CLOSE_ITALIC_TEXT:Create"]),"\ufffd*51:1\ufffd\ufffd#1:1\ufffd","\ufffd/#1:1\ufffd\ufffd/*51:1\ufffd");var he=function(){function e(e,t,i,n,s,a,c,r){this.http=e,this.route=t,this.restService=i,this.dialog=n,this.cdr=s,this.router=a,this.dataService=c,this.authService=r,this.settingsReceived=!1,this.licenseStatus="Getting license status",this.licenseStatusReceiving=!1,this.displayWarning=!0,this.isEnterpriseEdition=!1,this.logLevelInfo="INFO",this.logLevelWarn="WARN",this.logLevelError="ERROR",this.logLevelOff="OFF",this.newUserCreating=!1,this.AdminUserType="ADMIN",this.ReadOnlyUserType="READ_ONLY",this.BasicUserType="USER",this.SYSTEM_SCOPE_OF_ACCESS="system",this.displayedColumnsStreams=["email","type","permissions","actions"],this.userListOffset=0,this.pageSize=0,this.userNameEmpty=!1,this.filter="",this.allLicensesUsedError="ALL_LICENSES_ARE_USED",this.noLicenseFounrError="NO_LICENSE_FOUND",this.licenseExpireError="LICENSE_EXPIRED",this.licenseServerRequestError="serverRequestError",this.invalidKeyError="INVALID_KEY",this.licenseBlocked="LICENSE_BLOCKED",this.TRIAL_PERIOD_ENDED="TRIAL_PERIOD_ENDED"}return Object.defineProperty(e.prototype,"messageReceived",{get:function(){return this._messageReceived},set:function(e){this._messageReceived=e},enumerable:!1,configurable:!0}),e.prototype.ngOnInit=function(){var e=this;this.serverSettings=new c.b(null,null,!1,this.logLevelInfo),this.callTimer(),this.userDataTable={dataRows:[]},this.restService.getApplications().subscribe((function(t){e.applications=t,console.debug(t)}),(function(e){Object(o.d)(e)}))},e.prototype.ngAfterViewInit=function(){var e=this;this.restService.isEnterpriseEdition().subscribe((function(t){e.isEnterpriseEdition=t.success,e.getServerSettings()}),(function(e){Object(o.d)(e)})),this.getUserList(this.userListOffset,this.pageSize)},e.prototype.ngOnDestroy=function(){this.clearTimer()},e.prototype.logLevelChanged=function(e){e==this.logLevelInfo&&(this.serverSettings.logLevel=this.logLevelInfo),e==this.logLevelWarn&&(this.serverSettings.logLevel=this.logLevelWarn),e==this.logLevelError&&(this.serverSettings.logLevel=this.logLevelError),e==this.logLevelOff&&(this.serverSettings.logLevel=this.logLevelOff)},e.prototype.applyFilter=function(e){e=(e=e.trim()).toLowerCase(),this.filter=e,this.dataSource.filter=e},e.prototype.changeType=function(e){var t=this;e.email!=localStorage.getItem(P.a)?this.dialog.open(q,{data:{email:e.email,type:e.userType,scope:e.scope},width:"400px"}).afterClosed().subscribe((function(e){console.log("The dialog was closed"),t.getUserList(t.userListOffset,t.pageSize)})):$.notify({icon:"ti-alert",message:"You cannot edit yourself. If you want to change password, use the Change Password on the right top menu"},{type:"warning",delay:4e3,placement:{from:"top",align:"right"}})},e.prototype.getUserList=function(e,t){var i=this;this.restService.getUsers().subscribe((function(e){for(var t in i.userDataTable.dataRows=[],e){var n=[];for(var s in e[t].endPointList)n.push(e[t].endPointList[s]);i.userDataTable.dataRows.push(e[t])}i.dataSource=new b.k(i.userDataTable.dataRows),""==i.filter&&null==i.filter&&null==i.filter||(i.dataSource.filter=i.filter),i.cdr.detectChanges()}),(function(e){Object(o.d)(e)}))},e.prototype.callTimer=function(){var e=this;console.log("Timer Started"),this.clearTimer(),this.timerId=window.setInterval((function(){e.authService.isAuthenticated&&e.getUserList(e.userListOffset,e.pageSize)}),15e3)},e.prototype.clearTimer=function(){clearInterval(this.timerId),this.timerId=null},e.prototype.getLastLicenseStatus=function(){var e=this;this.isEnterpriseEdition&&(this.licenseStatusReceiving=!0,this.restService.getLastLicenseStatus().subscribe((function(t){e.licenseStatusReceiving=!1,e.evaluateLicenseStatus(t)}),(function(e){Object(o.d)(e)})))},e.prototype.getLicenseStatus=function(){var e=this;return this.licenseStatusReceiving=!0,this.isEnterpriseEdition&&(this.serverSettings.licenceKey=this.serverSettings.licenceKey.trim(),this.restService.getLicenseStatus(this.serverSettings.licenceKey).subscribe((function(t){e.licenseStatusReceiving=!1,e.evaluateLicenseStatus(t)}),(function(e){Object(o.d)(e)}))),this.currentLicence},e.prototype.evaluateLicenseStatus=function(e){var t="Invalid License";if(this.licenseStatusExplaination="Please validate your license",null!=e&&(this.currentLicence=e),null==this.currentLicence||null==this.currentLicence.licenceId)this.licenseStatus="Invalid",console.log("invalid license"),this.currentLicence.status==this.licenseServerRequestError?(t="Could Not Connect To License Server",this.licenseStatus="Network is unaccessible",this.licenseStatusExplaination="Please check your connection"):this.currentLicence.status==this.licenseExpireError?(this.licenseStatus="Expired",this.licenseStatusExplaination="Your license is expired, please renew your license at antmedia.io"):this.currentLicence.status==this.invalidKeyError||this.currentLicence.status==this.noLicenseFounrError?this.licenseStatusExplaination="Your license key is invalid":this.currentLicence.status==this.licenseBlocked?(this.licenseStatus="Suspended",this.licenseStatusExplaination="Your license is suspended. Please renew your license at antmedia.io"):this.currentLicence.status==this.allLicensesUsedError?this.licenseStatusExplaination="You have reached your licence limit. Please close some of your running instances":this.currentLicence.status==this.TRIAL_PERIOD_ENDED&&(this.licenseStatus="Trial expired",this.licenseStatusExplaination="Your trial period is expired. Please buy a license at antmedia.io or extend your trial"),this.authService.licenceWarningDisplay&&!this.serverSettings.buildForMarket&&swal({title:t,text:this.licenseStatusExplaination,type:"error",confirmButtonColor:"#3085d6",confirmButtonText:"OK",onClose:function(){}}).then((function(){})).catch((function(){}));else{this.licenseStatus="Valid",this.authService.licenceWarningDisplay=!1;var i=this.currentLicence.endDate;this.leftDays=this.differenceInDays((new Date).getTime(),new Date(i).getTime()),this.leftDays<16&&this.authService.licenceWarningDisplay&&(console.log("Your license expires in "+this.leftDays+" days"),swal({title:"Your license expires in "+this.leftDays+" days",text:"Please Renew Your License ",type:"info",confirmButtonColor:"#3085d6",confirmButtonText:"OK",onClose:function(){}}).then((function(){})).catch((function(){})),this.authService.licenceWarningDisplay=!1)}},e.prototype.changeServerSettings=function(e){var t=this;e&&!this.serverSettings.buildForMarket&&this.isEnterpriseEdition&&this.restService.changeServerSettings(this.serverSettings).subscribe((function(e){1==e.success?($.notify({icon:"ti-save",message:r.a.getLocaleInterface().license_saved},{type:"success",delay:900,placement:{from:"top",align:"right"}}),t.authService.serverSettings=t.serverSettings,t.authService.licenceWarningDisplay=!0,t.serverSettings.buildForMarket||t.getLicenseStatus()):$.notify({icon:"ti-alert",message:r.a.getLocaleInterface().settings_not_saved},{type:"warning",delay:1900,placement:{from:"top",align:"right"}})}),(function(e){Object(o.d)(e)}))},e.prototype.newUser=function(){this.newUserActive=!0,this.userNameEmpty=!1,this.User=new l.f("","")},e.prototype.cancelNewUser=function(){this.newUserActive=!1},e.prototype.deleteUser=function(e){var t=this;localStorage.getItem(P.a)!=e?swal({title:r.a.getLocaleInterface().are_you_sure,text:r.a.getLocaleInterface().wont_be_able_to_revert,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){t.restService.deleteUser(e).subscribe((function(e){1==e.success?$.notify({icon:"ti-save",message:"Successfully deleted"},{type:"success",delay:900,placement:{from:"top",align:"right"}}):$.notify({icon:"ti-alert",message:"User is not deleted"},{type:"warning",delay:900,placement:{from:"top",align:"right"}}),t.getUserList(t.userListOffset,t.pageSize)}),(function(e){Object(o.d)(e)}))})):$.notify({icon:"ti-save",message:"You cannot delete yourself"},{type:"warning",delay:900,placement:{from:"top",align:"right"}})},e.prototype.createUser=function(e){var t=this;console.log("create user called"),this.userNameEmpty=!1,e?(console.log("create user called 2"),this.restService.checkStreamName(this.User.email)?(console.log("create user called 3"),this.newUserCreating=!0,this.restService.createUser(this.User).subscribe((function(e){console.log("data :"+JSON.stringify(e)),1==e.success?(t.newUserActive=!1,$.notify({icon:"ti-save",message:r.a.getLocaleInterface().new_user_created},{type:"success",delay:900,placement:{from:"top",align:"right"}}),t.getUserList(t.userListOffset,t.pageSize),t.User.fullName=""):$.notify({icon:"ti-alert",message:"User is not created. "+e.message},{type:"warning",delay:900,placement:{from:"top",align:"right"}})}),(function(e){Object(o.d)(e)})),this.newUserCreating=!1):this.userNameEmpty=!0):console.log("Form is not valid")},e.prototype.getServerSettings=function(){var e=this;this.restService.getServerSettings().subscribe((function(t){e.serverSettings=t,e.settingsReceived=!0,e.serverSettings.buildForMarket||e.getLastLicenseStatus()}),(function(e){Object(o.d)(e)}))},e.prototype.differenceInDays=function(e,t){return Math.round((t-e)/864e5)},e.\u0275fac=function(t){return new(t||e)(f.Mb(_.b),f.Mb(O.a),f.Mb(l.e),f.Mb(u.b),f.Mb(f.h),f.Mb(O.c),f.Mb(d.a),f.Mb(o.a))},e.\u0275cmp=f.Gb({type:e,selectors:[["server",8,"settings"]],attrs:D,decls:26,vars:4,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-content"],[1,"nav-tabs-navigation"],[1,"nav-tabs-wrapper"],["id","tabs","data-tabs","tabs",1,"nav","nav-tabs"],["href","#licence","data-toggle","tab",1,"active"],["href","#users","data-toggle","tab"],["id","my-tab-content",1,"tab-content","text-center"],["class","tab-pane active","id","licence",4,"ngIf"],["id","users",1,"tab-pane","container-fluid"],[1,"text-right",2,"float","right"],["role","button",1,"btn","btn-fill","btn-success",3,"click"],["class","card",4,"ngIf"],["style","display: flex; justify-content: flex-end",4,"ngIf"],["id","broadcastTable","style","text-align: left;",4,"ngIf"],["id","licence",1,"tab-pane","active"],["method","post",1,"form-horizontal",3,"ngSubmit"],["f","ngForm"],["class","form-group text-left",4,"ngIf"],[4,"ngIf"],[1,"form-group"],[1,"col-sm-2","control-label"],[1,"col-sm-10"],["type","text","required","",1,"dropdown-toggle","form-control",3,"name","ngModel","ngModelChange"],[3,"value"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-fill","btn-info"],[1,"form-group","text-left"],["class","col-sm-10",4,"ngIf"],[1,"form-control-static","text-left"],["aria-hidden","true",1,"fa","fa-spinner","fa-pulse","fa-1x","fa-fw"],[1,"fa","fa-circle","text-muted",2,"color","#98000d"],[1,"form-control-static"],[1,"ti-check",2,"color","#199826","font-size","1.1em"],[1,"col-sm-10","text-left"],["type","text","required","","minlength","1","name","licenseKey","placeholder","Write your license key",1,"form-control",3,"ngModel","ngModelChange"],["licenseKey","ngModel"],[1,"text-danger",3,"hidden"],["method","post","validate","",3,"ngSubmit"],[1,"card-header"],[1,"card-title","text-left"],["type","text","required","","minlength","4","name","newUserName","placeholder","Username",1,"form-control",3,"ngModel","ngModelChange"],["newUserName","ngModel"],["type","password","required","","minlength","6","name","Password","autocomplete","new-password","placeholder","Password","validateEqual","confirmPassword","reverse","true",1,"form-control",3,"ngModel","ngModelChange"],["Password","ngModel"],["type","password","required","","minlength","6","name","confirmPassword","autocomplete","new-password","reverse","false","validateEqual","Password",1,"form-control",3,"ngModel","ngModelChange",6,"placeholder"],["confirmPassword","ngModel"],["matTooltip","ADMIN user can do anything in their scope. USER can CRUD live streams/upload VoDs in their scope except they cannot change settings/users/applications. READ_ONLY user can only read in their scope",1,"fa","fa-info-circle"],["matTooltip","'Everything' is access to applications/logs/settings. Application specific access is access to the related app",1,"fa","fa-info-circle"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-fill","btn-success",2,"margin","15px",3,"disabled"],["class","fa fa-spinner fa-pulse fa-1x fa-fw","aria-hidden","true",4,"ngIf"],["type","button",1,"btn","btn-simple",3,"click"],[2,"display","flex","justify-content","flex-end"],[1,"mat-header"],["placeholder","Search",3,"keyup"],["id","broadcastTable",2,"text-align","left"],[1,"mat-container","mat-elevation-z0"],["matSort","",2,"overflow","visible !important",3,"dataSource"],["matColumnDef","email"],["mat-sort-header","",3,"ngClass",4,"matHeaderCellDef"],[3,"ngClass",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","permissions"],["matColumnDef","actions"],["class","justify-flex-end",4,"matHeaderCellDef"],["class","justify-flex-end",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-sort-header","",3,"ngClass"],[3,"ngClass"],[2,"padding-left","12px"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"justify-flex-end"],["title","Change Type","data-toggle","tooltip","type","button",1,"btn","btn-simple","btn-magnify","btn-info","btn-xs","big-icons",3,"click"],[1,"btn-label"],[1,"ti-pencil"],["type","button",1,"btn","btn-simple","btn-magnify","btn-danger","btn-xs","big-icons",3,"click"],[1,"ti-close"]],template:function(e,t){1&e&&(f.Sb(0,"div",0),f.Sb(1,"div",1),f.Sb(2,"div",2),f.Sb(3,"div",3),f.Sb(4,"div",4),f.Sb(5,"div",5),f.Sb(6,"div",6),f.Sb(7,"div",7),f.Sb(8,"ul",8),f.Sb(9,"li"),f.Sb(10,"a",9),f.Wb(11,T),f.Rb(),f.Rb(),f.Sb(12,"li"),f.Sb(13,"a",10),f.Wb(14,U),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(15,"div",11),f.Hc(16,W,27,14,"div",12),f.Sb(17,"div",13),f.Sb(18,"div",14),f.Sb(19,"button",15),f.fc("click",(function(){return t.newUser()})),f.Wb(20,B),f.Rb(),f.Rb(),f.Hc(21,Z,54,20,"div",16),f.Hc(22,ee,3,0,"div",17),f.Hc(23,pe,17,3,"div",18),f.Sb(24,"p"),f.Jc(25,"\xa0"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb()),2&e&&(f.Bb(16),f.qc("ngIf",t.settingsReceived),f.Bb(5),f.qc("ngIf",t.newUserActive),f.Bb(1),f.qc("ngIf",t.userDataTable.dataRows.length>0),f.Bb(1),f.qc("ngIf",t.userDataTable.dataRows.length>0))},directives:[p.n,g.x,g.l,g.m,g.u,g.t,g.k,g.n,g.o,g.w,g.d,g.g,h,N.a,p.m,b.j,b.c,b.e,b.b,b.g,b.i,b.d,p.l,b.a,p.p,p.q,p.r,b.f,b.h],encapsulation:2}),e.\u0275prov=f.Ib({token:e,factory:e.\u0275fac}),e}()}}]);