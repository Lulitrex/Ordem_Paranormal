function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Sukkalgir</h1> <p> The Sukkalgir is a paranormal creature of Energy with a complement of Knowledge, arising from torture through flames in ancient Sumeria. Its origin involves a maddening process that marked the victim's skin with the horrific deeds of its captor, using fire as a torture element. Initially, Sukkalgir has the same characteristics as an Existing one. During its transformation, reality distorts, and the ambient light is drawn into its body. When transformed, its body takes on a form of Energy and Chaos, resembling flames in a greenish hue. Sukkalgir is enveloped in a luminous aspect, with texts spread across its body that light up, moving and floating.</p>";
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-energia-p/Criatura_Energia_Sukkalgir_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Traveler</h1> <p> The Traveler is a paranormal Energy creature with a touch of Knowledge and Fear, originating from Daniel Hartmann's notes. The Traveler initially remains completely invisible, preventing its prey from having any reaction to its attacks, but when revealed, it presents a slim physical build, elongated limbs, and a whitish skin tone. Its stature is quite tall, over two meters, with a hunched posture. The creature's head has various merged faces displaying different features, with twisted mouths and teeth, the main one forming a large macabre smile.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Infecticide</h1> <p> The Infecticide is a type of Energy Paranormal disease with a touch of Blood that manifests in the form of a digital virus that infects electronic devices to then be able to contaminate individuals in Reality. Initially, those infected by the disease change the color of their eyes to green-pinkish tones. Later, their bodies deform while their eyes take on a stained shape that pulsates colors along with their teeth growing and becoming sharp. Finally, the Infected will merge with the large horde of other Infected, transforming into a huge amalgamation of various living beings and entwined technological devices.</p>"; 
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-energia-p/Criatura_Energia_Infecticidio_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Telopsia</h1> <p>The Telopsia is an Energy creature with a touch of Death and Fear that arose from the legend of a cursed VHS tape of the same name containing a mysterious and terrible recording. The reports of those who possessed the tape mixed with false accounts from people seeking attention. However, all those who were proven to have the tape died shortly afterward. Telopsia is a humanoid creature wearing a tie and a long black overcoat over its skeletal and cadaverous body, with an old television set on its head broadcasting disturbing and maddening images. No one knows what is on the tape, only knowing that its content is horrifying.</p>"; 
    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Disturbed Energies</h1> <p>  Disturbed Energies are paranormal Energy entities that manifest from a suddenly and aggressively deranged soul, where the confusion of their minds can be so violent that they lose perception of Reality before realizing they are dead. They are shapeless creatures with long claws and multiple desperate faces coming out of their bodies made of an inconsistent and ghostly material, constantly mutating and oscillating between physical states described as mutating flames that seem liquid and evaporate. Like many other Energy monsters, the Disturbed can have varied coloration, ranging from shades of blue, purple, and pink.</p>"; 
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-energia-p/Criatura_Energia_Perturbado_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
}