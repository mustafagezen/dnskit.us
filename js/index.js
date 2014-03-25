$(document).ready(function(){
  if($("dns")){
    for(var key in dns){
      if(key != main_dns){
        $("dns").append("<p><b>" + dns[key][0] + "</b>, <b>" + dns[key][1] + "</b> - " + dns[key][2] + "</p>");
      }
    }
    
    $("#mdns").html("<b>" + dns[main_dns][0] + "</b>, <b>" + dns[main_dns][1] + "</b>");
    $("#name").html("<b>" + dns[main_dns][2]);
  }
});
