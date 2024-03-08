//IIFE
//Immediately Invoked Function Expression (IIFE)
//IIFE allows you to repeat variable or function names without any conflicts


(function(message){
    const superHero="Vijay";
    console.log(message+superHero);
})("Hello ");

(function(message){
    const superHero="surya";
    console.log(message+superHero);
})("Hey");