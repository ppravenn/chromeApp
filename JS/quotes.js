const quotes = [
    {
        quote:"1번 째 문장입니다.",
        author:"1번"
    },
    {
        quote:"2번 째 문장입니다.",
        author:"2번"
    },
    {
        quote:"3번 째 문장입니다.",
        author:"3번"
    },
    {
        quote:"4번 째 문장입니다.",
        author:"4번"
    },
    {
        quote:"5번 째 문장입니다.",
        author:"5번"
    },
    {
        quote:"6번 째 문장입니다.",
        author:"6번"
    },
    {
        quote:"7번 째 문장입니다.",
        author:"7번"
    },
    {
        quote:"8번 째 문장입니다.",
        author:"8번"
    },
    {
        quote:"9번 째 문장입니다.",
        author:"9번"
    },
    {
        quote:"10번 째 문장입니다.",
        author:"10번"
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;