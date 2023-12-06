function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Alexsander Kothe</h1> <p class='p_grande'>A key supporting character in the first RPG, Alex was a young-adult history teacher with direct contact with the Occultists from the case of Nostradamus High School. He unknowingly assisted them in their true plan. After discovering everything, he becomes a victim of a ritual, having all memories of his daily work life erased and subsequently being falsely accused of assaulting one of his students, leading to his expulsion. During a normal day in his apartment watching TV, his home is invaded by three members of Ordo Realitas—Thiago Fritz, Elizabeth Webber, and Daniel Hartmann—who threaten him due to his involvement in the case. His relationship with his colleagues was generally tumultuous. In the season finale, Alex commits suicide during the battle against the Degolificada, driven completely insane by the various events during the investigation.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Cristopher Cohen</h1> <p>Cristopher Cohen was 60 years old, very strong and tall, with gray hair and a large burn on the left part of his face. Cristopher was a very close friend of Arnaldo Fritz and had known Thiago for a long time, being a film stuntman and paranormal investigator, just like him. Cris is very talkative and high-spirited, always wanting the well-being of everyone around him, always very protective and friendly. There was a complicated relationship with his son Cesar, with many conflicts occurring between the two during the mission. In the end, he sacrificed himself to save Thiago from inside the Black Spider, greatly shaking the team and especially his son.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Fernando/Luciano</h1> <p class='p_grande'>Fernando is a man who cohabits his husband's body, due to the accident that occurred on a previous mission with his team, Tristan and Erin Parker. Fernando had black skin, long hair, tied up and in dreadlocks. Furthermore, Fernando had vitiligo, which is a deficiency that causes the skin to lose color in some areas. Currently he is a gentle, kind and somewhat fearful musician. Luciano is a black, bald man, around 30 or 40 years old. His personality is the exact opposite of Fernando's, probably because he is a former military man. He has a colder and more methodical behavior, taking over the body in moments of crisis and currently splitting the body. Luciano saved his husband from the brink of death by performing a ritual, transferring his mind to his own body. After becoming members of the Force D team and facing Gal in an attempt to stop the Unconjuration, Kian, whose mind was stored in the ex-soldier's body, took over the body and killed Fernando.</p>"; 
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Damir Lukic</h1> <p>Damir is a bald, middle-aged white man with an eye patch and wearing a burgundy shirt with a purple blazer over it, holding a cane in his right hand. He is an arrogant, greedy man and extremely dependent and attached to his brother Boris, a middle-aged man with gray hair and light eyes, both are part of Kian's team, being his Marked.</p>"; 
    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Chico Albuquerque</h1> <p>Chico is a young brown man, 1.47 meters tall, with long brown hair and eyes of the same color with a goatee, a piercing on his eyebrow and red spirals on his cheeks. As clothing he uses a black blouse with long yellow sleeves with the ends folded alternately, he also wears black pumps next to combat boots tied with a buckle. He has several technological devices present in different parts of his costume along with several tools tied to his waist.</p>"; 
    }
}
