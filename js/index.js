$(document).ready(function(){
  if($("dns")){
    for(var key in dns){
      if(key != dns["main_dns"][0] && key != "main_dns"){
        $("dns").append("<p><b>" + dns[key][0] + "</b>, <b>" + dns[key][1] + "</b> - " + dns[key][2] + "</p>");
      }
    }
    
    $("#mdns").html("<b>" + dns[dns["main_dns"][0]][0] + "</b>, <b>" + dns[dns["main_dns"][0]][1] + "</b>");
    $("#name").html("<b>" + dns[dns["main_dns"][0]][2]);
  }
});
