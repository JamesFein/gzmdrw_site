var _xy_stat = function(params) {
  var d = {};
  if (params && params.length > 0) {
    params.split('&').forEach(e => {
      if (e.indexOf('=') > 0) {
        var kv = e.split("=");
        d[kv[0]] = kv[1];
      }
    });
  }
  var q = [];
	for(var k in d){
		if(d[k]){
			q.push(k + "=" + d[k]);
		}
	}	
	;
  var s = document.createElement("script");
  s.src = "/api/stat/visit?" + q.join("&")
  (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(s);
}