Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});

cam=document.getElementById("cam");
Webcam.attach('#cam');

function capt() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="img11">';
    })
}

console.log('ml5 version', ml5.version);
tm=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BVORl9xG4/model.json', modelloaded);

function modelloaded(){
    console.log('modelloaded');
}

function identify(){
    img =document.getElementById('img11');
    tm.classify(img, result);
}

function result(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("oname").innerHTML="Object: "+results[0].label;
        document.getElementById("info").innerHTML="Accuracy: "+results[0].confidence.toFixed(3);
    }
}