const TestimonialData = [
    { 
        image: "ola_crypt", 
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

const testimonialCards = document.getElementById('testimonialCards')

TestimonialData.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    card.innerHTML = `
        <div class="card-top">
            <div class="profile">
                <img class="dp" src="${testimonial.image}.jpg" alt="${testimonial.name}">
                <h3 class="username">${testimonial.name}</h3>
            </div>
        </div>
        <div class="tweet">${testimonial.tweet}</div>
    `;
    
    testimonialCards.appendChild(card);
  });