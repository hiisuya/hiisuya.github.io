var input = document.getElementById("codeoutput");
if(input){
  input.addEventListener("keyup", updateText);
}
var output = document.getElementById("output");
var mapObj = {
  "TWO_CHOICE":"➜&nbsp;&nbsp;&nbsp;",
  "UNSKIPPABLE":"",
  "PERSISTENT":"",
  "\\n":"<br>",
  "\"":"",
};
var iconMap = {
  45:"<div class=\"ico\"><img src=\"img\/45.png\"></div>",
47:"<div class=\"ico\"><img src=\"img\/47.png\"></div>",
48:"<div class=\"ico\"><img src=\"img\/48.png\"></div>",
49:"<div class=\"ico\"><img src=\"img\/49.png\"></div>",
50:"<div class=\"ico\"><img src=\"img\/50.png\"></div>",
72:"<div class=\"ico\"><img src=\"img\/72.png\"></div>",
51:"<div class=\"ico\"><img src=\"img\/51.png\"></div>",
52:"<div class=\"ico\"><img src=\"img\/52.png\"></div>",
55:"<div class=\"ico\"><img src=\"img\/55.png\"></div>",
61:"<div class=\"ico\"><img src=\"img\/61.png\"></div>",
53:"<div class=\"ico\"><img src=\"img\/53.png\"></div>",
54:"<div class=\"ico\"><img src=\"img\/54.png\"></div>",
37:"<div class=\"ico\"><img src=\"img\/37.png\"></div>",
38:"<div class=\"ico\"><img src=\"img\/38.png\"></div>",
36:"<div class=\"ico\"><img src=\"img\/36.png\"></div>",
39:"<div class=\"ico\"><img src=\"img\/39.png\"></div>",
40:"<div class=\"ico\"><img src=\"img\/40.png\"></div>",
41:"<div class=\"ico\"><img src=\"img\/41.png\"></div>",
42:"<div class=\"ico\"><img src=\"img\/42.png\"></div>",
43:"<div class=\"ico\"><img src=\"img\/43.png\"></div>",
113:"<div class=\"ico\"><img src=\"img\/113.png\"></div>",
6:"<div class=\"ico\"><img src=\"img\/6.png\"></div>",
3:"<div class=\"ico\"><img src=\"img\/3.png\"></div>",
2:"<div class=\"ico\"><img src=\"img\/2.png\"></div>",
9:"<div class=\"ico\"><img src=\"img\/9.png\"></div>",
1:"<div class=\"ico\"><img src=\"img\/1.png\"></div>",
14:"<div class=\"ico\"><img src=\"img\/14.png\"></div>",
10:"<div class=\"ico\"><img src=\"img\/10.png\"></div>",
0:"<div class=\"ico\"><img src=\"img\/0.png\"></div>",
17:"<div class=\"ico\"><img src=\"img\/17.png\"></div>",
15:"<div class=\"ico\"><img src=\"img\/15.png\"></div>",
8:"<div class=\"ico\"><img src=\"img\/8.png\"></div>",
103:"<div class=\"ico\"><img src=\"img\/103.png\"></div>",
104:"<div class=\"ico\"><img src=\"img\/104.png\"></div>",
102:"<div class=\"ico\"><img src=\"img\/102.png\"></div>",
105:"<div class=\"ico\"><img src=\"img\/105.png\"></div>",
107:"<div class=\"ico\"><img src=\"img\/107.png\"></div>",
106:"<div class=\"ico\"><img src=\"img\/106.png\"></div>",
20:"<div class=\"ico\"><img src=\"img\/20.png\"></div>",
21:"<div class=\"ico\"><img src=\"img\/21.png\"></div>",
22:"<div class=\"ico\"><img src=\"img\/22.png\"></div>",
23:"<div class=\"ico\"><img src=\"img\/23.png\"></div>",
24:"<div class=\"ico\"><img src=\"img\/24.png\"></div>",
25:"<div class=\"ico\"><img src=\"img\/25.png\"></div>",
16:"<div class=\"ico\"><img src=\"img\/16.png\"></div>",
7:"<div class=\"ico\"><img src=\"img\/7.png\"></div>",
62:"<div class=\"ico\"><img src=\"img\/62.png\"></div>",
63:"<div class=\"ico\"><img src=\"img\/63.png\"></div>",
64:"<div class=\"ico\"><img src=\"img\/64.png\"></div>",
11:"<div class=\"ico\"><img src=\"img\/11.png\"></div>",
66:"<div class=\"ico\"><img src=\"img\/66.png\"></div>",
67:"<div class=\"ico\"><img src=\"img\/67.png\"></div>",
69:"<div class=\"ico\"><img src=\"img\/69.png\"></div>",
70:"<div class=\"ico\"><img src=\"img\/70.png\"></div>",
75:"<div class=\"ico\"><img src=\"img\/75.png\"></div>",
77:"<div class=\"ico\"><img src=\"img\/77.png\"></div>",
78:"<div class=\"ico\"><img src=\"img\/78.png\"></div>",
79:"<div class=\"ico\"><img src=\"img\/79.png\"></div>",
81:"<div class=\"ico\"><img src=\"img\/81.png\"></div>",
82:"<div class=\"ico\"><img src=\"img\/82.png\"></div>",
28:"<div class=\"ico\"><img src=\"img\/28.png\"></div>",
86:"<div class=\"ico\"><img src=\"img\/86.png\"></div>",
87:"<div class=\"ico\"><img src=\"img\/87.png\"></div>",
119:"<div class=\"ico\"><img src=\"img\/119.png\"></div>",
118:"<div class=\"ico\"><img src=\"img\/118.png\"></div>",
117:"<div class=\"ico\"><img src=\"img\/117.png\"></div>",
111:"<div class=\"ico\"><img src=\"img\/111.png\"></div>",
35:"<div class=\"ico\"><img src=\"img\/35.png\"></div>",
73:"<div class=\"ico\"><img src=\"img\/73.png\"></div>",
4:"<div class=\"ico\"><img src=\"img\/4.png\"></div>",
12:"<div class=\"ico\"><img src=\"img\/12.png\"></div>",
18:"<div class=\"ico\"><img src=\"img\/18.png\"></div>",
80:"<div class=\"ico\"><img src=\"img\/80.png\"></div>",
29:"<div class=\"ico\"><img src=\"img\/29.png\"></div>",
112:"<div class=\"ico\"><img src=\"img\/112.png\"></div>",
108:"<div class=\"ico\"><img src=\"img\/108.png\"></div>",
109:"<div class=\"ico\"><img src=\"img\/109.png\"></div>",
110:"<div class=\"ico\"><img src=\"img\/110.png\"></div>",
32:"<div class=\"ico\"><img src=\"img\/32.png\"></div>",
26:"<div class=\"ico\"><img src=\"img\/26.png\"></div>",
27:"<div class=\"ico\"><img src=\"img\/27.png\"></div>",
33:"<div class=\"ico\"><img src=\"img\/33.png\"></div>",
59:"<div class=\"ico\"><img src=\"img\/59.png\"></div>",
5:"<div class=\"ico\"><img src=\"img\/5.png\"></div>",
13:"<div class=\"ico\"><img src=\"img\/13.png\"></div>",
19:"<div class=\"ico\"><img src=\"img\/19.png\"></div>",
115:"<div class=\"ico\"><img src=\"img\/115.png\"></div>",
114:"<div class=\"ico\"><img src=\"img\/114.png\"></div>",
116:"<div class=\"ico\"><img src=\"img\/116.png\"></div>",
83:"<div class=\"ico\"><img src=\"img\/83.png\"></div>",
84:"<div class=\"ico\"><img src=\"img\/84.png\"></div>",
88:"<div class=\"ico\"><img src=\"img\/88.png\"></div>",
30:"<div class=\"ico\"><img src=\"img\/30.png\"></div>"
}
var buttonMap = {
  "\[A\]":"A",
  "\[B\]":"B",
  "\[C-Left\]":"◄",
  "\[C-Up\]":"▲",
  "\[C-Down\]":"▼",
  "\[C-Right\]":"►"
}
function toggleCommandList(){
  var div = document.getElementById("infowindow");
  if(div.style.display == "none"){
    div.style.display = "inline-block";
  }else{
    div.style.display = "none";
  }
}
function openFaq(){
  var faqDiv = document.getElementById("commandListWindow");
  if(faqDiv.style.display == "none"){
    faqDiv.style.display = "inline-block";
  }else{
    faqDiv.style.display = "none";
  }
}
function replaceShift(matched,p1,offset,string){
  var n = parseInt(p1, 16);
  var n = Math.floor(n/4)-1;
  var string = "";
  for(var i = 0; i<n; i++){
    string += " ";
  }
  return string;
}
function makeItalics(matched,p1,offset,string){
  return "<i>" + p1 + "</i>";
}
function boxBreak(matched,offset,string){
    return `<div class="boxbreak">`;
}
function codeToIcon(matched,p1,offset,string){
  var n = parseInt(p1, 16);
  console.log(p1);
  return iconMap[n];
}

