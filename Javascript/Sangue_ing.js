function ampliar(x) { /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento = document.getElementById("ampliadao");
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome) { /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if (nome == "medo") {
        texto.innerHTML = "<h1>Enpap-X</h1> <p class='p_grande'>The Enpap-X is a paranormal creature of Blood with a touch of Knowledge, arising from pain and torture. It can manifest when a person is forced to live chained and imprisoned, exposed to various brutal and paranormal events incessantly, unable to end their life during the torment. Initially, this reddish creature possesses the same characteristics as a Muscular Being, being extremely strong and resistant. When transformed, the Enpap-X glows in a strong red hue. Its texts illuminate, much like its right eye. Furthermore, this monstrosity acquires a colossal and extremely resilient physical presence, its four large arms becoming even more muscular, and its hand takes on a more grotesque and aggressive appearance, featuring long claws at the tips of its fingers.</p>";
    }
    else if (nome == "energia") {
        texto.innerHTML = "<h1>Carente</h1> <p class='p_grande'>The Carente is a Blood creature with a touch of Death, born from Daniel Hartmann's book, tales of a Needy Creature. It tells the story of a creature that devours the internal organs of mothers out of envy for beings who receive love even before they are born. This creature appears as an 8-year-old boy with brown, cropped hair and lacks a face, only featuring a hollow space filled with cuts and its internal flesh crawling inside where its face should be. When invited into a space, it transforms into a disturbing giant monster, standing at three meters tall, with an insectoid bloody body and numerous arms throughout, each with different types of hands and claws, boasting a total of 4 pairs of arms and two legs.</p>";
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-sangue-p/Criatura_Sangue_Carente_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"
    }
    else if (nome == "morte") { 
        texto.innerHTML = "<h1>Mulher Afogada</h1> <p class='p_grande'>The Drowned Woman is a paranormal creature of Blood with a touch of Energy and Fear, manifesting from women who have died in brutal and tragic drownings, whether accidentally or through murder. The Drowned Woman initially appears as a kind of Blood-like liquid, viscous and reddish, with its mucous material resembling the slime seen in the residues of Blood Zombies when deceased. When freed from the pipelines, her physical form resembles a large, naked female body that melts into the same slime in a way that makes her putrid organs seem to melt along with it. She has a head with a completely disfigured face and extremely long and sharp teeth, giving her a powerful bite force that could easily sever a human limb. On top of her head, she has tentacles resembling braided hair made of viscera.</p>";
    }
    else if (nome == "sangue") {
        texto.innerHTML = "<h1>Minotauro</h1> <p class='p_grande'>The Minotaur is a paranormal creature of Blood that inhabits mazes. This creature is one of the first to have been captured in a kind of captivity for study by paranormal investigators. However, to this day, no one knows the exact reasons someone would imprison this beast and keep it alive somewhere. This creature closely resembles the Greek myth: a muscular, humanoid body covered in a thin layer of fur, mimicking a bull, with a head entirely in the shape of a bull, featuring two large, bloodied horns. Despite this, its face is more akin to the skull of a bull, with its snout completely devoid of skin or flesh, and its teeth resembling the skeletal structure of the animal.</p>";
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-sangue-p/Criatura_Sangue_Minotauro_Leve.webp' alt='Criatura de ordem paranormal, Minotauro'>"
    }
    else if (nome == "conhecimento") {
        texto.innerHTML = "<h1>Zumbi de Sangue</h1> <p class='p_grande'>The Blood Zombies are paranormal creatures of Blood, originating from corpses that were brutally killed and left abandoned in an area with weakened Membrane. They serve as a conduit for the Blood entity to devour them and take control of their physical form. The average transformation time for a Blood Zombie is irregular, depending on the environment affected by the paranormal activity or information passed from the victim. For instance, if the person, when alive, had a high level of Paranormal Exposure; experienced an extremely painful and brutal death; or had their corpse completely devoured by the Blood. As a result, they can become even more brutal and animalistic, akin to a Bestial Blood Zombie.</p>";
    }
}