(()=>{var n={15665:(n,e,s)=>{var t=s(19755);"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js"),t((function(n){s(99079),s(77424);var e=s(61433),t=s(760),i=s(30261),a=n("#change-lang-btn");t.onInit(),a.click(i.onInit);var o="https://xm.iptp.net/xm/api",d=localStorage.getItem("sessionId"),r=localStorage.getItem("token");function f(){r&&d&&(window.location="./")}f();var l=n(".js-global"),m=n(".js-login"),c=n(".js-signup"),p=(n(".js-forget"),n(".js-requestcode")),u=(n(".js-btn-login"),n(".js-btn-signup")),b=n(".js-btn-forget"),h=(n(".js-btn-requestcode"),n(".js-btn-cancel"));setTimeout((function(){m.find('[name="email"]').val("").focus()}),200),u.on("click",(function(){l.removeClass("active"),c.addClass("active"),n(".js_register__form")[0].reset(),n(".js_register__form").find('[name="name"]').focus(),n(".js_register__form").find(".form__line_code").hide(),n(".js_register__form").find('[name="code"]').val(""),n(".mess").html("")})),b.on("click",(function(){l.removeClass("active"),p.addClass("active"),n(".js_forgot__form")[0].reset(),n(".js_forgot__form_code")[0].reset(),n(".js_forgot__form").find('[name="email"]').focus()})),h.on("click",(function(){l.removeClass("active"),m.addClass("active"),n(".js_login__form")[0].reset(),m.find('[name="email"]').val("").focus()})),console.log("token:"+r),n(document).on("submit",".js_login__form",(function(s){s.preventDefault();var t=n(this),i=t.find('[name="email"]').val(),a=t.find('[name="password"]').val();n.ajax({url:o+"/login",data:{email:i,password:a},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){t.find(".js-btn-spin").find(".--spin").show(),t.find(".js-btn-spin").attr("disabled",!0),t.find(".mess").html("")},statusCode:{200:function(n){console.log(n),localStorage.setItem("sessionId",n.data.sessionId),localStorage.setItem("token",n.data.token),r=n.data.sessionId,d=n.data.token,t.find(".mess").html(n.message),f(),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},401:function(n){n.responseJSON&&(n=n.responseJSON),t.find(".mess").html('\n                    <lang data-language="INCORRECT_EMAIL_OR_PASSWORD">'.concat(e.getLangJson().INCORRECT_EMAIL_OR_PASSWORD,"</lang>\n                  ")),t.find('[name="password"]').val("").focus(),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)}},success:function(n){0==n.status?(localStorage.setItem("sessionId",n.data.sessionId),localStorage.setItem("token",n.data.token),r=n.data.sessionId,d=n.data.token,t.find(".mess").html(n.message),f()):(t.find(".mess").html(n.message),t.find('[name="password"]').val("").focus()),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},error:function(n){}})})),n(document).on("submit",".js_register__form",(function(s){s.preventDefault();var t=n(this),i=t.find('[name="email"]').val(),a=t.find('[name="name"]').val(),d=t.find('[name="password"]').val(),r=t.find('[name="password2"]').val();if(t.find(".mess").html(""),d==r){var f={email:i,name:a,password:d,password2:r},l=!1;if(t.find('[name="code"]').is(":visible")){var m=t.find('[name="code"]').val();l=!0,f.code=m,f=JSON.stringify(f)}n.ajax({url:l?o+"/register":o+"/validateemail",data:f,type:"post",dataType:"json",headers:{"Content-Type":l?"application/json":"application/x-www-form-urlencoded"},beforeSend:function(){t.find(".js-btn-spin").find(".--spin").show(),t.find(".js-btn-spin").attr("disabled",!0),t.find(".mess").html("")},statusCode:{200:function(n){l?(t.find(".mess").text(n.message),setTimeout((function(){window.location="./"}),500)):(t.find(".mess").html("Please enter code we sent to email "+i),t.find(".form__line_code").show(),t.find('[name="code"]').val("").focus()),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},400:function(n){n.responseJSON&&(n=n.responseJSON),t.find(".mess").text(n.details),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},500:function(n){n.responseJSON&&(n=n.responseJSON),l&&(t.find(".mess").text(n.message),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1))}},success:function(n){0==n.status?l?(t.find(".mess").text(n.message),setTimeout((function(){window.location="./"}),500)):(t.find(".mess").html("Please enter code we sent to email "+i),t.find(".form__line_code").show(),t.find('[name="code"]').val("").focus()):t.find(".mess").html(n.message),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},error:function(n){}})}else t.find(".mess").html(e.getLangJson().CONFIRM_PASSWORD_WRONG)})),n(document).on("submit",".js_forgot__form",(function(e){e.preventDefault();var s=n(this),t=s.find('[name="email"]').val();n.ajax({url:o+"/requestcode",data:{email:t},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){s.find(".js-btn-spin").find(".--spin").show(),s.find(".js-btn-spin").attr("disabled",!0),s.find(".mess").html("")},statusCode:{200:function(e){console.log(e),n(".reset-password1").removeClass("active"),n(".reset-password2").addClass("active"),n(".reset-password2").find('[name="email"]').val(t),n(".reset-password2").find('[name="code"]').val("").focus(),n(".reset-password2").find('[name="password"]').val(""),n(".reset-password2").find('[name="confirmpassword"]').val(""),n(".reset-password2").find(".mess").html(""),s.find(".js-btn-spin").find(".--spin").hide(),s.find(".js-btn-spin").attr("disabled",!1)},404:function(n){s.find(".mess").html("Please again !"),s.find(".js-btn-spin").find(".--spin").hide(),s.find(".js-btn-spin").attr("disabled",!1)}},success:function(e){0==e.status?(n(".reset-password1").removeClass("active"),n(".reset-password2").addClass("active"),n(".reset-password2").find('[name="email"]').val(t),n(".reset-password2").find('[name="code"]').val("").focus(),n(".reset-password2").find('[name="password"]').val(""),n(".reset-password2").find('[name="confirmpassword"]').val(""),n(".reset-password2").find(".mess").html("")):s.find(".mess").html(e.message),s.find(".js-btn-spin").find(".--spin").hide(),s.find(".js-btn-spin").attr("disabled",!1)},error:function(n){}})})),n(document).on("submit",".js_forgot__form_code",(function(s){s.preventDefault();var t=n(this);t.find(".mess").html("");var i=t.find('[name="email"]').val(),a=t.find('[name="code"]').val().trim(),d=t.find('[name="password"]').val();d==t.find('[name="confirmpassword"]').val()?n.ajax({url:o+"/reset",data:{email:i,code:a,password:d},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){t.find(".js-btn-spin").find(".--spin").show(),t.find(".js-btn-spin").attr("disabled",!0),t.find(".mess").html("")},statusCode:{200:function(n){t.find(".mess").html(n.message),setTimeout((function(){window.location=location.href}),1e3),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},404:function(n){n.responseJSON&&(n=n.responseJSON),t.find(".mess").html(n.details),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)}},success:function(n){0==n.status?(t.find(".mess").html(n.message),setTimeout((function(){window.location=location.href}),1e3)):t.find(".mess").html(n.details),t.find(".js-btn-spin").find(".--spin").hide(),t.find(".js-btn-spin").attr("disabled",!1)},error:function(n){}}):t.find(".mess").html(e.getLangJson().CONFIRM_PASSWORD_WRONG)})),n(document).on("click",".js-btn-send-code",(function(e){e.preventDefault();var s=n(".js_forgot__form_code"),t=s.find('[name="email"]').val();n.ajax({url:o+"/requestcode",data:{email:t},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){s.find(".mess").html("")},statusCode:{200:function(n){s.find(".mess").html("Send Code success")}},error:function(n){}})}))}))}},e={};function s(t){if(e[t])return e[t].exports;var i=e[t]={id:t,loaded:!1,exports:{}};return n[t].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=n,s.x=n=>{},s.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),s.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n={535:0},e=[[15665,532,848,261]],t=n=>{},i=(i,a)=>{for(var o,d,[r,f,l,m]=a,c=0,p=[];c<r.length;c++)d=r[c],s.o(n,d)&&n[d]&&p.push(n[d][0]),n[d]=0;for(o in f)s.o(f,o)&&(s.m[o]=f[o]);for(l&&l(s),i&&i(a);p.length;)p.shift()();return m&&e.push.apply(e,m),t()},a=self.webpackChunkxm=self.webpackChunkxm||[];function o(){for(var t,i=0;i<e.length;i++){for(var a=e[i],o=!0,d=1;d<a.length;d++){var r=a[d];0!==n[r]&&(o=!1)}o&&(e.splice(i--,1),t=s(s.s=a[0]))}return 0===e.length&&(s.x(),s.x=n=>{}),t}a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a));var d=s.x;s.x=()=>(s.x=d||(n=>{}),(t=o)())})(),s.x()})();