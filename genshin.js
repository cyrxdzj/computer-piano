var keys=
[
    {"key":"Z","name":"1-","id":48,"x":"- 525px","y":"+ 75px"},
    {"key":"X","name":"2-","id":50,"x":"- 375px","y":"+ 75px"},
    {"key":"C","name":"3-","id":52,"x":"- 225px","y":"+ 75px"},
    {"key":"V","name":"4-","id":53,"x":"- 75px","y":"+ 75px"},
    {"key":"B","name":"5-","id":55,"x":"+ 75px","y":"+ 75px"},
    {"key":"N","name":"6-","id":57,"x":"+ 225px","y":"+ 75px"},
    {"key":"M","name":"7-","id":59,"x":"+ 375px","y":"+ 75px"},
    {"key":"A","name":"1","id":60,"x":"- 525px","y":"- 75px"},
    {"key":"S","name":"2","id":62,"x":"- 375px","y":"- 75px"},
    {"key":"D","name":"3","id":64,"x":"- 225px","y":"- 75px"},
    {"key":"F","name":"4","id":65,"x":"- 75px","y":"- 75px"},
    {"key":"G","name":"5","id":67,"x":"+ 75px","y":"- 75px"},
    {"key":"H","name":"6","id":69,"x":"+ 225px","y":"- 75px"},
    {"key":"J","name":"7","id":71,"x":"+ 375px","y":"- 75px"},
    {"key":"Q","name":"1+","id":72,"x":"- 525px","y":"- 225px"},
    {"key":"W","name":"2+","id":74,"x":"- 375px","y":"- 225px"},
    {"key":"E","name":"3+","id":76,"x":"- 225px","y":"- 225px"},
    {"key":"R","name":"4+","id":77,"x":"- 75px","y":"- 225px"},
    {"key":"T","name":"5+","id":79,"x":"+ 75px","y":"- 225px"},
    {"key":"Y","name":"6+","id":81,"x":"+ 225px","y":"- 225px"},
    {"key":"U","name":"7+","id":83,"x":"+ 375px","y":"- 225px"},
];
var audio={},is_playing={};
document.getElementById("content").innerHTML=`<h3 style="color:white;">正在加载音频文件。</h3>`;
for(var i=0;i<keys.length;i++)
{
    audio[keys[i]["key"]]=new Audio(`./music/${keys[i]["id"]}.mp3`);
}
content_html=``;
for(var i=0;i<keys.length;i++)
{
    content_html+=`<div id="button${keys[i]["key"]}" onclick="javascript:play('${keys[i]["key"]}');" style="color:white;width:150px;height:150px;border:1px solid white;border-radius:10px;position:fixed;left:calc(50vw ${keys[i]["x"]});top:calc(50vh ${keys[i]["y"]});"><a style="font-size:50px;">${keys[i]["key"]}<br>${keys[i]["name"]}</a></div>`
}
document.getElementById("content").innerHTML=content_html;
function play(key)
{
    audio[key].currentTime=0;
    audio[key].play();
}
document.onkeydown=function keypress(key)
{
    if(key.keyCode>=65&&key.keyCode<=90)
    {
        var element=document.getElementById(`button${key.key.toUpperCase()}`);
        element.style.background="white";
        element.style.color="rgba(0,0,0,0)";
        if(is_playing[key.key.toUpperCase()]!=true)
        {
            is_playing[key.key.toUpperCase()]=true;
            console.log("press");
            play(key.key.toUpperCase());
        }
    }
}
document.onkeyup=function keyrelease(key)
{
    if(key.keyCode>=65&&key.keyCode<=90)
    {
        is_playing[key.key.toUpperCase()]=false;
        var element=document.getElementById(`button${key.key.toUpperCase()}`);
        element.style.background="rgba(0,0,0,0)";
        element.style.color="white";
    }
}