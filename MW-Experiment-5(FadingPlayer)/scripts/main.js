/*
	***** MIND WANDERING - EXPERIMENT 3  ****
  by Juan Olaya
  https://juanolaya.github.io/
*/

/* 
TO-DO list
  1. We will minimize any risks by [describe how confidentiality will be secured, maintained, and how data will be disposed of]
  2. required/ not questions?
  3. Mind wandering propensity question 2
  4. During the game you were asked if you were thinking about something unrelated to the game. Now below is a list of thoughts, some of which you might have had then. Please indicate roughly how often you had each type of thought.
  5. Check the questions of the questionnaires one by one
  6. is possible to add note or manipulate questions?? 
  7. Max/Stephanie ask about -> Last page
  8. <p>If you are interested in the results please check out our website or write me an email</p>
  9. <p>We would like to thank you very much for helping us.</p>
*/

/// GENERAL
var screen="intro";
var platforms = [];
var amountPlatforms = 0;  //156  336
var interruption=false;
var endDate;
var totalTimeMillis=0;

/// FADING
var fading=false;
var fadingCount=0;
var playerBorder=false;
var variables=true;

/// UNDEMANDING TRAINING 
var trainingPlatforms = [];
var amountTrainingPlatforms = 0;
var flatDemandingTraining = 35;
var flatUndemandingTraining = 24;
var flatLocationDemanding = [5];        // undemanding 
var flatLocationUndemanding = [5];  
var goalFlagTraining=0;
var undemandingTrainingProbe0=false;
var undemandingTrainingProbesLocations=[15];  //13
var undemandingTrainingFadingProbesLocations=[2];

/// DEMANDING TRAINING 
var demandingTrainingProbe0=false;
var demandingTrainingProbesLocations=[20];
var demandingTrainingFadingProbesLocations=[2];

/// UNDEMANDING GAME
var stairsPattern1 = [43,81];       // undemanding 
var flatPattern1 = [5,124];      // undemanding
var amountStairs=27;
var amountFlatPlatforms=30;
var undemandingThoughtProbesLocations=[34,53,77,112,140];  // 18,53,96,144      //2,3,4,5,6
var undemandingFadingProbesLocations=[2,39,95,122]; //2,39,95,120
var undemandingThoughtProbesUpDown1=[2,3,4];  //  
var undemandingThoughtProbesUpDown2=[];  //  108,109,110,111,112
var waitingHorizontalPlatform=46;
/// implemented for stairs version
var undemandingToughtProbe0=false;
var undemandingToughtProbe1=false;
var undemandingToughtProbe2=false;
var undemandingToughtProbe3=false;
var undemandingToughtProbe4=false;
///
var fadingProbe0=false;
var fadingProbe1=false;
var fadingProbe2=false;
var fadingProbe3=false;
var fadingProbe4=false;
var fadingProbeWaiting=false;
var fadingProbeNumber=0;
var fadingProbeResults=[];
///
var undemandingThoughtProbesUpDownFlag1=false;
var undemandingThoughtProbesUpDownFlag2=false;
var undemandingTooughtProbeTwoFlag=false;
var undemandingTooughtProbeFourFlag=false;
var waitingHorizontalPlatformFlag=false;
var horizontalPlatformsLocation=[36,72,110,120];   //38,47,114,120
var thoughtProbeNumber=0;


/// DEMANDING GAME
var demandingThoughtProbesLocations=[44,70,100,148,180];  
var flatPatternDemanding = [5,164];      
var stairsPatternDemanding = [51,103];  
var amountFlatDemanding=36;
var amountStairsDemanding=42;
var horizontalPlatformsLocationDemanding=[48,95,152,156,161];  
var demandingGamingFadingProbesLocations=[39,95,120];

var demandingGamingFadingProbesLocations=[2,50,120,158];

/// BASELINE
var baselinePlatforms = [];

/// MISC ////
var indexStairsPattern = 0;
var indexFlatPattern = 0;
var amountCutEndPlats = 1;
//var goalFlagNum=(amountPlatforms-1)-amountCutEndPlats;
var goalFlagNum=0;
var playerMovement=true;
var numCurrentPlat=0;
var playerObstructed=false;
var playerNotObstructed=false;
var missedOpportunities=0;
var flow=0;
var resultDB1;
var resultDB2;
var posXpowerUps;

var thoughtProbesIndex=0;
var flagProbesIndex=false;
var thoughtProbes=[-1,-1,-1,-1,-1];
var indexthoughtProbe=0;
var initializedPlatforms=false;
var pressStart=false;
var thoughtProbeSelected1=false;
var thoughtProbeSelected2=false;
var thoughtProbeSelected3=false;
var thoughtProbeSelected4=false;
var thoughtProbeSelected5=false;
var thoughtProbeSelected6=false;
var timeThoughtProbeSelected=0;
var waitTimeThoughtProbeSelected=800;
var highLightColor;
var countRightArrow=0;
var countLeftArrow=0;

var player;
var widthGame;
var points = 0;
var negativePoints=0;
var longestTime = 0;
//var goalFlagNum=0;
var translateDistance;
//var corner=false;
var tiempoEspera;
var tiempoInicio;
var demandingWaitTime;
var extraTime=0;
var interruptionTime=0;
var interruptionTime2=0;
var gotExtratime=false;
var startedTimeStairs = false;
var startedTimeFlat = false;
var platStatus=0;
var caseNumber=0;
/// DEMANDING
var jumpingMode=false;
var arrowLeft=false;
var arrowRight=false;
var allPlatforms;
var allPlatformsDemanding;
var undemandingTrainingJSON;
var demandingTrainingJSON;
var baselineJSON;
var startTimeMessage=0;
var gap=0;
var takenTime=false;
// REACTION TIME
var takenStartReaction=false;    
var startReactionTime=0;
var endReactionTime=0;
var startIndex=0;
var playerObstructedRectionTime=false;
var playerNotObstructedRectionTime=false;
//var endIndex=0;
var condition="undemanding";

var canvas;
var urnRandom=-1;
//let img;
var undemandingInstructions;
var demandingInstructions;
/// FADING PROBES
var tiempoInicioFading = 0;
var tiempoInicioBaseline= 0;
var tiempoEsperaBaseline = 3000; // 3 segundos 
var tiempoInicioBaselineExit= 0;
var tiempoEsperaBaselineExit = 3000; // 3 segundos 
var initialTime=false;
var pressBar=false;
var baselineDone=false;
var baselineWating=false;

function preload() {
  //img = loadImage('https://juanolaya.github.io/assets/chair.png');
  undemandingInstructions= loadImage('https://juanolaya.github.io/assets/undemandingInstructions.png');
  demandingInstructions= loadImage('https://juanolaya.github.io/assets/demandingInstructions.png');
  
  if(document.getElementById('caseNum').value!="%caseNumber%"){ 
    caseNumber=document.getElementById('caseNum').value;
    //SoSciTools.submitButtonsHide();
  }else{
    caseNumber=1;  // %2!=0 -> undemanding   //   %2==0 -> demanding
  }

  if(document.getElementById('urnRand').value!="%urn%"){ 
    urnRandom=document.getElementById('urnRand').value;
    console.log("Took urnRandom: "+urnRandom);
  }else{
    urnRandom=0;  // %2!=0 -> undemanding   //   %2==0 -> demanding
  }

  if(document.querySelector(".questionary")){
    document.querySelector(".questionary").style.display='none';
  }

  let urlUndemanding = 'https://gist.githubusercontent.com/JuanOlaya/8a640395d09db4b2ef8220fd510c5c19/raw/d9bef8cd9d0abe2aa35ffda65e5bfa8927c44f47/platforms-undemanding-gaming.json';
  allPlatforms = loadJSON(urlUndemanding);
  
  let urlDemanding = 'https://gist.githubusercontent.com/JuanOlaya/34efce4dcf723ccb77d14f1f5c996a5c/raw/611d67750c9fd2e6b932886081e9692413c8ef89/DemandingPlatforms.json';
  allPlatformsDemanding = loadJSON(urlDemanding);

  let urlUndemandingTraining = 'https://gist.githubusercontent.com/JuanOlaya/49fc53a64026d8c2af4ccccf3eb839ce/raw/0f80791e9f83bb13b32fac046f7eddd0b1146c60/platforms-undemanding-training.json';
  undemandingTrainingJSON = loadJSON(urlUndemandingTraining);
  
  let urlDemandingTraining = 'https://gist.githubusercontent.com/JuanOlaya/93abe3a2db9969062467407499b1f1b9/raw/e2b32722048733d48a0f07aba9ebaf807ee1fba9/platforms-demanding-training.json';
  demandingTrainingJSON = loadJSON(urlDemandingTraining);

  let urlBaseline = 'https://gist.githubusercontent.com/JuanOlaya/44dc3efb6a79032174cfb71ff75d30af/raw/e61faccfacbca4df4ac6a0842741fd7b5c31ed1d/baseline.json';
  baselineJSON = loadJSON(urlBaseline);
  
}

//**************************************************************************************************//    
//**************************************************************************************************//                           
//                                  Beginning SETUP()
//**************************************************************************************************// 
//**************************************************************************************************//

