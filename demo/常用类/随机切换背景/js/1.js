now = new Date();
erke = now.getSeconds();
erke = erke - parseInt(erke/9)*9 + 1;//定义张数
document.write("<div style='background:url(images/bg"+erke+".jpg) no-repeat 90px 0px;' id=Change></div>")