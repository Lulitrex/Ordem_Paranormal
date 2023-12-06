function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Elizabeth Webber</h1> <p class='p_grande'>Elizabeth was a slender woman, 1.70 meters tall, with black hair and was 28 years old when she joined the Ordo Realitas. In addition to being a paranormal investigator, she was a forensic scientist. Liz tended to be rude and cold to everyone, obsessed with her theories and relying only on her closest friends. She had a notorious alcohol problem. During her encounter with the monster known as the God of Death, she aged decades in just a few seconds, finishing the mission at age 50. After the death of her friend Thiago Fritz, the agent began investigating the mysterious Order of Inconjuration. During the investigation, however, she ended up being captured by the Writings and later killed by Gal using Joui Jouki's sword to deliver the killing blow.        </p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Carina Leone</h1> <p class='p_grande'>Carina Leone is a tall woman with fair skin and a youthful appearance, with green eyes and brown hair, with strands dyed cyan. She has several tattoos spread across her body, including a dreamcatcher and several flowers on her arms, a mouse near her left hand and a huge dragon on her back. Carina wears dark pants with chains hanging from them, as well as a black turtleneck shirt. Wearing high boots resembling combat boots, as well as a gray leather jacket and a pendant in the shape of a lion's head, the Leone family crest. After surpassing the 50% Paranormal Exposure barrier at the end of the 3rd episode of Calamity, Carina connects her Mark and the element of Knowledge, meaning that when entering combat, her eyes become gold and her cyan locks become changes to a bright, golden tone.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Gaius</h1> <p>Gaius was an old man, pale, with marks of old age stamped on his face, such as huge sagging circles under his eyes and a wrinkled forehead, giving him a more tired appearance. He had short, gray hair covered by a hood and a medium beard. In the Chaos Relic's decision to choose its bearer, Gaius was sucked into the Energy Relic and amalgamated with The Host, becoming a part of it, the Amphitruo.</p>"; 
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Bárbara Lima</h1> <p>Barbara was a fair-skinned woman with medium-length blonde hair that reached past her shoulders, with dark eyes and freckles and sunburn on her cheeks and nose. She wore a long brown and white dress, with flower details on the bottom, along with a black belt, she also wore a kind of greenish cape held by a string. She was one of the main protagonists of the Secret on the island and ended up being killed by the Imaginary Friend in the church on the island of Tipora.</p>"; 
    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Carol</h1> <p>Carol was a D-level agent seen at Igneus Station, encountering the surviving test subjects. She was a red-haired white woman who wore glasses, wearing a purple winter coat due to the weather at Igneus Station. She ended up being killed by the threat that surrounded the station, Nidere. Carol is the character who dies less than 2 and a half hours after her debut.</p>"; 
    }
}