function setup() {
  //createCanvas(windowWidth, windowHeight);
  //createCanvas(1024, 768);
  //createCanvas(1200, 550);
  console.log(" baseline length: "+baselineJSON.platforms.length  );
  //createCanvas(windowWidth, 768);
  canvas = createCanvas(windowWidth, windowHeight);
  //canvas.style();
  frameRate(30);


  translateDistance = width / 4;
  player = new Player();
  highLightColor= color(200,0,0);
  
  /*
  if(amountPlatforms>=allPlatforms.platforms.length){
    amountPlatforms=allPlatforms.platforms.length;
  }
  */
  if( caseNumber%2!=0 /*urnRandom==0*/ ){
    condition="undemanding";
    amountPlatforms=156;
    amountTrainingPlatforms = 32;
  }

  if( caseNumber%2==0  /*urnRandom==1*/ ){
    condition="demanding"
    amountPlatforms=203;  //292   336
    amountTrainingPlatforms = 42;
  }
  goalFlagNum=(amountPlatforms-1)-amountCutEndPlats;
  goalFlagTraining=(amountTrainingPlatforms-1)-amountCutEndPlats;

  //************************************************* */
  //      0. BASELINE (setup)
  //************************************************* */
  let countDistanceX = 0;
  for (let i = 0; i < baselineJSON.platforms.length; i++) {
    gap=15;
    let platformTemp = new Platform(countDistanceX, i,baselineJSON.platforms[i].speed, baselineJSON.platforms[i].width);
    baselinePlatforms.push(platformTemp);
    countDistanceX = countDistanceX + platformTemp.rw + gap; // 130 = gap between platforms
  }
  //widthGame = countDistanceX - gap;


  // ** UNDEMANDING CONDITION ** //
  if( condition=="undemanding" ){
    //condition="undemanding";
    //amountPlatforms=156;

    //************************************************* */
    //      1. UNDEMANDING GAMING (setup)
    //************************************************* */
    speedMin=0.7; // 0.7
    speedMax=1.1; // 1.1
    
    let countDistanceX = 0;
    
    for (let i = 0; i < amountPlatforms; i++) {
      gap=15;
      for(let j=0;j<horizontalPlatformsLocation.length;j++){
        if(horizontalPlatformsLocation[j]==i){
          gap=800;
        }
      }
      let platformTemp = new Platform(countDistanceX, i,allPlatforms.platforms[i].speed, allPlatforms.platforms[i].width, "gaming");
      platforms.push(platformTemp);
      countDistanceX = countDistanceX + platformTemp.rw + gap; // 130 = gap between platforms
    }
    widthGame = countDistanceX - gap;
    
    for(let j=0;j<horizontalPlatformsLocation.length;j++){
      if( horizontalPlatformsLocation[j] <amountPlatforms){  // horizontal platform
        platforms[ horizontalPlatformsLocation[j] ].horizontalPlatform=true;
      }
    }

    for(let i=0;i<flatPattern1.length; i++){
      
      if( flatPattern1[i] <amountPlatforms){
        //if(i==81){
          console.log("ENTRA "+flatPattern1[i]+" amountPlatforms "+amountPlatforms);
        //}
        platforms[flatPattern1[i]].rh=height/2;
      }
    }
  
    for(let i=0;i<stairsPattern1.length; i++){
      if( stairsPattern1[i] <amountPlatforms){
        platforms[stairsPattern1[i]].rh=-(13) + (60*height/100);
      }
    }
    platforms[47].waitingHorizontalPlatform=true;

    //************************************************* */
    //     2. UNDEMANDING TRAINING (setup)
    //************************************************* */

    let countDistanceXTraining = 0;
    
    for (let i = 0; i < amountTrainingPlatforms; i++) {
      gap=15;
      /*
      for(let j=0;j<horizontalPlatformsLocation.length;j++){
        if(horizontalPlatformsLocation[j]==i){
          gap=800;
        }
      }
      */
      let platformTemp = new Platform(countDistanceXTraining, i,undemandingTrainingJSON.platforms[i].speed, undemandingTrainingJSON.platforms[i].width,"training");
      trainingPlatforms.push(platformTemp);
      countDistanceXTraining = countDistanceXTraining + platformTemp.rw + gap; // 130 = gap between platforms
    }
    //widthGame = countDistanceXTraining - gap;
    /*
    for(let j=0;j<horizontalPlatformsLocation.length;j++){
      if( horizontalPlatformsLocation[j] <amountTrainingPlatforms){  // horizontal platform
        platforms[ horizontalPlatformsLocation[j] ].horizontalPlatform=true;
      }
    }
    */
    /*
    for(let i=0;i<flatLocationDemanding.length; i++){
      
      if( flatLocationDemanding[i] <amountTrainingPlatforms){
        //if(i==81){
          console.log("ENTRA "+flatLocationUndemanding[i]+" amountTrainingPlatforms "+amountTrainingPlatforms);
        //}
        trainingPlatforms[flatLocationUndemanding[i]].rh=height/2;
      }
    }
    */
    //
    //************************************************* */
    /*
    for(let i=0;i<stairsPattern1.length; i++){
      if( stairsPattern1[i] <amountPlatforms){
        platforms[stairsPattern1[i]].rh=-(13) + (60*height/100);
      }
    }
    platforms[47].waitingHorizontalPlatform=true;
    */
  }

   //** DEMANDING CONDITION ** //
  if( condition == "demanding"){
    //condition="demanding";
    //amountPlatforms=336;

    //************************************************* */
    //      3. DEMANDING GAMING (setup)
    //************************************************* */
    
    speedMin=7;
    speedMax=9;

    let countDistanceX = 0;
    for (let i = 0; i < allPlatformsDemanding.platforms.length /*amountPlatforms*/; i++) {
      gap=138;
      for(let j=0;j<horizontalPlatformsLocationDemanding.length;j++){
        if(horizontalPlatformsLocationDemanding[j]==i){
          gap = 500;
        }
      }
      let platformTemp = new Platform(countDistanceX, i,allPlatformsDemanding.platforms[i].speed, allPlatformsDemanding.platforms[i].width, "gaming");
      platforms.push(platformTemp);
      countDistanceX = countDistanceX + platformTemp.rw + gap; // 130 = gap between platforms
    }
    widthGame = countDistanceX - gap;

    for(let i=0;i<flatPatternDemanding.length; i++){
      if(flatPatternDemanding[i]<allPlatformsDemanding.platforms.length){
        platforms[flatPatternDemanding[i]].rh=45*height/100;
      }
    }
    
    for(let i=0;i< stairsPatternDemanding.length; i++){
      if(stairsPatternDemanding[i]<allPlatformsDemanding.platforms.length){
        platforms[stairsPatternDemanding[i]].rh=15*height/100 + (25);
      }
    }

    for(let j=0;j<horizontalPlatformsLocationDemanding.length;j++){
      if( horizontalPlatformsLocationDemanding[j] <allPlatformsDemanding.platforms.length){  // horizontal platform
          platforms[horizontalPlatformsLocationDemanding[j]].horizontalPlatform=true;
      }
    }

    //************************************************* */
    //     4. DEMANDING TRAINING (setup)
    //************************************************* */

    let countDistanceXTraining = 0;
    
    for (let i = 0; i < amountTrainingPlatforms; i++) {
      gap=138;
      /*
      for(let j=0;j<horizontalPlatformsLocation.length;j++){
        if(horizontalPlatformsLocation[j]==i){
          gap=800;
        }
      }
      */
      let platformTemp = new Platform(countDistanceXTraining, i,demandingTrainingJSON.platforms[i].speed, demandingTrainingJSON.platforms[i].width, "training");
      trainingPlatforms.push(platformTemp);
      countDistanceXTraining = countDistanceXTraining + platformTemp.rw + gap; // 130 = gap between platforms
    }
    //widthGame = countDistanceXTraining - gap;
    
    /*
    for(let j=0;j<horizontalPlatformsLocation.length;j++){
      if( horizontalPlatformsLocation[j] <amountTrainingPlatforms){  // horizontal platform
        platforms[ horizontalPlatformsLocation[j] ].horizontalPlatform=true;
      }
    }
    */
    /*
    for(let i=0;i<flatLocationDemanding.length; i++){
      
      if( flatLocationDemanding[i] <amountTrainingPlatforms){
        //if(i==81){
          console.log("ENTRA "+flatLocationDemanding[i]+" amountTrainingPlatforms "+amountTrainingPlatforms);
        //}
        trainingPlatforms[flatLocationDemanding[i]].rh=height/2;
      }
    }
    */
    //
    //************************************************* */
  
    /*
    for(let i=0;i<stairsPattern1.length; i++){
      if( stairsPattern1[i] <amountPlatforms){
        platforms[stairsPattern1[i]].rh=-(13) + (60*height/100);
      }
    }
    platforms[47].waitingHorizontalPlatform=true;
    */

  }

  for(let i=0;i<platforms.length;i++){
    if(i+1<platforms.length){  // Next platform
      platforms[i].nextPlatform=platforms[i+1].rx;
    }
    if(i-1>=0){               // Previous platform
      platforms[i].previousPlatform = platforms[i-1].rx+platforms[i-1].rw;
    } 
  }

  tiempoInicio = 0;
  tiempoEspera = 20000;         //  milliseconds
  demandingWaitTime = 25000;   //  milliseconds
  console.log("caseNumber:  "+ caseNumber);
  console.log("Condition:  "+ condition);
  console.log("amountPlatforms:  "+ platforms.length);
  console.log("amount Platforms JSON (undemanding):  "+allPlatforms.platforms.length);
  console.log("amount Platforms JSON (demanding):  "+allPlatformsDemanding.platforms.length);
  console.log("goal flag location :  "+goalFlagNum);
  //console.log("CaseNumber: "+ caseNumber);
  //console.log("81 plat"+platforms[81].ry);
  endDate = new Date().toISOString().slice(0, 10);
  console.log(endDate);
  
}


//**********************************************************************************************************************************//    
//**************************************************************************************************//                           
//                                 Beginning DRAW()
//**************************************************************************************************// 
//*********************************************************************************************************************************//

