const quotes = [
    {
        quote: "Get the fuck out of my way",
        author: "Donggyun Ha",
    },
    {
        quote: "You motherfucking bitch!",
        author: "HDG",
    },
    {
        quote: "byungsinsaekki",
        author: "King donggyun",
    },
    {
        quote: "어쩌라고, 내맘이지",
        author: "하동균",
    },
    {
        quote: "10개나 써야하냐?",
        author: "개귀찮네",
    },
    {
        quote: "이제 6번째네",
        author: "시발 ㅋㅋ",
    },
    {
        quote: "fuck you",
        author: "bitch",
    },
    {
        quote: "three",
        author: "셋",
    },
    {
        quote: "two",
        author: "둘",
    },
    {
        quote: "one",
        author: "하나",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;