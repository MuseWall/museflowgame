var countdown = 30;
var countdownDisplay;
var countdownTimer;
// "submit0" is the next button, 
// with "buttonsAuto" you can also hide the back button 
var buttonID = "submit0";

function countdownStart() {
    console.log("countdownStart")
    // Next button 
    var button = document.getElementById(buttonID);
    // Create countdown element 
    countdownDisplay = document.createElement("div");
    var cd = countdownDisplay;
    cd.style.display = "inline-block";
    cd.style.textAlign = "center";
    cd.style.fontWeight = "bold";
    cd.style.width = button.offsetWidth + "px";
    cd.style.height = button.offsetHeight + "px";
    // Init countdown 
    button.parentNode.appendChild(countdownDisplay);
    countdownRefresh();
    // Hide next button 
    button.style.display = "none";
    // Start countdown 
    countdownTimer = window.setInterval(countDown, 1000);
}

function countDown() {
    console.log("countDown")
    if (countdown > 1) {
        countdown--;
        countdownRefresh();
    } else {
        window.clearTimeout(countdownTimer);
        // display nextbutton 
        var button = document.getElementById(buttonID);
        button.style.display = "";
        // Remove countdown 
        button.parentNode.removeChild(countdownDisplay);
    }
}

function countdownRefresh() {
    console.log("countDownRefresh")
    // Clear 
    while (countdownDisplay.lastChild) {
        countdownDisplay.removeChild(countdownDisplay.lastChild);
    }
    // display 
    var content = document.createTextNode(countdown + "sec.");
    countdownDisplay.appendChild(content);
}
// window.onload = countdownStart;
// window.addEventListener("load",countdownStart);
// countdownStart();
SoSciTools.attachEvent(window, "load", countdownStart);
// function setup(params) {
    // noLoop();
// }








// el que sí funciono

<script type ="text/javascript"> 
<!--
 
var countdown = 30;
var countdownDisplay;
var countdownTimer;
// "submit0" is the next button, 
// with "buttonsAuto" you can also hide the back button 
var buttonID = "submit0";

function countdownStart() {
    console.log("countdownStart")
    // Next button 
    var button = document.getElementById(buttonID);
    // Create countdown element 
    countdownDisplay = document.createElement("div");
    var cd = countdownDisplay;
    cd.style.display = "inline-block";
    cd.style.textAlign = "center";
    cd.style.fontWeight = "bold";
    cd.style.width = button.offsetWidth + "px";
    cd.style.height = button.offsetHeight + "px";
    // Init countdown 
    button.parentNode.appendChild(countdownDisplay);
    countdownRefresh();
    // Hide next button 
    button.style.display = "none";
    // Start countdown 
    countdownTimer = window.setInterval(countDown, 1000);
}

function countDown() {
    console.log("countDown")
    if (countdown > 1) {
        countdown--;
        countdownRefresh();
    } else {
        window.clearTimeout(countdownTimer);
        // display nextbutton 
        var button = document.getElementById(buttonID);
        button.style.display = "";
        // Remove countdown 
        button.parentNode.removeChild(countdownDisplay);
    }
}

function countdownRefresh() {
    console.log("countDownRefresh")
    // Clear 
    while (countdownDisplay.lastChild) {
        countdownDisplay.removeChild(countdownDisplay.lastChild);
    }
    // display 
    var content = document.createTextNode(countdown + "sec.");
    countdownDisplay.appendChild(content);
}

SoSciTools.attachEvent(window, "load", countdownStart);
 
//--> 
</script>


////////////////////////////////////////////////////////////////////////////






// function for forwarding 
function doContinue ( )  { 
  // display a message (optional) 
  alert ( "The time is over." ) ; 
  //Forward the participant to the next page 
  SoSciTools.submitPage ( ) ; 
} 
// Initialization of the forwarding
  SoSciTools.attachEvent ( window ,  "load" ,  function ( evt )  { 
  // hide the next button (optional)
  SoSciTools. submitButtonsHide ( ) ; 
  // start timer for automatic forwarding 
  window. setTimeout ( doContinue ,  %remain%  *  1000 ) ; 
} ) ;










































</body>
<script src="text.js"></script>
<div style="text-align: center; margin: 40px 0">
    <img src="chair.jpg" alt="Image of a chair" style="max-width: 70%">
  </div>
  
  <script type ="text/javascript"> 
  <!-- 
  // function for forwarding 
  function doContinue(){ 
    // display a message (optional) 
    alert ( "The time is over." ) ; 
    // Forward the participant to the next page 
    SoSciTools.submitPage() ; 
  } 
  // Initialization of the forwarding  
    SoSciTools.attachEvent ( window ,  "load" ,  function ( evt )  { 
    // hide the next button (optional)
    SoSciTools. submitButtonsHide ( ) ; 
    // start timer for automatic forwarding 
    window. setTimeout ( doContinue ,  %remain% * 1000 ) ; 
  } ) ; 
  //--> 
  </ script >






