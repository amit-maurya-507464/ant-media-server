(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{TDBs:function(e,t,i){"use strict";i.r(t),i.d(t,"DashboardModule",(function(){return H}));var a,n,c,o,r,s,b,l,p,d,u,m=i("tyNb"),f=i("ofXK"),S=i("3Pt+"),v=i("U/Bw"),h=i("djWg"),y=(i("4XzM"),i("S7rW"),i("OLhb")),g=i("QpY3"),R=i("XGgE"),w=i("fXoL"),M=i("mrSG");function A(e,t){1&e&&(w.Sb(0,"small",46),w.Jc(1," Application name should not be empty. "),w.Rb())}function B(e,t){1&e&&w.Nb(0,"i",47)}function C(e,t){if(1&e&&(w.Sb(0,"small",48),w.Jc(1),w.Rb()),2&e){var i=w.jc(2);w.Bb(1),w.Lc(" Deploying the ",i.newApplicationName,". Please wait a few seconds. ")}}function U(e,t){if(1&e){var i=w.Tb();w.Sb(0,"div",33),w.Sb(1,"form",34,35),w.fc("ngSubmit",(function(){w.zc(i);var e=w.xc(2);return w.jc().createApplication(e.valid)})),w.Sb(3,"div",36),w.Sb(4,"label"),w.Jc(5,"New Application Name"),w.Rb(),w.Sb(6,"input",37,38),w.fc("ngModelChange",(function(e){return w.zc(i),w.jc().newApplicationName=e})),w.Rb(),w.Sb(8,"small",39),w.Jc(9," Applicaton name should be at least 4 characters. "),w.Rb(),w.Hc(10,A,2,0,"small",40),w.Rb(),w.Sb(11,"div",41),w.Sb(12,"button",42),w.Hc(13,B,1,0,"i",43),w.Jc(14,"Create"),w.Rb(),w.Sb(15,"button",44),w.fc("click",(function(){return w.zc(i),w.jc().cancelNewApplication()})),w.Jc(16,"Cancel"),w.Rb(),w.Rb(),w.Sb(17,"div",41),w.Hc(18,C,2,1,"small",45),w.Rb(),w.Rb(),w.Rb()}if(2&e){var a=w.xc(2),n=w.xc(7),c=w.jc();w.Bb(6),w.qc("ngModel",c.newApplicationName),w.Bb(2),w.qc("hidden",n.valid||!a.submitted),w.Bb(2),w.qc("ngIf",c.streamNameEmpty),w.Bb(2),w.qc("disabled",c.newAppCreating),w.Bb(1),w.qc("ngIf",c.newAppCreating),w.Bb(5),w.qc("ngIf",c.deployingApplication)}}function I(e,t){1&e&&(w.Sb(0,"th",30),w.Wb(1,d),w.Rb())}function N(e,t){1&e&&(w.Sb(0,"th",30),w.Wb(1,u),w.Rb())}function L(e,t){if(1&e&&(w.Sb(0,"td",30),w.Jc(1),w.Rb()),2&e){var i=w.jc().$implicit;w.Bb(1),w.Kc(i.vodCount)}}function j(e,t){if(1&e&&(w.Sb(0,"td",30),w.Jc(1),w.Rb()),2&e){var i=w.jc().$implicit,a=w.jc();w.Bb(1),w.Kc(a.niceBytes(i.storage))}}function k(e,t){if(1&e){var i=w.Tb();w.Sb(0,"tr"),w.Sb(1,"td",30),w.Jc(2),w.Rb(),w.Sb(3,"td"),w.Jc(4),w.Rb(),w.Sb(5,"td",30),w.Jc(6),w.Rb(),w.Hc(7,L,2,1,"td",31),w.Hc(8,j,2,1,"td",31),w.Sb(9,"td",30),w.Sb(10,"button",49),w.fc("click",(function(){w.zc(i);var e=t.$implicit;return w.jc().deleteApplication(e.name)})),w.Sb(11,"span",50),w.Nb(12,"i",51),w.Rb(),w.Rb(),w.Rb(),w.Rb()}if(2&e){var a=t.$implicit,n=t.index,c=w.jc();w.Bb(2),w.Kc(n+1),w.Bb(2),w.Kc(a.name),w.Bb(2),w.Kc(a.liveStreamCount),w.Bb(1),w.qc("ngIf",c.isMobileMenu()),w.Bb(1),w.qc("ngIf",c.isMobileMenu())}}a=$localize(M.a([":@@cpuLoadLabel\u241fcd94d7d170a196bd47ac49304c33e452d657702f\u241f1787030470314877664:System CPU Load"],[":@@cpuLoadLabel\u241fcd94d7d170a196bd47ac49304c33e452d657702f\u241f1787030470314877664:System CPU Load"])),n=$localize(M.a([":@@cpuLoadLabel\u241fc040a21d57546f25841db7eb1cee5463e3ee9991\u241f220171137157560388:AMS CPU Load"],[":@@cpuLoadLabel\u241fc040a21d57546f25841db7eb1cee5463e3ee9991\u241f220171137157560388:AMS CPU Load"])),c=$localize(M.a([":@@liveStreamCountLabel\u241f84a3c85a4cbc9125c4f722fb823503ce2fe6a65c\u241f4776132880318610364:Active Live Streams"],[":@@liveStreamCountLabel\u241f84a3c85a4cbc9125c4f722fb823503ce2fe6a65c\u241f4776132880318610364:Active Live Streams"])),o=$localize(M.a([":@@diskUsageLabel\u241ffd646b1a7b8b3bf29bd758b6e2a1ee851053d6aa\u241f3333453926782750251:System Disk"],[":@@diskUsageLabel\u241ffd646b1a7b8b3bf29bd758b6e2a1ee851053d6aa\u241f3333453926782750251:System Disk"])),r=$localize(M.a([":@@jvmNativeUsageLabel\u241fd35f4772670cb5298abefbf03341cb7d67e27f50\u241f7053430177496756068:System Memory"],[":@@jvmNativeUsageLabel\u241fd35f4772670cb5298abefbf03341cb7d67e27f50\u241f7053430177496756068:System Memory"])),s=$localize(M.a([":@@serverMemoryUsageLabel\u241f4507792df4d5e2833db387a68f3b67edc47671ba\u241f7872730209411387804:JVM Heap Memory"],[":@@serverMemoryUsageLabel\u241f4507792df4d5e2833db387a68f3b67edc47671ba\u241f7872730209411387804:JVM Heap Memory"])),b=$localize(M.a([":@@applicationsTitle\u241ff1abafaeb40ce52355ddcc24686e3cd17b64e08a\u241f6658000829978978023:Applications"],[":@@applicationsTitle\u241ff1abafaeb40ce52355ddcc24686e3cd17b64e08a\u241f6658000829978978023:Applications"])),l=$localize(M.a([":@@appName\u241fcff1428d10d59d14e45edec3c735a27b5482db59\u241f8953033926734869941:Name"],[":@@appName\u241fcff1428d10d59d14e45edec3c735a27b5482db59\u241f8953033926734869941:Name"])),p=$localize(M.a([":@@liveStreamCountLabel\u241f56aa2d870d6e4acf67d3a609971f9e13f7cb95a9\u241f1849716262582008823:Live Stream"],[":@@liveStreamCountLabel\u241f56aa2d870d6e4acf67d3a609971f9e13f7cb95a9\u241f1849716262582008823:Live Stream"])),d=$localize(M.a([":@@vodCountLabel\u241fea6bebc8757b7c4fb864873be159ab8df8639862\u241f7975642438628428227:VoD Count"],[":@@vodCountLabel\u241fea6bebc8757b7c4fb864873be159ab8df8639862\u241f7975642438628428227:VoD Count"])),u=$localize(M.a([":@@appStorageSizeLabel\u241f1fd6dbd0942f77002d852d7744dcb991cdd464d8\u241f57403663622654391:Storage"],[":@@appStorageSizeLabel\u241f1fd6dbd0942f77002d852d7744dcb991cdd464d8\u241f57403663622654391:Storage"]));var x=[{path:"",children:[{path:"",redirectTo:"overview"},{path:"overview",component:function(){function e(e,t,i,a){this.auth=e,this.restService=t,this.supportRestService=i,this.router=a,this.sentSuccess=!1,this.processing=!1,this.isClusterMode=!1,this.cpuLoadIntervalId=0,this.systemMemoryUsagePercent=0,this.units=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],this.newApplicationActive=!1,this.newAppCreating=!1,this.deployingApplication=!1}return e.prototype.niceBytes=function(e){for(var t=0,i=parseInt(e,10)||0;i>=1024;)i/=1024,t++;return i.toFixed(i>=100||t<1?0:1)+" "+this.units[t]},e.prototype.initCirclePercentage=function(){$("#chartDiskUsage,#chartJvmHeapUsage,#chartNativeMemoryUsage,#chartSystemMemory").easyPieChart({lineWidth:9,size:160,scaleColor:!1,trackColor:"#BBDEFB",barColor:"#1565C0",animate:!1})},e.prototype.ngOnInit=function(){this.appTableData={dataRows:[]}},e.prototype.ngAfterViewInit=function(){var e=this;this.initCirclePercentage(),this.getSystemResources(),this.getApplicationsInfo(),this.timerId=window.setInterval((function(){e.getSystemResources(),e.getApplicationsInfo()}),5e3),this.auth.initLicenseCheck(),this.restService.isInClusterMode().subscribe((function(t){e.isClusterMode=t.success,e.isClusterMode||window.setTimeout((function(){e.checkShutdownProperly()}),1e4)}),(function(e){Object(y.d)(e)}))},e.prototype.ngOnDestroy=function(){this.timerId&&clearInterval(this.timerId)},e.prototype.checkShutdownProperly=function(){for(var e=this,t=[],i=0;i<this.appTableData.dataRows.length;i++)t.push(this.appTableData.dataRows[i].name);this.restService.isShutdownProperly(t.join(",")).subscribe((function(i){0==i.success&&(swal({title:"Unexpected Shutdown",text:"We've detected that your instance has not been shutdown gracefully. Just enter your e-mail and click the Submit button to let us have the logs about the problem",type:"warning",input:"email",inputPlaceholder:"Please enter your email address",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Submit"}).then((function(t){var i=new g.a;i.name="",i.email=t,i.sendSystemInfo=!0,i.title="In App Shutdown Properly",i.description="Shutdown error email with logs",e.processing=!0,e.supportRestService.sendRequest(i).subscribe((function(t){e.processing=!1,1==t.success?(e.sentSuccess=!0,$.notify({icon:"ti-email",message:"Your request has been sent. Support team will contact through your e-mail soon."},{type:"success",delay:5e3,placement:{from:"top",align:"right"}})):$.notify({icon:"ti-alert",message:"Your request couldn't be sent. Please try again or send email to support@antmedia.io"},{type:"warning",delay:5e3,placement:{from:"top",align:"right"}})}),(function(e){Object(y.d)(e)}))})).catch((function(e){console.error("Error in shutdown properly: "+e)})),e.restService.setShutdownProperly(t.join(",")).subscribe((function(e){}),(function(e){Object(y.d)(e)})))}),(function(t){console.error("Server returns error: "+t.status+" for shutdown-properly"),setTimeout((function(){e.checkShutdownProperly()}),1e4),Object(y.d)(t)}))},e.prototype.getSystemResources=function(){var e=this;this.restService.getSystemResourcesInfo().subscribe((function(t){e.systemCpuLoad=Number(t.cpuUsage.systemCPULoad),e.processCpuLoad=Number(t.cpuUsage.processCPULoad),e.liveStreamSize=Number(t.totalLiveStreamSize),e.systemMemoryTotal=Number(t.systemMemoryInfo.totalMemory),e.systemMemoryInUse=Number(t.systemMemoryInfo.inUseMemory);var i=Number(t.systemMemoryInfo.availableMemory);0!=i&&(e.systemMemoryInUse=e.systemMemoryTotal-i),e.systemMemoryUsagePercent=Math.round(100*e.systemMemoryInUse/e.systemMemoryTotal),$("#chartSystemMemory").data("easyPieChart").update(e.systemMemoryUsagePercent),e.diskInUseSpace=Number(t.fileSystemInfo.inUseSpace),e.diskTotalSpace=Number(t.fileSystemInfo.totalSpace),e.diskUsagePercent=Math.round(100*e.diskInUseSpace/e.diskTotalSpace),$("#chartDiskUsage").data("easyPieChart").update(e.diskUsagePercent),e.jvmNativeInUse=Number(t.jvmNativeMemoryUsage.inUseMemory),e.jvmNativeMax=Number(t.jvmNativeMemoryUsage.maxMemory),e.jvmNativeUsagePercent=Math.round(Number(100*e.jvmNativeInUse/e.jvmNativeMax)),e.jvmHeapInUseSpace=Number(t.jvmMemoryUsage.inUseMemory),e.jvmHeapTotalSpace=Number(t.jvmMemoryUsage.maxMemory),e.jvmHeapUsagePercent=Math.round(Number(100*e.jvmHeapInUseSpace/e.jvmHeapTotalSpace)),$("#chartJvmHeapUsage").data("easyPieChart").update(e.jvmHeapUsagePercent)}),this.handleError)},e.prototype.handleError=function(e){console.log("error status: "+e.status),401==e.status&&console.log(this.router),Object(y.d)(e)},e.prototype.getApplicationsInfo=function(){var e=this;this.restService.getApplicationsInfo().subscribe((function(t){for(var i in e.appTableData.dataRows=[],t)e.appTableData.dataRows.push(t[i])}),(function(e){Object(y.d)(e)}))},e.prototype.isMobileMenu=function(){return $(window).width()>991},e.prototype.newApplication=function(){this.newApplicationActive=!0},e.prototype.cancelNewApplication=function(){this.newApplicationActive=!1,this.newApplicationName=""},e.prototype.checkApplicationDeleted=function(e){var t=this;setTimeout((function(){t.restService.getApplications().subscribe((function(i){var a=!1;for(var n in i.applications)if(i.applications[n]==e){a=!0;break}a?t.checkApplicationDeleted(e):($.notify({icon:"ti-save",message:"Application is deleted."},{type:"success",delay:3e3,placement:{from:"top",align:"right"}}),t.getApplicationsInfo(),t.restService.getSidebar().initApplications())}),(function(e){console.log("Error occured: "+e),Object(y.d)(e)}))}),2e3)},e.prototype.checkApplicationCreated=function(e){var t=this;setTimeout((function(){t.restService.getApplications().subscribe((function(i){var a=!1;for(var n in i.applications)if(i.applications[n]==e){a=!0;break}a?(t.newAppCreating=!1,t.deployingApplication=!1,t.cancelNewApplication(),$.notify({icon:"ti-save",message:"Application is created."},{type:"success",delay:3e3,placement:{from:"top",align:"right"}}),t.getApplicationsInfo(),t.restService.getSidebar().initApplications()):t.checkApplicationCreated(e)}),(function(e){Object(y.d)(e)}))}),2e3)},e.prototype.createApplication=function(e){var t=this;e&&(this.newAppCreating=!0,this.restService.createApplication(this.newApplicationName).subscribe((function(e){1==e.success?(t.deployingApplication=!0,t.checkApplicationCreated(t.newApplicationName)):(t.newAppCreating=!1,swal({title:"Application is not created",text:e.message,type:"error",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((function(){})).catch((function(){})))}),(function(e){Object(y.d)(e),t.newAppCreating=!1,null!=e&&403==e.status||swal({title:"Application is not created",text:"Make sure that you use alphanumeric characters in the application name",type:"error",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((function(){})).catch((function(){}))})))},e.prototype.deleteApplication=function(e){var t=this;swal({title:R.a.getLocaleInterface().are_you_sure,text:R.a.getLocaleInterface().wont_be_able_to_revert,type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(){t.restService.deleteApplication(e).subscribe((function(i){1==i.success?t.checkApplicationDeleted(e):$.notify({icon:"ti-save",message:"Application is not deleted. Please send logs to the support team"},{type:"warning",delay:3e3,placement:{from:"top",align:"right"}})}),(function(e){Object(y.d)(e),null!=e&&403==e.status||swal({title:"Application is not deleted",text:"Please send logs files under log directory to the Ant Media Support(support@antmedia.io)",type:"error",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((function(){})).catch((function(){}))}))})).catch((function(){}))},e.\u0275fac=function(t){return new(t||e)(w.Mb(y.a),w.Mb(v.e),w.Mb(h.a),w.Mb(m.c))},e.\u0275cmp=w.Gb({type:e,selectors:[["overview-cmp"]],decls:101,vars:16,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-4","col-sm-4"],[1,"card"],[1,"card-content"],[1,"col-xs-5"],[1,"icon-big","icon-warning","text-center"],[1,"ti-server"],[1,"col-xs-7"],[1,"numbers"],[1,"card-footer"],[1,"icon-big","icon-danger","text-center"],[1,"ti-dashboard"],[1,"icon-big","icon-success","text-center"],[1,"ti-wallet"],[1,"card","card-circle-chart"],[1,"card-header","text-center"],[1,"card-title"],[1,"description"],["id","chartDiskUsage",1,"chart-circle"],["id","chartSystemMemory",1,"chart-circle"],["id","chartJvmHeapUsage",1,"chart-circle"],[1,"col-md-12"],[1,"card-header"],[1,"card-title","pull-left"],["role","button",1,"btn","btn-fill","btn-success","pull-right",3,"click"],["style","padding:45px",4,"ngIf"],[1,"card-content","table-full-width"],[1,"table","table-striped"],[1,"text-center"],["class","text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"padding","45px"],["method","post","validate","",3,"ngSubmit"],["f","ngForm"],[1,"form-group","text-left"],["type","text","required","","minlength","4","name","applicationName","placeholder","Application name",1,"form-control",3,"ngModel","ngModelChange"],["applicationName","ngModel"],[1,"text-danger",3,"hidden"],["class","text-danger",4,"ngIf"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-fill","btn-success",3,"disabled"],["class","fa fa-spinner fa-pulse fa-1x fa-fw","aria-hidden","true",4,"ngIf"],["type","button",1,"btn","btn-simple",3,"click"],["class","text-info",4,"ngIf"],[1,"text-danger"],["aria-hidden","true",1,"fa","fa-spinner","fa-pulse","fa-1x","fa-fw"],[1,"text-info"],["type","button",1,"btn","btn-simple","btn-danger",3,"click"],[1,"btn-label"],[1,"ti-close"]],template:function(e,t){1&e&&(w.Sb(0,"div",0),w.Sb(1,"div",1),w.Sb(2,"div",2),w.Sb(3,"div",3),w.Sb(4,"div",4),w.Sb(5,"div",5),w.Sb(6,"div",2),w.Sb(7,"div",6),w.Sb(8,"div",7),w.Nb(9,"i",8),w.Rb(),w.Rb(),w.Sb(10,"div",9),w.Sb(11,"div",10),w.Sb(12,"p"),w.Wb(13,a),w.Rb(),w.Jc(14),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(15,"div",11),w.Nb(16,"hr"),w.Rb(),w.Rb(),w.Rb(),w.Sb(17,"div",3),w.Sb(18,"div",4),w.Sb(19,"div",5),w.Sb(20,"div",2),w.Sb(21,"div",6),w.Sb(22,"div",12),w.Nb(23,"i",13),w.Rb(),w.Rb(),w.Sb(24,"div",9),w.Sb(25,"div",10),w.Sb(26,"p"),w.Wb(27,n),w.Rb(),w.Jc(28),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(29,"div",11),w.Nb(30,"hr"),w.Rb(),w.Rb(),w.Rb(),w.Sb(31,"div",3),w.Sb(32,"div",4),w.Sb(33,"div",5),w.Sb(34,"div",2),w.Sb(35,"div",6),w.Sb(36,"div",14),w.Nb(37,"i",15),w.Rb(),w.Rb(),w.Sb(38,"div",9),w.Sb(39,"div",10),w.Sb(40,"p"),w.Wb(41,c),w.Rb(),w.Jc(42),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(43,"div",11),w.Nb(44,"hr"),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(45,"div",2),w.Sb(46,"div",3),w.Sb(47,"div",16),w.Sb(48,"div",17),w.Sb(49,"h5",18),w.Wb(50,o),w.Rb(),w.Sb(51,"p",19),w.Jc(52),w.Rb(),w.Rb(),w.Sb(53,"div",5),w.Sb(54,"div",20),w.Jc(55),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(56,"div",3),w.Sb(57,"div",16),w.Sb(58,"div",17),w.Sb(59,"h5",18),w.Wb(60,r),w.Rb(),w.Sb(61,"p",19),w.Jc(62),w.Rb(),w.Rb(),w.Sb(63,"div",5),w.Sb(64,"div",21),w.Jc(65),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(66,"div",3),w.Sb(67,"div",16),w.Sb(68,"div",17),w.Sb(69,"h5",18),w.Wb(70,s),w.Rb(),w.Sb(71,"p",19),w.Jc(72),w.Rb(),w.Rb(),w.Sb(73,"div",5),w.Sb(74,"div",22),w.Jc(75),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(76,"div",2),w.Sb(77,"div",23),w.Sb(78,"div",4),w.Sb(79,"div",24),w.Sb(80,"h4",25),w.Wb(81,b),w.Rb(),w.Sb(82,"button",26),w.fc("click",(function(){return t.newApplication()})),w.Jc(83,"New Application "),w.Rb(),w.Rb(),w.Hc(84,U,19,6,"div",27),w.Sb(85,"div",28),w.Sb(86,"table",29),w.Sb(87,"thead"),w.Sb(88,"tr"),w.Sb(89,"th",30),w.Jc(90,"#"),w.Rb(),w.Sb(91,"th"),w.Wb(92,l),w.Rb(),w.Sb(93,"th",30),w.Wb(94,p),w.Rb(),w.Hc(95,I,2,0,"th",31),w.Hc(96,N,2,0,"th",31),w.Sb(97,"th",30),w.Jc(98,"Action"),w.Rb(),w.Rb(),w.Rb(),w.Sb(99,"tbody"),w.Hc(100,k,13,5,"tr",32),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb()),2&e&&(w.Bb(14),w.Lc(" ",t.systemCpuLoad,"% "),w.Bb(14),w.Lc(" ",t.processCpuLoad,"% "),w.Bb(14),w.Lc(" ",t.liveStreamSize," "),w.Bb(10),w.Mc("",t.niceBytes(t.diskInUseSpace)," / ",t.niceBytes(t.diskTotalSpace),""),w.Bb(3),w.Lc("",t.diskUsagePercent,"%"),w.Bb(7),w.Mc("",t.niceBytes(t.systemMemoryInUse)," / ",t.niceBytes(t.systemMemoryTotal),""),w.Bb(3),w.Lc("",t.systemMemoryUsagePercent,"%"),w.Bb(7),w.Mc("",t.niceBytes(t.jvmHeapInUseSpace)," / ",t.niceBytes(t.jvmHeapTotalSpace),""),w.Bb(3),w.Lc("",t.jvmHeapUsagePercent,"%"),w.Bb(9),w.qc("ngIf",t.newApplicationActive),w.Bb(11),w.qc("ngIf",t.isMobileMenu()),w.Bb(1),w.qc("ngIf",t.isMobileMenu()),w.Bb(4),w.qc("ngForOf",t.appTableData.dataRows))},directives:[f.n,f.m,S.x,S.l,S.m,S.d,S.t,S.g,S.k,S.n],encapsulation:2}),e}()}]}],P=i("tk/3"),J=i("eikZ"),T=i("UO6m"),H=function(){function e(){}return e.\u0275mod=w.Kb({type:e}),e.\u0275inj=w.Jb({factory:function(t){return new(t||e)},providers:[J.a,T.a],imports:[[f.c,m.f.forChild(x),S.f,P.c]]}),e}()}}]);