function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Decollate</h1> <p> Thiago was a 33 year old journalist who discovered Ordo Realitas after the death of his father, Arnaldo Fritz, a renowned actor who secretly belonged to the organization. His first mission was the Nostradamus School Case, where he initiated a friendship with Elizabeth Webber. He then took leadership of what would be known as Team E during the Carpazinha Case. After the discovery of Santo Berço and realizing that he was assimilated into the Symbol, he decided to sacrifice himself at the hands of the God of Death to destroy the Dimension Parasite.</p>";
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Degolificada_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Devoured Decollate</h1> <p>The Blood variation, called Devoured Decollate, has an extremely large and muscular bent body made of flesh, with arms that have two extra pairs emerging from the original and smaller ones. Its hair is much smaller compared to the body and limbs, and from its head, the mouth opens in a disturbing way, running all the way down its torso, with an absurd number of teeth along this length, and a considerable amount of blood throughout the body.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Devorada_leve.webp' alt='Criatura de ordem paranormal, Degolificada Decrepita'>"

    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Gnostic Decollate</h1> <p> The Knowledge variation, called Gnostic Decollate, has a body similar to its original version, but its hair curls around the entire body and forms a kind of halo on top of its head, resembling ornaments seen in paintings of saints. The Gnostic Decollate does not have a sewn or covered mouth, with it attempting to open from the skin seams. It has various sigils shining on its skin, along with a golden aura that runs through it.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Gnostica_leve.webp' alt='Criatura de ordem paranormal, Degolificada Decrepita'>"

    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Turbulent Decollate</h1> <p> The Energy variation, called Turbulent Decollate, replaces its entire physical form and clothing with an Energy material that shines in purple, with a countenance that exudes despair, like other Energy creatures. The hair, instead of being an extension of its body, merges with the Energy material, and its roots act like flames that leap up and coil around the arms.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Conturbada_leve.webp' alt='Criatura de ordem paranormal, Degolificada Conturbada'>"

    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Decrepit Decollate</h1> <p>The Death variation, called Decrepit Decollate, is very similar to the original version, but its body becomes a naked gray skeletal form. The face turns into a skull with a spiral on top, and the characteristic black Death slime runs from it.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Decrepita.webp' alt='Criatura de ordem paranormal, Degolificada Decrepita'>"
    }
}