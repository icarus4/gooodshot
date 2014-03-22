
function search(){




str = '[{ \
      "square":"http://pic.pimg.tw/giddens/1374402655-3041671199_q.jpg" \
   }]'

x = JSON.parse(str);
url = x[0]["square"];
alert(url);



}