<script type="text/javascript"> 
<!-- 
// First hide the button 
SoSciTools.submitButtonsHide( ); 
// Show again after 5 seconds = 5000 ms 
window. setTimeout ( 
  SoSciTools.submitButtonsDisplay , 5000 
) 
//--> 
</script>















<script type ="text/javascript"> 
<!--
 
var countdown = 30;
var countdownDisplay;
var countdownTimer;
// "submit0" is the next button, 
// with "buttonsAuto" you can also hide the back button 
var buttonID = "submit0";

function countdownStart() {
    console.log("countdownStart")
    // Next button 
    var button = document.getElementById(buttonID);
    // Create countdown element 
    countdownDisplay = document.createElement("div");
    var cd = countdownDisplay;
    cd.style.display = "inline-block";
    cd.style.textAlign = "center";
    cd.style.fontWeight = "bold";
    cd.style.width = button.offsetWidth + "px";
    cd.style.height = button.offsetHeight + "px";
    // Init countdown 
    button.parentNode.appendChild(countdownDisplay);
    countdownRefresh();
    // Hide next button 
    button.style.display = "none";
    // Start countdown 
    countdownTimer = window.setInterval(countDown, 1000);
}

function countDown() {
    console.log("countDown")
    if (countdown > 1) {
        countdown--;
        countdownRefresh();
    } else {
        window.clearTimeout(countdownTimer);
        // display nextbutton 
        var button = document.getElementById(buttonID);
        button.style.display = "";
        // Remove countdown 
        button.parentNode.removeChild(countdownDisplay);
    }
}

function countdownRefresh() {
    console.log("countDownRefresh")
    // Clear 
    while (countdownDisplay.lastChild) {
        countdownDisplay.removeChild(countdownDisplay.lastChild);
    }
    // display 
    var content = document.createTextNode(countdown + "sec.");
    countdownDisplay.appendChild(content);
}

SoSciTools.attachEvent(window, "load", countdownStart);
 
//--> 
</script>




function continue ( )  { 
  // display a message (optional) 
  alert ( "The time is over." ) ; 
  // 
  Forward the participant to the next page SoSciTools. submitPage ( ) ; 
} 
// Initialization of the 
SoSciTools forwarding . attachEvent ( window ,  "load" ,  function ( evt )  { 
  // hide the next button (optional)
  SoSciTools. submitButtonsHide ( ) ; 
  // start timer for automatic forwarding 
  window. setTimeout ( continue ,  % remain %  *  1000 ) ; 
} ) ;


<script type ="text/javascript"> 
<!--
if(document.querySelector(".s2t-logo")){
  document.querySelector(".s2t-logo").style.display='none';
}
//--> 
</script>





















/*
INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('489', '0', '1', '1', '12', '0', '2', '0', '2', '1', '1', '0', '1');
INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('489', '1', '1', '1', '2', '0', '1', '0', '1', '0', '0', '383.1650000011', '1');
INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('489', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1');


  
 {"name":"INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('493', '0', '1', '1', '2', '0', '1', '0', '1', '0', '0', '0', '0');INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('493', '1', '1', '1', '2', '0', '1', '0', '1', '0', '0', '0', '0');INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('493', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');","title":"You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisi' at line 1"}

 {"name":"INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('494', '0', '1', '1', '4', '0', '1', '0', '1', '0', '0', '0', '1');\nINSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('494', '1', '1', '1', '1', '0', '1', '0', '1', '0', '0', '0', '1');\nINSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisitTimeSpentOnPlat, TotalTimeSpentOnPlat, LastStrokesLeftArrow, LastStrokesRightArrow, TotalStrokesLeftArrowOnPlat, TotalStrokesRightArrowOnPlat, LastVisitMissedOpporOnPlat, TotalMissedOpportOnPlat, ReactionTime, TotalMissedOpportGame ) VALUES ('494', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1');\n","title":"You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INSERT INTO Platforms (CaseNumber, PlatformID, TotalVisitsPlatformGame, LastVisi' at line 2"}
 
  */


  /*



$value= value('SD19','label');
replace('%urn%',$value);
html(' <input type="hidden" id="urn" value=%urn% /> ');

  */


  /*
<input type="hidden" id="caseNum" value=%caseNumber% />
<input type="hidden" id="urn" value=%urn% />
<script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="https://hci.w-hs.de/data/futurework/Undemanding/style.css">
<script src="https://hci.w-hs.de/data/futurework/Undemanding/Script.js" type="text/javascript"></script>
<script src="https://hci.w-hs.de/data/futurework/Undemanding/Player.js" type="text/javascript"></script>
<script src="https://hci.w-hs.de/data/futurework/Undemanding/Platform.js" type="text/javascript"></script>
<script src="https://hci.w-hs.de/data/futurework/Undemanding/PowerUp.js" type="text/javascript"></script>
<script src="https://hci.w-hs.de/data/futurework/Undemanding/GoalFlag.js" type="text/javascript"></script>
<script src="https://hci.w-hs.de/data/futurework/Undemanding/FlatPattern.js" type="text/javascript"></script>
<script src="https://hci.w-hs.de/data/futurework/Undemanding/StairsPattern.js" type="text/javascript"></script>
  */