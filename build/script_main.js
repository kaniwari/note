var fcMain=function(){var b=document.body,Pb=document.getElementById("cover-header-wrapper"),la=document.getElementById("global-nav"),jb=document.getElementById("links"),Qa=document.getElementById("subscription-in-links"),R=document.getElementById("sidebar"),r=document.getElementById("sidebar-inner"),C=document.getElementById("sidebar-scrollbar"),J=document.getElementById("sidebar-inner-height"),za=document.getElementById("sidebar-scrollbar-inner"),Qb=document.getElementById("contents"),S=document.getElementById("sidebar-outer-toggle"),
y,g,k,D,kb,ba,ca,Aa,T,Ra,h,ma,e,t,na,v,Sa,f,da,Ta,Ua,G,Va,Wa,lb,w,mb,Ba,oa,Ca,n,pa,z=b.dataset.sidebar,nb,ob,ea,c,pb,l,Da,qb,rb,K,sb,tb,ub,x,fa,Ea,vb,qa,Fa,ha,ia,Ga,m,U,V,H,A,L,E,Xa,Ya,W,Za,Ha,wb,xb,ra,ja,yb,zb,q,$a,Ab,Ia,Ja,M,sa,ta,ab,ua,bb,va,B,cb,N,X,O,Bb,Cb,Db,I,Eb,wa,ka,Y,db,d,eb,Ka,p,Fb,Z,F,xa=function(a){void 0===w&&(w=document.getElementById("fc-preset"),mb=document.getElementById("fc-overflow-inner"),Ba=document.getElementById("fc-content-without-scrollbar"),pa=b.dataset.safeArea,w.classList.contains("loaded")||
(w.hidden=!1,w.setAttribute("aria-hidden","true"),w.style.cssText="position: fixed;z-index: -1;top: 0;left: -100px;width: 100px;height: 100%;padding-left: env(safe-area-inset-left);margin-left: calc(env(safe-area-inset-left) * -1);background-color: #fff;opacity: 0;pointer-events: none",mb.style.cssText="overflow-x: hidden;overflow-y: scroll;position: absolute;top: 0;left: 0;width: 100%;height: 100%;background-color: #fff",Ba.style.cssText="width: 100%;height: 150vw;background-color: #fff",w.classList.add("loaded")));
oa!==w.offsetWidth&&(oa=w.offsetWidth);"safemode-only"!==a&&(Ca!==Ba.offsetWidth&&(Ca=Ba.offsetWidth),n!==oa-Ca&&(n=oa-Ca));100<oa?"on"!==pa&&(b.dataset.safeArea="on",pa=b.dataset.safeArea):"off"!==pa&&(b.dataset.safeArea="off",pa=b.dataset.safeArea)},Rb=function(){g<Qb.offsetHeight?"yes"!==b.dataset.overflow&&(b.dataset.overflow="yes"):"no"!==b.dataset.overflow&&(b.dataset.overflow="no")},La=function(){-1===userAgent.indexOf("trident")&&CSS.supports("overscroll-behavior-y","contain")||(clearTimeout(kb),
kb=setTimeout(Rb,100))},Gb=function(a){if(-1===userAgent.indexOf("trident")&&CSS.supports("scroll-behavior","smooth"))window.scroll({top:a,behavior:"smooth"});else{var b=document.documentElement.scrollTop,c=a-b,d=0,e=function(){d+=20;var a=Math.easeInOutQuad(d,b,c,500);document.documentElement.scrollTop=a;500>d&&setTimeout(e,20)};e()}};-1===userAgent.indexOf("trident")&&CSS.supports("scroll-behavior","smooth")||(Math.easeInOutQuad=function(a,b,c,d){a/=d/2;if(1>a)return c/2*a*a+b;a--;return-c/2*(a*
(a-2)-1)+b});var Ma=function(){-1===userAgent.indexOf("trident")&&CSS.supports("overscroll-behavior-y","contain")||(void 0===D&&(D=document.createElement("style"),D.dataset.stylesheet="behavior",D.dataset.scrollbarSize=void 0,document.querySelector("style[data-stylesheet='appearance']").parentNode.insertBefore(D,document.querySelector("style[data-stylesheet='appearance']"))),0!==n?n!==Number(D.dataset.scrollbarSize)&&(D.dataset.scrollbarSize=n,D.innerHTML=0===n?'[data-sidebar="open"]:not(.fixed-sidebar) {overflow-y: hidden}':
'[data-sidebar="open"]:not(.fixed-sidebar) {overflow-y: hidden}[data-sidebar="open"]:not(.fixed-sidebar) .wrapper:before {position: absolute;z-index: 10000;top: 0;right: 0;height: 100%;background-color: #f8f8f8;pointer-events: none;-webkit-user-select: none;-ms-user-select: none;user-select: none}@media (prefers-color-scheme: dark) {html.dark [data-sidebar="open"]:not(.fixed-sidebar) .wrapper:before {background-color: #111}}[data-overflow="yes"][data-sidebar="open"]:not(.fixed-sidebar) .wrapper,[data-overflow="yes"][data-safe-area="on"][data-sidebar="open"]:not(.fixed-sidebar) #links,[data-overflow="yes"][data-interface="touch"][data-sidebar="open"]:not(.fixed-sidebar) #links {padding-right: '+
n+'px}[data-overflow="yes"][data-sidebar="open"]:not(.fixed-sidebar) .wrapper:before {content: "";width: '+n+'px}[data-overflow="yes"][data-sidebar="open"]:not(.fixed-sidebar) .global-footer {width: calc(100% - '+n+'px)}@media (min-width: 601px) {[data-overflow="yes"][data-interface="mouse"][data-safe-area="off"][data-sidebar="open"]:not(.fixed-sidebar) #links {padding-bottom: '+n+'px}}@media (max-width: 600px) {[data-overflow="yes"][data-sidebar="open"]:not(.fixed-sidebar) #links {padding-right: '+
n+"px}}"):void 0!==D&&(D.innerHTML='[data-sidebar="open"]:not(.fixed-sidebar) {overflow-y: hidden}'))},Na=function(){y!==window.innerWidth&&(y=window.innerWidth);g!==w.offsetHeight&&null!==w.offsetHeight&&(g=w.offsetHeight);k!==window.pageYOffset&&(k=window.pageYOffset)},Hb=function(){600<=y?"desktop"!==b.dataset.mode&&(b.dataset.mode="desktop",b.classList.contains("changing")||b.classList.add("changing"),clearTimeout(Aa),Aa=setTimeout(function(a){b.classList.contains("changing")&&b.classList.remove("changing")},
200)):"mobile"!==b.dataset.mode&&(b.dataset.mode="mobile",b.classList.contains("changing")||b.classList.add("changing"),clearTimeout(Aa),Aa=setTimeout(function(a){b.classList.contains("changing")&&b.classList.remove("changing")},100))},fb=function(a){a.target.classList.contains("square")&&a.target.naturalWidth!==a.target.naturalHeight&&a.target.classList.remove("square");a.target.classList.contains("horizontal")&&a.target.naturalWidth<=a.target.naturalHeight&&a.target.classList.remove("horizontal");
a.target.classList.contains("vertical")&&a.target.naturalWidth>=a.target.naturalHeight&&a.target.classList.remove("vertical");a.target.classList.contains("square")||a.target.naturalWidth!==a.target.naturalHeight?!a.target.classList.contains("horizontal")&&a.target.naturalWidth>a.target.naturalHeight?a.target.classList.add("horizontal"):!a.target.classList.contains("vertical")&&a.target.naturalWidth<a.target.naturalHeight&&a.target.classList.add("vertical"):a.target.classList.add("square")},P=function(a){if("resize"===
a){if(f=document.querySelectorAll(".fc-image-async.autosize.loaded"),da=f.length,0<da)for(i=0;i<da;i++)G=f[i].clientWidth+"px",f[i].getElementsByTagName("img")[0].sizes!==G&&(f[i].getElementsByTagName("img")[0].sizes=G,f[i].getElementsByTagName("img")[0].addEventListener("load",fb))}else if(f=document.querySelectorAll(".fc-image-async:not(.loaded)"),da=f.length,0<da)for(i=0;i<da;i++)Ta=f[i].dataset.src,Ua=f[i].dataset.srcset,$asyncImageDataWidth=f[i].dataset.width,Va=f[i].dataset.alt,lb=f[i].dataset.scroll,
"auto"===f[i].dataset.sizes?(G=f[i].clientWidth+"px",f[i].classList.add("autosize")):G=f[i].dataset.sizes,"no"===lb||"loading"in HTMLImageElement.prototype?(newElement=document.createElement("img"),newElement.src=Ta,newElement.srcset=Ua,void 0!==G&&(newElement.sizes=G),newElement.width=$asyncImageDataWidth,newElement.alt=Va,"loading"in HTMLImageElement.prototype&&(newElement.loading="lazy"),f[i].appendChild(newElement),f[i].getElementsByTagName("img")[0].addEventListener("load",fb),f[i].classList.add("loaded")):
(Wa!==k+f[i].getBoundingClientRect().top&&(f[i].dataset.position=k+f[i].getBoundingClientRect().top,Wa=Number(f[i].dataset.position)),Wa<k+g&&(newElement=document.createElement("img"),newElement.src=Ta,newElement.srcset=Ua,void 0!==G&&(newElement.sizes=G),newElement.width=$asyncImageDataWidth,newElement.alt=Va,f[i].appendChild(newElement),f[i].getElementsByTagName("img")[0].addEventListener("load",fb),f[i].classList.add("loaded")))},ya=function(a){if("#"!==location.hash&&(void 0===l&&(l=document.getElementById(String(location.hash).replace("#",
""))),null!==l)){if(-1!==String(l.id).indexOf("comment")&&null!==document.getElementById(l.id)&&"li"===l.tagName.toLowerCase()){null!==m&&"comments"!==m.dataset.activity&&("share"===m.dataset.activity?(V.checked=!1,L.hidden=!0):"related"===m.dataset.activity&&(H.checked=!1,E.hidden=!0),m.dataset.activity="comments",U.checked=!0,A.hidden=!1);clearTimeout(rb);clearTimeout(qb);Da=document.querySelectorAll('.active[id*="comment"]');if(0<Da.length)for(i=0;i<Da.length;i++)Da[i].classList.remove("active");
qb=setTimeout(function(a){l.classList.add("active");rb=setTimeout(function(a){l.classList.contains("active")&&l.classList.remove("active")},2E3)},500)}0<Number(k+l.getBoundingClientRect().top-g/4)&&k!==k+l.getBoundingClientRect().top-g/4&&("smooth"===a?Gb(k+l.getBoundingClientRect().top-g/4):document.documentElement.scrollTop=k+l.getBoundingClientRect().top-g/4)}},Ib=function(){void 0===K&&(K=document.querySelector(".menu_toolbar .btn_subscription"));if(null!==K){if(sb=K.dataset.blogId,tb=K.dataset.url,
ub=K.dataset.device,null!==x&&(x=document.getElementsByClassName("btn_subscription"),fa=x.length),0<fa)for(i=0;i<fa;i++)x[i].dataset.blogId=sb,x[i].dataset.url=tb,x[i].dataset.device=ub,x[i].getElementsByClassName("txt_state")[0].textContent=K.getElementsByClassName("txt_state")[0].textContent,K.classList.contains("following")&&x[i].classList.add("following")}else if(null!==Qa&&(Qa.classList.remove("subscribe-inner"),void 0===Z&&(Z=Qa.getElementsByClassName("btn_subscription")),0<Z.length&&(Z[0].href=
"/",Z[0].textContent="\ucc98\uc74c\uc73c\ub85c",Z[0].classList.add("go-to-home","fc-invisible-text"),Z[0].classList.remove("btn_subscription"))),null!==x&&(x=document.getElementsByClassName("subscribe-inner"),fa=x.length),0<fa)for(i=0;i<fa;i++)x[i].hidden=!0;void 0===Ea&&(Ea=document.querySelector(".menu_toolbar .inner_header_layer"));void 0===qa&&(qa=document.getElementById("tistory-module-inner"));null!==Ea&&null!==qa&&(vb=document.getElementById("tistory-module"),vb.classList.remove("list-style-module"),
qa.innerHTML=Ea.innerHTML.replaceAll("img_common_tistory","img_common_tistory fc-icon fc-center-icon"),qa.classList.remove("module-inner"))},Sb=function(a){a.preventDefault();a.target.closest(".fav-link").classList.contains("fav-background")&&a.target.closest(".fav-link").classList.remove("fav-background","fav-link","fc-invisible-text");a.target.closest(".fav-link").classList.add("fc-icon");a.target.closest("li").classList.add("link-loaded");a.target.parentElement.parentNode.removeChild(a.target.parentElement)},
Tb=function(a){a.target.closest("li").classList.add("link-loaded");-1===userAgent.indexOf("trident")&&(CSS.supports("-webkit-backdrop-filter","blur(0px)")||CSS.supports("backdrop-filter","blur(0px)"))&&a.target.closest(".fav-link").classList.contains("fav-background")&&(a.target.closest("li").style.backgroundImage="url("+a.target.src+")")},gb=function(a){void 0===I&&(I=document.getElementById("search-input"),Eb=document.getElementById("search-button"));Eb.disabled=""===I.value?!0:!1},Ub=function(a){b.classList.remove("on-progress")},
hb=function(){b.classList.contains("on-progress")?clearTimeout(nb):b.classList.add("on-progress");nb=setTimeout(Ub,500)},Vb=function(){C.classList.contains("show-scrollbar")&&C.classList.remove("show-scrollbar")},u=function(a,e){if("fixed"===e&&"on"===fixedSidebar)1440<=y?("open"!==z&&("onload"!==a&&hb(),b.dataset.sidebar="open",R.hidden=!1,$wrapper.hidden=!1,la.hidden=!0,S.hidden=!0,z=b.dataset.sidebar),b.classList.contains("fixed-sidebar")||b.classList.add("fixed-sidebar")):("closed"!==z&&("onload"!==
a&&hb(),void 0!==I?I!==document.activeElement?(b.dataset.sidebar="closed",R.hidden=!0,$wrapper.hidden=!1,la.hidden=!1,S.hidden=!0):(b.dataset.sidebar="open",R.hidden=!1,S.hidden=!1,$wrapper.hidden=!0,0!==r.scrollTop&&(r.scrollTop=0)):(b.dataset.sidebar="closed",R.hidden=!0,$wrapper.hidden=!1,la.hidden=!1,S.hidden=!0),z=b.dataset.sidebar),b.classList.contains("fixed-sidebar")&&b.classList.remove("fixed-sidebar"));else if("status"===e)hb(),"closed"===z?(b.dataset.sidebar="open",R.hidden=!1,S.hidden=
!1,$wrapper.hidden=!0,0!==r.scrollTop&&(r.scrollTop=0)):void 0!==I?I!==document.activeElement&&(b.dataset.sidebar="closed",R.hidden=!0,S.hidden=!0,$wrapper.hidden=!1):(b.dataset.sidebar="closed",R.hidden=!0,S.hidden=!0,$wrapper.hidden=!1),z=b.dataset.sidebar,xa("normal"),Ma(),La(),u("normal","scrollbar");else if("scrollbar"===e)"open"===z&&(0>=n?(!0!==C.hidden&&(C.hidden=!0),""!==r.style.width&&(r.style.width="")):(r.style.width!=="calc(100% + "+(n+1)+"px)"&&(r.style.width="calc(100% + "+(n+1)+"px)",
r.style.paddingRight="1px"),J.offsetHeight>g?(!1!==C.hidden&&(C.hidden=!1),za.style.height!==g/J.offsetHeight*100+"%"&&(za.style.height=g/J.offsetHeight*100+"%"),C.classList.contains("show-scrollbar")||C.classList.add("show-scrollbar"),clearTimeout(ob),ob=setTimeout(Vb,800)):!0!==C.hidden&&(C.hidden=!0)));else if("module"===e){$a=document.getElementById("category-module");document.getElementById("subscribe-module");Y=document.getElementsByClassName("fav-link");db=Y.length;Db=document.getElementById("search-module");
0!==n&&(r.style.width="calc(100% + "+(n+1)+"px)",r.style.paddingRight="1px");if(null!==$a&&(void 0===B&&(B=$a.querySelectorAll(".category_list > li"),cb=B.length),0<cb))for(i=0;i<cb;i++)N="category"+(i+1),O="sub-"+N,B[i].id=N,X=B[i].getElementsByClassName("sub_category_list"),0<X.length&&(X[0].id=O,Bb=B[i].querySelector(".link_item .c_cnt"),Cb=null!==Bb?B[i].getElementsByClassName("link_item")[0].innerHTML.replace(B[i].querySelector(".link_item .c_cnt").outerHTML,"").replaceAll("\t","").replace(/(\r\n|\n|\r)/gm,
""):B[i].getElementsByClassName("link_item")[0].textContent.replaceAll("\t","").replace(/(\r\n|\n|\r)/gm,""),X[0].insertAdjacentHTML("beforebegin",'<div class="category-toggle-inner"><input class="category-toggle-button fc-appearance" type="checkbox" id="show-'+O+'"><label class="fc-icon fc-center-icon" for="show-'+O+'"><span class="fc-invisible-text">'+Cb+"\uc758 \uce74\ud14c\uace0\ub9ac \ubcf4\uae30</span></label></div>"),"on"===hideSubCategory?(X[0].hidden=!0,B[i].classList.add("closed")):(document.getElementById("show-"+
O).checked=!0,B[i].classList.add("open")),X[0].style.height=36*X[0].getElementsByClassName("link_sub_item").length+"px");if(0<db)for(i=0;i<db;i++)d=Y[i].dataset.favicon,"undefined"===d?(d=Y[i].href.replace("http://","https://").replace("https://","").split("/")[0],eb=-1!==(d.indexOf("blog.me")||d.indexOf("blog.naver.com"))?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/naver_blog.png":-1!==d.indexOf("band.us")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/naver_band.png":-1!==d.indexOf("cafe.naver")?
"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/naver_cafe.png":-1!==d.indexOf("cafe.daum")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/daum_cafe.png":-1!==d.indexOf("egloos")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/egloos.png":-1!==d.indexOf("twitter")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/twitter.png":-1!==d.indexOf("facebook")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/facebook.png":-1!==d.indexOf("instagram")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/instagram.png":-1!==d.indexOf("tumblr")?
"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/tumblr.png":-1!==d.indexOf("youtube")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/youtube.png":-1!==d.indexOf("dribbble")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/dribbble.png":-1!==d.indexOf("linkedin")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/linkedin.png":-1!==d.indexOf("pinterest")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/pinterest.png":-1!==d.indexOf("paddle.com")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/paddlecom.png":-1!==
d.indexOf("github")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/github.png":-1!==d.indexOf("soundcloud")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/soundcloud.png":-1!==d.indexOf("brunch.co")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/brunch.png":-1!==d.indexOf("britg")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/britg.png":-1!==d.indexOf("bandcamp")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/bandcamp.png":-1!==d.indexOf("deviantart")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/deviantart.png":
-1!==d.indexOf("pixiv")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/pixiv.png":-1!==d.indexOf("story.kakao")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/kakaostory.png":-1!==d.indexOf("pf.kakao")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/kakaotalk_channel.png":-1!==d.indexOf("shutterstock")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/shutterstock.png":-1!==d.indexOf("500px.com")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/500px.png":-1!==(d.indexOf("open.kakao")||d.indexOf("qr.kakao.com")||
d.indexOf("kakaopay.com"))?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/talk.png":-1!==d.indexOf("fraccinospace.tistory")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/space.png":-1!==d.indexOf("fcnotebook.tistory")?"//cdn.jsdelivr.net/gh/kaniwari/space/favicon/fcnote.png":"//"+d+"/favicon.ico"):eb=d,Y[i].insertAdjacentHTML("afterbegin",'<figure class="link-favicon"><img src="'+eb+'" alt="\ub9c1\ud06c\uc758 \ud30c\ube44\ucf58" width="13" height="13"></figure>'),Y[i].querySelector(".link-favicon img").addEventListener("error",
Sb),Y[i].querySelector(".link-favicon img").addEventListener("load",Tb);null!==Db&&(gb(),I.addEventListener("input",gb),I.addEventListener("keyup",gb))}else"click-category"===e?(N=c.id.replace("show-sub-",""),O=c.id.replace("show-",""),!0===c.checked?(document.getElementById(O).hidden=!1,document.getElementById(N).classList.add("open"),document.getElementById(N).classList.remove("closed")):(document.getElementById(O).hidden=!0,document.getElementById(N).classList.add("closed"),document.getElementById(N).classList.remove("open"))):
"click-comment"===e&&(ka=String(c.href).split("//"),ka=ka[ka.length-1].split("/"),wa=ka[ka.length-1].split("#"),location.pathname==="/"+wa[0]&&(event.preventDefault(),location.hash!=="#"+wa[1]&&history.pushState(location.href,document.title,"#"+wa[1]),l=document.getElementById(wa[1]),"open"!==z||b.classList.contains("fixed-sidebar")?ya("smooth"):window.setTimeout(function(a){ya("smooth")},200),b.classList.contains("fixed-sidebar")||u("normal","status")))},Oa=function(a){u("normal","scrollbar");"open"===
z&&0<n&&J.offsetHeight>g&&za.style.top!==(r.scrollTop+g)/J.offsetHeight*100-g/J.offsetHeight*100+"%"&&(za.style.top=(r.scrollTop+g)/J.offsetHeight*100-g/J.offsetHeight*100+"%")};r.addEventListener("scroll",Oa);var aa=function(){b.classList.contains("hide-nav")&&(clearTimeout(ea),b.classList.remove("hide-nav"),F!==k&&(F=k))},Jb=function(){for(i=0;i<ma;i++)if(e=h[i].getElementsByClassName("fc-gallery-item"),t=e.length,1<t){for(v=0;v<t;v++)e[v].hidden||(e[v].hidden=!0),e[v].classList.contains("ready")&&
e[v].classList.remove("ready");e[Number(h[i].dataset.current)-1].hidden=!1;1===Number(h[i].dataset.current)?(e[1].classList.add("ready"),e[Number(h[i].dataset.length)-1].classList.contains("ready")||e[Number(h[i].dataset.length)-1].classList.add("ready")):Number(h[i].dataset.current)===Number(h[i].dataset.length)?(e[0].classList.add("ready"),e[Number(h[i].dataset.length)-2].classList.contains("ready")||e[Number(h[i].dataset.length)-2].classList.add("ready")):(e[Number(h[i].dataset.current)-2].classList.add("ready"),
e[Number(h[i].dataset.current)].classList.add("ready"))}P();P("resize")},Kb=function(){for(i=0;i<ma;i++)t=Number(h[i].dataset.length),e=Number(h[i].dataset.current),1<t&&(h[i].dataset.current=e+1>t?"1":String(e+1),h[i].classList.toggle("sliding"));Jb()},Lb=function(a){e=c.closest(".fc-list-wrapper").getElementsByClassName("fc-gallery")[0];t=Number(e.dataset.length);na=Number(e.dataset.current);1<t&&("prev"===a?e.dataset.current=0>=na-1?e.dataset.length:na-1:"next"===a&&(e.dataset.current=na>=t?"1":
na+1),e.classList.toggle("sliding"),Jb(),clearInterval(Sa),Sa=setInterval(Kb,galleryInterval))},Pa=function(a){void 0===ha&&(Fa=document.getElementById("header-admin-toggle"),ha=document.getElementById("admin-toggle-button"),Ga=document.getElementById("header-item-time"),ia=document.getElementById("header-admin-inner"));"click"===a?!0===ha.checked?!1!==ia.hidden&&(Fa.dataset.status="open",Ga.setAttribute("aria-hidden",!0),ia.hidden=!1):!0!==ia.hidden&&(Fa.dataset.status="closed",Ga.removeAttribute("aria-hidden"),
ia.hidden=!0):"resize"===a&&null!==ha&&!0===ha.checked&&(Fa.dataset.status="closed",Ga.removeAttribute("aria-hidden"),ha.checked=!1,ia.hidden=!0)},ib=function(a){void 0===m&&(m=document.getElementById("activities"));if("load"===a)null!==m&&(U=document.getElementById("toggle-comments"),V=document.getElementById("toggle-share"),H=document.getElementById("toggle-related"),A=document.getElementById("comments"),L=document.getElementById("share"),E=document.getElementById("related"),-1!==String(location.hash).indexOf("comment")&&
null!==document.getElementById(location.hash.replace("#",""))?(m.dataset.activity="comments",U.checked=!0,A.hidden=!1):("comments"===activities?(null===document.getElementById("comment-list-container")&&null===document.getElementById("comment-form")?(document.getElementById("toggle-comments").disabled=!0,m.dataset.activity="related",H.checked=!0,E.hidden=!1):(m.dataset.activity="comments",U.checked=!0,A.hidden=!1),null===document.querySelector("meta[property='og:title']")&&(document.getElementById("toggle-share").disabled=
!0)):"share"===activities?(null===document.querySelector("meta[property='og:title']")?(document.getElementById("toggle-share").disabled=!0,m.dataset.activity="related",H.checked=!0,E.hidden=!1):"on"===shareSheet&&navigator.share?(m.dataset.activity="related",H.checked=!0,E.hidden=!1):(m.dataset.activity="share",V.checked=!0,L.hidden=!1),null===document.getElementById("comment-list-container")&&null===document.getElementById("comment-form")&&(document.getElementById("toggle-comments").disabled=!0)):
"related"===activities&&(m.dataset.activity="related",H.checked=!0,E.hidden=!1,null===document.getElementById("comment-list-container")&&null===document.getElementById("comment-form")&&(document.getElementById("toggle-comments").disabled=!0),null===document.querySelector("meta[property='og:title']")&&(document.getElementById("toggle-share").disabled=!0)),Pa("resize"),Q("click-outside")),void 0===Ia&&(Ia=document.querySelector("meta[property*='plink']")),null!==Ia?(Ja=Ia.content,M=encodeURIComponent(Ja),
Ja.replace("https://","").replace("http://","").replace("/notice/","/").split("/"),sa=document.querySelector("meta[property='og:title']").content,ta=encodeURIComponent(sa),ab=ta.replace(/%20/g,"+"),ua=encodeURIComponent(blogTitle),bb=ua.replace(/%20/g,"+"),va=",toolbar=no,menubar=no,status=no,scrollbars=no"):L.setAttribute("aria-disabled","true"));else if("click"===a)U.checked?(m.dataset.activity="comments",U.checked=!0,A.hidden=!1,L.hidden=!0,E.hidden=!0):V.checked?"on"===shareSheet&&navigator.share?
(V.checked=!1,"comments"===m.dataset.activity?U.checked=!0:"related"===m.dataset.activity&&(H.checked=!0),navigator.share({title:document.querySelector("meta[property='og:title']").content,url:document.querySelector("meta[property='og:url']").content}).catch(function(a){console.log("\uacf5\uc720 \uc2e4\ud328 - "+a);-1!==String(a).indexOf("NotAllowedError")&&(m.dataset.activity="share",V.checked=!0,A.hidden=!0,L.hidden=!1,E.hidden=!0)})):(m.dataset.activity="share",V.checked=!0,A.hidden=!0,L.hidden=
!1,E.hidden=!0):H.checked&&(m.dataset.activity="related",H.checked=!0,A.hidden=!0,L.hidden=!0,E.hidden=!1);else if("click-share"===a)switch(Ab=c.dataset.share,Ab){case "kakaotalk":a=null!==document.querySelector("meta[property='og:description']")?{TITLE:sa,DESCRIPTION:document.querySelector("meta[property='og:description']").content,PROFILE_IMAGE:document.querySelector("link[sizes='152x152']").href,PROFILE_NAME:document.querySelector("meta[name='by']").content,BUTTON1_PC_URL:document.querySelector("meta[property='og:url']").content,
BUTTON1_MO_URL:document.querySelector("meta[property='og:url']").content,BUTTON1_TITLE:blogTitle+"\uc5d0\uc11c \uc77d\uae30"}:{TITLE:sa,PROFILE_IMAGE:document.querySelector("link[sizes='152x152']").href,PROFILE_NAME:document.querySelector("meta[name='by']").content,BUTTON1_PC_URL:document.querySelector("meta[property='og:url']").content,BUTTON1_MO_URL:document.querySelector("meta[property='og:url']").content,BUTTON1_TITLE:blogTitle+"\uc5d0\uc11c \uc77d\uae30"};null!==document.querySelector("meta[property='og:image']")&&
"https://t1.daumcdn.net/cssjs/icon/557567EA016E200001"!==document.querySelector("meta[property='og:image']").content?(a.IMAGE1_URL=document.querySelector("meta[property='og:image']").content,Kakao.Link.sendCustom({templateId:7461,templateArgs:a})):Kakao.Link.sendCustom({templateId:7469,templateArgs:a});break;case "line":location.href="line://msg/text/"+encodeURIComponent("[\uacf5\uc720] ")+ta+"%20-%20"+ua+"%20"+M;break;case "twitter":window.open("https://twitter.com/intent/tweet?text="+ab+"+-+"+bb+
"&url="+M,"\ud2b8\uc704\ud130","width=640,height=446"+va);break;case "facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+M,"Facebook","width=640,height=624"+va);break;case "kakaostory":Kakao.Story.share({url:Ja,text:sa+" - "+blogTitle});break;case "band":window.open("http://band.us/plugin/share?body="+ta+"%20-%20"+ua+"%20"+M+"&route="+M,"Band","width=600,height=655"+va);break;case "naver":window.open("http://share.naver.com/web/shareView.nhn?url="+M+"&title="+encodeURIComponent("[\uc2a4\ud06c\ub7a9] ")+
ua+"%20-%20"+ta,"NAVER","width=640,height=640"+va);break;case "pocket":window.open("https://getpocket.com/edit?url="+M+"&title="+ab+"+-+"+bb,"Pocket")}},Mb=function(a){a.target.style.height="auto";a.target.style.height=a.target.scrollHeight+"px";a.target.parentElement.style.height="auto";a.target.parentElement.style.height=a.target.parentElement.offsetHeight+"px";a.target.parentElement.parentElement.style.height!==a.target.parentElement.offsetHeight+"px"&&(a.target.parentElement.parentElement.style.height=
a.target.parentElement.offsetHeight+"px")},Q=function(a){void 0===A&&(A=document.getElementById("comments"));void 0===q&&(q=document.getElementById("comment-textarea"),null!==q&&(q.addEventListener("input",Mb),q.addEventListener("keyup",Mb)));"click"===a?(W=c.id.replace("show-control-",""),Xa=document.querySelector(".comment-article[data-id="+W+"]"),Ya=document.getElementById("comment-info-"+W),Za=document.getElementById("control-"+W),ra=document.getElementById("inactive-comment-button-inner"),Ha=
document.querySelector("#date-"+W+" a"),!0===c.checked?("action"===b.dataset.commentStatus&&(document.querySelector(".comment-article.active .comment-toggle-button").checked=!1,document.querySelector(".comment-article.active .comment-info-text").hidden=!1,document.querySelector(".comment-article.active .comment-control-inner").hidden=!0,document.querySelector(".comment-article.active").classList.remove("active"),ra.hidden=!0,b.classList.contains("hide-nav")&&b.classList.remove("hide-nav")),Xa.classList.add("active"),
Ya.hidden=!0,Za.hidden=!1,ra.hidden=!1,b.dataset.commentStatus="action",b.classList.contains("hide-nav")||b.classList.add("hide-nav")):(Xa.classList.remove("active"),Ya.hidden=!1,Za.hidden=!0,ra.hidden=!0,b.dataset.commentStatus="undefined",b.classList.contains("hide-nav")&&b.classList.remove("hide-nav")),null!==Ha?(wb=Ha.getAttribute("onclick").replace("this.href","'"+Ha.getAttribute("href")+"'"),xb=document.getElementById("abuse-"+W),xb.setAttribute("onclick",wb)):document.getElementById("abuse-"+
W).disabled=!0):"click-form"===a?(yb=document.getElementById("comment-form-button-inner"),zb=document.getElementById("comment-form-inner"),ja=document.getElementById("comment-form"),yb.hidden=!0,zb.hidden=!1,q.click(),q.focus(),null!==document.getElementById("comment-input-privite")?ja.classList.add("has-privite"):ja.classList.add("fc-admin"),0===document.getElementsByClassName("comment-member-input-inner").length&&document.getElementsByClassName("comment-member-wrapper")[0].insertAdjacentHTML("afterbegin",
'<p class="fc-script-font fc-size-11px">'+commentLoginAlert+"</p>")):"click-outside"===a?null!==A&&"action"===b.dataset.commentStatus&&(document.querySelector(".comment-article.active .comment-toggle-button").checked=!1,document.querySelector(".comment-article.active .comment-info-text").hidden=!1,document.querySelector(".comment-article.active .comment-control-inner").hidden=!0,document.querySelector(".comment-article.active").classList.remove("active"),ra.hidden=!0,b.dataset.commentStatus="undefined",
"off"===hideNav&&b.classList.contains("hide-nav")&&b.classList.remove("hide-nav")):"click-privite"===a&&null!==ja&&(!0===event.target.checked?ja.classList.add("fc-secret"):ja.classList.remove("fc-secret"))};document.addEventListener("DOMContentLoaded",function(){-1!==userAgent.indexOf("trident")&&(b.dataset.browser="msie");-1!==userAgent.indexOf("edge")?b.dataset.browser="msedge":-1!==userAgent.indexOf("firefox")?b.dataset.browser="firefox":-1!==userAgent.indexOf("webkit")&&(-1!==userAgent.indexOf("chrome")?
b.dataset.browser="chrome":b.dataset.browser="safari");-1!==userAgent.indexOf("windows")?b.dataset.system="windows":-1!==userAgent.indexOf("linux")?b.dataset.system="linux":b.dataset.system="mac";"ontouchstart"in document.documentElement?(b.dataset.interface="touch",b.classList.add("touch")):(b.dataset.interface="mouse",b.classList.add("mouse"));xa("normal");Na();Hb();Ma();La();void 0===T&&(T=document.getElementsByClassName("image-item-container"),Ra=T.length);if(0<Ra)for(i=0;i<Ra;i++)0===T[i].getElementsByTagName("figure").length&&
(T[i].classList.add("no-image"),newElement=T[i].parentElement,null!==newElement&&(newElement=newElement.getElementsByClassName("list-item-desc"),0<newElement.length&&"\ubcf4\ud638\ub418\uc5b4 \uc788\ub294 \uae00\uc785\ub2c8\ub2e4."===newElement[0].textContent&&T[i].classList.add("protected")));P();Ib();h=document.getElementsByClassName("fc-gallery");ma=h.length;if(0<ma){for(i=0;i<ma;i++){e=h[i].getElementsByClassName("fc-gallery-item");t=e.length;h[i].dataset.length=t;h[i].dataset.current=0!==t?"1":
"0";if(1<t){for(v=0;v<t;v++)0!==v&&(e[v].hidden=!0);e[1].classList.add("ready");e[Number(h[i].dataset.length)-1].classList.contains("ready")||e[Number(h[i].dataset.length)-1].classList.add("ready")}h[i].classList.add("loaded")}Sa=setInterval(Kb,galleryInterval)}u("normal","module");Oa();u("onload","fixed");ib("load");void 0===Ka&&(Ka=document.getElementById("pagination"));if(null!==Ka)for(0<document.getElementsByClassName("fc-alter-wrapper").length&&$wrapper.classList.add("for-alter-page"),p=Ka.getElementsByTagName("a"),
Fb=p.length,i=0;i<Fb;i++)""===p[i].href?0<p[i].getElementsByClassName("selected").length?(p[i].classList.add("selected-inner"),p[i].setAttribute("aria-selected","true"),p[i].setAttribute("aria-label",p[i].textContent+"\ud398\uc774\uc9c0")):"\u00b7\u00b7\u00b7"===p[i].textContent?(p[i].innerHTML="<span>\u2026</span>",p[i].classList.add("ellipsis"),p[i].setAttribute("aria-hidden","true")):p[i].setAttribute("aria-disabled","true"):p[i].classList.contains("number")&&""!==p[i].href&&p[i].setAttribute("aria-label",
p[i].textContent+"\ud398\uc774\uc9c0");else $wrapper.classList.add("no-pagination");ba!==y&&(ba=y);ca!==g&&(ca=g);ya();null!==document.getElementById("alter-artwork")&&console.log("Artwork by Pocopo. (https://twitter.com/ArtworksPocoz)");"off"===fcDeveloper&&console.log("Designed by Fraccino. (https://fcnotebook.tistory.com)")});window.addEventListener("load",function(){xa("normal");Na();Ma();La();Oa();P();P("resize");Ib();ba!==y&&(ba=y);ca!==g&&(ca=g);ya()});var Nb=function(){b.classList.remove("hide-nav");
F=k},Ob=function(){"on"===topButton&&(k>Pb.offsetHeight+g/10?b.classList.contains("show-top-button")||b.classList.add("show-top-button"):b.classList.contains("show-top-button")&&b.classList.remove("show-top-button"))};window.addEventListener("scroll",function(){xa("safemode-only");Na();P();"closed"!==z&&(1440<=y?"on"!==fixedSidebar&&u("normal","status"):u("normal","status"));"on"===hideNav&&(void 0===F&&(F=k),80>=k?aa():k>F+g/10?(F=k,b.classList.contains("hide-nav")||(b.classList.add("hide-nav"),
clearTimeout(ea),ea=setTimeout(Nb,4200))):k<F&&(clearTimeout(ea),ea=setTimeout(Nb,4200),k<F-g/5&&(F=k,b.classList.contains("hide-nav")&&(clearTimeout(ea),b.classList.remove("hide-nav")))));Pa("resize");Q("click-outside");Ob()});window.addEventListener("resize",function(){xa("normal");Na();Hb();Ma();P();y!==ba&&(ba=y,u("normal","fixed"),P("resize"),"closed"!==z&&"on"!==fixedSidebar&&u("normal","status"));g!==ca&&(ca=g,La());"on"===hideNav&&aa();u("normal","scrollbar");Oa();Pa("resize");Q("click-outside");
null!==q&&(q.style.height="auto",q.style.height=q.scrollHeight+"px",q.parentElement.style.height!==q.offsetHeight+"px"&&(q.parentElement.style.height=q.offsetHeight+"px"));Ob()});document.addEventListener("click",function(a){"ontouchstart"in document.documentElement&&b.classList.contains("mouse")&&(b.classList.remove("mouse"),b.classList.add("touch"));for(c=a.target;c&&c!=this;c=c.parentNode)if(c.classList.contains("fc-action")){pb=c.dataset.action;switch(pb){case "sidebar-toggle":aa();u("normal",
"status");break;case "admin-toggle-button":Pa("click")}break}else if(c.classList.contains("subscribe-on-naver-button")){a.preventDefault();window.open("http://section.blog.naver.com/connect/PopConnectBuddyAddForm.nhn?blogId="+naverAccount+"&amp;widgetSeq=3&amp;sender=code","\ub124\uc774\ubc84 \uc774\uc6c3 \ucd94\uac00\ud558\uae30","width=420,height=250,scrollbars=no,status=no;");break}else if(c.classList.contains("act-toggle-button")){ib("click");break}else if(c.classList.contains("share-link")){a.preventDefault();
ib("click-share");break}else if(c.classList.contains("comment-toggle-button")){Q("click");break}else if("inactive-comment-button"===c.id){a.preventDefault();Q("click-outside");break}else if(c.classList.contains("comment-action")){Q("click-outside");break}else if("comment-input-privite"===c.id){Q("click-privite");break}else if("comment-form-button"===c.id){a.preventDefault();Q("click-form");break}else if(c.classList.contains("tt_more_preview_comments_text")){c.innerHTML='<span class="fc-icon fc-center-icon fc-invisible-text">\ub85c\ub4dc \uc911\u2026</span>';
break}else if(c.classList.contains("category-toggle-button")){u("normal","click-category");break}else if(c.classList.contains("comments-module-item")){u("normal","click-comment");break}else if(c.classList.contains("fc-go-to-top")){a.preventDefault();0!==k&&Gb(0);break}else if(c.classList.contains("switch-article-button")){c.classList.add("pending");break}else if(c.classList.contains("fc-prev-slide")){a.preventDefault();Lb("prev");break}else if(c.classList.contains("fc-next-slide")){a.preventDefault();
Lb("next");break}else if(-1!==String(c.href).indexOf("#")){l=String(c.href).split("#")[0].split("//");l=l[l.length-1];console.log(l);l===(location.host+location.pathname+location.search||"")&&NaN!==String(c.href).split("#")[1]&&(l=document.getElementById(String(c.href).split("#")[1]),null!==l&&(a.preventDefault(),location.hash!=="#"+String(c.href).split("#")[1]&&history.pushState(location.href,document.title,"#"+String(c.href).split("#")[1]),ya("smooth")));break}});document.addEventListener("mouseover",
function(a){b.classList.contains("touch")&&(b.classList.remove("touch"),b.classList.add("mouse"))});document.addEventListener("touchstart",function(a){b.classList.contains("mouse")&&(b.classList.remove("mouse"),b.classList.add("touch"));for(a=a.target;a&&a!=this;a=a.parentNode)if(a.classList.contains("tt_more_preview_comments_text")||"textRefresh"===a.id||"a"===a.tagName.toLowerCase()||"button"===a.tagName.toLowerCase()||"input"===a.tagName.toLowerCase()||"label"===a.tagName.toLowerCase()){a.classList.add("touch");
break}},{passive:!0});document.addEventListener("touchend",function(a){for(a=a.target;a&&a!=this;a=a.parentNode)if(a.classList.contains("more-comments")||"a"===a.tagName.toLowerCase()||"button"===a.tagName.toLowerCase()||"input"===a.tagName.toLowerCase()||"label"===a.tagName.toLowerCase()){a.classList.remove("touch");break}},{passive:!0});"on"===hideNav&&(la.addEventListener("touchstart",aa,{passive:!0}),jb.addEventListener("touchstart",aa,{passive:!0}),la.addEventListener("mousemove",aa),jb.addEventListener("mousemove",
aa))};fcMain();
