pd1 = "" ; 
pd2 = "" ; 

Webcam.set({

width: 250 , height : 250 , image_format  : "png" , png_quality : 90

})

camera = document.getElementById("camera") ; 
Webcam.attach(camera) ; 

function ce() {

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='pic1'src="+data_uri+">" ; 

})

}

console.log('hi this is ml5' , ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H6G8xE0Fq/model.json" , modelLoaded)

function modelLoaded(){
    console.log("model has loaded commander") ; 
}

function Speak() {

var synth = window.speechSynthesis ; 
var sd = "prediction 1 is "+pd1+" and prediction 2 is  "+pd2 ; 
var ut = new SpeechSynthesisUtterance(sd)
synth.speak(ut)
}

function pe() {
pic = document.getElementById("pic1") ; 
classifier.classify( pic,gotResult) ; 


function gotResult(error , results){

   if(error) {

console.log("error")

   }
   else{

console.log(results)
document.getElementById("emotionname1").innerHTML = results[0].label ; 
document.getElementById("emotionname2").innerHTML = results[1].label ; 
pd1=results[0].label ; 
pd2=results[1].label ; 
Speak() ; 

if(results[0].label=="Happy"){

    document.getElementById("emoji1").innerHTML = "😀" ;
}

if(results[0].label=="Sad"){

    document.getElementById("emoji1").innerHTML = "😔" ;
}

if(results[0].label=="Angry"){

    document.getElementById("emoji1").innerHTML = "😠" ;

}

if(results[1].label=="Happy"){

    document.getElementById("emoji2").innerHTML = "😀" ;
}

if(results[1].label=="Sad"){

    document.getElementById("emoji2").innerHTML = "😔" ;
}

if(results[1].label=="Angry"){

    document.getElementById("emoji2").innerHTML = "😠" ;

}
   }
   
 




}


}



