var lastNum = null;

function createQuote() {
    var Scientists_sayings = {
        albert_einstein: {
            quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
            name: "--Albert Einstein"  
        },
        marcus_tullius_cicero: {
            quote: "“A room without books is like a body without a soul.”",
            name: "--Marcus Tullius Cicero"
        },  
        bernard_m_baruch: {
            quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            name: "--Bernard M. Baruch"
        },
        dr_seuss: {
            quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            name: "--Dr. Seuss"
        },
        robert_frost: {
            quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
            name: "--Robert Frost"
        },
        mahatma_gandhi: {
            quote: "“Be the change that you wish to see in the world.”",
            name: "--Mahatma Gandhi"
        }
    };

    var keys = Object.keys(Scientists_sayings);
    var num;


    do {
        num = Math.floor(Math.random() * keys.length);
    } while (num === lastNum);

    lastNum = num; 

    var randomKey = keys[num];
    var randomQuote = Scientists_sayings[randomKey];
    
    document.getElementById("demo1").innerHTML = randomQuote.quote;
    document.getElementById("demo2").innerHTML = randomQuote.name;
}
