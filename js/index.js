


        
       function generate(){
        var quotes = {

            "--Wayne Gretzy ":  `“You miss 100% of the shots you don't take.”`,

            "--Nelson Mandela" :  `“In three words I can sum up everything I've learned about life: it goes on.”`,
            "--Albert Camus" :  `“Resentment is like drinking poison and waiting for your enemies to die.”`,

            "--Elbert Hubbard" : `“A friend is someone who knows all about you and still loves you.”`,
            "--Oscar Wilde" : `“Be yourself; everyone else is already taken.”`,
            
            "--Bernard M. Baruch" : `
            “Be who you are and say what you feel, because those who mind don't matter”`,
 
};

            var anthours = Object.keys( quotes) ;
            var anthour = anthours[Math.floor(Math.random() * anthours.length)]

            var quote = quotes[anthour];

            document.getElementById("quote").innerHTML = quote;
            document.getElementById("anthour").innerHTML = anthour;


          
            
        };