function draw() {
 
  posXpowerUps=player.location.x - translateDistance +width/2;
  console.log("Current platform:  "+numCurrentPlat);
  //console.log("timeThoughtProbeSelected: "+timeThoughtProbeSelected1);
  //console.log("speedX: "+player.speedX);
  //console.log(indexthoughtProbe);
  //console.log("thoughtProbeNumber: "+thoughtProbeNumber);
  //console.log("counter: "+countError);
  //console.log("Screen: "+screen);
  //console.log("Condition: "+condition);
  //console.log("amountTrainingPlatforms:"+amountTrainingPlatforms);
  //console.log("JumpingMode: "+jumpingMode);
  //console.log("81 plat"+platforms[81].ry);
  
  //console.log(" Platforms missedOpportunities: "+platforms[numCurrentPlat].reactionTime);
  
  //console.log("missedOpor: "+missedOpportunities);
  //console.log("Fading process: "+fading);
  //console.log("MouseX: "+mouseX);
  //console.log("Width: "+width);
  //console.log(fadingProbeResults);
  
  //**************************************************************************************************//                              
  //                                     Missed oportunities (draw)
  //**************************************************************************************************//
  if(numCurrentPlat>=0  && numCurrentPlat+1<platforms.length-1 ){                   
    if(platforms[numCurrentPlat].ry-30 < platforms[numCurrentPlat+1].ry){               // 1. Is not obstructed
      if(platforms[numCurrentPlat].timeCurrentVisitOnPlat>1){
        playerNotObstructed=true;   // Not Obstructed
        
      }
      //console.log("Player is NOT obstructed:  ");
    }
  }
  if(playerNotObstructed){                                                              // 2.1. Was not obstructed 
    if(platforms[numCurrentPlat].ry > platforms[numCurrentPlat+1].ry+30){              // 2.2. Become Obstructed
      playerObstructed=true;                                                                     
      
      if(playerNotObstructed){      // Not Obstructed
        missedOpportunities++;
        playerNotObstructed=false;
        playerObstructed=false;
      }
    }
  }


  //**************************************************************************************************//                              
  //                                     Reaction Time  (draw)
  //**************************************************************************************************//
  if(numCurrentPlat>=0 && numCurrentPlat+1<platforms.length-1){
    if(platforms[numCurrentPlat].ry-30 < platforms[numCurrentPlat+1].ry){   // 1. Is Not Obstructed
      if(platforms[numCurrentPlat].timeCurrentVisitOnPlat>1){     // pensar como hacer para que comience si no ha oprimido la tecla derecha
        playerObstructedRectionTime=false;  
        //console.log(" startReactionTime: dfsdfds");
        if(!takenStartReaction){    //Reaction Time
          startReactionTime=millis();
          //console.log(" startReactionTime: "+startReactionTime);
          takenStartReaction=true;
          startIndex=numCurrentPlat;
        }
      }
    }
  }

  

  /*
  if(playerObstructedRectionTime==true){                                       // Obstructed
    if(numCurrentPlat>=0 && numCurrentPlat+1<platforms.length-1){             
      //playerNotObstructedRectionTime=true;
      if(player.location.x> platforms[numCurrentPlat].rx+7*platforms[numCurrentPlat].rw/10){  // Not Obstructed
        if(platforms[numCurrentPlat].ry-30 < platforms[numCurrentPlat+1].ry){
          //console.log("Start reaction time");
          if(!takenStartReaction){    //Reaction Time
            startReactionTime=millis();
            takenStartReaction=true;
            startIndex=numCurrentPlat;
          }
        }
      }
    }
  }
  */
  

  //console.log("StartTime: "+startReactionTime);
  //console.log("EndTime: "+endReactionTime);
   
  //**************************************************************************************************//                              
  //                                     Interruption (Thought probe) (draw)
  //**************************************************************************************************//
  if(interruption && (startedTimeStairs == true || startedTimeFlat == true  ) ){
    
    if(gotExtratime==false){
      interruptionTime=millis()-tiempoInicio;
      interruptionTime2=millis();
      //console.log("interruptionTime2: "+interruptionTime2);
      gotExtratime=true;
    }
    extraTime=millis()-interruptionTime2;
  }

  if(interruption && condition=="undemanding"){
    player.location.y=height-platforms[numCurrentPlat].rh-player.radius+15;
  }

  //**************************************************************************************************//
  //                              
  //                                        Intro (draw)
  //
  //**************************************************************************************************//

  if(screen=="intro"){
    background(40);
    background("#001529");
    
    //image(img, 0, 0);
    
    //noCanvas();
    textAlign(CENTER);
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text("INTRODUCTION",width/2,8*height/100);
    textSize(25);
  
    textStyle(NORMAL);
    text("You will now start the baseline",width/2,16*height/100);
    text("Press the space bar when you realize the ball/player is changing its color",width/2,20*height/100);
    text("It is not possible to move the player",width/2,24*height/100);
    text("(The fading starts after 3 seconds )",width/2,28*height/100);
    //text("You will now start training on a simple video game for around 2 minutes.",width/2,16*height/100);
    //text("We would kindly ask you to turn off your mobile phone and not",width/2,20*height/100);
    //text("conduct any other activities for the duration of the game.",width/2,24*height/100);
    textSize(20);
    text("Please click on the button to see the instructions.",width/2,40*height/100);
    buttonInstructions();
  }

  //**************************************************************************************************//
  //                              
  //                                     Fading  Baseline (draw)
  //
  //**************************************************************************************************//

  if(screen=="baseline"){
    background("#9FBDE3");
    fill("#3A2E39");
    rect(-width/3,0,widthGame+width,115);
    translate(-player.location.x + translateDistance, 0);

    player.show();
    //console.log("baselinePlatforms: "+baselinePlatforms.length);
    for (let i = 0; i < baselinePlatforms.length ; i++) {
      player.collisionCircleRect(baselinePlatforms[i].rx, baselinePlatforms[i].ry, baselinePlatforms[i].rw, baselinePlatforms[i].rh);
      if (player.side == 2 && (player.distance <= player.radius)) {
        //currentPlat=i;
        baselinePlatforms[i].setColour();
        baselinePlatforms[i].show(i, player.location.x);
        numCurrentPlat=i;
      } else {
        baselinePlatforms[i].show(-1);
        baselinePlatforms[i].entro=false;
      }
    }
    player.applyVelocityGravity();

    if(!initialTime){
      tiempoInicioBaseline = millis();
      initialTime=true;
    }
    if(!baselineDone){
      if (millis() - tiempoInicioBaseline > tiempoEsperaBaseline) {
        fading=true;
        fadingProbeWaiting=true;
        fadingProbeNumber=0;
        tiempoInicioFading = millis();
        baselineDone=true;
      }	
    }
    if(fadingProbeWaiting==true && pressBar==true){
      fadingProbeResults[fadingProbeNumber]=millis()-tiempoInicioFading;
      fadingProbeWaiting=false;
    }
    if(baselineWating){
      if (millis() - tiempoInicioBaselineExit > tiempoEsperaBaselineExit) {
        baselineWating=false;
        if(condition=="undemanding"){
          screen="undemandingInstructions";
        }
        if(condition=="demanding"){
          screen="demandingInstructions";
        }
      }
    }
  }

  //**************************************************************************************************//
  //                              
  //                                        Instructions (draw)
  //
  //**************************************************************************************************//

  if(screen=="undemandingInstructions"){
    background(40);
    background("#001529");
    
    image(undemandingInstructions,width/12,(16*height/100)-30,40*width/100,23*width/100);  // 755,430
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text("INSTRUCTIONS",width/2,8*height/100);
    textAlign(LEFT,TOP);
    textSize(15);
    textStyle(NORMAL);
    /*
    text("Your goal is to move a ball through the game by steering it towards the right side of the screen from one",width/2,16*height/100);
    text("moving platform to the next one. You can use the left and right arrow keys of the keyboard to move the ball.",width/2,20*height/100);
    text("On the top left, you will see your progress in the level. A flag will signal the end of the level. ",width/2,26*height/100);
    text("On the top right, you will see the points which you receive for reaching a new platform.",width/2,30*height/100);
    text("The duration of the game is around 10 minutes.",width/2,34*height/100);
    text("When you press the \"Next\" button, the system will show the game in full screen mode.",width/2,40*height/100);
    */
    let offset=60;
    text("Your goal is to move a ball through the game by steering it towards the right side of the screen from one",width/2,16*height/100+offset);
    text("moving platform to the next one. You can use the left and right arrow keys of the keyboard to move the ball.",width/2,20*height/100+offset);
    text("Please press the space bar as soon as you realize, that the ball is becoming white",width/2,24*height/100+offset);
    text("On the top left, you will see your progress in the level. A flag will signal the end of the level. ",width/2,28*height/100+offset);
    text("In the top half, you will see a timer when the player gets a power-up.",width/2,32*height/100+offset);
    text("The duration of the game is around 10 minutes.",width/2,36*height/100+offset);
    //text("",width/2,34*height/100+offset);
    text("When you press the \"Next\" button, the system will show the game in full screen mode.",width/2,42*height/100+offset);

    textSize(20);
    textAlign(CENTER);
    text("Please click \"Next\" whenever you are ready to start the game!",width/2,height/2+100);
    buttonStart();
  }

  if(screen=="demandingInstructions"){
    background(40);
    image(demandingInstructions,180,(16*height/100)-30,755,430);
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text("INSTRUCTIONS",width/2,8*height/100);
    textAlign(LEFT,TOP);
    textSize(15);
    textStyle(NORMAL);
    /*
    text("Your goal is to move a ball through the game by steering it towards the right side of the screen from one",width/2,16*height/100);
    text("moving platform to the next one. You can use the left and right arrow keys of the keyboard to move the ball.",width/2,20*height/100);
    text("On the top left, you will see your progress in the level. A flag will signal the end of the level. ",width/2,26*height/100);
    text("On the top right, you will see the points which you receive for reaching a new platform.",width/2,30*height/100);
    text("The duration of the game is around 10 minutes.",width/2,34*height/100);
    text("When you press the \"Next\" button, the system will show the game in full screen mode.",width/2,40*height/100);
    */
    let offset=50;
    text("Your goal is to move a ball through the game by steering it towards the right side of the screen from one",width/2,16*height/100+offset);
    text("moving platform to the next one. You can use the left and right arrow keys of the keyboard to move the ball.",width/2,20*height/100+offset);
    text("On the top left, you will see your progress in the level. A flag will signal the end of the level. ",width/2,26*height/100+offset);
    text("On the top right, you will see the points which you receive for reaching a new platform.",width/2,30*height/100+offset);
    text("In the top half, you will see a timer when the player gets a power-up.",width/2,34*height/100+offset);
    text("The duration of the game is around 10 minutes.",width/2,38*height/100+offset);
    text("When you press the \"Next\" button, the system will show the game in full screen mode.",width/2,42*height/100+offset);

    textSize(20);
    textAlign(CENTER);
    text("Please click \"Next\" whenever you are ready to start the game!",width/2,height/2+100);
    buttonStart();
  }

  //**************************************************************************************************//
  //**************************************************************************************************//                              
  //                               1. Undemanding Training (draw)
  //**************************************************************************************************//
  //**************************************************************************************************//

  if(screen=="undemandingTraining"){
    background("#9FBDE3");
    //console.log("screen: "+screen+"   trainingPlatforms.length: "+trainingPlatforms.length);
    //console.log("TrainingPlatforms locationX: "+trainingPlatforms[0].rx+"   TrainingPlatforms locationY: "+trainingPlatforms[0].ry);
    //console.log("Player: "+player.location.x);
    //console.log("goalFlagTraining: "+goalFlagTraining);
    
    //fill(0);
    //rect(0,582,200,200);
    
    //fill("#454547");
    fill("#3A2E39");
    //fill("#80585B");
    rect(-width/3,0,widthGame+width,115);
    translate(-player.location.x + translateDistance, 0);

    //**************************************************************************************************//                              
    //                          1.  Undemanding  Training - Progress Bar (draw)
    //**************************************************************************************************//
    
    
    textAlign(CENTER,CENTER);
    textSize(15);
    textStyle(BOLD);
    fill(255);
    noStroke();
    text("Game Progress", player.location.x - translateDistance +220,25);
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(player.location.x - translateDistance +70,40,300,50,10);
    noStroke();
    let progres = map(numCurrentPlat, 0,amountTrainingPlatforms-1,0,290);
    //fill(255,0,0);
    
    fill(255,150,0);
    //fill("#F15152");
    fill("#E08300");
    rect(player.location.x - translateDistance +70+5,40+5,progres,40,10);

    //console.log(  player.location.x );
    
    player.show();
    player.bounceEdges();
    playerMovementInput();

    var flag = false;
     
    for (let i = 0; i < trainingPlatforms.length ; i++) {
      
      if(!interruption){
        trainingPlatforms[i].move();
      }else{
        player.location.y = height/3;
        player.location.x = 4303;
      }

      player.collisionCircleRect(trainingPlatforms[i].rx, trainingPlatforms[i].ry, trainingPlatforms[i].rw, trainingPlatforms[i].rh);
      if (player.side == 2 && (player.distance <= player.radius)) {
        //currentPlat=i;
        trainingPlatforms[i].setColour();
        trainingPlatforms[i].show(i, player.location.x);
        numCurrentPlat=i;


        // stairs version Thought Probe 1
        //console.log(player.location.x);
        if(undemandingTrainingProbe0==false){
          if(numCurrentPlat==undemandingTrainingProbesLocations[0]){
            
            interruption=true;
            thoughtProbeNumber=1;
            undemandingTrainingProbe0=true;
            
          }
        }

        // FADING UNDEMANDING TRAINING
        if(fadingProbe0==false){
          if(numCurrentPlat==undemandingTrainingFadingProbesLocations[0]){
            fading=true;
            fadingProbe0=true;
            tiempoInicioFading = millis();
            fadingProbeWaiting=true;
            fadingProbeNumber=1;
            //tiempoTomadoFading = false;
          }
        }
      } else {
        trainingPlatforms[i].show(-1);
        trainingPlatforms[i].entro=false;
      }
      if (trainingPlatforms[i].visited == true) {
        points++;
      }

      for(let j=0;j<trainingPlatforms[i].partialTimesOnPlat.length ;j++){
        if (trainingPlatforms[i].partialTimesOnPlat[j] > longestTime) {
          longestTime = trainingPlatforms[i].longestTime;
        }
      }
    }

    if(fadingProbeWaiting==true && pressBar==true){
      fadingProbeResults[fadingProbeNumber]=millis()-tiempoInicioFading;
      fadingProbeWaiting=false;
    }

    player.applyVelocityGravity();
   
    for(let i=0;i<flatLocationUndemanding.length;i++){
      if( flatLocationUndemanding[i] <trainingPlatforms.length){
        if(player.collisionPowerUp( trainingPlatforms[flatLocationUndemanding[i]].flatPattern.posX , trainingPlatforms[flatLocationUndemanding[i]].flatPattern.posY , trainingPlatforms[flatLocationUndemanding[i]].flatPattern.radius)){
          //console.log("flatLocationUndemanding[ ]: "+flatLocationUndemanding[i]+"flatUndemandingTraining" + flatUndemandingTraining  );
          if( flatLocationUndemanding[i] + flatUndemandingTraining < amountTrainingPlatforms - amountCutEndPlats ){
            if (startedTimeFlat == false) {
              tiempoInicio = millis();
              startedTimeFlat = true;
              indexFlatPattern = i;
              player.location.y = height / 2;
            }
          }else{
            console.log("There are no enough platforms for the flat pattern iii");  
          }
        }
      }
    }
   
    if(goalFlagTraining<trainingPlatforms.length){
      if( player.collisionFlag( trainingPlatforms[goalFlagTraining].goalFlag.posX, trainingPlatforms[goalFlagTraining].goalFlag.posY, trainingPlatforms[goalFlagTraining].goalFlag.colW, trainingPlatforms[goalFlagTraining].goalFlag.colH) ){
        console.log("reach the flag");
        screen="UndemandingTransition";
        background(0);
        player.location = createVector(250, 25);
        numCurrentPlat=0;
        //totalTimeMillis=Math.round(millis()/1000);
        //dorequestThoughtProbes().catch( catchErrorThoughtProbes ); 

        //dorequestPlatforms().catch( catchError );

        //let fs = fullscreen();
        //fullscreen(!fs);
      }
    }
    
    

    //**************************************************************************************************//                      
    //                         1. Undemanding Training - Flat Pattern  (draw)
    //**************************************************************************************************//
    
    
    if(startedTimeFlat == true){
      let end = map(millis()-tiempoInicio-extraTime,0,tiempoEspera,0,360);
      textAlign(CENTER,CENTER);
      textSize(15);
      textStyle(BOLD);
      fill(255,150,0);
      ellipse(posXpowerUps,60,90,90);
      fill(40);
      arc(posXpowerUps,60,90,90,-PI/2,radians(end)-PI/2,PIE);
      fill(255,150,0);
      stroke(255,150,0);
      strokeWeight(2);
      fill("#454547");
      ellipse(posXpowerUps,60,25,25);
      noFill();
      ellipse(posXpowerUps,60,90,90);
      noStroke();
      
      if (millis() < tiempoInicio + tiempoEspera + extraTime) {
          for (let k = flatLocationUndemanding[indexFlatPattern]; k < flatLocationUndemanding[indexFlatPattern] + flatUndemandingTraining; k++) {   

            platStatus=1;
            //console.log("k "+k);
            trainingPlatforms[k].easing();
            trainingPlatforms[k].targetY = 50*height/100;
          }
      } else {
        platStatus=0;
        startedTimeFlat = false;
        //platforms[i].blocked = false;
        gotExtratime=false;
        interruptionTime=0;
        interruptionTime2=0;
        extraTime=0;
      }	   
    }
    points = 0;

    edgeLines();
    
  }

  // End Undemanding Training (draw)
  //**************************************************************************************************//                      
  //                     1.1. Undemanding Transition  (draw)
  //**************************************************************************************************//

  if(screen=="UndemandingTransition"){
    background(20);
    textAlign(CENTER);
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text(" ",width/2,8*height/100);
    textSize(25);
    textStyle(NORMAL);
    //text("Now you are going to play a platform video game",width/2,100);
    text("  Well done!",width/2,16*height/100);
    text("After the previous training you are ready to play the game ",width/2,20*height/100);
    text("The duration of the game is around 10 minutes. ",width/2,26*height/100);
    text("",width/2,30*height/100);
    text("We would kindly ask you to keep off your mobile phone and not ",width/2,34*height/100);
    text("conduct any other activities for the duration of the game. ",width/2,40*height/100);
    //text("",width/2,160);
    textSize(20);
    text("Please click \"Next\" whenever you are ready to start the game!",width/2,height/2+100);
    //buttonStart();
    transitionButton();
  }

  //**************************************************************************************************//
  //**************************************************************************************************//                              
  //                              2.  Undemanding Condition (draw)
  //**************************************************************************************************//
  //**************************************************************************************************//

  if(screen=="undemanding"){
    //background(0); 
    background("#9FBDE3");
    //points=0;
    negativePoints=0;
    //fill("#454547");
    fill("#3A2E39");
    rect(-width/3,0,widthGame+width,115);
    
    translate(-player.location.x + translateDistance, 0);

    //**************************************************************************************************//                              
    //                         2.   Undemanding Gaming  -   Progress Bar (draw)
    //**************************************************************************************************//
    
    posXpowerUps=player.location.x - translateDistance +width/2;
    textAlign(CENTER,CENTER);
    textSize(15);
    textStyle(BOLD);
    fill(255);
    noStroke();
    text("Game Progress", player.location.x - translateDistance +220,25);
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(player.location.x - translateDistance +70,40,300,50,10);
    noStroke();
    let progres = map(numCurrentPlat, 0,amountPlatforms-1,0,290);
    //fill(255,0,0);
    fill(255,150,0);
    rect(player.location.x - translateDistance +70+5,40+5,progres,40,10);

    //console.log(  player.location.x );
    
    player.show();
    player.bounceEdges();
    playerMovementInput();

    var flag = false;
    for (let i = 0; i < platforms.length ; i++) {
      //platforms[i].show();
      if(!interruption){
        platforms[i].move();
      }

      player.collisionCircleRect(platforms[i].rx, platforms[i].ry, platforms[i].rw, platforms[i].rh);
      if (player.side == 2 && (player.distance <= player.radius)) {
        //currentPlat=i;
        platforms[i].setColour();
        platforms[i].show(i, player.location.x);
        numCurrentPlat=i;

        

        // Thought Probe 0 
        /*
        if(undemandingThoughtProbesUpDownFlag1==false){
          for(let j=0;j<undemandingThoughtProbesUpDown1.length;j++){
            if(undemandingThoughtProbesUpDown1[j]==i){
              //console.log("entrii");
              if(platforms[numCurrentPlat].timeCurrentVisitOnPlat>4){
                interruption=true;
                thoughtProbeNumber=0;
                undemandingThoughtProbesUpDownFlag1=true;
                
              }
            }
          }
        }
        */

        // stairs version Thought Probe 1
        if(undemandingToughtProbe1==false){
          if(numCurrentPlat==undemandingThoughtProbesLocations[0]){
            interruption=true;
            thoughtProbeNumber=1;
            undemandingToughtProbe1=true;
          }
        }

        if(undemandingToughtProbe2==false){
          if(numCurrentPlat==undemandingThoughtProbesLocations[1]){
            interruption=true;
            thoughtProbeNumber=2;
            undemandingToughtProbe2=true;
          }
        }

        if(undemandingToughtProbe3==false){
          if(numCurrentPlat==undemandingThoughtProbesLocations[2]){
            interruption=true;
            thoughtProbeNumber=3;
            undemandingToughtProbe3=true;
          }
        }

        if(undemandingToughtProbe4==false){
          if(numCurrentPlat==undemandingThoughtProbesLocations[3]){
            interruption=true;
            thoughtProbeNumber=4;
            undemandingToughtProbe4=true;
          }
        }

        // FADING PROBES - UNDEMANDING GAMING 

        if(fadingProbe1==false){
          if(numCurrentPlat==undemandingFadingProbesLocations[0]){
            fading=true;
            fadingProbe1=true;
            fadingProbeWaiting=true;
            fadingProbeNumber=2;
            tiempoInicioFading = millis();
          }
        }

        if(fadingProbe2==false){
          if(numCurrentPlat==undemandingFadingProbesLocations[1]){
            fading=true;
            fadingProbe2=true;
            fadingProbeWaiting=true;
            fadingProbeNumber=3;
            tiempoInicioFading = millis();
          }
        }

        if(fadingProbe3==false){
          if(numCurrentPlat==undemandingFadingProbesLocations[2]){
            fading=true;
            fadingProbe3=true;
            fadingProbeWaiting=true;
            fadingProbeNumber=4;
            tiempoInicioFading = millis();
          }
        }
        if(fadingProbe4==false){
          if(numCurrentPlat==undemandingFadingProbesLocations[3]){
            fading=true;
            fadingProbe4=true;
            fadingProbeWaiting=true;
            fadingProbeNumber=5;
            tiempoInicioFading = millis();
          }
        }
      } else {
        platforms[i].show(-1);
        platforms[i].entro=false;
      }
      if (platforms[i].visited == true) {
        points++;
      }

      for(let j=0;j<platforms[i].partialTimesOnPlat.length ;j++){
        if (platforms[i].partialTimesOnPlat[j] > longestTime) {
          longestTime = platforms[i].longestTime;
        }
      }
    }

    if(fadingProbeWaiting==true && pressBar==true){
      fadingProbeResults[fadingProbeNumber]=millis()-tiempoInicioFading;
      fadingProbeWaiting=false;
    }

    player.applyVelocityGravity();

    for(let i=0;i<flatPattern1.length;i++){
      if( flatPattern1[i] <platforms.length){
        if(player.collisionPowerUp( platforms[flatPattern1[i]].flatPattern.posX , platforms[flatPattern1[i]].flatPattern.posY , platforms[flatPattern1[i]].flatPattern.radius)){
          if( flatPattern1[i] + amountFlatPlatforms < amountPlatforms - amountCutEndPlats ){
            if (startedTimeFlat == false) {
              tiempoInicio = millis();
              startedTimeFlat = true;
              indexFlatPattern = i;
              player.location.y = height / 2;
            }
          }else{
            console.log("There are no enough platforms for the flat pattern");  
          }
        }
      }
    }

    for(let i=0;i<stairsPattern1.length;i++){
      if(stairsPattern1[i]<platforms.length){
        if(player.collisionPowerUp( platforms[stairsPattern1[i]].stairsPattern.posX , platforms[stairsPattern1[i]].stairsPattern.posY , platforms[stairsPattern1[i]].stairsPattern.radius)){
          if( stairsPattern1[i] + amountStairs < amountPlatforms - amountCutEndPlats ){ 
            if (startedTimeStairs == false) {
              tiempoInicio = millis();
              startedTimeStairs = true;
              indexStairsPattern = i;
              player.location.y = height / 3;
            }
          }else{
            console.log("There are no enough platforms for the stairs pattern");
          }
        }
      }
    }
   
    if(goalFlagNum<platforms.length){
      if( player.collisionFlag( platforms[goalFlagNum].goalFlag.posX, platforms[goalFlagNum].goalFlag.posY, platforms[goalFlagNum].goalFlag.colW, platforms[goalFlagNum].goalFlag.colH) ){
        console.log("reach the flag");
        screen="goalAchieved";
        background(0);
        //dorequest();
        /*
        dorequestThoughtProbes().catch( function(error){
          console.log(error);
          console.log("There was an error in ThoughtProbes ");
        });
        */
        totalTimeMillis=Math.round(millis()/1000);
        dorequestThoughtProbes().catch( catchErrorThoughtProbes ); 

        dorequestPlatforms().catch( catchError /*{
          //console.log(error);
          //console.log("There was an error in Platforms");
        }*/);

        /*
        dorequestPlatforms().catch(function(error){
          console.log(error);
          console.log("There was an error in Platforms");
          //tryAgainRequestPlatforms=true;
        });
        */
        let fs = fullscreen();
        fullscreen(!fs);
        //resizeCanvas(windowWidth, windowHeight);
      }
    }

    //**************************************************************************************************//                      
    //                        2.  Undemanding Gaming - Stairs Pattern (draw)
    //**************************************************************************************************//

    if(startedTimeStairs == true){
      //let end= map(millis()-tiempoInicio,0,tiempoEspera,0,360);
      //console.log("ENTRA scala");
      //let end;
      //if(!interruption){
      let end= map(millis()-tiempoInicio-extraTime,0,tiempoEspera,0,360);
      //}else{
      //  end= map(interruptionTime,0,tiempoEspera,0,360);
      //}
      /*strokeWeight(20);
      stroke(255,150,0);
      noFill();*/
      textAlign(CENTER,CENTER);
      textSize(15);
      textStyle(BOLD);
      fill(255,150,0);
      //stroke();
      ellipse(posXpowerUps,/*14*height/100*/60,90,90);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*14*height/100*/60,90,90);
      fill(40);
      
      arc(posXpowerUps ,/*14*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x + translateDistance -13*height/100 ,/*14*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x + translateDistance -13*height/100 ,/*14*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x /*+ width / 2 - translateDistance*/,8*height/100,100,100,0,2*PI,PIE);
      fill(255,150,0);
      //text("STAIRS", player.location.x + translateDistance -13*height/100/*+ width / 2 - translateDistance*/, 4*height/100  /*125*/);
      stroke(255,150,0);
      strokeWeight(2);
      
      //stroke();
      fill("#454547");
      ellipse(posXpowerUps,/*14*height/100*/60,25,25);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*14*height/100*/60,25,25);
      noFill();
      ellipse(posXpowerUps,/*14*height/100*/60,90,90);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*14*height/100*/60,90,90);
      noStroke();
      
      if (millis() < tiempoInicio + tiempoEspera+extraTime) {
        //if( stairsPattern1[indexStairsPattern] + amountStairs < amountPlatforms - amountCutEndPlats ){
          for (let j = stairsPattern1[indexStairsPattern], h = 1; j < amountStairs + stairsPattern1[indexStairsPattern]; j++, h++) {
            //platforms[j].blocked = platStatus;
            //platforms[j].blocked = true;
            //console.log("Set1: "+70*height/100+"Set rest: " +(50 - (h * 3)) * height / 100);
            platStatus=1;
            
            //platforms[j].rh =  - (h * 13) + (60*height/100) ;
            platforms[j].easing();
            platforms[j].targetY =  - (h * 13) + (60*height/100) ;
            
            //platforms[j].activatedEasing=true;
            //platforms[j].endTimeEasing=millis()+2000;
          }
        //}
        //else{
          //console.log("There are no enough platforms for the stairs pattern");
        //}
      } 
      else {
        platStatus=0;
        startedTimeStairs = false;
        //console.log("ENTRA");
        //platforms[i].blocked = false;
        gotExtratime=false;
        interruptionTime=0;
        interruptionTime2=0;
        extraTime=0;
        }	   
    }


    //**************************************************************************************************//                      
    //                        2.  Undemanding Gaming - Flat Pattern (draw)
    //**************************************************************************************************//
    
    if(startedTimeFlat == true){
      //let end= map(millis()-tiempoInicio,0,tiempoEspera,0,360);
      let end= map(millis()-tiempoInicio-extraTime,0,tiempoEspera,0,360);
      /*strokeWeight(20);
      stroke(255,150,0);
      noFill();*/
      textAlign(CENTER,CENTER);
      textSize(15);
      textStyle(BOLD);
      fill(255,150,0);
      //stroke();
      ellipse(posXpowerUps,60,90,90);
      //ellipse(player.location.x /*+ translateDistance -13*height/100*/  + width / 2 - translateDistance,14*height/100,120,120);
      fill(40);
      
      arc(posXpowerUps,60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x /*+ translateDistance -13*height/100*/ + width / 2 - translateDistance,14*height/100,120,120,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x /*+ width / 2 - translateDistance*/,8*height/100,100,100,0,2*PI,PIE);
      fill(255,150,0);
      //text("FLAT", player.location.x /*+ translateDistance -13*height/100 */  + width / 2 - translateDistance, 4*height/100  /*125*/);
      stroke(255,150,0);
      strokeWeight(2);
      fill("#454547");
      //stroke();
      ellipse(posXpowerUps,60,25,25);
      //ellipse(player.location.x /*+ translateDistance -13*height/100*/  + width / 2 - translateDistance,14*height/100,25,25);
      noFill();
      ellipse(posXpowerUps,60,90,90);
      //ellipse(player.location.x /*+ translateDistance -13*height/100*/  + width / 2 - translateDistance,14*height/100,120,120);
      noStroke();
      
      if (millis() < tiempoInicio + tiempoEspera + extraTime) {
        //if( flatPattern1[indexFlatPattern] + amountFlatPlatforms < amountPlatforms - amountCutEndPlats ){
          for (let k = flatPattern1[indexFlatPattern]; k < flatPattern1[indexFlatPattern] + amountFlatPlatforms; k++) {   //platforms.length
            //platforms[k].blocked = platStatus;
            //platforms[k].blocked = true;
            //console.log("k: "+ k);
            //platforms[k].rh = (60 - (15 * 3)) * height / 100;

            platStatus=1;
            
            //platforms[k].rh =  45*height/100;
            
            platforms[k].easing();
            platforms[k].targetY =50*height/100;
          }
        // }else{
        //   console.log("There are no enough platforms for the flat pattern");
        //}
      } else {
        platStatus=0;
        startedTimeFlat = false;
        //platforms[i].blocked = false;
        gotExtratime=false;
        interruptionTime=0;
        interruptionTime2=0;
        extraTime=0;
      }	   
    }

    /*
    fill(250,250,0);
    rect(player.location.x + translateDistance -13*height/100,height/4,50,50);
    rect(player.location.x - translateDistance +90*width/100,height/2,80,80);
    */

    //points
    //fill(255);
    //textSize(55);
    //textAlign(CENTER,TOP);
    //console.log("Points: "+points);
    //textStyle(NORMAL);
    //text(points+negativePoints, player.location.x-translateDistance +90*width/100, /*14*height/100*/40 );
    //textSize(15);
    //textStyle(BOLD);
    //text("POINTS", player.location.x - translateDistance +90*width/100, /*4*height/100*/20 );

    /*
    fill(255);
    textSize(55);
    textAlign(CENTER,TOP);
    //console.log("Points AQUI DEMANDING: "+points);
    textStyle(NORMAL);
    text(points+negativePoints, player.location.x-translateDistance +90*width/100, 40 );
    textSize(15);
    textStyle(BOLD);
    text("POINTS", player.location.x - translateDistance +90*width/100, 20 );
    
    */ 
    if (mouseX > 7*width / 8 && mouseY > 5 && mouseY < height/7 ) {
      textAlign(RIGHT);
      /*
      text("Number Current Platform: "+numCurrentPlat,player.location.x-translateDistance+width-20,110);
      text("Game time:   " + Math.floor( ( ( millis()/1000) % 3600  / 60 ) )  +":"+ Math.floor( ( (millis()/1000) %3600) % 60 ) , player.location.x - translateDistance+width-20, 50);
      //text("Game time: " + Math.round(millis() / 1000), player.location.x - translateDistance+width-20, 50);
      text("Longest time on a platform: " + longestTime, player.location.x - translateDistance+width-20, 80);
      fill(250,200,0);
      text("Case Number: " + caseNumber, player.location.x - translateDistance+width-20, 380);
      text("Missed Opportunities: "+missedOpportunities, player.location.x - translateDistance+width-20, 410);
      //text("Case Number: "+caseNumber, player.location.x - translateDistance+width-20, 440);
      */
    }
    points = 0;

    edgeLines();
    //fill(255);
    //text(mouseY,15,15);
    //console.log("Location "+player.location.y+" height: "+height);
    
  }


  //**************************************************************************************************//
  //**************************************************************************************************//                              
  //                               3. Demanding Training (draw)
  //**************************************************************************************************//
  //**************************************************************************************************//

  if(screen=="demandingTraining"){
    background("#9FBDE3");
    //console.log("screen: "+screen+"   trainingPlatforms.length: "+trainingPlatforms.length);
    //console.log("TrainingPlatforms locationX: "+trainingPlatforms[0].rx+"   TrainingPlatforms locationY: "+trainingPlatforms[0].ry);
    //console.log("Player: "+player.location.x);
    //console.log("goalFlagTraining: "+goalFlagTraining);
    
    //fill(0);
    //rect(0,582,200,200);
    
    //fill("#454547");
    fill("#3A2E39");
    rect(-width/3,0,widthGame+width,115);
    translate(-player.location.x + translateDistance, 0);


    //**************************************************************************************************//                              
    //                       3.  Demanding  Training  -  Progress Bar (draw)
    //**************************************************************************************************//
    
    posXpowerUps=player.location.x - translateDistance +width/2;
    textAlign(CENTER,CENTER);
    textSize(15);
    textStyle(BOLD);
    fill(255);
    noStroke();
    text("Game Progress", player.location.x - translateDistance +220,25);
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(player.location.x - translateDistance +70,40,300,50,10);
    noStroke();
    let progres = map(numCurrentPlat, 0,amountTrainingPlatforms-1,0,290);
    //fill(255,0,0);
    fill(255,150,0);
    rect(player.location.x - translateDistance +70+5,40+5,progres,40,10);

    //console.log(  player.location.x );
    
    player.show();
    player.bounceEdges();
    playerMovementInput();

    var flag = false;
     
    for (let i = 0; i < trainingPlatforms.length ; i++) {
      
      if(!interruption){
        trainingPlatforms[i].move();
      }

      player.collisionCircleRect(trainingPlatforms[i].rx, trainingPlatforms[i].ry, trainingPlatforms[i].rw, trainingPlatforms[i].rh);
      // stairs version Thought Probe 1
      if(demandingTrainingProbe0==false){
        if(player.location.y < trainingPlatforms[i].ry && player.location.x < trainingPlatforms[i].rx+trainingPlatforms[i].rw && player.location.x > trainingPlatforms[i].rx && demandingTrainingProbesLocations[0]==i){
        //if(numCurrentPlat==demandingTrainingProbesLocations[0]){
          console.log("Entra if + numCurrentPlat"+numCurrentPlat);
          interruption=true;
          //thoughtProbeNumber=1;
          demandingTrainingProbe0=true;
          
        }
      }
      // FADING****
      if(fadingProbe0==false){
        if(player.location.y < trainingPlatforms[i].ry && player.location.x < trainingPlatforms[i].rx+trainingPlatforms[i].rw && player.location.x > trainingPlatforms[i].rx && demandingTrainingFadingProbesLocations[0]==i){
          fading=true;
          fadingProbe0=true;
          tiempoInicioFading = millis();
          fadingProbeWaiting=true;
          fadingProbeNumber=1;
          //tiempoTomadoFading = false;
        }
      }
      
      if (player.side == 2 && (player.distance <= player.radius)) {
        //currentPlat=i;
        trainingPlatforms[i].setColour();
        trainingPlatforms[i].show(i, player.location.x);
        numCurrentPlat=i;

        
      } else {
        trainingPlatforms[i].show(-1);
        trainingPlatforms[i].entro=false;
      }
      if (trainingPlatforms[i].visited == true) {
        points++;
      }

      for(let j=0;j<trainingPlatforms[i].partialTimesOnPlat.length ;j++){
        if (trainingPlatforms[i].partialTimesOnPlat[j] > longestTime) {
          longestTime = trainingPlatforms[i].longestTime;
        }
      }
    }

    if(fadingProbeWaiting==true && pressBar==true){
      fadingProbeResults[fadingProbeNumber]=millis()-tiempoInicioFading;
      fadingProbeWaiting=false;
    }
    player.applyVelocityGravity();
   
    //
    //  Demanding  Training - TRYING TO FIXXX  
    //

    for(let i=0;i<flatLocationDemanding.length;i++){
      if( flatLocationDemanding[i] <trainingPlatforms.length){
        if(player.collisionPowerUp( trainingPlatforms[flatLocationDemanding[i]].flatPattern.posX , trainingPlatforms[flatLocationDemanding[i]].flatPattern.posY , trainingPlatforms[flatLocationDemanding[i]].flatPattern.radius)){
          //console.log("entra aqui if ooo"); 
          //console.log("flatLocationUndemanding.length"+flatLocationUndemanding.length);
          if( flatLocationDemanding[i] + flatDemandingTraining < amountTrainingPlatforms - amountCutEndPlats ){
            if (startedTimeFlat == false) {
              tiempoInicio = millis();
              startedTimeFlat = true;
              indexFlatPattern = i;
              player.location.y = height / 2;
              jumpingMode=true;
              player.velocity= createVector(0, 0);
              player.acceleration  = createVector(0, 0.31); 
            }
          }else{
            console.log("There are no enough platforms for the flat pattern");  
          }
        }
      }
    }
   
    if(goalFlagTraining<trainingPlatforms.length){
      //console.log("Entra al if: ");
      if( player.collisionFlag( trainingPlatforms[goalFlagTraining].goalFlag.posX, trainingPlatforms[goalFlagTraining].goalFlag.posY, trainingPlatforms[goalFlagTraining].goalFlag.colW, trainingPlatforms[goalFlagTraining].goalFlag.colH) ){
        console.log("reach the flag");
        screen="undemandingTransition";
        background(0);
        player.location = createVector(250, 25);
        numCurrentPlat = 0;
        //totalTimeMillis=Math.round(millis()/1000);
        //dorequestThoughtProbes().catch( catchErrorThoughtProbes ); 

        //dorequestPlatforms().catch( catchError );

        //let fs = fullscreen();
        //fullscreen(!fs);
      }
    }
    
    

    //**************************************************************************************************//                      
    //                         3. Demanding Training - Flat Pattern  (draw)
    //**************************************************************************************************//
    
    
    if(startedTimeFlat == true){
      let end = map(millis()-tiempoInicio-extraTime,0,tiempoEspera,0,360);
      textAlign(CENTER,CENTER);
      textSize(15);
      textStyle(BOLD);
      fill(255,150,0);
      ellipse(posXpowerUps,60,90,90);
      fill(40);
      
      arc(posXpowerUps,60,90,90,-PI/2,radians(end)-PI/2,PIE);
      fill(255,150,0);
      stroke(255,150,0);
      strokeWeight(2);
      
      fill("#454547");
      ellipse(posXpowerUps,60,25,25);
      noFill();
      ellipse(posXpowerUps,60,90,90);
      noStroke();
      
      if (millis() < tiempoInicio + tiempoEspera + extraTime) {
          for (let k = flatLocationDemanding[indexFlatPattern]; k < flatLocationDemanding[indexFlatPattern] + flatDemandingTraining; k++) {   

            platStatus=1;
            //console.log("k "+k);
            trainingPlatforms[k].easing();
            trainingPlatforms[k].targetY = 50*height/100;
          }
      } else {
            //
            //  Demanding  Training - TRYING TO FIXXX  
            //
        platStatus=0;
        startedTimeFlat = false;
        //platforms[i].blocked = false;
        gotExtratime=false;
        interruptionTime=0;
        interruptionTime2=0;
        extraTime=0;
        jumpingMode=false;
			  player.velocity = createVector(0, 15);
			  player.acceleration  = createVector(0, 40);
      }	   
    }
    fill(255);
    textSize(55);
    textAlign(CENTER,TOP);
    //console.log("Points AQUI DEMANDING: "+points);
    textStyle(NORMAL);
    text( points+negativePoints , posXpowerUps + 40*width/100 , 40 );
    //text(points+negativePoints, player.location.x-translateDistance +90*width/100, 40 );
    textSize(15);
    textStyle(BOLD);
    text("Points", posXpowerUps + 40*width/100, 20 );

    points = 0;

    edgeLines();
  }

  //**************************************************************************************************//                      
  //                     3.1. Demanding Transition  (draw)
  //**************************************************************************************************//

  if(screen=="undemandingTransition"){
    background(20);
    textAlign(CENTER);
    textSize(30);
    fill(255);
    textStyle(BOLD);
    text(" ",width/2,8*height/100);
    textSize(25);
    textStyle(NORMAL);
    //text("Now you are going to play a platform video game",width/2,100);
    textStyle(BOLD);
    text(" Well done! ",width/2,16*height/100);
    textStyle(NORMAL);
    text("After the previous training you are ready to play the ",width/2,20*height/100);
    text(" game, the duration of the game is around 10 minutes. ",width/2,26*height/100);
    text(" ",width/2,30*height/100);
    text("We would kindly ask you to keep off your mobile phone and not",width/2,34*height/100);
    text(" conduct any other activities for the duration of the game.",width/2,40*height/100);
    //text("",width/2,160);
    textSize(20);
    text("Please click \"Next\" whenever you are ready to start the game!",width/2,height/2+100);
    //buttonStart();
    transitionButton();
  }

  //**************************************************************************************************//
  //**************************************************************************************************//                              
  //                              4.  Demanding Condition (draw)
  //**************************************************************************************************//
  //**************************************************************************************************//

  if(screen=="demanding"){
    background("#9FBDE3");
    translate(-player.location.x + translateDistance, 0);

    //points=0;
    negativePoints=0;
    //fill("#454547");
    fill("#3A2E39");
    rect(-width/3,0,widthGame+width,115);

    /*
    let backgroundBegin = color("#015B65");
    let backgroundEnd = color("#70CCE1");

    for(let i=0;i<height;i++){
      //let outcome = lerpColor(backgroundBegin, backgroundEnd, i/height);
      let outcome = lerpColor( backgroundEnd,backgroundBegin, i/height);
      stroke(outcome);
      line(0,i,width,i);
    }
    */

    //**************************************************************************************************//                              
    //                              4.  Demanding Gaming -  Progress Bar
    //**************************************************************************************************//
    posXpowerUps=player.location.x - translateDistance +width/2;
    textAlign(CENTER,CENTER);
    textSize(15);
    textStyle(BOLD);
    fill(255);
    noStroke();
    text("Game Progress", player.location.x - translateDistance +220,25);
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(player.location.x - translateDistance +70,40,300,50,10);
    noStroke();
    let progres = map(numCurrentPlat, 0,amountPlatforms-1,0,290);
    //fill(255,0,0);
    fill(255,150,0);
    rect(player.location.x - translateDistance +70+5,40+5,progres,40,10);
    
    player.show();
    player.bounceEdges();  
    playerMovementInput();

    var flag = false;
    for (let i = 0; i < platforms.length ; i++) {
      //platforms[i].show();
      if(!interruption){
        platforms[i].move();
      }

      player.collisionCircleRect(platforms[i].rx, platforms[i].ry, platforms[i].rw, platforms[i].rh);

      //if(player.inTheAir(platforms[i].rx, platforms[i].ry, platforms[i].rw) && thoughtProbesLocations[thoughtProbesIndex]==i){
                        //this.location.y < ry && this.location.x < rx+rw && this.location.x > rx
      if(player.location.y < platforms[i].ry && player.location.x < platforms[i].rx+platforms[i].rw && player.location.x > platforms[i].rx && demandingThoughtProbesLocations[thoughtProbesIndex]==i){  
        interruption=true;
          if(!flagProbesIndex){
            thoughtProbesIndex++;
            flagProbesIndex=true;
          }
      }

      // FADING****
      if(fadingProbe1==false){
        if(player.location.y < platforms[i].ry && player.location.x < platforms[i].rx+platforms[i].rw && player.location.x > platforms[i].rx && demandingGamingFadingProbesLocations[0]==i){
          fading=true;
          fadingProbe1=true;
          tiempoInicioFading = millis();
          fadingProbeWaiting=true;
          fadingProbeNumber=2;
          //tiempoTomadoFading = false;
        }
      }

      if(fadingProbe2==false){
        if(player.location.y < platforms[i].ry && player.location.x < platforms[i].rx+platforms[i].rw && player.location.x > platforms[i].rx && demandingGamingFadingProbesLocations[1]==i){
          fading=true;
          fadingProbe2=true;
          tiempoInicioFading = millis();
          fadingProbeWaiting=true;
          fadingProbeNumber=3;
          //tiempoTomadoFading = false;
        }
      }

      if(fadingProbe3==false){
        if(player.location.y < platforms[i].ry && player.location.x < platforms[i].rx+platforms[i].rw && player.location.x > platforms[i].rx && demandingGamingFadingProbesLocations[2]==i){
          fading=true;
          fadingProbe3=true;
          tiempoInicioFading = millis();
          fadingProbeWaiting=true;
          fadingProbeNumber=4;
          //tiempoTomadoFading = false;
        }
      }
      if(fadingProbe4==false){
        if(player.location.y < platforms[i].ry && player.location.x < platforms[i].rx+platforms[i].rw && player.location.x > platforms[i].rx && demandingGamingFadingProbesLocations[3]==i){
          fading=true;
          fadingProbe4=true;
          tiempoInicioFading = millis();
          fadingProbeWaiting=true;
          fadingProbeNumber=5;
          //tiempoTomadoFading = false;
        }
      }
      
      if (player.side == 2 && (player.distance <= player.radius)) {
        //currentPlat=i;
        platforms[i].setColour();
        platforms[i].show(i, player.location.x);
        numCurrentPlat=i;
        /*   MUY RARO QUE ESTO ESTE COMENTADOOOOOOOOOOOOOOOOOOOOOOOOOOO    
        R1// creo que esta en el if de arriba    
        R2// creo que esta ya no se utiliza de esta manera, se utiliza directo con algo asi como thougtProbe=1, creo
        if(thoughtProbesLocations[thoughtProbesIndex]==i){
          interruption=true;
          if(!flagProbesIndex){
            thoughtProbesIndex++;
            flagProbesIndex=true;
          }
        }
        */
       longestTime = platforms[i].longestTime;
      } else {
        platforms[i].show(-1);
        platforms[i].entro=false;
        //playerNotObstructed=false;
      }

      if (platforms[i].visited == true) {
        points++;
      }

      //if(i>1){
      //if (platforms[i].timePlat > longestTime) {
        
        
      //}
      //}
    }
    if(fadingProbeWaiting==true && pressBar==true){
      fadingProbeResults[fadingProbeNumber]=millis()-tiempoInicioFading;
      fadingProbeWaiting=false;
    }

    player.applyVelocityGravity();

    for(let i=0;i<flatPatternDemanding.length;i++){
      if( flatPatternDemanding[i] <platforms.length){
        if(player.collisionPowerUp( platforms[flatPatternDemanding[i]].flatPattern.posX , platforms[flatPatternDemanding[i]].flatPattern.posY , platforms[flatPatternDemanding[i]].flatPattern.radius)){
          if( flatPatternDemanding[i] + amountFlatDemanding < amountPlatforms - amountCutEndPlats ){
            //console.log("There are enough platforms for the flat pattern FLAT DEMANDING");
            if (startedTimeFlat == false) {
              tiempoInicio = millis();
              startedTimeFlat = true;
              indexFlatPattern = i;
              player.location.y = height / 3;
              jumpingMode=true;
              player.velocity= createVector(0, 0);
              player.acceleration  = createVector(0, 0.31); 
            }
          }
          //amountFlatDemanding
          else{
            console.log("There are NO enough platforms for the flat pattern FLAT DEMANDING");
          }
        }
      }
    }

    for(let i=0;i<stairsPatternDemanding.length;i++){
      if(stairsPatternDemanding[i]<platforms.length){
        if(player.collisionPowerUp( platforms[stairsPatternDemanding[i]].stairsPattern.posX , platforms[stairsPatternDemanding[i]].stairsPattern.posY , platforms[stairsPatternDemanding[i]].stairsPattern.radius)){
          if( stairsPatternDemanding[i] + amountStairs < amountPlatforms - amountCutEndPlats ){
            if (startedTimeStairs == false) {
              tiempoInicio = millis();
              startedTimeStairs = true;
              indexStairsPattern = i;
              player.location.y = height / 3;
              jumpingMode=true;
              player.velocity= createVector(0, 0);
              player.acceleration  = createVector(0, 0.31); 
            }
          }else{
            console.log("There are no enough platforms for the stairs pattern STAIRS DEMANDING");
          }
        }
      }
    }

    //**************************************************************************************************//                      
    //                            4.  Demanding Gaming - Reaching the flag 
    //**************************************************************************************************//
   
    if(goalFlagNum<platforms.length){
      if( player.collisionFlag( platforms[goalFlagNum].goalFlag.posX, platforms[goalFlagNum].goalFlag.posY, platforms[goalFlagNum].goalFlag.colW, platforms[goalFlagNum].goalFlag.colH) ){
        console.log("reach the flag");
        screen="goalAchieved";
        background(0);
        
        //dorequestThoughtProbes();
        //dorequestPlatforms();
        totalTimeMillis=Math.round(millis()/1000);
        dorequestThoughtProbes().catch( catchErrorThoughtProbes ); 
        dorequestPlatforms().catch( catchError );

        let fs = fullscreen();
        fullscreen(!fs);
        //resizeCanvas(windowWidth, windowHeight);
      }
    }

    //**************************************************************************************************//                      
    //                           4.  Demanding Gaming - Stairs Pattern
    //**************************************************************************************************//
    if(startedTimeStairs == true){
      //console.log("ENTRA a stairs");
      //let end= map(millis()-tiempoInicio,0,undemandingWaitTime,0,360);
      let end= map(millis()-tiempoInicio-extraTime,0,demandingWaitTime,0,360);
      /*strokeWeight(20);
      stroke(255,150,0);
      noFill();*/
      textAlign(CENTER,CENTER);
      textSize(15);
      textStyle(BOLD);
      fill(255,150,0);
      //stroke();
      ellipse(posXpowerUps,/*7*height/100*/60,90,90);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*7*height/100*/60,90,90);
      fill(40);
      arc(posXpowerUps,/*7*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x + translateDistance -13*height/100 /*+ width / 2 - translateDistance*/,/*7*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x /*+ width / 2 - translateDistance*/,8*height/100,100,100,0,2*PI,PIE);
      fill(255,150,0);
      //text("STAIRS", player.location.x + translateDistance -13*height/100/*+ width / 2 - translateDistance*/, 4*height/100  /*125*/);
      stroke(255,150,0);
      strokeWeight(2);
      
      //stroke();
      fill("#454547");
      ellipse(posXpowerUps,/*7*height/100*/60,25,25);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*7*height/100*/60,25,25);
      noFill();
      ellipse(posXpowerUps,/*7*height/100*/60,90,90);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*7*height/100*/60,90,90);
      noStroke();
      
      //if (millis() < tiempoInicio + tiempoEspera + extraTime) {

      if (millis() < tiempoInicio + demandingWaitTime + extraTime) {
        let startedPoint1=0;
        for (let j = stairsPatternDemanding[indexStairsPattern], h = 1; j < amountStairsDemanding/3 + stairsPatternDemanding[indexStairsPattern]; j++, h++) {
          platStatus=1;
          platforms[j].easing();
          platforms[j].targetY =  15*height/100 + (h * 25);
          startedPoint1=15*height/100 + (h * 25);
        }
        //console.log("Cuenta: "+amountStairsDemanding/2 + stairsPatternDemanding[indexStairsPattern]);
        let startedPoint2=0;
        for (let k = stairsPatternDemanding[indexStairsPattern] + amountStairsDemanding/3, m = 1; k < 2*amountStairsDemanding/3 + stairsPatternDemanding[indexStairsPattern]; k++, m++) {  
          platStatus=1;
          platforms[k].easing();
          platforms[k].targetY =  startedPoint1 - (m * 25);
          startedPoint2=startedPoint1 - (m * 25);
        }
        for (let k = stairsPatternDemanding[indexStairsPattern] + 2*amountStairsDemanding/3, m = 1; k < amountStairsDemanding + stairsPatternDemanding[indexStairsPattern]; k++, m++) {   
          platStatus=1;
          platforms[k].easing();
          platforms[k].targetY =  startedPoint2 + (m * 25);
        }
      } 
      else {
        platStatus=0;
        startedTimeStairs = false;
        jumpingMode=false;
			  player.velocity = createVector(0, 15);
			  player.acceleration  = createVector(0, 40);
        //console.log("ENTRA");
        //platforms[i].blocked = false;
        gotExtratime=false;
        interruptionTime=0;
        interruptionTime2=0;
        extraTime=0;
      }	   
    }

    //**************************************************************************************************//                      
    //                            4.  Demanding Gaming - Flat Pattern
    //**************************************************************************************************//
    
    if(startedTimeFlat == true){
      
      //let end= map(millis()-tiempoInicio,0,tiempoEspera,0,360);
      let end= map(millis()-tiempoInicio-extraTime,0,demandingWaitTime,0,360);
      /*strokeWeight(20);
      stroke(255,150,0);
      noFill();*/
      textAlign(CENTER,CENTER);
      textSize(15);
      textStyle(BOLD);
      fill(255,150,0);
      //stroke();
      ellipse(posXpowerUps,/*6*height/100*/60,90,90);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*6*height/100*/60,90,90);
      fill(40);
      arc(posXpowerUps,/*6*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x + translateDistance -13*height/100 /*+ width / 2 - translateDistance*/,/*6*height/100*/60,90,90,-PI/2,radians(end)-PI/2,PIE);
      //arc(player.location.x /*+ width / 2 - translateDistance*/,8*height/100,100,100,0,2*PI,PIE);
      fill(255,150,0);
      //text("FLAT", player.location.x + translateDistance -13*height/100/*+ width / 2 - translateDistance*/, 4*height/100  /*125*/);
      stroke(255,150,0);
      strokeWeight(2);
      fill("#454547");
      //stroke();
      ellipse(posXpowerUps,/*6*height/100*/60,25,25);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*6*height/100*/60,25,25);
      noFill();
      ellipse(posXpowerUps,/*6*height/100*/60,90,90);
      //ellipse(player.location.x + translateDistance -13*height/100  /*+ width / 2 - translateDistance*/,/*6*height/100*/60,90,90);
      noStroke();

      if (millis() < tiempoInicio + demandingWaitTime + extraTime) {
        //if( flatPatternDemanding[indexFlatPattern] + amountFlatPlatforms < amountPlatforms - amountCutEndPlats ){
          for (let k = flatPatternDemanding[indexFlatPattern]; k < flatPatternDemanding[indexFlatPattern] + amountFlatDemanding; k++) {  //platforms.length   
            //platforms[k].blocked = platStatus;
            //platforms[k].blocked = true;
            //console.log("k: "+ k);
            //platforms[k].rh = (60 - (15 * 3)) * height / 100;

            platStatus=1;
            
            //platforms[k].rh =  45*height/100;

            platforms[k].easing();
            platforms[k].targetY =  45*height/100;
          }
        //}else{
        //  console.log("There are no enough platforms for the flat pattern");
        //}
      } else {
          platStatus=0;
            
          startedTimeFlat = false;
          jumpingMode=false;
			    player.velocity = createVector(0, 15);
			    player.acceleration  = createVector(0, 40);
          //console.log("ENTRA");
          //platforms[i].blocked = false;
          gotExtratime=false;
          interruptionTime=0;
          interruptionTime2=0;
          extraTime=0;
      }	   
    }

    /*
    fill(250,250,0);
    rect(player.location.x + translateDistance -13*height/100,height/4,50,50);
    rect(player.location.x - translateDistance +90*height/100,height/4,80,80);
    */ 

    //previousPlat=
    fill(255);
    textSize(55);
    textAlign(CENTER,TOP);
    //console.log("Points AQUI DEMANDING: "+points);
    textStyle(NORMAL);
    text( points+negativePoints , posXpowerUps + 40*width/100 , 40 );
    //text(points+negativePoints, player.location.x-translateDistance +90*width/100, 40 );
    textSize(15);
    textStyle(BOLD);
    text("Points", posXpowerUps + 40*width/100, 20 );
    //text("POINTS", player.location.x - translateDistance +90*width/100, 20 );
    if ( mouseX > 7*width / 8 && mouseY > 5 && mouseY < height/7 ) {
      textAlign(RIGHT);
      /*
      text("Number Current Platform: "+numCurrentPlat,player.location.x-translateDistance+width-20,110);
      text("Game time:   " + Math.floor( ( ( millis()/1000) % 3600  / 60 ) )  +":"+ Math.floor( ( (millis()/1000) %3600) % 60 ) , player.location.x - translateDistance+width-20, 50);
      //text("Game time: " + Math.round(millis() / 1000), player.location.x - translateDistance+width-20, 50);
      text("Longest time on a platform: " + longestTime, player.location.x - translateDistance+width-20, 80);
      fill(250,200,0);
      text("Case Number: " + caseNumber, player.location.x - translateDistance+width-20, 380);
      text("Missed Opportunities: "+missedOpportunities, player.location.x - translateDistance+width-20, 410);
      //text("Case Number: "+caseNumber, player.location.x - translateDistance+width-20, 440);
      */
    }
    points = 0;

    edgeLines();
    //fill(255);
    //text(mouseY,15,15);
    //console.log("Location "+player.location.y+" height: "+height);

   
  }
  
  //**************************************************************************************************//
  //                              
  //                                Interruption
  //
  //**************************************************************************************************//

  if(interruption){
    probeButtons();
  }

  //console.log(" thought probes length "+thoughtProbes.length);
  for(let i=0;i<thoughtProbes.length;i++){
    //console.log(thoughtProbes[i]);
  }

  
  //**************************************************************************************************//
  //                              
  //                                Goal Achieved
  //
  //**************************************************************************************************//

  if(screen=="goalAchieved"){
    //console.log("ENTRa goal achieved");
    background(0);
    textAlign(CENTER);
    textSize(20);
    fill(255);
    

    text("You have finished the video game.",translateDistance+height/2,150);
    text("Please wait!", translateDistance+height/2,250);
    text("The system is storing the data...", translateDistance+height/2,350);
    
    if(resultDB1 && resultDB2){
      screen="end";
    }
  }
  if(screen=="end"){
    background(0);
    if(document.querySelector(".questionary")){
      document.querySelector(".questionary").style.display='block';
    }
    text("Please click on the \"Next\" button on the top!", translateDistance+height/2,250);
  }
  /*
  let tempX=mouseX+(-width/2);
  let tempY=mouseY+(-height/2);
  console.log("MouseX: "+tempX +"  MouseY: "+tempY);
  push();
  fill(200,200,50);
  rect(width/2 -215,height/2,50,50);
  pop();
  */
 /*
 if(result){
  console.log("Si hay algo");
}else{
  console.log("No hay nada");
}*/
  if(!playerMovement && playerNotObstructed){
    
    if(!takenTime){
      startTimeMessage=millis()+1000;
      takenTime=true;
    }
    if(startTimeMessage<millis()){
      //console.log("takenTIme");
      textAlign(CENTER,CENTER);
      textStyle(NORMAL);
      textSize(23);
      fill(255,200,0);
      text("Release the right arrow, then press again to move",player.location.x - translateDistance+width/2,height/6);
    }
  }
  if(playerMovement){
    takenTime=false;
  }

  if(variables){
    if(screen=="undemandingTraining" || screen=="demandingTraining" || screen=="undemanding" || screen=="demanding" || screen=="baseline"){
      fill(0);
      textSize(15);
      textAlign(LEFT);
      text("Fading probes (milliseconds) ",posXpowerUps-width/4,150);
      if(fadingProbeWaiting==true){
        text("Current fading: "+(Math.round(millis()-tiempoInicioFading))+"    ",posXpowerUps-width/4,170);
      }
      for(let i=0;i<fadingProbeResults.length;i++){
        text("#"+i+":   "+Math.round(fadingProbeResults[i]),posXpowerUps-width/4,(170+(i+1)*22));
      }
    }
  }

  if(baselineWating &&  screen=="baseline"){
    text(" Well done! ",posXpowerUps,200);
  }
}
//**************************************************************************************************//
//**************************************************************************************************//                              
//                               End DRAW 
//**************************************************************************************************//
//**************************************************************************************************//
var countError=0;
function catchError(error){
  
  countError++;
  /*
  if(countError>3){
    console.log("The limit was reached");
    //counter=0;
    return;
  }*/
  
  console.log(error);
  console.log("There was an error in Platforms");
  //dorequestPlatforms().catch(catchError );
  //setInterval(dorequestPlatforms().catch(catchError ),3000 );
  //setTimeout(dorequestPlatforms().catch(catchError ),3000);
  setTimeout(function(){dorequestPlatforms().catch(catchError)},3000);
}

