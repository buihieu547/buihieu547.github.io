(()=>{var s={665:(s,n,e)=>{var i=e(755);"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js"),i((function(s){var n=localStorage.getItem("sessionId"),e=localStorage.getItem("token");function i(){e&&n&&(window.location="./")}i();var t=s(".js-global"),a=s(".js-login"),o=s(".js-signup"),d=(s(".js-forget"),s(".js-requestcode")),r=(s(".js-btn-login"),s(".js-btn-signup")),f=s(".js-btn-forget"),l=(s(".js-btn-requestcode"),s(".js-btn-cancel"));setTimeout((function(){a.find('[name="email"]').val("").focus()}),200),r.on("click",(function(){t.removeClass("active"),o.addClass("active"),s(".js_register__form")[0].reset(),s(".js_register__form").find('[name="name"]').focus(),s(".js_register__form").find(".form__line_code").hide(),s(".js_register__form").find('[name="code"]').val(""),s(".mess").html("")})),f.on("click",(function(){t.removeClass("active"),d.addClass("active"),s(".js_forgot__form")[0].reset(),s(".js_forgot__form_code")[0].reset(),s(".js_forgot__form").find('[name="email"]').focus()})),l.on("click",(function(){t.removeClass("active"),a.addClass("active"),s(".js_login__form")[0].reset(),a.find('[name="email"]').val("").focus()})),console.log("token:"+e),s(document).on("submit",".js_login__form",(function(t){t.preventDefault();var a=s(this),o=a.find('[name="email"]').val(),d=a.find('[name="password"]').val();s.ajax({url:"xm/api/login",data:{email:o,password:d},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){a.find(".js-btn-spin").find(".--spin").show(),a.find(".js-btn-spin").attr("disabled",!0),a.find(".mess").html("")},statusCode:{200:function(s){console.log(s),localStorage.setItem("sessionId",s.data.sessionId),localStorage.setItem("token",s.data.token),e=s.data.sessionId,n=s.data.token,a.find(".mess").html(s.message),i(),a.find(".js-btn-spin").find(".--spin").hide(),a.find(".js-btn-spin").attr("disabled",!1)},401:function(s){s.responseJSON&&(s=s.responseJSON),a.find(".mess").html(s.details),a.find('[name="password"]').val("").focus(),a.find(".js-btn-spin").find(".--spin").hide(),a.find(".js-btn-spin").attr("disabled",!1)}},success:function(s){0==s.status?(localStorage.setItem("sessionId",s.data.sessionId),localStorage.setItem("token",s.data.token),e=s.data.sessionId,n=s.data.token,a.find(".mess").html(s.message),i()):(a.find(".mess").html(s.message),a.find('[name="password"]').val("").focus()),a.find(".js-btn-spin").find(".--spin").hide(),a.find(".js-btn-spin").attr("disabled",!1)},error:function(s){}})})),s(document).on("submit",".js_register__form",(function(n){n.preventDefault();var e=s(this),i=e.find('[name="email"]').val(),t=e.find('[name="name"]').val(),a=e.find('[name="password"]').val(),o=e.find('[name="password2"]').val();if(e.find(".mess").html(""),a==o){var d={email:i,name:t,password:a,password2:o},r=!1;if(e.find('[name="code"]').is(":visible")){var f=e.find('[name="code"]').val();r=!0,d.code=f,d=JSON.stringify(d)}s.ajax({url:r?"xm/api/register":"xm/api/validateemail",data:d,type:"post",dataType:"json",headers:{"Content-Type":r?"application/json":"application/x-www-form-urlencoded"},beforeSend:function(){e.find(".js-btn-spin").find(".--spin").show(),e.find(".js-btn-spin").attr("disabled",!0),e.find(".mess").html("")},statusCode:{200:function(s){r?(e.find(".mess").text(s.message),setTimeout((function(){window.location="./"}),500)):(e.find(".mess").html("Please enter code we sent to email "+i),e.find(".form__line_code").show(),e.find('[name="code"]').val("").focus()),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},400:function(s){s.responseJSON&&(s=s.responseJSON),e.find(".mess").text(s.details),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},500:function(s){s.responseJSON&&(s=s.responseJSON),r&&(e.find(".mess").text(s.message),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1))}},success:function(s){0==s.status?r?(e.find(".mess").text(s.message),setTimeout((function(){window.location="./"}),500)):(e.find(".mess").html("Please enter code we sent to email "+i),e.find(".form__line_code").show(),e.find('[name="code"]').val("").focus()):e.find(".mess").html(s.message),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},error:function(s){}})}else e.find(".mess").html("Confirm Password was wrong")})),s(document).on("submit",".js_forgot__form",(function(n){n.preventDefault();var e=s(this),i=e.find('[name="email"]').val();s.ajax({url:"xm/api/requestcode",data:{email:i},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){e.find(".js-btn-spin").find(".--spin").show(),e.find(".js-btn-spin").attr("disabled",!0),e.find(".mess").html("")},statusCode:{200:function(n){console.log(n),s(".reset-password1").removeClass("active"),s(".reset-password2").addClass("active"),s(".reset-password2").find('[name="email"]').val(i),s(".reset-password2").find('[name="code"]').val("").focus(),s(".reset-password2").find('[name="password"]').val(""),s(".reset-password2").find('[name="confirmpassword"]').val(""),s(".reset-password2").find(".mess").html(""),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},404:function(s){e.find(".mess").html("Please again !"),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)}},success:function(n){0==n.status?(s(".reset-password1").removeClass("active"),s(".reset-password2").addClass("active"),s(".reset-password2").find('[name="email"]').val(i),s(".reset-password2").find('[name="code"]').val("").focus(),s(".reset-password2").find('[name="password"]').val(""),s(".reset-password2").find('[name="confirmpassword"]').val(""),s(".reset-password2").find(".mess").html("")):e.find(".mess").html(n.message),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},error:function(s){}})})),s(document).on("submit",".js_forgot__form_code",(function(n){n.preventDefault();var e=s(this);e.find(".mess").html("");var i=e.find('[name="email"]').val(),t=e.find('[name="code"]').val().trim(),a=e.find('[name="password"]').val();a==e.find('[name="confirmpassword"]').val()?s.ajax({url:"xm/api/reset",data:{email:i,code:t,password:a},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){e.find(".js-btn-spin").find(".--spin").show(),e.find(".js-btn-spin").attr("disabled",!0),e.find(".mess").html("")},statusCode:{200:function(s){e.find(".mess").html(s.message),setTimeout((function(){window.location=location.href}),1e3),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},404:function(s){s.responseJSON&&(s=s.responseJSON),e.find(".mess").html(s.details),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)}},success:function(s){0==s.status?(e.find(".mess").html(s.message),setTimeout((function(){window.location=location.href}),1e3)):e.find(".mess").html(s.details),e.find(".js-btn-spin").find(".--spin").hide(),e.find(".js-btn-spin").attr("disabled",!1)},error:function(s){}}):e.find(".mess").html("Confirm Password was wrong")})),s(document).on("click",".js-btn-send-code",(function(n){n.preventDefault();var e=s(".js_forgot__form_code"),i=e.find('[name="email"]').val();s.ajax({url:"xm/api/requestcode",data:{email:i},type:"post",dataType:"json",headers:{"Content-Type":"application/x-www-form-urlencoded"},beforeSend:function(){e.find(".mess").html("")},statusCode:{200:function(s){e.find(".mess").html("Send Code success")}},error:function(s){}})}))}))}},n={};function e(i){if(n[i])return n[i].exports;var t=n[i]={exports:{}};return s[i].call(t.exports,t,t.exports,e),t.exports}e.m=s,e.x=s=>{},e.o=(s,n)=>Object.prototype.hasOwnProperty.call(s,n),(()=>{var s={535:0},n=[[665,755]],i=s=>{},t=(t,a)=>{for(var o,d,[r,f,l,m]=a,p=0,c=[];p<r.length;p++)d=r[p],e.o(s,d)&&s[d]&&c.push(s[d][0]),s[d]=0;for(o in f)e.o(f,o)&&(e.m[o]=f[o]);for(l&&l(e),t&&t(a);c.length;)c.shift()();return m&&n.push.apply(n,m),i()},a=self.webpackChunkxm=self.webpackChunkxm||[];function o(){for(var i,t=0;t<n.length;t++){for(var a=n[t],o=!0,d=1;d<a.length;d++){var r=a[d];0!==s[r]&&(o=!1)}o&&(n.splice(t--,1),i=e(e.s=a[0]))}return 0===n.length&&(e.x(),e.x=s=>{}),i}a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a));var d=e.x;e.x=()=>(e.x=d||(s=>{}),(i=o)())})(),e.x()})();