const colorMap = {
    BL: 'BLACK',
    R: 'RED',
    G: 'ADJUSTABLE',
    B: 'BLUE',
    L: 'LIGHTBLUE',
    P: 'PURPLE',
    Y: 'YELLOW',
    W: 'DEFAULT',
    TOK: 'TOK',
    LYN: 'LYN',
    IGA: 'IGA',
    OKO: 'OKO',
    RAINBOW: 'RAINBOW',
    GR: 'GREY',
    PLAYER: 'PLAYER',
    O: 'ORANGE',
};

// Replace $CODE → COLOR(NAME)
function expandColors(text) {
    text = String(text ?? ''); // ensures it's a string
    return text.replace(/\$[A-Z]+/gi, match => {
        const key = match.slice(1).toUpperCase();
        return colorMap[key] ? `COLOR(${colorMap[key]})` : match;
    });
}

// Replace COLOR(NAME) → $CODE
function compressColors(text) {
    text = String(text ?? ''); // ensures it's a string
    return text.replace(/COLOR\(([A-Z]+)\)/gi, (_, name) => {
        const entry = Object.entries(colorMap).find(([k, v]) => v === name.toUpperCase());
        return entry ? `$${entry[0]}` : `COLOR(${name})`;
    });
}

function updateText(){
    codeToScript();
    if(input.value)
        document.getElementById("output").innerHTML = input.value;

    const val = input.value.replace(/TWO_CHOICE|PERSISTENT|\\n/gi, function(matched){return mapObj[matched]})
        .replace(/\n/g, '')
        .replace(/\s*BOX_BREAK_DELAYED\(.*?\)\s*/gi, boxBreak)
        .replace(/\s*BOX_BREAK\s*/gi, boxBreak)
        .replace(/\s*COLOR\(RED\)\s*/gi, '<a style=\'color:red\'>')
        .replace(/\s*COLOR\(DEFAULT\)\s*/gi, '<a style=\'color:white\'>')
        .replace(/\s*COLOR\(ADJUSTABLE\)\s*/gi, '<a style=\'color:lightgreen\'>')
        .replace(/\s*COLOR\(BLUE\)\s*/gi, '<a style=\'color:blue\'>')
        .replace(/\s*COLOR\(LIGHTBLUE\)\s*/gi, '<a style=\'color:lightblue\'>')
        .replace(/\s*COLOR\(PURPLE\)\s*/gi, '<a style=\'color:pink\'>')
        .replace(/\s*COLOR\(YELLOW\)\s*/gi, '<a style=\'color:yellow\'>')
        .replace(/\s*COLOR\(BLACK\)\s*/gi, '<a style=\'color:black\'>')

        .replace(/\s*COLOR\(TOK\)\s*/gi, '<a style=\'color:#8aeb44\'>')
        .replace(/\s*COLOR\(LYN\)\s*/gi, '<a style=\'color:#e03a64\'>')
        .replace(/\s*COLOR\(IGA\)\s*/gi, '<a style=\'color:#a94deb\'>')
        .replace(/\s*COLOR\(OKO\)\s*/gi, '<a style=\'color:#7df0c4\'>')
        .replace(/\s*COLOR\(RAINBOW\)\s*/gi, '<a class=\'rainbow-text\'>')
        .replace(/\s*COLOR\(GREY\)\s*/gi, '<a style=\'color:#4a4a4a\'>')
        .replace(/\s*COLOR\(PLAYER\)\s*/gi, '<a style=\'color:#ded649\'>')
        .replace(/\s*COLOR\(ORANGE\)\s*/gi, '<a style=\'color:#ffd500\'>')

        .replace(/DEFINE_MESSAGE\(.*? /gi, '')
        .replace(/\s*QUICKTEXT_ENABLE\s*/gi,'')
        .replace(/\s*QUICKTEXT_DISABLE\s*/gi,'')
        .replace(/\s*UNSKIPPABLE\s*/gi,'')
        .replace(/\s*EVENT\s*/gi,'')
        .replace(/\s*SFX\(.*?\)\s*/gi,'')
        .replace(/\s*TEXTBOX_TYPE_BLACK,\s*/gi, '<div id="TEXTBOX_TYPE_BLACK"></div>')
        .replace(/\s*TEXTBOX_TYPE_BLUE,\s*/gi, '<div id="TEXTBOX_TYPE_BLUE"></div>')
        .replace(/\s*TEXTBOX_POS_TOP,\s*/gi, '<div id="TEXTBOX_POS_TOP"></div>')
        .replace(/\s*TEXTBOX_POS_MIDDLE,\s*/gi, '<div id="TEXTBOX_POS_MIDDLE"></div>')
        .replace(/\s*TEXTBOX_POS_BOTTOM,\s*/gi, '<div id="TEXTBOX_POS_BOTTOM"></div>')
        .replace(/\s*TEXTBOX_POS_VARIABLE\s*,/gi, '<div id="TEXTBOX_POS_VARIABLE"></div>')
        .replace(/\s*ITEM_ICON\(\"\\x([a-fA-F0-9][a-fA-F0-9])\"\)\s*/gi, codeToIcon)
        .replace(/\s*SHIFT\(\"\\x([a-fA-F0-9][a-fA-F0-9])\"\)\s*/gi, replaceShift)
        .replace(/\\(.*?)\\/gi, makeItalics)
        .replace(/\"/g, '')
        .replace(/\[C-Left\]|\[C-Right\]|\[C-Up\]|\[C-Down\]|\[A\]/gi, function(matched){return buttonMap[matched]});

    document.getElementById("output").innerHTML = val;

    if($("#TEXTBOX_TYPE_BLACK").length){
        $("#output").css("background-color", "rgb\(85 85 85 \/10\%\)");
    }
    else if($("#TEXTBOX_TYPE_BLUE").length){
        $("#output").css("background-color", "rgb\(0 0 136 \/10\%\)");
    }
    if($("#TEXTBOX_POS_TOP").length){
        $("#output").css("border-top", "2px solid white");
    }
    else if($("#TEXTBOX_POS_MIDDLE").length){
        $("#output").css("border-right", "2px solid white");
    }
    else if($("#TEXTBOX_POS_BOTTOM").length){
        $("#output").css("border-bottom", "2px solid white");
    }
}
function addQuotes(match, p1, offset, string){
  
}
function iconTag(match, p1, offset, string){
  return "ITEM_ICON\(\"\\x" + p1 + "\"\)";
}
function shiftTag(match, p1, offset, string){
  return "SHIFT\(\"\\x" + p1 + "\"\)";
}
function sfxTag(match, p1, offset, string){
  return "SFX\(\"\\x" + p1 + "\"\)";
}

function updateEditText(){
  var scriptInput = document.getElementById("otherinput");
  var codeOutput = document.getElementById("codeoutput");

  var text = expandColors(scriptInput.value);
  console.log(text);

  codeOutput.value = text
    .replace(/#B\n/g, 'BOX_BREAK ')
    .replace(/\#QE/g, 'QUICKTEXT_ENABLE')
    .replace(/\#QD/g, 'QUICKTEXT_DISABLE')
    .replace(/\#PE/g, 'PERSISTENT')
    .replace(/#E/g, 'EVENT')
    .replace(/#SFX\s([a-fA-F0-9][a-fA-F0-9])/g, sfxTag)
    .replace(/#S\s([a-fA-F0-9][a-fA-F0-9])/g, shiftTag)
    .replace(/#I\s([a-fA-F0-9][a-fA-F0-9])/g, iconTag)
    .replace(/#U/g, 'UNSKIPPABLE')
    .replace(/\\n/g, '')
    .replace(/\$N/g, '\\n')
    .replace(/\n/g, '\"\\n\"')
    updateText();
}

function codeToScript(){
    var codeInput = document.getElementById("codeoutput");
    var scriptOutput = document.getElementById("otherinput");

    var text = compressColors(codeInput.value);

    scriptOutput.value = text
        .replace(/UNSKIPPABLE/gi, '#U')
        .replace(/EVENT/gi, '#E')
        .replace(/BOX_BREAK /gi, '#B\n')
        .replace(/QUICKTEXT_ENABLE/g, '#QE')
        .replace(/QUICKTEXT_DISABLE/g, '#QD')
        .replace(/PERSISTENT/g, '#PE')
        .replace(/ITEM_ICON\(\"\\x([a-fA-F0-9][a-fA-F0-9])\"\)/g, '#I $1')
        .replace(/SFX\(\"\\x([a-fA-F0-9][a-fA-F0-9])\"\)/g, '#SFX $1')
        .replace(/SHIFT\(\"\\x([a-fA-F0-9][a-fA-F0-9])\"\)/g, '#S $1')
        .replace(/\"\\n\"/g, '\n')
}

function defMsg(){
  var textId = document.getElementById("textid");
  var type = document.getElementById("boxtype");
  var pos = document.getElementById("boxpos");
  var defOutput = document.getElementById("defineoutput");
  var message = "DEFINE_MESSAGE(";
  
  switch(type.value){
      case "black":
        type = "TEXTBOX_TYPE_BLACK";
        $("#output").css("background-color", "rgb\(85 85 85 \/10\%\)");
        break;
      case "blue":
        type = "TEXTBOX_TYPE_BLUE";
        $("#output").css("background-color", "rgb\(0 0 136 \/10\%\)");
        break;
      case "wooden":
        type = "TEXTBOX_TYPE_WOODEN";
        $("#output").css("background-color", "rgb\(99 72 45\)");
        break;
  }
      
      $("#output").css("border", "0px solid white");
      switch(pos.value){
      case "top":
        pos = "TEXTBOX_POS_TOP";
        $("#output").css("border-top", "1px solid white");
        break;
      case "variable":
        pos = "TEXTBOX_POS_VARIABLE";
        $("#output").css("border-left", "1px solid white");
        break;
      case "middle":
        pos = "TEXTBOX_POS_MIDDLE";
        $("#output").css("border-right", "1px solid white");
        break;
      case "bottom":
        pos = "TEXTBOX_POS_BOTTOM";
        $("#output").css("border-bottom", "1px solid white");
        break;
      }
  defOutput.innerHTML = message + textId.value + ", " + type + ", " + pos + ",";
}
function copyToClipboard(){
  var d = document.getElementById("defineoutput");
  var c = document.getElementById("codeoutput").value;
  c = c.replace(/(\"\\n\")/gi, '$1\n');
  navigator.clipboard.writeText(d.innerHTML + '\n' + c + ",\n\"\"," + "\n\"\"\n" + ")");
}