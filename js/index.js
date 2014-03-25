var dns = {}
dns.google = new Array("8.8.8.8", "8.8.4.4", "Google Public DNS Server");
dns.opendns = new Array("208.67.222.222", "208.67.220.220", "OpenDNS");
dns.nortondns = new Array("198.153.192.50", "198.153.194.50", "Norton DNS Server");
dns.advantage = new Array("156.154.70.1", "156.154.71.1", "DNS Advantage");
dns.comodo = new Array("8.26.56.26", "8.20.247.20", "Comodo Secure DNS Server");

var main_dns = "google";

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
  
 
  
  if($("#main_dns")){
    for(var key in dns[main_dns]){
      $("#main_dns").append(key);
    }
  }
});
