const TestimonialData = [
    { 
        image: "ola_crrypt", 
        name: "Ola_Crrypt", 
        tweet: "A wallet that feels like fintech…<br>But runs on crypto.<br>Borderless. Permissionless. Investable.<ul><li>USDC transfers, fast and final</li><li>Real estate investing from your phone</li><li>Built-in chat</li><li>Built for Africa, not just built in Africa</li></ul>That’s EdenFi."
    },

    {
        image: "herren_power",
        name: "@herren_power",
        tweet: "Imagine being able to invest in real estate properties in places like Lekki, Kigali, or Nairobi, with just $50.<br><br>No need to travel there, no paperwork hassles, and all of it happening through a decentralized system.<br>That’s a wild concept.<br>Bullish on @edenfi_onchain"
    },

    {
        image: "web3vida",
        name: "@web3vida",
        tweet: "Edenfi is a decentralized financial platform, built specifically for Africa and its global diaspora.<br><br>A blockchain-powered wallet where you can send money across borders, save and earn interest, access loans without paperwork, and stay in full control of your money."
    },

    {
        image: "W3B_guy",
        name: "@W3B_guy",
        tweet: "EdenFi is more than finance. It’s culture, it’s freedom. Every African needs this.🧡"
    },

    {
        image: "oxbigjacob",
        name: "@oxbigjacob",
        tweet: "Financial freedom just got fun with @edenfi_onchain — investing, sending money, and chatting has never been this easy!"
    },

    {
        image: "Decentral_Diva",
        name: "@Decentral_Diva",
        tweet: "I love how EdenFi lets me invest in real estate from just $10, send money abroad with no fees, convert crypto to local cash, and even chat — all in one app. Better late than never! ✨"
    },

    {
        image: "SAM_Mie6",
        name: "@SAM_Mie6",
        tweet: "No stress. Just send, invest, and grow with EdenFi."
    },

    {
        image: "cryptic_unique",
        name: "@cryptic_unique",
        tweet: "Love this! Africa is ready for a financial revolution go EdenFi!"
    }
]

const FaqsData = [
    {
        question: "What is EdenFi and how is it different from other digital wallets like Revolut or MetaMask",
        answer: "EdenFi is Africa’s first smart wallet combining instant stablecoin transfers, real estate investing, and social connectivity. Unlike Revolut or MetaMask, EdenFi is built specifically for Africans, with low transfer fees, a real estate marketplace, lower FX markups than Western Union and LemFi, plus localised off-ramp support in key markets like Nigeria, Ghana, and South Africa."
    },

    {
        question: "How does EdenFi give back to Africa",
        answer: "EdenFi gives back by building financial infrastructure designed for African realities, not retrofitted from Western systems. A portion of platform revenue is reinvested into expanding local liquidity, supporting African real estate developers, and enabling more affordable cross-border access to capital. By keeping fees low and value circulating within African markets, EdenFi helps users retain wealth and invest directly into the continent’s growth."
    },

    {
        question: "How much does it cost to use EdenFi",
        answer: "Creating and maintaining an EdenFi wallet is free. Users only pay minimal transaction fees when sending funds or investing, with transparent pricing and no hidden charges. Compared to traditional remittance services, EdenFi offers significantly lower fees and tighter FX spreads, helping users keep more of their money."
    },

    {
        question: "How secure is EdenFi for storing and sending money?",
        answer: "EdenFi is built with security at its core. Funds are protected using industry-standard encryption, secure key management, and blockchain-based transaction integrity. Users maintain control over their assets while benefiting from fraud monitoring and secure off-ramp partners. EdenFi does not rehypothecate user funds, ensuring transparency and trust at every step."
    },

    {
        question: "How fast can I send money from the UK to Africa using EdenFi?",
        answer: "Transfers using EdenFi are near-instant. Stablecoin transactions typically settle within seconds, regardless of borders. Once received, funds can be converted and withdrawn locally through supported off-ramps, often within minutes to a few hours, depending on the destination country and payment method."
    }
];


const testimonialCards = document.getElementById('testimonialCards')

TestimonialData.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    card.innerHTML = `
        <div class="card-top">
            <div class="profile">
                <img class="dp" src="./images/${testimonial.image}.jpg" alt="${testimonial.name}">
                <h3 class="username">${testimonial.name}</h3>
            </div>
            <img class="xlogo" src="./images/xlogo.svg" alt="x logo">
        </div>
        <div class="tweet">${testimonial.tweet}</div>
    `;
    
    testimonialCards.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("testimonialCards");
    const scrollAmount = 328; // card width (300) + gap (28)

    document.querySelector(".nav-btn.left").addEventListener("click", () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    document.querySelector(".nav-btn.right").addEventListener("click", () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    function updateNavButtons() {
        document.querySelector(".nav-btn.left").disabled = container.scrollLeft <= 0;
        document.querySelector(".nav-btn.right").disabled =
            container.scrollLeft + container.clientWidth >= container.scrollWidth;
    }
    
    container.addEventListener("scroll", updateNavButtons);
    updateNavButtons();
    
});

const faqsCards = document.getElementById("faqsCards");

FaqsData.forEach(faqItem => {
    const faq = document.createElement('div');
    faq.className = 'faq-card';

    faq.innerHTML = `
        <div>
            <div class="question">
                <h3>${faqItem.question}</h3>
                <span class="faq-box-icon"></span>
            </div>
        </div>
        <div class="answer">${faqItem.answer}</div>
    `;

    const questionDiv = faq.querySelector('.question');
    questionDiv.addEventListener('click', () => {
        // Toggle answer visibility
        const question = faq.querySelector('.question');
        question.classList.toggle('active');

        const answerDiv = faq.querySelector('.answer');
        answerDiv.classList.toggle('active');
        
        // Rotate icon
        const icon = faq.querySelector('.faq-box-icon');
        icon.classList.toggle('rotated');

        // Close other FAQs
        document.querySelectorAll('.faq-card').forEach(card => {
            if (card !== faq) {
                card.querySelector('.question').classList.remove('active');
                card.querySelector('.answer').classList.remove('active');
                card.querySelector('.faq-box-icon').classList.remove('rotated');
            }
        });
    });


    faqsCards.appendChild(faq)
})