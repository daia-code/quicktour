function visitOradea(){
    console.log("Welcome to Oradea");
    window.location.href="https://daia-code.github.io/oradea.html";
}
function visitTM(){
    console.log("Welcome to Timisoara");
    window.location.href="timisoara.html";
}
function moovit(a){
   
   if(a=="oradea"){
    console.log("Go to moovit in Oradea");
    window.location.href="https://moovitapp.com/oradea-3810/poi/en"
   }
    if(a=="timisoara"){
        console.log("Go to moovit in Timisoara");
    window.location.href="https://moovitapp.com/index/en/public_transit-Timi%C5%9Foara-3603"
   }
  
}
function booking(b){
    console.log("Go to booking");
    if(b=="oradea"){
        console.log("Go to moovit in Oradea");
        window.location.href="https://www.booking.com/city/ro/oradea.en-gb.html?aid=356980&label=gog235jc-1DCAMowAFCBm9yYWRlYUggWANowAGIAQGYASC4ARfIAQzYAQPoAQH4AQKIAgGoAgO4ArrezKAGwAIB0gIkODE2Yzk3ODQtYjhiNi00ZmE1LWE4YmQtYTUwMThkY2Q0MGZm2AIE4AIB&sid=32558ffa16a827e7cc23a077fd91526b&inac=0&lang=en-gb&soz=1&lang_click=other&cdl=ro&lang_changed=1"
       }
        if(b=="timisoara"){
            console.log("Go to moovit in Timisoara");
        window.location.href="https://www.booking.com/city/ro/timisoara.ro.html?aid=1610697;label=timisoara-byDocX208krnAT4ZQW1CawS379675424612:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-318438385602:lp1011798:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcUc3ZfdbbfEHZ2_wTDb1e4;ws=&gclid=CjwKCAjw_MqgBhAGEiwAnYOAejf3ibxlrUn6Jw0mrzVReUSyRPEbW3hv2kysTCTpbBHDOyqD_MmlyRoCuqgQAvD_BwE"
       }
   }
