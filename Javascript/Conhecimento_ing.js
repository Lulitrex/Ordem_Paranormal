function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Foreign</h1> <p>The Foreign is a mysterious Knowledge creature with complement of Energy and Fear, having an unknown nature and being extremely intelligent. Its appearances are always reported as abductions, and its presence causes interference in digital devices and discomfort. The Stranger is a slender humanoid creature, 2 and a half meters tall, with its face covered by what appears to be a gray mask shaped very similarly to a human head, with two large green eyes and a division that separates the mask in two. It wears a greenish cape, and underneath, large shoulder pads. On its torso, it wears a greenish metallic suit with various black details, and from the waist down, a huge cloak that covers its entire body and legs.</p>";
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Estrangeiro_Leve.webp' alt='Criatura de ordem paranormal, Estrangeiro'>"
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Lurker</h1> <p> The Lurker is a paranormal creature of Knowledge with a touch of Fear that manifests through dark corners and cracks, observing those marked by it while present in these places. It is a hunched creature with wrinkled and saggy grayish skin. Various bizarre eyes of different sizes with a yellow color and pupils that multiply over time cover its body. At the top of its head, there is the highest concentration of smaller eyes, also possessing a large eye inside its mouth full of crooked and long teeth, producing a choked sound as it breathes. It has short legs with a deformed foot, while its arms are larger with disproportionately long fingers.</p>"; 
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Espreitador_Leve.webp' alt='Criatura de ordem paranormal, Espreitador'>"
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1> Guilt Parasite </h1> <p>The Guilt Parasite is a shapeless creature of Knowledge with a touch of Death, Blood, and Fear, the result of experiments by the Third Innkeeper on a peaceful entity with the ability to feed on the dreams of others. The Guilt Parasite can create nightmares and illusions of any person based on unresolved information and feelings in the minds of the hosts to create desperate situations. In the real world, a Guilt Parasite has a black body resembling several small tentacles with a main one as its neck and face. The creature generally bears a strong resemblance to Black Slime.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Parasita_Leve.webp' alt='Criatura de ordem paranormal, Parasita de Culpa'>"
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Shadow Creeper</h1> <p>The Shadow Creeper is a malevolent creature of Knowledge with a touch of Blood that is manifested by the fear of being pursued. Those who have encountered the Shadow Creeper report seeing a strange figure wearing a trench coat hiding in the darkness, pursuing them without ever showing its face, and finally, when revealed, appearing as a terrible and frightening creature. Despite some reports, not many survive an encounter with the Shadow Creeper.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Rastejador_Leve.webp' alt='Criatura de ordem paranormal, Rastejador Sombrio'>"
    }
        else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Existed are Knowledge</h1> <p>The Existed are Knowledge creatures different from the others, where someone becomes an Existed from the moment they fully understand the Other Side, after remembering the Impossible Truth, unable to forget it again. Existed are commonly depicted with pale and yellowish skin, with hundreds of words and phrases of fear in different languages tattooed all over their bodies. When feeling threatened or disturbed, the texts on the bodies of these creatures light up, as well as their insides, with their once empty eyes now glowing in a large yellow hue, similar to their mouths.</p>"; 
    }
}