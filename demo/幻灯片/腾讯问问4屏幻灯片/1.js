var pause = false;
 var con_num = 4;
 var startIndex = 1;
 function scrollTopHome(){
  if(pause) return;
  startIndex += 1;
  if(startIndex > con_num){startIndex = 1;}
  setTab('tophome',4,startIndex,'out','on');
 } 
 setLoop();
function setTab(/*string*/name,/*int*/ itemCnt,/*int*/ curItem, /**/classHide, /**/classShow)
{
	 for(i=1;i<=itemCnt;i++)
	{
		eval("document.getElementById('tab_" + name + "_" + i + "').className='" + classHide + "'");
	} 
	eval("document.getElementById('tab_" + name + "_" + curItem + "').className='" + classShow + "'");
 
 for(i=1;i<=itemCnt;i++)
 {
  eval("ele_hide = document.getElementById('con_" + name + "_" + i +"')");
  if(ele_hide) ele_hide.style.display = "none";
 }
 eval("ele_play = document.getElementById('con_" + name + "_" + curItem + "')");
 if(ele_play) ele_play.style.display = "block";
}