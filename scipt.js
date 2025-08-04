let ukTexts = [
    "Агенти",
"Покупці житла",
"Ресурси",
"Увійти",
"Надаємо впевненість на шляху до володіння житлом",
"Гарантуйте завершення угоди з пропозиціями, забезпеченими готівкою та без обтяжень, для покупців, продавців, їхніх агентів і кредитних інспекторів",
"НАМ ДОВІРЯЮТЬ",
"Кого ми підтримуємо",
"Агенти покупців",
"Надайте своїм покупцям впевненість завдяки готівці",
"Відмовтеся від типових обтяжень, включаючи обтяження продажу житла, щоб дозволити вашим покупцям робити найсильніші пропозиції на будь-якому ринку",
"Зберігайте свою комісію",
"Пишіть більше виграшних пропозицій",
"Гарантоване завершення угоди",
"Ви в хорошій компанії",
"Ribbon — це величезна перевага для вас як агента покупця, і це, безперечно, дає вам додатковий козир, необхідний для прийняття пропозиції вашого покупця",
"Едгар Гонсалес",
"eXp Realty",
"Агенти люблять нас, тому що ми надаємо їхнім покупцям можливості завдяки готівці та не конкуруємо за їхні комісії",
"Придбано жител",
"Агенти",
"Купівельна спроможність",
"Наші рішення",
"Дім виграно завдяки",
"Покупець",
"виграла будинок своєї мрії в ситуації з кількома пропозиціями",
"Продавець",
"отримав гарантоване завершення угоди без обтяжень",
"Перетворіть пропозицію на готівкову",
"Щойно ваш покупець отримає попереднє схвалення, підвищте свою купівельну спроможність до готівкової, щоб зробити найсильнішу пропозицію першим",
"Читати історію успіху",
"Усе, що вам потрібно, лише на відстані дотику",
"Ribbon дозволяє вам написати пропозицію будь-коли та будь-де — прямо з вашого мобільного пристрою",
"Агенти",
"Купівля",
"Продаж",
"IOS-додаток",
"Отримати сертифікат",
"Покупці житла",
"Покупці",
"Купуй, перш ніж продати",
"Нове будівництво",
"Врятувати вашу угоду",
"Продавці",
"Партнери",
"Кредитори",
"Забудовники",
"Брокерські фірми",
"Ресурси",
"Ціни",
"Поширені запитання",
"Як це працює",
"Блог",
"Посібники",
"Вебінари",
"ПРО НАС",
"Місія",
"Культура",
"Кар'єра",
"Преса",
"Умови",
"Конфіденційність",
"Авторське право 2022 Ribbon Home Inc, Усі права захищено",
"Натисніть для відгуку"
]

let enTexts = [
    "Agents",
"Homebuyers",
"Resources",
"Log In",
"Providing certainty on the journey to homeownership",
"Guarantee your home closes with cash-backed, contingency-free offers for buyers, sellers, their agents, and loan officers",
"FEATURED IN",
"Who we empower",
"BUYER'S agents",
"Give your buyers the certainty of cash",
"Waive common contingencies, including the home-sale contingency, to allow your buyers to make their strongest offer in any market",
"Keep Your Commission",
"Write More Winning Offers",
"Guaranteed to Close",
"You’re in good company",
"Ribbon is a huge advantage for you as the buyer's agent - and definitely gives you the extra edge needed to have your buyer's offer accepted.",
"Edgar Gonzalez",
"eXp Realty",
"Agents love us because we empower their buyers with cash and don't compete for their commissions",
"Homes Purchased",
"Agents",
"Buying Power",
"Our solutions",
"home won with",
"The buyer",
"won her dream house in multiple-offers situation",
"The seller",
"got a guaranteed closing with no contingencies",
"Turn an offer to all cash",
"Once your buyer is preapproved, upgrade your buying power to cash to make your strongest offer, first",
"Read the success story",
"Everything you need is only a tap away",
"Ribbon let’s you write an offer anytime, anywhere — right from your mobile device",
"Agents",
"Buying",
"listing",
"IOS-App",
"Get Certified",
"Homebuyers",
"Buyers",
"Buy Before You Sell",
"New Construction",
"Rescue Your Closing",
"Sellers",
"Partners",
"Lenders",
"Builders",
"Brokerages",
"Resources",
"Pricing",
"FAQs",
"How it works",
"Blog",
"Guides",
"Webinars",
"ABOUT",
"Mission",
"Culture",
"Careers",
"Press",
"terms",
"privacy",
"Copyright 2022 Ribbon Home Inc, All Rights Reserved",
"Click for Review"
]




let targets = document.querySelectorAll(".target")

function translateToUk() {
    console.log(targets)
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = ukTexts[i]
    }
}



function translateToEn() {
    console.log(targets)
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = enTexts[i]
    }
}



// Коли весь DOM-вміст завантажено (без очікування зображень та інших ресурсів)
document.addEventListener("DOMContentLoaded", () => {
    // Тут можна виконати код, який не залежить від повного завантаження сторінки
    // Наприклад, додати слухачі подій до елементів, які вже існують
});

// Коли вся сторінка (включно із зображеннями, скриптами, CSS тощо) завантажена
window.addEventListener("load", () => {
    // Знаходимо елементи лоадера і основного контейнера на сторінці за їхніми класами
    let loader = document.querySelector(".loader");
    let container = document.querySelector(".container");

    // Перевіряємо, чи існує елемент лоадера
    if (loader) {
        // Якщо існує, змінюємо його стиль, щоб він був прихованим
        loader.style.display = "none";
        // Приховати лоадер
    }

    // Перевіряємо, чи існує основний контейнер
    if (container) {
        // Якщо існує, змінюємо його стиль, щоб він був видимим
        container.style.display = "block";
        // Показати основний контент
    }
});