function catchErrorThoughtProbes(error){
  
  console.log(error);
  console.log("There was an error in Thought Probes");
  setTimeout(function(){dorequestThoughtProbes().catch(catchErrorThoughtProbes)},3000);
}

function edgeLines() {
  /*
  stroke(100);
  strokeWeight(80);
  line(-39,0,-39,height);
  */
  //line(widthGame+39,0,widthGame+39,height);
  noStroke();
}

function mousePressed(){

  if(interruption){     
    // Button 1
    if(mouseX > width/2 -215 && mouseX < width/2 -165){
      if(mouseY > height/2 -25 && mouseY < height/2 + 25){
        //thoughtProbes[indexthoughtProbe]=1;
        thoughtProbes[thoughtProbeNumber]=1;
        
        //indexthoughtProbe++;
        console.log("probe option: 1");
        
        // cambiado para stairs version
        //interruption=false;


        flagProbesIndex=false;

        thoughtProbeSelected1=true;
        timeThoughtProbeSelected=millis();
      }
    }

    // Button 2
    if(mouseX > width/2 -139 && mouseX < width/2 -89){
      if(mouseY > height/2 -25 && mouseY < height/2 + 25){
        //thoughtProbes[indexthoughtProbe]=2;
        thoughtProbes[thoughtProbeNumber]=2;
        //indexthoughtProbe++;
        
        console.log("probe option: 2");
        //interruption=false;
        flagProbesIndex=false;

        thoughtProbeSelected2=true;
        timeThoughtProbeSelected=millis();
      }
    }

    // Button 3
    if(mouseX > width/2 -63 && mouseX < width/2 -13){
      if(mouseY > height/2 -25 && mouseY < height/2 + 25){
        //thoughtProbes[indexthoughtProbe]=3;
        thoughtProbes[thoughtProbeNumber]=3;
        //indexthoughtProbe++;
        
        console.log("probe option: 3");
        //interruption=false;
        flagProbesIndex=false;

        thoughtProbeSelected3=true;
        timeThoughtProbeSelected=millis();
      }
    }

    // Button 4
    if(mouseX > width/2 +13 && mouseX < width/2 +63){
      if(mouseY > height/2 -25 && mouseY < height/2 + 25){
        //thoughtProbes[indexthoughtProbe]=4;
        thoughtProbes[thoughtProbeNumber]=4;
        //indexthoughtProbe++;
        
        console.log("probe option: 4");
        //interruption=false;
        flagProbesIndex=false;
      
        thoughtProbeSelected4=true;
        timeThoughtProbeSelected=millis();
      }
    }

    // Button 5
    if(mouseX > width/2 +89 && mouseX < width/2 +139){
      if(mouseY > height/2 -25 && mouseY < height/2 + 25){
        //thoughtProbes[indexthoughtProbe]=5;
        thoughtProbes[thoughtProbeNumber]=5;
        //indexthoughtProbe++;
        
        console.log("probe option: 5");
        //interruption=false;
        flagProbesIndex=false;

        thoughtProbeSelected5=true;
        timeThoughtProbeSelected=millis();
      }
    }

    // Button 6
    if(mouseX > width/2 +165 && mouseX < width/2 +215){
      if(mouseY > height/2 -25 && mouseY < height/2 + 25){
        //thoughtProbes[indexthoughtProbe]=6;
        thoughtProbes[thoughtProbeNumber]=6;
        
        //indexthoughtProbe++;
        console.log("probe option: 6");
        //interruption=false;
        flagProbesIndex=false;

        thoughtProbeSelected6=true;
        timeThoughtProbeSelected=millis();
      }
    }
  }
}

