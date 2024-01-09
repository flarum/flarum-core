"use strict";(self.webpackChunkflarum_core=self.webpackChunkflarum_core||[]).push([[395],{8686:(s,t,e)=>{e.r(t),e.d(t,{default:()=>h});var a=e(7905),r=e(6789),o=e(899),i=e(8312),n=e(6403),l=e(1552),d=e(4041),u=e(6458);class h extends o.Z{constructor(){super(...arguments),(0,a.Z)(this,"username",void 0),(0,a.Z)(this,"email",void 0),(0,a.Z)(this,"password",void 0)}oninit(s){super.oninit(s),this.username=(0,u.Z)(this.attrs.username||""),this.email=(0,u.Z)(this.attrs.email||""),this.password=(0,u.Z)(this.attrs.password||"")}className(){return"Modal--small SignUpModal"}title(){return r.Z.translator.trans("core.forum.sign_up.title")}content(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]}isProvided(s){var t,e;return null!=(t=null==(e=this.attrs.provided)?void 0:e.includes(s))&&t}body(){return[!this.attrs.token&&m(n.Z,null),m("div",{className:"Form Form--centered"},this.fields().toArray())]}fields(){const s=new d.Z,t=(0,l.Z)(r.Z.translator.trans("core.forum.sign_up.username_placeholder")),e=(0,l.Z)(r.Z.translator.trans("core.forum.sign_up.email_placeholder")),a=(0,l.Z)(r.Z.translator.trans("core.forum.sign_up.password_placeholder"));return s.add("username",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"username",type:"text",placeholder:t,"aria-label":t,bidi:this.username,disabled:this.loading||this.isProvided("username")})),30),s.add("email",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:e,"aria-label":e,bidi:this.email,disabled:this.loading||this.isProvided("email")})),20),this.attrs.token||s.add("password",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"password",type:"password",autocomplete:"new-password",placeholder:a,"aria-label":a,bidi:this.password,disabled:this.loading})),10),s.add("submit",m("div",{className:"Form-group"},m(i.Z,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},r.Z.translator.trans("core.forum.sign_up.submit_button"))),-10),s}footer(){return[m("p",{className:"SignUpModal-logIn"},r.Z.translator.trans("core.forum.sign_up.log_in_text",{a:m("a",{onclick:this.logIn.bind(this)})}))]}logIn(){const s={identification:this.email()||this.username()};r.Z.modal.show((()=>e.e(460).then(e.bind(e,5049))),s)}onready(){this.attrs.username&&!this.attrs.email?this.$("[name=email]").select():this.$("[name=username]").select()}onsubmit(s){s.preventDefault(),this.loading=!0;const t=this.submitData();r.Z.request({url:r.Z.forum.attribute("baseUrl")+"/register",method:"POST",body:t,errorHandler:this.onerror.bind(this)}).then((()=>window.location.reload()),this.loaded.bind(this))}submitData(){const s=this.attrs.token?{token:this.attrs.token}:{password:this.password()};return{username:this.username(),email:this.email(),...s}}}flarum.reg.add("core","forum/components/SignUpModal",h),flarum.reg.addChunkModule("460","5049","core","forum/components/LogInModal")},6403:(s,t,e)=>{e.d(t,{Z:()=>o});var a=e(2190),r=e(4041);class o extends a.Z{view(){return m("div",{className:"LogInButtons"},this.items().toArray())}items(){return new r.Z}}flarum.reg.add("core","forum/components/LogInButtons",o)}}]);
//# sourceMappingURL=SignUpModal.js.map