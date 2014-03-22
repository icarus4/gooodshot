
function search(){




str = '[{"square":"http://pic.pimg.tw/giddens/1374402655-3041671199_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402723-1904602128_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402723-1904602128_q.jpg"},{"square":"http://pic.pimg.tw/musikerbel/1358699312-724069019_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402661-2491883860_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402714-2856673959_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402655-3041671199_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402723-1904602128_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402723-1904602128_q.jpg"},{"square":"http://pic.pimg.tw/musikerbel/1358699312-724069019_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402661-2491883860_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402714-2856673959_q.jpg"}]'

//{"square":"http://pic.pimg.tw/giddens/1374402723-1904602128_q.jpg"},{"square":"http://pic.pimg.tw/musikerbel/1358699312-724069019_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402661-2491883860_q.jpg"},{"square":"http://pic.pimg.tw/giddens/1374402714-2856673959_q.jpg"}]'

x = JSON.parse(str);
a = ' <div class="col col-md-2"><img src=" '
b = ' " class="img-thumbnail"></div> '



//url = x[0]["square"];
//alert(url);




/*for (var key in x)
{
   if (x.hasOwnProperty(key))
   {
      // here you have access to
      var MNGR_NAME = result[key].MNGR_NAME;
      var MGR_ID = result[key].MGR_ID;
   }
}*/

$("#imgcontainer").append('<div class="row">');

for(var i = 0 ; i < x.length ; i++){
	if(i % 6 == 0)
		$("#imgcontainer").append('<div class="row">');

    if(x[i]["square"] != null){
    	url = x[i]["square"];
    	tmp = a.concat(url,b);
		$("#imgcontainer").append(tmp); 
    }

    if(i % 4 == 0)
		$("#imgcontainer").append("</div>");
}





}

