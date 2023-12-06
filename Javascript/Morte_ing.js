function ampliar(x){ 
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ 
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Nidere</h1> <p>The Nidere is a bizarre and distorted paranormal creature with a shape similar to a Death wolf, complemented by Blood and Fear, inhabiting forests and wild environments. It is responsible for various disappearances of campers. The Nidere is a brutal creature, extremely fierce and efficient in hunting. It is a huge, twisted wolf that walks on two legs, with its spine completely inverted backward, making it walk almost as if it were upside down. Its head is that of an upside-down wolf skull, with two bright red eyes where the bottom of its jaw would originally be.</p>";
            div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Nidere_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Succ</h1> <p> The Succ is a paranormal creature of Death with a touch of Energy, but its origin is uncertain. It manifested to kill those who threatened the city of Santo Berço. The Succubus has a slim appearance with gray and wrinkled skin, and a long neck in the shape of a serpent. At the end of the neck is a mouth divided into six sections, and from it extends a large appendage similar to its neck, leading to a second circular mouth with multiple layers of thin and sharp teeth used to trap its victims. It walks on four legs resembling small semi-arachnid limbs</p>"; 
            div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Succ_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Carrionbeast</h1> <p>The Carrionbeast is a paranormal creature of Death with a touch of Knowledge that arises from a failed attempt to give consciousness to the Death entity in Reality, due to the Spiral Symbol marked on its skull. The Carrionbeast is a humanoid monster with a slim and muscular physical build, about 2 meters tall, with a Spiral Symbol present on its forehead. Its anatomy is similar to human musculature, formed by the Black Slime that comes from behind its head and intertwines into tendons. On its head is the remainder of a decaying human skull with a brownish color. In it is the Spiral Symbol embedded in its forehead emitting a red glow.</p>"; 
            div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Carnical_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Aracnasita</h1> <p>The Aracnasita is a parasitic paranormal creature of Death with a touch of Fear that manifests from a Reality spider exposed to a Death Symbol, which, after coming into contact with Black Slime, developed parasitic behavior. After parasitizing a victim and consuming their Potential Energy, it grows to a colossal size with a face full of eyes and sharp teeth, along with two huge pedipalps. It also has a gelatinous and translucent sac attached to its back, resembling a slimy hot water bag, which has the same effect as the Black Slime on anyone who comes into contact with it.</p>"; 
            div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Aracnasita_leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Death of Existed</h1> <p>The Deathborne are a variant of the Existed, which for some reason were affected by the Death Element. Unlike regular Existed, these Deathborne do not have a normal and slim human appearance. Instead, they have a large and defined muscle body, with gray skin and a skull-like face. Their bodies also have various writings, now in a spiral shape, and Black Slime pours from their empty orbital eyes, considerably covering their arms.</p>"; 
            div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Existidos_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
}