 var myEvent = new Event();
    myEvent.listen('tabs/news/activity/newsdetail', 'open', function(data){
      var p = document.createElement('p');
      p.setAttribute("class","main-content-replay")
      var rand = Math.random();
      if(rand<0.5){
        p.innerHTML="用户回复：知道了";
      }else{
        p.innerHTML="用户回复：不感兴趣";
      }
      oMessage.appendChild(p);
    });