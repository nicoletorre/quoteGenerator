function generateQuotes() {
    const quotes = [
        "Success is not final, failure is not fatal: It is the courage to continue that counts. <br> - Winston Churchill",
        "Believe you can and you're halfway there. <br> - Theodore Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. <br> - Confucius",
        "Your time is limited, don't waste it living someone else's life. <br> - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. <br> - Eleanor Roosevelt",
        "You miss 100% of the shots you don't take. <br> - Wayne Gretzky",
        "The best way to predict your future is to create it. <br> - Abraham Lincoln",
        "Act as if what you do makes a difference. It does. <br> - William James",
        "The only way to do great work is to love what you do. <br> - Steve Jobs",
        "Start where you are. Use what you have. Do what you can. <br> - Arthur Ashe",
        "Dream big and dare to fail. <br> - Norman Vaughan",
        "In the end, we only regret the chances we didn't take. <br> - Norman Vaughan"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomIndex];
}

function copyToClipboard() {
    const textToCopy = document.getElementById('quotes').innerText; // Use innerText to get plain text
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy text: ' + err);
    });
}