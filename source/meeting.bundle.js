(()=>{var e={7759:(e,t,n)=>{var a,o;a=[n(3550),n(5931)],void 0===(o=function(e,t){var n={API_URL:"".concat(e,"/api"),SESSION_ID:"sessionId",TOKEN:"token",BODY_BG_THEME:"body_bg_theme",BODY_FZ:"body_fz",THEMES:[{name:"body_theme_blue",color:"#3263d5"},{name:"body_theme_green",color:"#45d866"},{name:"body_theme_black",color:"#000"},{name:"body_theme_gray",color:"#808080"}],FONTSIZES:["12px","14px","16px","18px"],ATTRIBUTE_CHANGE_NAME:"data-userid-name",ATTRIBUTE_CHANGE_IMAGE:"data-userid-image",ATTRIBUTE_CHANGE_IMAGE_GROUP:"data-roomid-image",ATTRIBUE_SIDEBAR_ROOM:"data-room-id",WEBRTC_URL:t};return Object.freeze(n)}.apply(t,a))||(e.exports=o)},3550:(e,t,n)=>{var a;void 0===(a=function(){return"".concat("https://xm.iptp.net/","xm")}.call(t,n,t,e))||(e.exports=a)},4164:(e,t,n)=>{var a,o,r=n(9755);a=[n(4436)],void 0===(o=function(e){var t,n,a;return{onInit:function(){if(!t){var o=new URLSearchParams(window.location.search);t=!0,r("body").append('\n        <div class="modal fade" id="inviteModal" tabindex="-1" role="dialog">\n            <div class="modal-dialog modal-dialog-centered" style="width: 400px;" role="document">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h5 class="modal-title">\n                            Invite more people\n                        </h5>\n                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                            <span aria-hidden="true">&times;</span>\n                        </button>\n                    </div>\n                    <div class="modal-body">\n                        <div class="im-text">\n                            Share the meeting link to invite others\n                        </div>\n                        <div class="mvwmb-url">\n                            <div class="mvwmb-copy"></div>\n                            <div class="mvwmb-placeholder">Click to copy and share meeting link</div>\n                            <div class="input-only-view"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    '),n=r("#inviteModal"),a=n.find(".mvwmb-url"),n.find(".mvwmb-copy").text("".concat(window.location.host).concat(window.location.pathname,"?id=").concat(o.get("id"))),a.click((function(){var t=new URLSearchParams(window.location.search);navigator.clipboard.writeText("".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?id=").concat(t.get("id"))),e.show("Link copied to clipboard","success")}))}n.modal("show")}}}.apply(t,a))||(e.exports=o)},2276:(e,t,n)=>{var a,o,r=n(9755);a=[n(7025),n(4436),n(1433),n(9399)],void 0===(o=function(e,t,n,a){var o=r(".mvwmb-btn-mic"),c=r(".mvwmb-btn-camera"),i=r(".mvwmb-url"),s=r(".mvwmb-copy"),l=r("#mvww-user-0"),d=function(){var t=new URLSearchParams(window.location.search);if(t.get("id"))s.text("".concat(window.location.host).concat(window.location.pathname,"?id=").concat(t.get("id")));else{var n=e.generateId();!function(e,t){if(window.history.pushState){var n=new URLSearchParams(window.location.search);n.set(e,t);var a="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?").concat(n.toString());window.history.pushState({path:a},"",a)}}("id",n),s.text("".concat(window.location.host).concat(window.location.pathname,"?id=").concat(n))}};return{onInit:function(){d(),r(".mvwmb-join-btn").click((function(){r(".mvw-wrapper").addClass("joining"),r(".mvw-meetform").hide(),r(".mvwm-settings").show(),a.onJoinRoom()})),i.click((function(){var e=new URLSearchParams(window.location.search);navigator.clipboard.writeText("".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?id=").concat(e.get("id"))),t.show("Link copied to clipboard","success")})),o.click((function(){n.getIsEnabelMic()&&(o.hasClass("turn-off")?(l.get(0).srcObject.getTracks()[0].enabled=!0,o.removeClass("turn-off")):(l.get(0).srcObject.getTracks()[0].enabled=!1,o.addClass("turn-off")))})),c.click((function(){if(n.getIsEnabelCamera()){var e=n.getIsEnabelMic()?1:0;c.hasClass("turn-off")?(l.get(0).srcObject.getTracks()[e].enabled=!0,c.removeClass("turn-off")):(l.get(0).srcObject.getTracks()[e].enabled=!1,c.addClass("turn-off"))}}))}}}.apply(t,a))||(e.exports=o)},3185:(e,t,n)=>{var a,o,r=n(9755);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}a=[n(7025),n(4164),n(1433)],void 0===(o=function(e,t,n){var a=r(".mvwmss-btn-share-screen"),o=r(".mvwmss-btn-add-people"),i=r("#mvww-user-0"),s=r(".mvwm-settings"),l={video:{cursor:"always"}},d=function(){if(n.getIsEnabelMic()||n.getIsEnabelCamera())navigator.mediaDevices.getUserMedia({audio:n.getIsEnabelMic(),video:n.getIsEnabelCamera()}).then((function(t){var a=e.generateId();s.css("pointer-events","visible"),n.setIdShareScreen(null),i.get(0).srcObject=t,easyrtc.register3rdPartyLocalMediaStream(t,a),(n.getEasyrtcIds()||[]).forEach((function(e){easyrtc.addStreamToCall(e,a)}))}));else{var t=e.generateId();s.css("pointer-events","visible"),n.setIdShareScreen(null),easyrtc.register3rdPartyLocalMediaStream(new MediaStream,t),(n.getEasyrtcIds()||[]).forEach((function(e){easyrtc.addStreamToCall(e,t)}))}},u=function(t){var a=e.generateId();t.getVideoTracks()[0].addEventListener("ended",d),i.get(0).srcObject=t,easyrtc.register3rdPartyLocalMediaStream(t,a),n.setIdShareScreen(a),(n.getEasyrtcIds()||[]).forEach((function(e){easyrtc.addStreamToCall(e,a)}))},f=function(){return navigator.mediaDevices.getDisplayMedia(l).then((function(e){s.css("pointer-events","none"),n.getIsEnabelMic()?navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){var n=c(t.getAudioTracks(),1)[0];e.addTrack(n),u(e)})).catch((function(){u(e)})):u(e)}))};return{onInit:function(){a.click(f),o.click(t.onInit)}}}.apply(t,a))||(e.exports=o)},9399:(e,t,n)=>{var a,o,r=n(9755);a=[n(5931),n(1433)],void 0===(o=function(e,t){for(var n=[],a=!1,o=r(".mvw-wrapper"),c=r(".mvw-collapse-btn"),i=r(".mvwmb-btn-mic"),s=r(".mvwmb-btn-camera"),l=0;l<8;l+=1)n=n.concat("mvww-user-".concat(l+1)),o.append('\n            <div class="mvww-div">\n                <video id="mvww-user-'.concat(l+1,'" autoplay="" playsinline="playsinline" class="mvww-normal"></video>\n            </div>\n        '));var d=function(e){var t=r(e.currentTarget);t.hasClass("expand")||(c.show(),t.addClass("expand"))},u=function(){r(".mvww-div").removeClass("expand"),c.hide()},f=function(){r(".xm-page-loading").remove(),r(".mvww-div").click(d),c.click(u)},m=function(e,o){if(!("default"===e||Object.keys(o).length>8)){var r=t.getEasyrtcIds()||[];if(Object.keys(o).forEach((function(e){r.filter((function(t){return t===e})).length||t.setEasyrtcIds(r.concat(e))})),!a){a=!0;var c=[],i=0,s=0;Object.keys(o).forEach((function(e){Object.prototype.hasOwnProperty.call(o,e)&&(s||(s=o[e].roomJoinTime),c.push(e))}));c.length>0&&function e(t){easyrtc.call(c[t],(function(){(i+=1)<n.length&&t>0&&e(t-1)}),(function(){i<n.length&&t>0&&e(t-1)}))}(c.length-1)}}},p=function(e){var t=easyrtc.getConnectionCount()+(e?0:1);o.removeClass("shape-one"),o.removeClass("shape-two"),t<5&&t>1&&o.addClass("shape-one"),t<10&&t>4&&o.addClass("shape-two")},v=function(e,n){var a=t.getEasyrtcIds()||[],o=t.getIdShareScreen();o&&easyrtc.addStreamToCall(e,o),a.filter((function(t){return t===e})).length||t.setEasyrtcIds(a.concat(e)),r("#mvww-user-".concat(n+1)).parent().show(),p()},h=function(e,n){t.setEasyrtcIds((t.getEasyrtcIds()||[]).filter((function(t){return t!==e})));var a=r("#mvww-user-".concat(n+1)).parent();a.hide(),a.hasClass("expand")&&(a.removeClass("expand"),c.hide()),p(!0)},g=function e(a){1===a&&easyrtc.enableAudio(!1),2===a&&(easyrtc.enableAudio(!0),easyrtc.enableVideo(!1)),easyrtc.initMediaSource((function(){easyrtc.easyApp("easyrtc.videoChatHd","mvww-user-0",n,f)}),(function(){a||(i.addClass("turn-off"),t.setIsEnabelMic(!1),e(1)),1===a&&(i.removeClass("turn-off"),s.addClass("turn-off"),t.setIsEnabelMic(!0),t.setIsEnabelCamera(!1),e(2)),2===a&&(i.addClass("turn-off"),t.setIsEnabelMic(!1),window.despiteNotHaveDevice=!0,easyrtc.initMediaSource((function(){easyrtc.easyApp("easyrtc.videoChatHd","mvww-user-0",n,f)})))}))};return{onInit:function(){easyrtc.setSocketUrl(e),easyrtc.dontAddCloseButtons(!0),g()},onJoinRoom:function(){var e=new URLSearchParams(window.location.search).get("id");easyrtc.joinRoom(e,"",null,null),easyrtc.setRoomOccupantListener(m),easyrtc.setAcceptChecker((function(e,t){t(!0)})),easyrtc.setOnCall(v),easyrtc.setOnHangup(h)}}}.apply(t,a))||(e.exports=o)},7415:(e,t,n)=>{var a,o,r=n(2743),c=n(9755);a=[n(2276),n(9399),n(3185)],void 0===(o=function(e,t,a){n(7424),n(3824),n(9079),n(1707),n(3733),r(c);e.onInit(),t.onInit(),a.onInit(),c('[data-toggle="tooltip"]').tooltip()}.apply(t,a))||(e.exports=o)},4436:(e,t,n)=>{var a,o,r=n(9755);a=[n(7025)],void 0===(o=function(e){var t,n=e.render,a=!1,o='\n        <div class="alert {class}" role="alert">\n            {message}\n            <button type="button" class="close">\n                <span aria-hidden="true">&times;</span>\n            </button>\n        </div>\n    ',c=function(e){r(e.currentTarget).closest(".alert").remove()};return{show:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";a||(a=!0,r("body").append('<div id="alert-wrapper"></div>'),t=r("#alert-wrapper"),r(document).on("click","#alert-wrapper .close",c));var s={class:"alert-danger",message:e};"success"===i&&(s.class="alert-success");var l=r(n(o,s));t.prepend(l),setTimeout((function(){return l.remove()}),3500)}}}.apply(t,a))||(e.exports=o)},1433:(e,t,n)=>{var a;void 0===(a=function(){var e=!0,t=null,n=!0,a=!0,o={},r=[],c="",i=[],s=[],l="",d="",u="",f={},m=[],p=function(e){return{channel:e.channel,group:e.group,groupAvatarType:e.groupAvatarType,id:e.id,isLiveAssistance:e.liveAssistance,lastMessage:e.lastMessage,partner:e.partner||{},subject:e.subject,ticket:e.ticket,unreadMessages:e.unreadMessages,updated:e.updated,sender:e.sender}};return{getInfomation:function(){return o},setInfomation:function(e){o=e},getVersion:function(){return l},setVersion:function(e){l=e},getBodyBgTheme:function(){return d},setBodyBgTheme:function(e){d=e},getBodyFontSize:function(){return u},setBodyFontSize:function(e){u=e},getRooms:function(){return r},setRooms:function(e){r=e},setRoomWithAdapter:p,setRoomsWithAdapter:function(e){r=e.map(p)},getCurrentRoomId:function(){return c},setCurrentRoomId:function(e){c=e},getCurrentMessages:function(){return i},setCurrentMessages:function(e){i=e},getCurrentSearchMessages:function(){return s},setCurrentSearchMessages:function(e){s=e},getRoomInfoWasEdited:function(){return f},setRoomInfoWasEdited:function(e){f=e},getNetworkStatus:function(){return e},setNetworkStatus:function(t){e=t},getEasyrtcIds:function(){return m},setEasyrtcIds:function(e){m=e},getIdShareScreen:function(){return t},setIdShareScreen:function(e){t=e},getIsEnabelCamera:function(){return n},setIsEnabelCamera:function(e){n=e},getIsEnabelMic:function(){return a},setIsEnabelMic:function(e){a=e}}}.call(t,n,t,e))||(e.exports=a)},7025:(e,t,n)=>{var a,o,r=n(9755);n(381).suppressDeprecationWarnings;a=[n(381),n(7759)],void 0===(o=function(e,t){return{setCookie:function(e,t){var n="";if(t){var a=new Date;a.setTime(a.getTime()+24*t*60*60*1e3),n="; expires=".concat(a.toUTCString())}document.cookie="token=".concat(e||"").concat(n,"; path=/")},setDataToLocalApplication:function(e,t){localStorage.setItem(e,t)},getDataToLocalApplication:function(e){return localStorage.getItem(e)},removeDataInLocalApplication:function(e){localStorage.removeItem(e)},getAvatar:function(e,n){if(e)return"".concat(t.API_URL,"/").concat(n?"chats":"users","/").concat(e,"/avatar")},sortBy:function(e,t){return e.sort((function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}))},stripTags:function(e){return e.replace(/(<([^>]+)>)/gi,"")},convertMessagetime:function(t){var n=e(t),a=e(),o=e().subtract(1,"days");return a.isSame(n,"date")?"Today ".concat(n.format("H:mm")):o.isSame(n,"date")?"Yesterday ".concat(n.format("H:mm")):n.format("D MMM, H:mm")},humanFileSize:function(e){var t=1e3;if(Math.abs(e)<t)return"".concat(e," B");var n=["kB","MB","GB","TB","PB","EB","ZB","YB"],a=-1,o=Math.pow(10,1);do{e/=t,++a}while(Math.round(Math.abs(e)*o)/o>=t&&a<n.length-1);return"".concat(e.toFixed(1)," ").concat(n[a])},htmlDecode:function(e){var t=document.createElement("textarea");return t.innerHTML=e,0===t.childNodes.length?"":t.childNodes[0].nodeValue},htmlEncode:function(e){var t=document.createElement("textarea");return t.textContent=e,t.innerHTML},decodeStringBase64:function(e){var t;try{t=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(e)?decodeURIComponent(escape(window.atob(e))):e}catch(n){t=e,console.log(n)}return t},encodeStringBase64:function(e){var t;try{t=window.btoa(unescape(encodeURIComponent(e)))}catch(n){t=e,console.log(n)}return t},debounce:function(e,t,n){var a;return function(){var o=this,r=arguments,c=function(){a=null,n||e.apply(o,r)},i=n&&!a;clearTimeout(a),a=setTimeout(c,t),i&&e.apply(o,r)}},transformLinkTextToHTML:function(e){if(!e)return"";return e.replace(/(www|ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g,(function(e){return"<a href='".concat(e,"' target='_blank' rel='noopener noreferrer'>").concat(e,"</a>")}))},truncate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return e.length>t?"".concat(e.substring(0,t-3),"..."):e},highlightText:function(e,t){var n=0,a=t.split(/\s+/).filter((function(e){return e.length>0})).map((function(e){return e.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}));if(0===a.length)return e;for(var o=new RegExp(a.join("|"),"gi"),r=[];;){var c=o.exec(e);if(!c)break;var i=c[0].length,s=e.slice(n,o.lastIndex-i);s.length>0&&r.push(s),n=o.lastIndex,r.push('<span class="highlight-text">'.concat(c[0],"</span>"))}var l=e.slice(n);return l.length>0&&r.push(l),r.join("")},confirm:function(e){var t;r("#confirmModal").remove(),r("body").append('\n    <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog">\n        <div class="modal-dialog modal-dialog-centered" role="document">\n            <div class="modal-content">\n                <div class="modal-body">\n                    <h2>'.concat((t=e||{}).title||"Are you sure?","</h2>\n                    <p>").concat(t.des||"Are you sure you want to do this?",'</p>\n                    <button type="button" class="btn btn-outline-primary btn-small float-right" style="margin-left: 5px">\n                        ').concat(t.textOk||"Ok",'\n                    </button>\n                    <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-outline-secondary btn-small float-right">\n                        ').concat(t.textCancel||"Cancel","\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n"));var n=r("#confirmModal");n.modal("show"),n.find(".btn-outline-primary").off().click((function(){n.find(".btn-outline-secondary").click(),e.onOk&&e.onOk()}))},generateId:function(){return Math.random().toString(36).substr(2,9)},render:function(e,t){return r.templates(function(e){return e.replace(/{([^}]+)}/g,(function(e,t){var n=t.replace(/\./g,"^");return"{^{:".concat(n,"}}")}))}(e)).render(t)}}}.apply(t,a))||(e.exports=o)},5931:(e,t,n)=>{var a;void 0===(a=function(){return"https://webrtc.iptp.net"}.call(t,n,t,e))||(e.exports=a)}},t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.x=e=>{},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={644:0},t=[[7415,532,755,861]],a=e=>{},o=(o,r)=>{for(var c,i,[s,l,d,u]=r,f=0,m=[];f<s.length;f++)i=s[f],n.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(c in l)n.o(l,c)&&(n.m[c]=l[c]);for(d&&d(n),o&&o(r);m.length;)m.shift()();return u&&t.push.apply(t,u),a()},r=self.webpackChunkxm=self.webpackChunkxm||[];function c(){for(var a,o=0;o<t.length;o++){for(var r=t[o],c=!0,i=1;i<r.length;i++){var s=r[i];0!==e[s]&&(c=!1)}c&&(t.splice(o--,1),a=n(n.s=r[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),a}r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r));var i=n.x;n.x=()=>(n.x=i||(e=>{}),(a=c)())})(),n.x()})();