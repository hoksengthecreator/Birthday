document.addEventListener("DOMContentLoaded", () => {

    // Floating Hearts
    const hearts = document.getElementById("hearts");

    if (hearts) {

        for (let i = 0; i < 30; i++) {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerHTML = "💖";

            heart.style.left = Math.random() * 100 + "%";

            heart.style.animationDuration = (5 + Math.random() * 8) + "s";

            heart.style.animationDelay = Math.random() * 5 + "s";

            heart.style.fontSize = (20 + Math.random() * 25) + "px";

            hearts.appendChild(heart);

        }

    }

    // Typewriter
    const message = `Dear Nika,

Happy Birthday! 🎉💖

Today is your special day, and I just wanted to remind you how amazing you are, I really admire your hard work so much.

I hope this year brings you endless happiness, good health, success, and everything your heart wishes for.

Never stop smiling because your smile brightens everyone's day, You've got the most beautiful smile in the world do ya know that.

Once again, Happy Birthday nah.

With lots of love,
❤️ Nikaa your freind`;

    const typewriter = document.getElementById("typewriter");

    if(typewriter){

        let i = 0;

        function typing(){

            if(i < message.length){

                typewriter.innerHTML += message.charAt(i);

                i++;

                setTimeout(typing,40);

            }

        }

        typing();

    }

    // Button
    const button = document.getElementById("celebrate");
    const finalMessage = document.getElementById("finalMessage");

    if(button){

        button.addEventListener("click", function(){

            finalMessage.classList.remove("hidden");

            button.textContent = "🎉 Yay! 🎉";

            createConfetti();

        });

    }
function createConfetti() {

    const emojis = ["🎉", "🎊", "💖", "✨", "🌸", "💕", "💝"];

    for (let i = 0; i < 120; i++) {

        const item = document.createElement("div");

        item.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-50px";

        item.style.fontSize = (18 + Math.random() * 18) + "px";

        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";

        item.style.transition =
            `transform ${4 + Math.random() * 3}s linear,
             top ${4 + Math.random() * 3}s linear`;

        document.body.appendChild(item);

        setTimeout(() => {

            const drift = (Math.random() - 0.5) * 300;

            item.style.top = "110vh";
            item.style.transform =
                `translateX(${drift}px) rotate(${Math.random() * 720}deg)`;

        }, 20);

        setTimeout(() => {
            item.remove();
        }, 7000);
    }
}

});