function probeButtons(){

  //thoughtProbeSelected=false;
  //timeThoughtProbeSelected=0;
  //waitTimeThoughtProbeSelected
  if( thoughtProbeSelected1==true ){
    if( millis() > timeThoughtProbeSelected + waitTimeThoughtProbeSelected){
      interruption=false;
      //console.log("Entra thoughtProbeSelected1");
      thoughtProbeSelected1=false;
      timeThoughtProbeSelected=0;
    }
  }

  if( thoughtProbeSelected2==true ){
    //console.log("entra Thought");
    if( millis() > timeThoughtProbeSelected + waitTimeThoughtProbeSelected){
      interruption=false;
      thoughtProbeSelected2=false;
      timeThoughtProbeSelected=0;
    }
  }

  if( thoughtProbeSelected3==true ){
    if( millis() > timeThoughtProbeSelected + waitTimeThoughtProbeSelected){
      interruption=false;
      thoughtProbeSelected3=false;
      timeThoughtProbeSelected=0;
    }
  }

  if( thoughtProbeSelected4==true ){
    if( millis() > timeThoughtProbeSelected + waitTimeThoughtProbeSelected){
      interruption=false;
      thoughtProbeSelected4=false;
      timeThoughtProbeSelected=0;
    }
  }

  if( thoughtProbeSelected5==true ){
    if( millis() > timeThoughtProbeSelected + waitTimeThoughtProbeSelected){
      interruption=false;
      thoughtProbeSelected5=false;
      timeThoughtProbeSelected=0;
    }
  }

  if( thoughtProbeSelected6==true ){
    if( millis() > timeThoughtProbeSelected + waitTimeThoughtProbeSelected){
      interruption=false;
      thoughtProbeSelected6=false;
      timeThoughtProbeSelected=0;
    }
  }
  

  fill(150,150,150,230);
  rect(player.location.x - translateDistance , 0, 3000 , height );
  rectMode(CENTER);
  //fill(240,50);
  //rect(player.location.x - translateDistance + width/2+10, height/2+10, 1000 , 550 );
  
  fill(255);
  rect(player.location.x - translateDistance + width/2, height/2, 830 , 500 );
  textAlign(CENTER);
  fill(0);
  textStyle(BOLD);
  textSize(38);
  //text("Just now, were your thoughts on or off task? ",player.location.x - translateDistance + width/2,200);
  text("Just now, where was your attention? ",player.location.x - translateDistance + width/2,37*height/100);
  textSize(20);
  //textStyle(NORMAL);
  //text("<Strong>Off task</Strong> is thinking about anything unrelated to the game", player.location.x - translateDistance + width/2,height/2-100);
  textStyle(BOLD);
  text("Off-task                                                                   ", (player.location.x - translateDistance + width/2) -50,61*height/100);
  textStyle(NORMAL);
  text("               is thinking about anything unrelated to play the game", player.location.x - translateDistance + width/2,61*height/100);
  textStyle(BOLD);
  text("On-task                                        ", (player.location.x - translateDistance + width/2) -35,65*height/100);
  textStyle(NORMAL);
  text("                 is thinking about to play the game", player.location.x - translateDistance + width/2,65*height/100);
  //text("Please respond honestly", player.location.x - translateDistance + width/2,265);
  rectMode(CORNER);

  textSize(27);
  textStyle(BOLD);
  textAlign(LEFT, CENTER);
  //text("Completely",(player.location.x - translateDistance) + width/2 +241 , height / 2+10);
  text("Off-task",(player.location.x - translateDistance) + width/2 +241 , height / 2);
  textAlign(RIGHT, CENTER);
  text("On-task",(player.location.x - translateDistance) + width/2 -241 , height / 2);

  textAlign(CENTER, CENTER);
  textSize(22);
  

  if(!thoughtProbeSelected1){
    fill(0);
  }else{
    fill(highLightColor);
  }
  rect( (player.location.x - translateDistance) + width/2 -215 , height / 2 -25 ,50,50);
  fill(255);
  text("1",(player.location.x - translateDistance) + width/2 -215+25 , height / 2);

  if(!thoughtProbeSelected2){
    fill(0);
  }else{
    fill(highLightColor);
  }
  rect( (player.location.x - translateDistance) + width/2 -139 , height / 2 -25 ,50,50);
  fill(255);
  text("2",(player.location.x - translateDistance) + width/2 -139+25 , height / 2);

  if(!thoughtProbeSelected3){
    fill(0);
  }else{
    fill(highLightColor);
  }
  rect( (player.location.x - translateDistance) + width/2 -63 , height / 2 -25 ,50,50);
  fill(255);
  text("3",(player.location.x - translateDistance) + width/2 -63+25 , height / 2);

  if(!thoughtProbeSelected4){
    fill(0);
  }else{
    fill(highLightColor);
  }
  rect( (player.location.x - translateDistance) + width/2 +13 , height / 2 -25 ,50,50);
  fill(255);
  text("4",(player.location.x - translateDistance) + width/2 +13+25 , height / 2);

  if(!thoughtProbeSelected5){
    fill(0);
  }else{
    fill(highLightColor);
  }
  rect( (player.location.x - translateDistance) + width/2 +89 , height / 2 -25 ,50,50);
  fill(255);
  text("5",(player.location.x - translateDistance) + width/2 +89+25 , height / 2);

  if(!thoughtProbeSelected6){
    fill(0);
  }else{
    fill(highLightColor);
  }
  rect( (player.location.x - translateDistance) + width/2 +165 , height / 2 -25 ,50,50);
  fill(255);
  text("6",(player.location.x - translateDistance) + width/2 +165+25 , height / 2);
  rectMode(CORNER);
}

