function popAlertMessage(){
  alert('popAlertMessage');
}

function changeHTMLcontent(){
  //change the content of an HTML element:
  //document.getElementById(id).innerHTML = new HTML
  console.log("changeHTMLcontent");
  document.getElementById("ElementToChange").innerHTML = "new content";
}

function displayDate(){
  document.getElementById("showDate").innerHTML = Date();
}

function changeImageSourceOnClick(){
  //changing the value of an attribute :
  //document.getElementById(id).attribute = new value
  document.getElementById("ImageToChange").src = "ressources/images/portfolio/0000_icon.jpg";
}

function changeCSSstyle(){
  //changing HTML style
  document.getElementById("styleToChange").style.color = "red";
  document.getElementById("styleToChange").style.fontFamily = "Impact"
  document.getElementById("styleToChange").style.fontSize = "larger"
  document.getElementById("styleToChanges").style.color = "blue";
  console.log('test');
}

var state = true
function showOrHideText(){
  //change the visibility state of the text
  if (state == true) {
    document.getElementById("showOrHideText").style.visibility='hidden'
    state = false
  }
  else {
    document.getElementById("showOrHideText").style.visibility='visible'
    state = true
  }

}

function animation(){
  var element = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame(){
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      element.style.top = pos + "px";
      element.style.left = pos + "px"
    }
  }
}

// EVENTS https://www.w3schools.com/js/js_htmldom_events.asp
function checkCookies() {
  //check if cookies are enabled
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}

function upperCase(){
  //trigger a function which change the input value to upperCase when the user leave the input field
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();

}

//on hover
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

//on clicked
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}

function addEventListenerParam() {
  var x = document.getElementById("addEventListenerParam1");
  var x = parseInt(x.value)
  var y = document.getElementById("addEventListenerParam2")
  var y = parseInt(y.value)
  console.log(x)
  console.log(x*y)
  // document.write(x)
}









//DOM       https://jsoup.org/cookbook/extracting-data/dom-navigation
// getElementById()
// getElementsByTag()
// getElementsByClass()
// getElementsByAttribute()



//passing parameters
//element.addEventListener("click", function(){ myFunction(p1, p2); });




















//
