function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Daniel Hartmann</h1> <p>Daniel was a famous horror story writer who, upon discovering that his works were having real effects on the thinning of the membrane, decided to join Ordo Realitas to combat the evil he had created. His only mission was the case of Escola Nostradamus, where he was tragically killed by the Degolificada. His stories have influenced more events in the order, and the monsters created by him still appear.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Joui Jouki</h1> <p class='p_grande'>Joui was an Olympic gymnast who, after being saved from a paranormal creature by Elizabeth Webber and Thiago Fritz, decided to join the Order. During his first mission, the Case of Carpazinha, he created a very strong bond with all those who would eventually be known as Team E. Given the destruction of Santo Berço, he changed his light athlete personality for a colder one. During the investigation into the Order of Unconjuration, Joui becomes a member of the Sect of Masks as a form of sacrifice to protect his friends, giving up his existence. However, Joui returns in Calamity and is responsible for the murder of several writers. Joui ends up reuniting with Dante and Arthur, during the calamity relics mission, joining the vultures team. During the final battle against Kian, Joui is beaten to death.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Celestine</h1> <p>Celestine was a woman with fair skin and a blue aura around her that followed her from her feet to her head, being the same color as her eyes. She had short, blonde hair swept to the right side of her face and wore a long tunic with long sleeves that ended in a pair of gloves. After being the winner of the Host's games, Celestine is ambushed by Veritus, incorporated by Kian. Seeing this situation, Joui incorporates it, accepting the Host's proposal, using the Mask of Despair, and thus becoming the Magistrate.</p>"; 
    }
}