var $dataAppearance=document.querySelector("style[data-stylesheet='appearance']"),$wrapper=document.getElementById("wrapper"),userAgent=navigator.userAgent.toLowerCase(),i,$thumbnail,$headerWrapper,newElement,$indexItem,$indexItemLength,$indexItemList,$articleImageblock,$articleImageblockLength;
-1!==userAgent.indexOf("trident")&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(f){var h=this;do{if(h.matches(f))return h;h=h.parentElement||h.parentNode}while(null!==h&&1===h.nodeType);return null}));
var getLink=function(f,h){newElement=document.createElement("link");newElement.rel=f;newElement.href=h;$dataAppearance.parentNode.insertBefore(newElement,$dataAppearance)},setAlterPage=function(f){if("no-result"===f)$indexItem=document.getElementById("no-result"),null!==$indexItem&&($indexItem=document.getElementById("fc-list"),document.getElementsByClassName("fc-wrapper")[0].className="fc-alter-wrapper",$indexItem.parentNode.removeChild($indexItem));else if($indexItem=document.getElementsByClassName("fc-index-item"),
$indexItemLength=$indexItem.length,0<$indexItemLength)for($indexItemList=" "+$indexItem[0].dataset.style,$indexItem[0].insertAdjacentHTML("beforebegin",'<section class="fc-wrapper"><header class="header-wrapper fc-script-font"><div class="fc-flex-center"><div class="header-inner fc-keep-all"><h1 class="fc-header">'+noticeHead+'</h1><p class="fc-size-15px">'+noticeDesc+'</p></div></div><div class="header-desc fc-size-12px fc-stripe fc-mono-line-height"></div></header><div class="fc-list fc-script-font fc-break-word'+
$indexItemList+'" id="fc-list"></div></section>'),$indexItemList=document.getElementById("fc-list"),i=0;i<$indexItemLength;i++)$indexItemList.appendChild($indexItem[i]),$indexItem[i].classList.remove("fc-index-hidden");else if($indexItem=document.getElementsByClassName("absent_post"),$indexItemLength=$indexItem.length,0<$indexItemLength&&($indexItem=document.getElementsByTagName("main"),$indexItemLength=$indexItem.length,0<$indexItemLength)){document.title=notFoundTitle;for($wrapper.classList.add("for-alter-page");$indexItem[0].firstChild;)$indexItem[0].removeChild($indexItem[0].firstChild);
$indexItem[0].insertAdjacentHTML("afterbegin",'<section class="fc-alter-wrapper"><header class="header-wrapper fc-script-font"><div class="fc-flex-center"><div class="header-inner fc-keep-all"><h1 class="fc-header">'+notFoundHead+'</h1></div></div><div class="header-desc fc-size-12px fc-stripe fc-mono-line-height"><div class="header-desc-sector-1"><p>404 \uc624\ub958</p></div><div class="header-desc-sector-2"><p>'+blogTitle+'</p></div></div></header><div class="alter-content fc-script-font fc-stripe" id="not-found"><div id="alter-artwork" hidden><div class="artboard not-found"><div class="layer1"></div><div class="layer2"></div></div></div><h2 class="alter-headline fc-mono-line-height fc-keep-all">'+
notFoundHeadL2+'</h2><p class="alter-desc fc-mono-line-height fc-keep-all">'+notFoundDesc+'</p><ul class="alter-button-wrapper fc-stripe fc-flex-center"><li class="alter-open-sidebar"><a class="alter-button fc-action fc-sticker2-color fc-size-15px fc-shadow fc-icon" data-action="sidebar-toggle" href="javascript:" role="button">\ucc3e\uc544\ubcf4\uae30\u2026</a></li><li><a class="alter-button fc-sticker2-color fc-size-15px fc-shadow" href="'+originalPath+'" role="button">\ucc98\uc74c\uc73c\ub85c</a></li></ul></div></section>')}},
setOpengraph=function(f,h,d,a){document.body.id===f&&"yes"===h&&($thumbnail=document.querySelector(d+"[data-thumbnail]"),null!==$thumbnail&&($thumbnail=$thumbnail.dataset.thumbnail,""!==$thumbnail&&(headerDefaultImage="off",headerImage3x=headerImage2x=headerImage=$thumbnail,headerRepeat="no-repeat",headerPosition="50% 50%",headerSize="cover",customHeaderSize="",darkHeaderImage3x=darkHeaderImage2x=darkHeaderImage=$thumbnail,void 0===$headerWrapper&&($headerWrapper=document.getElementById("cover-header-wrapper")),
"1"===$headerWrapper.dataset.default&&($headerWrapper.dataset.default=""),$headerWrapper.dataset.ready=a)))},catchErrorImageblock=function(){if("tt-body-page"===document.body.id&&$articleImageblockLength!==document.querySelectorAll('figure[class*="image"] img[src*="xBoxReplace"], figure[class*="image"] img[src*=".gif"]').length&&($articleImageblock=document.querySelectorAll('figure[class*="image"] img[src*="xBoxReplace"], figure[class*="image"] img[src*=".gif"]'),$articleImageblockLength=$articleImageblock.length,
0<$articleImageblockLength))for(i=0;i<$articleImageblockLength;i++)$articleImageblock[i].removeAttribute("srcset"),$articleImageblock[i].removeAttribute("sizes")},fcAppearance=function(){var f,h,d,a;var g=function(a,b){""!==a&&("cover"===headerSize?(f="//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+a,h=".cover-header-background {background-image: url(//img1.daumcdn.net/thumb/R48x0/?scode=mtistory2&fname="+a+")}.cover-header-background:before {background-image: url("+f+")}"):("custom"===
headerSize?headerSize=customHeaderSize:f=a,h=".cover-header-background {background-image: url(//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+a+")}.cover-header-background:before {display: none}"),h+=".cover-header-background, .cover-header-background:before {background-position: "+headerPosition+";background-size: "+headerSize+";background-repeat: "+headerRepeat+"}","on"===darkMode&&"dark"===b&&(h="@media (prefers-color-scheme: dark) {"+h+"}"),e+=h)};var b=function(a,b,f,g,h,k,l,m){void 0!==
f?2560>f*k&&(d="("+b+"-width: "+f+"px)","on"===darkMode&&"dark"===h&&(d+=" and (prefers-color-scheme: dark)"),1<k&&96<l&&(d+=" and (-webkit-min-device-pixel-ratio: "+k+"),"+d+" and (min-resolution: "+l+"dpi)"),d="@media "+d+" {"+a+"{background-image: url(//img1.daumcdn.net/thumb/R"+g*k+"x0/?scode=mtistory2&fname="+m+")}}",e+=d):1<k&&96<l&&(d="on"===darkMode&&"dark"===h?"(-webkit-min-device-pixel-ratio: "+k+") and (prefers-color-scheme: dark),(min-resolution: "+l+"dpi) and (prefers-color-scheme: dark)":
"(-webkit-min-device-pixel-ratio: "+k+"),(min-resolution: "+l+"dpi)",d="@media "+d+" {"+a+"{background-image: url(//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+m+")}}",e+=d)};var e=":root {--link-color: "+linkColor+";--link-hover-color: "+linkHoverColor+";--headline-color: "+headlineColor+";--monospace-color: "+monospaceColor+";--highlight-color: "+highlightColor+";--sticker1-color: "+sticker1Color+";--sticker2-color: "+sticker2Color+";--sticker3-color: "+sticker3Color+";--header-color: "+
headerColor+";--header-text-color: "+headerTextColor+";}";"on"===darkMode&&(e+="@media (prefers-color-scheme: dark) {:root {--link-color: "+darkLinkColor+";--link-hover-color: "+darkLinkHoverColor+";--headline-color: "+darkHeadlineColor+";--monospace-color: "+darkMonospaceColor+";--highlight-color: "+darkHighlightColor+";--sticker1-color: "+darkSticker1Color+";--sticker2-color: "+darkSticker2Color+";--sticker3-color: "+darkSticker3Color+";--header-color: "+darkHeaderColor+";--header-text-color: "+
darkHeaderTextColor+"}}");if("on"!==headerDefaultImage&&(g(headerImage),"on"===darkMode&&""!==darkHeaderImage&&g(darkHeaderImage,"dark"),""!==headerImage))if("cover"===headerSize){g=[320,500,960,1024,1280,1600,1920,2560];for(i=a=g.length;0<i;i--)b(".cover-header-background:before","max",g[i],g[i],"light",1,96,headerImage);if(""!==headerImage2x)for(i=a;0<i;i--)b(".cover-header-background:before","max",g[i],g[i],"light",2,192,headerImage2x);if(""!==headerImage3x)for(i=a;0<i;i--)b(".cover-header-background:before",
"max",g[i],g[i],"light",3,288,headerImage3x);if("on"===darkMode&&""!==darkHeaderImage){for(i=a;0<i;i--)320!==g[i]&&b(".cover-header-background:before","max",g[i],g[i],"dark",1,96,darkHeaderImage);if(""!==darkHeaderImage2x)for(i=a;0<i;i--)b(".cover-header-background:before","max",g[i],g[i],"dark",2,192,darkHeaderImage2x);if(""!==darkHeaderImage3x)for(i=a;0<i;i--)b(".cover-header-background:before","max",g[i],g[i],"dark",3,288,darkHeaderImage3x)}}else""!==headerImage2x&&b(".cover-header-background",
void 0,void 0,void 0,"light",2,192,headerImage2x),""!==headerImage3x&&b(".cover-header-background",void 0,void 0,void 0,"light",3,288,headerImage3x),"on"===darkMode&&""!==darkHeaderImage&&(""!==darkHeaderImage2x&&b(".cover-header-background",void 0,void 0,void 0,"dark",2,192,darkHeaderImage2x),""!==darkHeaderImage3x&&b(".cover-header-background",void 0,void 0,void 0,"dark",3,288,darkHeaderImage3x));"on"===enableHeaderLogo&&(""!==desktopHeaderLogo&&(b(".fc-trademark","min",760,640,"light",1,96,desktopHeaderLogo),
b(".fc-trademark","min",760,640,"light",2,192,desktopHeaderLogo),b(".fc-trademark","min",760,640,"light",3,288,desktopHeaderLogo)),""!==mobileHeaderLogo&&(b(".fc-trademark","max",760,240,"light",1,96,mobileHeaderLogo),b(".fc-trademark","max",760,240,"light",2,192,mobileHeaderLogo),b(".fc-trademark","max",760,240,"light",3,288,mobileHeaderLogo)),"on"===darkMode&&(""!==darkDesktopHeaderLogo&&(b(".fc-trademark","min",760,640,"dark",1,96,darkDesktopHeaderLogo),b(".fc-trademark","min",760,640,"dark",2,
192,darkDesktopHeaderLogo),b(".fc-trademark","min",760,640,"dark",3,288,darkDesktopHeaderLogo)),""!==darkMobileHeaderLogo&&(b(".fc-trademark","max",760,240,"dark",1,96,darkMobileHeaderLogo),b(".fc-trademark","max",760,240,"dark",2,192,darkMobileHeaderLogo),b(".fc-trademark","max",760,240,"dark",3,288,darkMobileHeaderLogo))));$dataAppearance.removeChild($dataAppearance.firstChild);$dataAppearance.insertAdjacentHTML("afterbegin",e)},fcArticle=function(){var f=document.getElementById("fc-article"),h=
document.getElementById("tags-trail"),d=f.getElementsByClassName("another_category"),a,g;var b=f.querySelectorAll('div[class*="fraccino"]');var e=b.length;if(0<e)for(a=0;a<e;a++)b[0].classList.contains("fraccino-enable-pagecover")?ogArticle="yes":b[0].classList.contains("fraccino-disable-pagecover")&&(ogArticle="no"),b[0].classList.contains("fraccino-enable-toc")?toc="yes":b[0].classList.contains("fraccino-disable-toc")&&(toc="no"),b[a].parentNode.removeChild(b[a]);b=f.querySelector('div[style="text-align:left"], div[style="text-align:left;"], div[style="text-align: left"], div[style="text-align: left;"]');
null!==b&&(b.className="tt_article_useless_p_margin",b.removeAttribute("style"));b=f.getElementsByClassName("tt-share-entry-with-sns");e=b.length;if(0<e)for(a=0;a<e;a++)b[a].parentNode.removeChild(b[a]);b=document.getElementById("TixIntroMap");null!==b&&b.parentNode.removeChild(b);a=f.getElementsByClassName("tt_article_useless_p_margin");e=a.length;0<e?($wrapper.dataset.margin="useless",a[0].className="text-stripe useless-margin-inner"):$wrapper.dataset.margin="on";if(0<d.length){void 0===g&&(g=d[0].querySelectorAll("table a"));
var c=document.createElement("aside");c.className="another-category text-block article-footer fc-stripe";parentElement=d[0].querySelector("h4");parentElement.className="fc-mono-line-height fc-icon";d[0].parentNode.insertBefore(c,d[0]);c.appendChild(parentElement);e=g.length;if(0<e)for(parentElement=f.getElementsByClassName("another-category"),c=document.createElement("ol"),c.className="fc-mono-line-height",parentElement[0].appendChild(c),parentElement=c,a=0;a<e;a++)c=document.createElement("li"),
c.appendChild(g[a]),g[a].classList.add("fc-icon"),g[a].classList.contains("current")&&(g[a].href="javascript:",g[a].title="\ud604\uc7ac \ubcf4\uace0 \uc788\ub294 \uae00\uc785\ub2c8\ub2e4.",g[a].classList.add("fc-go-to-top")),parentElement.appendChild(c);d[0].parentNode.removeChild(d[0])}b=f.querySelectorAll('span.imageblock a[href*="attachment"]');e=b.length;if(0<e)for(a=0;a<e;a++)if(-1===userAgent.indexOf("trident")&&(b[a].download=""),d=b[a].parentElement,g=b[a].textContent,null!==d&&"span"===d.tagName.toLowerCase()&&
d.classList.contains("imageblock")){for(;d.firstChild;)d.parentNode.insertBefore(d.firstChild,d);d.parentNode.removeChild(d);c=document.createElement("figure");b[a].parentNode.insertBefore(c,b[a]);c.appendChild(b[a]);for(c.className="fileblock";b[a].firstChild;)b[a].removeChild(b[a].firstChild);b[a].insertAdjacentHTML("afterbegin",'<div class="image"></div><div class="desc"><div class="filename"><span class="name">'+g+'</span><div class="size">\ub2e4\uc6b4\ub85c\ub4dc</div></div></div>')}d=f.querySelectorAll("span.imageblock");
e=d.length;if(0<e)for(a=0;a<e;a++){b=d[a].querySelector("span.cap1");null!==b&&(c=document.createElement("figcaption"),c.textContent=b.textContent,b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b));c=document.createElement("figure");c.className="imageblock";for(d[a].parentNode.insertBefore(c,d[a]);d[a].firstChild;)c.appendChild(d[a].firstChild);d[a].parentNode.removeChild(d[a])}b=f.querySelectorAll('iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="kakao"], iframe[src*="naver"], iframe[src*="soundcloud"]');
e=b.length;if(0<e)for(a=0;a<e;a++)if("loading"in HTMLImageElement.prototype&&(b[a].loading="lazy"),d=b[a].parentElement,null!==d&&"figure"!==d.tagName.toLowerCase()){g=b[a].src;if("div"===d.tagName.toLowerCase()&&d.classList.contains("tt-youtube-plugin")){for(;d.firstChild;)d.parentNode.insertBefore(d.firstChild,d);d.parentNode.removeChild(d)}c=document.createElement("figure");b[a].parentNode.insertBefore(c,b[a]);c.appendChild(b[a]);c.dataset.keType="video";-1!==g.indexOf("youtube")?c.dataset.videoHost=
"youtube":-1!==g.indexOf("vimeo")?c.dataset.videoHost="vimeo":-1!==g.indexOf("kakao")?c.dataset.videoHost="kakao":-1!==g.indexOf("naver")?c.dataset.videoHost="naver":-1!==g.indexOf("soundcloud")&&(c.dataset.videoHost="soundcloud");c.dataset.videoUrl=g}b=f.querySelectorAll('figure[data-ke-type="video"] iframe');e=b.length;if(0<e)for(a=0;a<e;a++)c=document.createElement("div"),b[a].parentNode.insertBefore(c,b[a]),c.appendChild(b[a]),c.className="video-frame",c=b[a].width,g=b[a].height,"NaN"!==(c&&g)&&
(d=b[a].parentElement,null!==d&&"video-frame"===d.className&&(d.style.paddingTop=g/c*100+"%"));b=f.querySelectorAll('iframe[data-ke-type="map"], iframe[src*="mapViewer"], iframe[src*="/maps."], iframe[src*="/maps/"], iframe[src*="/maps?"], iframe[src*="/maps#"], iframe[src*="/map."], iframe[src*="map/"], iframe[src*="map?"], iframe[src*="map#"]');e=b.length;if(0<e)for(a=0;a<e;a++){d=b[a].parentElement;if(null!==d&&"p"===d.tagName.toLowerCase()){for(;d.firstChild;)d.parentNode.insertBefore(d.firstChild,
d);d.parentNode.removeChild(d)}c=document.createElement("figure");b[a].parentNode.insertBefore(c,b[a]);c.appendChild(b[a]);c.className="embed-map"}b=f.querySelectorAll("table");e=b.length;if(0<e)for(a=0;a<e;a++)if(d=b[a].parentElement,null!==d){if("p"===d.tagName.toLowerCase()){for(;d.firstChild;)d.parentNode.insertBefore(d.firstChild,d);d.parentNode.removeChild(d)}if("figure"!==d.tagName.toLowerCase()||null===d)c=document.createElement("figure"),c.dataset.keType="table",b[a].parentNode.insertBefore(c,
b[a]),c.appendChild(b[a]),c=document.createElement("div"),c.className="table-inner",b[a].parentNode.insertBefore(c,b[a]),c.appendChild(b[a])}b=f.querySelectorAll("p.txt_view");e=b.length;if(0<e)for(a=0;a<e;a++)for(;b[a].firstChild;)b[a].parentNode.insertBefore(b[a].firstChild,b[a]);b=f.querySelectorAll("p > figure");e=b.length;if(0<e)for(a=0;a<e;a++)if(d=b[a].parentElement,null!==d&&"p"===d.tagName.toLowerCase()){b[a].classList.contains("imageblock")?b[a].classList.add("alignCenter"):"video"===b[a].dataset.keType&&
(b[a].dataset.keStyle="alignCenter");for(;d.firstChild;)d.parentNode.insertBefore(d.firstChild,d);d.parentNode.removeChild(d)}b=f.querySelectorAll('figure[class*="align"]:not(.alignCenter), figure[class*="float"]');e=b.length;if(0<e)for(a=0;a<e;a++)b[a].classList.contains("alignLeft")?b[a].classList.remove("alignLeft"):b[a].classList.contains("alignRight")?b[a].classList.remove("alignRight"):b[a].classList.contains("floatLeft")?b[a].classList.remove("floatLeft"):b[a].classList.contains("floatRight")&&
b[a].classList.remove("floatRight"),""!==b[a].getAttribute("style")&&b[a].removeAttribute("style");b=f.querySelectorAll('figure[class*="image"] img:not([src*="xBoxReplace"]), figure[class*="image"] img:not([src*=".gif"])');e=b.length;if(0<e)for(a=0;a<e;a++)null===b[a].getAttribute("width")&&("0"===b[a].dataset.originWidth?0!==b[a].naturalWidth?b[a].setAttribute("width",b[a].naturalWidth):b[a].setAttribute("width",contentWidth):b[a].setAttribute("width",b[a].dataset.originWidth)),null!==b[a].getAttribute("width")&&
(c=encodeURIComponent(b[a].src),b[a].srcset="//img1.daumcdn.net/thumb/R320x0/?scode=mtistory2&fname="+c+" 320w,//img1.daumcdn.net/thumb/R500x0/?scode=mtistory2&fname="+c+" 500w,//img1.daumcdn.net/thumb/R960x0/?scode=mtistory2&fname="+c+" 960w,//img1.daumcdn.net/thumb/R1024x0/?scode=mtistory2&fname="+c+" 1024w,//img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname="+c+" 1280w,//img1.daumcdn.net/thumb/R1600x0/?scode=mtistory2&fname="+c+" 1600w,//img1.daumcdn.net/thumb/R1920x0/?scode=mtistory2&fname="+
c+" 1920w,//img1.daumcdn.net/thumb/R2560x0/?scode=mtistory2&fname="+c+" 2560w",b[a].sizes="(min-width:"+contentWidth+"px) "+contentWidth+"px"),"loading"in HTMLImageElement.prototype&&"lazy"!==b[a].loading&&(b[a].loading="lazy");catchErrorImageblock();c=f.getElementsByTagName("blockquote");e=c.length;if(0<e)for(a=0;a<e;a++)void 0===c[a].dataset.keStyle&&(c[a].dataset.keStyle="style3"),c[a].classList.contains("tx-quote-tistory")&&c[a].classList.remove("tx-quote-tistory");c=f.querySelectorAll('blockquote[data-ke-style="box"], blockquote[data-ke-style="normal"]');
e=c.length;if(0<e)for(a=0;a<e;a++)c[a].dataset.keStyle="box"===c[a].dataset.keStyle?"style3":"style2";c=f.querySelectorAll('blockquote:not([data-ke-style="style3"])');e=c.length;if(0<e)for(a=0;a<e;a++)c[a].classList.add("fc-stripe","fc-mono-line-height");c=f.querySelectorAll("pre > code");e=c.length;if(0<e){for(a=0;a<e;a++)d=c[a].parentElement,""!==d.className&&("on"===autoCodeType?(d.className="",void 0!==d.dataset.keLanguage&&delete d.dataset.keLanguage):void 0!==d.dataset.keLanguage&&(d.className=
d.dataset.keLanguage)),void 0===d.dataset.keType&&(d.dataset.keType="codeblock");"on"===enableHighlightjs&&($wrapper.dataset.codeHighlighter="on");"on"===$wrapper.dataset.codeHighlighter&&("on"===stripeCode&&($wrapper.dataset.codeStripe="on"),"on"===codeWrap&&($wrapper.dataset.codeWrap="on"))}c=f.querySelectorAll('hr:not([data-ke-style*="style"])');e=c.length;if(0<e)for(a=0;a<e;a++)c[a].className="",c[a].dataset.keType="horizontalRule",c[a].dataset.keStyle="style5",c[a].removeAttribute("style");c=
f.querySelectorAll('.text-stripe > .moreless_content, .text-stripe > [data-ke-type="moreLess"] .moreless-content');e=c.length;if(0<e)for(a=0;a<e;a++)c[a].classList.add("text-stripe");b=f.querySelectorAll("button.btn_more, button.btn_less");e=b.length;if(0<e)for(a=0;a<e;a++)d=b[a].parentElement,null!==d&&(c=document.createElement("div"),c.className="more-button-container",d.classList.contains("text-stripe")&&c.classList.add("fc-stripe"),b[a].parentNode.insertBefore(c,b[a]),c.appendChild(b[a]));c=f.querySelectorAll(".txc-info, .txc-info *");
e=c.length;if(0<e)for(a=0;a<e;a++)c[a].removeAttribute("style");c=f.querySelectorAll('*[style*="font-family"], *[style*="FONT-FAMILY"]');e=c.length;if(0<e)for(a=0;a<e;a++)"'Noto Sans Demilight', 'Noto Sans KR'"===c[a].style.fontFamily?c[a].style.fontFamily+=", sans-serif":"'Noto Serif KR'"!==c[a].style.fontFamily&&(c[a].style.fontFamily="");c=f.querySelectorAll("p:empty");e=c.length;if(0<e)for(a=0;a<e;a++)c[a].parentNode.removeChild(c[a]);b=f.querySelectorAll('div:not(.text-stripe):not(.footnotes):not(.more-button-container):not([data-ke-type="moreLess"]):not(.moreless_content):not(.container_postbtn), blockquote[data-ke-style="style3"], #wrapper[data-code-highlighter="on"] pre[data-ke-type="codeblock"], figure:not(.fileblock)');
e=b.length;if(0<e)for(a=0;a<e;a++)null===b[a].parentElement.closest('figure, aside, nav, pre, .txc-info, div.footnotes, div.container_postbtn, div.revenue_unit_wrap, div[class*="tt_adsense"]')&&b[a].classList.add("block");b=f.querySelectorAll('h1, h2, h3, h4, h5, h6, hr, p, ol, ul, blockquote:not([data-ke-style="style3"]), #wrapper:not([data-code-highlighter="on"]) pre, pre:not([data-ke-type="codeblock"]), #wrapper:not([data-code-highlighter="on"]) pre, .more-button-container, figure.fileblock, div.footnotes, div.container_postbtn');
e=b.length;if(0<e)for(a=0;a<e;a++)null===b[a].parentElement.closest("figure, aside, nav, pre, .txc-info, div.footnotes, div.container_postbtn")&&b[a].classList.add("text-block");b=f.querySelectorAll('[data-ke-type="moreLess"], .moreless_content');e=b.length;if(0<e)for(a=0;a<e;a++)b[a].classList.add("moreless-block");b=f.querySelectorAll("div.footnotes, div.container_postbtn");e=b.length;if(0<e)for(a=0;a<e;a++)b[a].classList.add("article-footer");b=f.querySelectorAll("h1, h2, h3, h4, h5, h6");e=b.length;
if(0<e)for(a=0;a<e;a++)null===b[a].closest("figure, aside, nav, pre, div.footnotes, div.container_postbtn")&&b[a].classList.add("text-block-headline"),null!==b[a].closest('[data-ke-type="moreLess"], .moreless_content, .txc-info, [style*="display:"][style*="none"], [hidden]')&&b[a].classList.add("excluded");b=f.querySelectorAll(".moreless-block, .text-block, .block");e=b.length;if(0<e)for(a=0;a<e;a++){for(c=b[a].nextElementSibling;null!==c&&"script"===c.tagName.toLowerCase();)c=c.nextElementSibling;
if(null!==c)b[a].classList.contains("moreless-block")&&c.classList.contains("block")?b[a].classList.add("after-block"):!b[a].classList.contains("before-block")&&c.classList.contains("moreless_content")&&c.classList.add("adjust-margin"),c.classList.contains("text-block")&&(c.classList.contains("text-block-headline")?b[a].classList.add("after-headline"):"hr"===c.tagName.toLowerCase()?b[a].classList.add("after-line"):c.classList.contains("article-footer")&&(b[a].classList.contains("article-footer")||
b[a].classList.add("after-article-footer"),c.classList.contains("footnotes")?b[a].classList.add("after-footnotes"):c.classList.contains("container_postbtn")?b[a].classList.add("after-postbtn"):c.classList.contains("another-category")&&b[a].classList.add("after-another-category")));else if(d=b[a].parentElement,null!==d)b[a].classList.contains("block")?null===h||"fc-article"!==d.id&&!d.classList.contains("useless-margin-inner")?d.classList.contains("moreless-content")&&!d.classList.contains("after-block")&&
(d.closest('[data-ke-type="moreLess"]').classList.add("block-end"),c=document.createElement("div"),c.className="block-margin",c.hidden="true",d.appendChild(c)):h.closest(".tags").classList.add("before-block"):b[a].classList.contains("text-block")&&d.classList.contains("moreless-content")&&b[a].classList.add("end");for(c=b[a].previousElementSibling;null!==c&&"script"===c.tagName.toLowerCase();)c=c.previousElementSibling;null!==c?c.classList.contains("block")?b[a].classList.add("before-block"):"moreLess"===
c.dataset.keType?b[a].classList.add("before-moreless"):c.classList.contains("block-end")&&b[a].classList.add("before-moreless-block"):b[a].classList.add("first")}f.classList.add("loaded");if("yes"===toc)if(newElement=f.querySelectorAll(".text-block-headline:not(.excluded)"),e=newElement.length,0<e){(37*(e+1)>window.innerHeight-document.getElementById("cover-header-wrapper").offsetHeight-180||window.innerWidth<contentWidth+560)&&document.body.classList.add("toc-overflow");window.innerHeight>=document.getElementById("contents").offsetHeight-
200?document.body.classList.contains("toc-overflow-content")||document.body.classList.add("toc-overflow-content"):document.body.classList.contains("toc-overflow-content")&&document.body.classList.remove("toc-overflow-content");document.getElementsByClassName("header-wrapper")[0].insertAdjacentHTML("afterend",'<nav class="fc-script-font fc-size-14px" id="toc-content"><div class="toc-wrapper"><h5 class="fc-hidden">\uc774 \uae00\uc758 \ubaa9\ucc28</h5><ul class="toc-top"><li class="toc-list"><a class="fc-go-to-top fc-icon" href="javascript:" data-position="0" role="button">\uae00\uc758 \uc2dc\uc791</a></li><li><a class="fc-icon" href="#activities" role="button">\ud65c\ub3d9\ud558\uae30</a></li></ul></div></nav>');
b=document.querySelector("#toc-content .toc-wrapper");c='<ul class="toc-main">';for(a=0;a<e;a++)if(""===newElement[a].id&&(newElement[a].id="head"+String(a+1)),d=Number(newElement[a].tagName.toLowerCase().replace("h","")),0===a){var n=d-1;newElement[a].dataset.level="1";c+='<li><a class="fc-icon" href="#'+newElement[a].id+'" aria-label="\uba38\ub9ac\ub9d0: '+newElement[a].textContent+'" role="button">'+newElement[a].textContent+"</a>"}else d-=n,1<d?(newElement[a].dataset.level="2",c="1"===newElement[a-
1].dataset.level?c+('<ul class="toc-sub"><li><a class="fc-icon" href="#'+newElement[a].id+'" aria-label="\uba38\ub9ac\ub9d0: '+newElement[a].textContent+'" role="button">'+newElement[a].textContent+"</a>"):c+('</li><li><a class="fc-icon" href="#'+newElement[a].id+'" aria-label="\uba38\ub9ac\ub9d0: '+newElement[a].textContent+'" role="button">'+newElement[a].textContent+"</a>")):(newElement[a].dataset.level="1",c="1"===newElement[a-1].dataset.level?c+('</li><li><a class="fc-icon" href="#'+newElement[a].id+
'" aria-label="\uba38\ub9ac\ub9d0: '+newElement[a].textContent+'" role="button">'+newElement[a].textContent+"</a>"):c+('</li></ul></li><li><a class="fc-icon" href="#'+newElement[a].id+'" aria-label="\uba38\ub9ac\ub9d0: '+newElement[a].textContent+'" role="button">'+newElement[a].textContent+"</a>")),e-1===a&&(c="1"===newElement[a].dataset.level?c+"</li>":c+"</li></ul></li>");c+="</ul>";document.getElementsByClassName("toc-list")[0].insertAdjacentHTML("beforeend",c);parentElement=document.getElementsByClassName("sidebar-section")[0];
newElement=document.createElement("nav");newElement.id="toc-sidebar";newElement.className="fc-size-15px";parentElement.parentNode.insertBefore(newElement,parentElement);parentElement=newElement;newElement=b.cloneNode(!0);parentElement.appendChild(newElement)}else toc="no";if(null!==h&&(f.classList.add("has-tags-trail"),c=h.childNodes,e=c.length,0<e)){for(a=0;a<e;a++)void 0!==c[a]&&1!==c[a].nodeType&&c[a].parentNode.removeChild(c[a]);c=h.getElementsByTagName("a");e=c.length;if(0<e)for(a=0;a<e;a++)c[a].className=
"fc-shadow fc-size-12px fc-script-font",0===a&&c[a].classList.add("fc-icon")}};
