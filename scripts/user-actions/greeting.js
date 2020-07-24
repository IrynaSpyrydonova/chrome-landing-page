const greeting = document.getElementById('greeting');
const quote = document.getElementById('quote');
const images = document.getElementById('background');

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {

        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {

        greeting.textContent = 'Good Afternoon, ';
        document.body.style.color = 'white';

    } else {

        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}
setBgGreet();

let quotesArr = [{
    name: 'Albert Einstein',
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving"
}, {
    name: 'Eleanor Roosevelt',
    quote: "Do one thing every day that scares you."
},
{
    name: 'Buddha',
    quote: "All that we are is the result of what we have thought."
}, {
    name: 'Malcolm X ',
    quote: "The future belongs to those who prepare for it today."
}, {
    name: 'Socrates',
    quote: "The unexamined life is not worth living"
}, {
    name: 'Vincent van Gogh',
    quote: "What would life be if we had no courage to attempt anything?"
}, {
    name: 'Ethiopian proverb',
    quote: "Do not catch a leopard by it's tail, but if you do, then do not let it go."
}, {
    name: 'Ukrainian Proverb',
    quote: "The fear of death takes away from the simple joy of living."
} ,{
    name: 'Mehmet Murat ildan',
    quote: "To give up dreaming is to betray yourself!"
}, {
    name: 'palestinian proverb',
    quote: "A sense of humor is the pole that adds balance to our steps as we walk the tightrope of life"
} ,{
    name: 'Rosa Parks',
    quote: "No."
}
]


function displayDetails() {


    let randomQuote = Math.floor(Math.random() * (quotesArr.length - 0))


    document.getElementById('author').innerHTML = quotesArr[randomQuote].name;
    document.getElementById('quote').innerHTML = quotesArr[randomQuote].quote;
}
displayDetails();


let image = [];
image[0] = 'https://images.unsplash.com/photo-1500417148159-68083bd7333a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
image[1] = "https://images.unsplash.com/photo-1505925119181-3537e71dbc72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80";
image[2] = 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
image[4] = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
image[5] = 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
image[6] = 'https://images.unsplash.com/photo-1451186859696-371d9477be93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80';
image[7] = 'https://images.unsplash.com/photo-1500417148159-68083bd7333a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';


function imageDisplay() {
    if (image === undefined) {
        return image[0];
    }
    let randomImage = Math.floor(Math.random() * (image.length - 0));
    document.getElementById('background').src = image[randomImage];
}
imageDisplay();