async function dorequestThoughtProbes (){  
  //console.trace();
  //console.log("doRequesttt");
  /*
  let user = {
    CaseNumber: caseNumber,
    Probe1: thoughtProbes[0],
    Probe2: thoughtProbes[1],
    Probe3: thoughtProbes[2]
  };
  */
  console.log(endDate);

  let user = { 
    CaseNumber: caseNumber,
    Probe1: thoughtProbes[0],
    Probe2: thoughtProbes[1],
    Probe3: thoughtProbes[2],
    Probe4: thoughtProbes[3],
    Probe5: thoughtProbes[4],
    totalTime: totalTimeMillis,
    Cond: condition,
    EndDate: endDate
  };

  console.log("user :"+JSON.stringify(user));
  


  //let response = await fetch('archivo.php', {
  //let response = await fetch ("https://hci.w-hs.de/data/futurework/Undemanding/archivo.php", {  
  //let response = await fetch('https://hci.w-hs.de/data/futurework/MW-Experiment-3/php/thoughtProbes-db.php', {
  let response = await fetch('https://hci.w-hs.de/data/futurework/UndemandingFading/MW-Experiment-5(FadingPlayer)/php/thoughtProbes-db.php', {
  //let response = await fetch('https://cors-anywhere.herokuapp.com/https://hci.w-hs.de/data/futurework/MW-Experiment-3/php/thoughtProbes-db.php', {  
    method: 'POST',
    //mode: 'no-cors', 
    headers: {
      'Content-Type': 'application/json'
      //'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
  //let result = await response.json();
  resultDB1 = await response.json();
  
  console.log(resultDB1.message+" in ThoughtProbes table");
  //alert(result.message);
}


async function dorequestPlatforms (){
  //console.trace();
  var arrayPlatforms={levels:[]};
  var levels=[];
  for(let i=0;i<platforms.length ;i++){
    let platform = {
      CaseNumber: caseNumber,
      PlatformID: i,
      TotalVisitsPlatformGame: platforms[i].amountTimesOnPlatform,
      LastVisitTimeSpentOnPlat: platforms[i].amountTimesOnPlatform,
      TotalTimeSpentOnPlat: platforms[i].totalTimeOnPlat ,
      LastStrokesLeftArrow: platforms[i].currentStrokesLeftArrow ,
      LastStrokesRightArrow: platforms[i].currentStrokesRightArrow ,
      TotalStrokesLeftArrowOnPlat: platforms[i].totalStrokesLeftArrow ,
      TotalStrokesRightArrowOnPlat: platforms[i].totalStrokesRightArrow,
      LastVisitMissedOpporOnPlat: platforms[i].currentMissedOpport,
      TotalMissedOpportOnPlat: platforms[i].totalMissedOpport,
      ReactionTime: platforms[i].reactionTime,
      TotalMissedOpportGame: missedOpportunities
    };
    arrayPlatforms.levels.push(platform);
    levels.push(platform);
  }
  var abc= JSON.stringify(arrayPlatforms);
  var zeta= JSON.stringify(levels);

  //let response = await fetch('https://cors-anywhere.herokuapp.com/https://hci.w-hs.de/data/futurework/MW-Experiment-3/php/platforms-db.php', { 
  //let response = await fetch('https://hci.w-hs.de/data/futurework/MW-Experiment-3/php/platforms-db.php', { 
  //let response = await fetch('https://hci.w-hs.de/data/futurework/UndemandingFading/MW-Experiment-5(FadingPlayer)/php/thoughtProbes-db.php', {
  let response = await fetch('https://cors-proxy.htmldriven.com/?url=https://hci.w-hs.de/data/futurework/UndemandingFading/MW-Experiment-5(FadingPlayer)/php/thoughtProbes-db.php', {   
  method: 'POST',
  //mode: 'no-cors', 
  headers: {
    'Content-Type': 'application/json'
    //'Content-Type': 'application/json;charset=utf-8'
  },
  //body: JSON.stringify(platform)
  body: JSON.stringify(arrayPlatforms)
  //body: JSON.stringify(levels)

  });

    //let result2 = await response.json();
    //console.log(resultDB2.message+" in Platforms table. Last Platform #: "+i);
    
    /*
    if(i==platforms.length-1){
      resultDB2 = await response.json();
      console.log(resultDB2.message+" in Platforms table. Last Platform #: "+i);
    }
    */
  //}
  resultDB2 = await response.json();
  // resultDB2 = await response.text();
  console.log(resultDB2.message+" in Platforms table ");
  // console.log(resultDB2);
}

function keyPressed() {
  //console.log("keypressed");

  if(keyCode==32){
    pressBar=true;
    fading=false;
    player.opacity=255;
    player.status=0;
    baselineDone=true;
    if(fadingProbeWaiting==true){
      tiempoInicioBaselineExit=millis();
      baselineWating=true;
    }
  }

  if(keyCode==86){
    if(variables){
      variables=false;
    }else{
      variables=true;
    }
  }


  if(keyCode === 66){  // B
    if(playerBorder){
      playerBorder=false;
    }else{
      playerBorder=true;
    }
  }

  if(keyCode === 70){ // F
    fading=true;
    fadingCount++;
    console.log("Fading starts ... "+fadingCount);
  }
  
  if (keyCode === 73) {
    interruption=true;
  } 
  
  if (keyCode === RIGHT_ARROW){
    arrowRight=true;
    countRightArrow++;
  }
  if (keyCode === LEFT_ARROW){
    arrowLeft=true;
    playerMovement=true;
    countLeftArrow++;
  }
  
  if( screen == "undemandingTraining" || screen == "demandingTraining" ){
    if(keyCode === 69){  // e
      //player.location.x=trainingPlatforms[amountTrainingPlatforms-2].rx;
      player.location.x=trainingPlatforms[amountTrainingPlatforms-2].rx;
      player.location.y=height/8;
    }
  }

  if( screen == "undemanding" || screen == "demanding" ){
    if(keyCode === 69){  // e
      player.location.x=platforms[amountPlatforms-2].rx;
      player.location.y=height/8;
    }
  }
  
  if(condition=="undemanding"){
    if(keyCode === 49 ){
      if(platforms.length>3){
        player.location.x=platforms[3].rx;
        player.location.y=height/8;
      }
    }
    if(keyCode === 50 ){
      if(platforms.length>45){
        player.location.x=platforms[45].rx;
        player.location.y=height/8;
      }
    }
    if(keyCode === 51 ){
      if(platforms.length>56){
        player.location.x=platforms[56].rx;
        player.location.y=height/8;
      }
    }
    if(keyCode === 52 ){
      if(platforms.length>107){
        player.location.x=platforms[107].rx;
        player.location.y=height/8;
      }
    }
    if(keyCode === 53 ){
      if(platforms.length>124){
        player.location.x=platforms[124].rx;
        player.location.y=height/8;
      }
    }
  }
  
  //[3,56,207,290,325]
  /*
  if(condition=="demanding"){
    if(keyCode === 49 ){   // 1
      if(platforms.length>42){
        player.location.x=platforms[42].rx;
        player.location.y=height/8;
      }
    }
    if(keyCode === 50 ){  // 2
      if(platforms.length>56){
        player.location.x=platforms[56].rx;
        player.location.y=height/8;
      }
    }
    if(keyCode === 51 ){  // 3
      if(platforms.length>207){
        player.location.x=platforms[207].rx;
        player.location.y=height/8;
      }
    }
    */
    if(keyCode === 52 ){  // 4
      console.log("Tecla4");
      if(platforms.length>201){
        player.location.x=platforms[201].rx;
        player.location.y=height/8;
      }
    }
    /*
    if(keyCode === 53 ){  // 5
      if(platforms.length>333){
        player.location.x=platforms[333].rx;
        player.location.y=height/8;
      }
    }
  }
  
  
  if(keyCode === 68){   // d 
    //console.log("ENTra E");
    condition="demanding";
  }

  if(keyCode === 85){   // u 
    //console.log("ENTra U");
    condition="undemanding";
  }
  */
}

function keyReleased() {
  /*
  if (keyCode === 73) {  // i
    interruption=false;

    gotExtratime=false;
    interruptionTime=0;
    interruptionTime2=0;
    extraTime=0;
  }
  */
  if(keyCode==32){
    pressBar=false;
  }

  if (keyCode ===RIGHT_ARROW ) {
    playerMovement=true;
    //console.log("KeyReleased right");
  }

  if (keyCode === RIGHT_ARROW){
    arrowRight=false;
  }

  if (keyCode === LEFT_ARROW){
    arrowLeft=false;
  }
  return false; // prevent any default behavior
}

function playerMovementInput() {
  /*
  if(!interruption){
    if (keyIsDown(LEFT_ARROW)) {
      player.moveLeft();
    }
    if(playerMovement==true){
      if (keyIsDown(RIGHT_ARROW)) {
        player.moveRight();
      }
    }
  }
  */

  //arrowRight=true
  let isCurrentHorizontalPlatUndemanding=false;
  if(condition=="undemanding"){
    for(let i=0;i<horizontalPlatformsLocation.length;i++){
      if(horizontalPlatformsLocation[i]==numCurrentPlat){
        isCurrentHorizontalPlatUndemanding=true;  
      }
    }
  }

  let isCurrentHorizontalPlatDemanding=false;
  if(condition=="demanding"){
    for(let i=0;i<horizontalPlatformsLocationDemanding.length;i++){
      if(horizontalPlatformsLocationDemanding[i]==numCurrentPlat){
        isCurrentHorizontalPlatDemanding=true;  
      }
    }
  }

  if(!interruption){
    if (arrowLeft==true) {
      player.moveLeft();
    }
    if(playerMovement==true){
      if (arrowRight==true) {
        player.moveRight();
      }
    }
    
    if(!arrowLeft && !arrowRight){
      if(isCurrentHorizontalPlatUndemanding==true){
        player.location.x=player.location.x+platforms[numCurrentPlat].speedX;
      }
    }
    if(!arrowLeft && !arrowRight){
      if(isCurrentHorizontalPlatDemanding==true){
        player.location.x=player.location.x+platforms[numCurrentPlat].speedXDemanding;
      }
    }

  }

	/*
  if (keyIsDown(UP_ARROW)) {
    player.moveUp();
  }
	*/
}
  //**************************************************************************************************//
  //                              
  //                                Buttons
  //
  //**************************************************************************************************//

function buttonInstructions(){
  noStroke();
  fill("#BB4430");  // International Orange Golden Gate Color
  rect(width / 2 - 100, height / 2 - 50, 200, 100,10);
  //rect(width / 2 - 100, height / 2 + 50, 200, 100);

  fill(255); // '#5E5D53'
  textStyle(BOLD);
  textSize(28);
  textAlign(CENTER, CENTER);
  text('Baseline', width / 2, height / 2 );
  
  if(mouseIsPressed){
    if(mouseX>width / 2 - 100 && mouseX< width / 2 + 100){
      if(mouseY>height / 2 - 50 && mouseY<height / 2 + 50){
        screen="baseline";
        /*
        if(condition=="undemanding"){
          screen="undemandingInstructions";
        }
        if(condition=="demanding"){
          screen="demandingInstructions";
        }
        */
      }
      /*
      if(mouseY>height / 2 + 50 && mouseY<height / 2 + 150){  
        //screen="demanding"; 
        //pressStart=true; 
      }
      */
    }
  }
}

function buttonStart(){
  noStroke();
  fill("#BB4430");   // International Orange Golden Gate Color
  rect(width / 2 - 100, height / 2 + 150, 200, 100,10);
  //rect(width / 2 - 100, height / 2 + 50, 200, 100);

  fill(255); // '#5E5D53'
  textStyle(BOLD);
  textSize(28);
  textAlign(CENTER,CENTER);
  text("Start", width / 2, height / 2 + 200);
  
  if(mouseIsPressed){
    if(mouseX>width / 2 - 100 && mouseX< width / 2 + 100){
      if(mouseY>height / 2 + 150 && mouseY<height / 2 + 250){
        
        //screen=condition;
        if(condition=="demanding"){
          screen="demandingTraining";
        }
        if(condition=="undemanding"){
          screen="undemandingTraining";
        }
        let fs = fullscreen();
        fullscreen(!fs);
      }
    }
  }
}

function transitionButton(){
  noStroke();
  fill("#BB4430");      // International Orange Golden Gate Color
  rect(width / 2 - 100, height / 2 + 150, 200, 100,10);
  //rect(width / 2 - 100, height / 2 + 50, 200, 100);

  fill(255); // '#5E5D53'
  textStyle(BOLD);
  textSize(28);
  textAlign(CENTER,CENTER);
  text("Start", width / 2, height / 2 + 200);
  
  if(mouseIsPressed){
    if(mouseX>width / 2 - 100 && mouseX< width / 2 + 100){
      if(mouseY>height / 2 + 150 && mouseY<height / 2 + 250){
        
        //screen=condition;
        if(condition=="demanding"){
          screen="demanding";
        }
        if(condition=="undemanding"){
          screen="undemanding";
        }
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if(condition=="demanding"){
    for(let j=0;j<horizontalPlatformsLocationDemanding.length;j++){
      if(horizontalPlatformsLocationDemanding[j]+1<platforms.length){
        platforms[horizontalPlatformsLocationDemanding[j]].ry = height/2;
        platforms[horizontalPlatformsLocationDemanding[j]].rh = height/2;
        platforms[horizontalPlatformsLocationDemanding[j]-1].rh=height/2;
        platforms[horizontalPlatformsLocationDemanding[j]-1].ry=height/2;
        platforms[horizontalPlatformsLocationDemanding[j]+1].rh=height/2;
        platforms[horizontalPlatformsLocationDemanding[j]+1].ry=height/2;
      }
    }

    for(let i=0;i<flatPatternDemanding.length; i++){
      platforms[flatPatternDemanding[i]].rh=45*height/100;
    }
    
    for(let i=0;i< stairsPatternDemanding.length; i++){
      platforms[stairsPatternDemanding[i]].rh=15*height/100 + (25);
    }
  }

  if(condition=="undemanding"){
    for(let j=0;j<horizontalPlatformsLocation.length;j++){
      if(horizontalPlatformsLocation[j]+1<platforms.length){
        platforms[horizontalPlatformsLocation[j]].ry = 50*height/100;
        platforms[horizontalPlatformsLocation[j]].rh = 50*height/100;
        platforms[horizontalPlatformsLocation[j]-1].rh=50*height/100;
        platforms[horizontalPlatformsLocation[j]-1].ry=50*height/100;
        platforms[horizontalPlatformsLocation[j]+1].rh=50*height/100;
        platforms[horizontalPlatformsLocation[j]+1].ry=50*height/100;
      }
    }

    for(let i=0;i<flatPattern1.length; i++){
      if( flatPattern1[i] <amountPlatforms){
        platforms[flatPattern1[i]].rh=50*height/100; //////////////////////////
      }
    }
  
    for(let i=0;i<stairsPattern1.length; i++){
      if( stairsPattern1[i] <amountPlatforms){
        platforms[stairsPattern1[i]].rh= -(13) + (60*height/100);   /////////////////////////////
      }
    }
  }
}