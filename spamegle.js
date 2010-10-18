var spam = new Array("lol","hei der");

function mudkip()
 {
 if(document.getElementsByClassName("disconnectbtn")[0].value != "Disconnect")
  {
  oldspamsize = spam.length;
  var theysaid = document.getElementsByClassName('strangermsg')
  for(var i = 0; i < theysaid.length; i++)
   {spam[spam.length] = theysaid[i].innerHTML.split('<span class="msgsource">Stranger:</span> ')[1];}
  document.getElementsByClassName("disconnectbtn")[0].click();
  var info = document.createElement('div');
  info.setAttribute('logitem');
  info.innerHTML = "<div class=\"statuslog\">" + (spam.length - oldspamsize) + " entries added. Total spam available: " + spam.length + "</div>";
  document.getElementsByClassName("logbox")[0].appendChild(info);
  }
 else
  {document.getElementsByTagName("textarea")[0].value=spam[Math.round(Math.random() * (spam.length-1))];}
 document.getElementsByClassName("sendbtn")[0].click();
 }

setInterval("mudkip()",2000);
