"use strict";(self.webpackChunkflarum_core=self.webpackChunkflarum_core||[]).push([[559],{9509:(t,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(8805),r=a(3554),i=a(2855),o=a(7880),n=a(1005),l=a(117),d=a(6064),u=a(4311);class h extends i.A{constructor(){super(...arguments),(0,e.A)(this,"username",void 0),(0,e.A)(this,"email",void 0),(0,e.A)(this,"password",void 0)}oninit(t){super.oninit(t),this.username=(0,u.A)(this.attrs.username||""),this.email=(0,u.A)(this.attrs.email||""),this.password=(0,u.A)(this.attrs.password||"")}className(){return"Modal--small SignUpModal"}title(){return r.A.translator.trans("core.forum.sign_up.title")}content(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]}isProvided(t){var s,a;return null!=(s=null==(a=this.attrs.provided)?void 0:a.includes(t))&&s}body(){return[!this.attrs.token&&m(n.A,null),m("div",{className:"Form Form--centered"},this.fields().toArray())]}fields(){const t=new d.A,s=(0,l.A)(r.A.translator.trans("core.forum.sign_up.username_placeholder")),a=(0,l.A)(r.A.translator.trans("core.forum.sign_up.email_placeholder")),e=(0,l.A)(r.A.translator.trans("core.forum.sign_up.password_placeholder"));return t.add("username",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"username",type:"text",placeholder:s,"aria-label":s,bidi:this.username,disabled:this.loading||this.isProvided("username")})),30),t.add("email",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:a,"aria-label":a,bidi:this.email,disabled:this.loading||this.isProvided("email")})),20),this.attrs.token||t.add("password",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"password",type:"password",autocomplete:"new-password",placeholder:e,"aria-label":e,bidi:this.password,disabled:this.loading})),10),t.add("submit",m("div",{className:"Form-group"},m(o.A,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},r.A.translator.trans("core.forum.sign_up.submit_button"))),-10),t}footer(){return[m("p",{className:"SignUpModal-logIn"},r.A.translator.trans("core.forum.sign_up.log_in_text",{a:m(o.A,{className:"Button Button--text Button--link",onclick:this.logIn.bind(this)})}))]}logIn(){const t={identification:this.email()||this.username()};r.A.modal.show((()=>a.e(226).then(a.bind(a,1793))),t)}onready(){this.attrs.username&&!this.attrs.email?this.$("[name=email]").select():this.$("[name=username]").select()}onsubmit(t){t.preventDefault(),this.loading=!0;const s=this.submitData();r.A.request({url:r.A.forum.attribute("baseUrl")+"/register",method:"POST",body:s,errorHandler:this.onerror.bind(this)}).then((()=>window.location.reload()),this.loaded.bind(this))}submitData(){const t=this.attrs.token?{token:this.attrs.token}:{password:this.password()};return{username:this.username(),email:this.email(),...t}}}flarum.reg.add("core","forum/components/SignUpModal",h)}}]);
//# sourceMappingURL=SignUpModal.js.map