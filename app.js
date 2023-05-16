//https://teachablemachine.withgoogle.com/models/g7cHgMngT/

previsao1 = '';
previsao2 = '';

Webcam.set({
    width:350,
    height:300,
    imageFormat: 'png',
    pngQuality: 90
}); 

camera = document.getElementById('camera');

Webcam.attach('#camera');
function tirar_foto(){
    Webcam.snap(function(data_uri){
        document.getElementById('resultado').innerHTML = '<img id="captured_image" src="' + data_uri+ '"/>'
    })
}

console.log('ml5 versão: ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/g7cHgMngT/model.json', modelo_carregado);

function modelo_carregado(){
    console.log('modelo carregado')
}

function classificar(){
    img = document.getElementById('captured_image');
    classifier.classify(img, resultado);
}

function  resultado(error, results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById('previsao1').innerHTML = 'Previsão 1 ' + results[0].label;
        document.getElementById('previsao2').innerHTML = 'Previsão 2 ' + results[1].label;

        if(results[0].label == 'Mão aberta'){
            document.getElementById('emoji1').innerHTML = '&#129306';
        }
        else if(results[0].label == 'Soco'){
            document.getElementById('emoji1').innerHTML = '&#128074';
        }
        else if(results[0].label == 'Tranquilo'){
            document.getElementById('emoji1').innerHTML = '&#129305';
        }
        else if(results[0].label == 'Vitoria'){
            document.getElementById('emoji1').innerHTML = '&#9996';
        }
        else if(results[0].label == 'Joinha'){
            document.getElementById('emoji1').innerHTML = '&#128077';
        }


        if(results[1].label == 'Mão aberta'){
            document.getElementById('emoji2').innerHTML = '&#129306';
        }
        else if(results[1].label == 'Soco'){
            document.getElementById('emoji2').innerHTML = '&#128074';
        }
        else if(results[1].label == 'Tranquilo'){
            document.getElementById('emoji2').innerHTML = '&#129305';
        }
        else if(results[1].label == 'Vitoria'){
            document.getElementById('emoji2').innerHTML = '&#9996';
        }
        else if(results[1].label == 'Joinha'){
            document.getElementById('emoji2').innerHTML = '&#128077';
        }
    }
}