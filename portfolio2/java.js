$(document).ready(function(){
var quotes = ["How long will you wait for the right time to come? The right time is now and the right place is here.― J.P. Vaswani","If there is a book you want to read but hasn't been written, then you must write it- Toni Morrison", "A bird doesn't sing because it has an answer, it sings because it has a song-Maya Angelou","Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.-Virginia Woolf","Fantasy is hardly an escape from reality. It's a way of understanding it.-Lloyd Alexander","Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only Beauty. There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.-Oscar Wilde"]
var rand = Math.floor(Math.random()*quotes.length);
console.log(quotes[rand])
$("div.byline").html(quotes[rand]);
});

