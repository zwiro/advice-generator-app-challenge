const adviceText = document.querySelector('h2');
const headingText = document.querySelector('h1');
const adviceNumber = document.querySelector('span');
const randomAdviceButton = document.querySelector('.dice');

// const randomAdvice = async () => {
//     const advice = await getAdvice();
//     adviceText.textContent = advice[0];
//     adviceNumber.textContent = advice[1];
//     headingText.classList.add('animation');
// };

const getAdvice = async () => {
    try {
        const res = await axios.get("https://api.adviceslip.com/advice");
        return [res.data.slip.advice, res.data.slip.id];
    } catch (e) {
        return ['No advices available!', ''];
    }
};

headingText.addEventListener('animationend', () => {
    headingText.classList.remove('animation');
});

randomAdviceButton.addEventListener('click', async () => {
    const advice = await getAdvice();
    headingText.classList.add('animation');
    adviceText.textContent = advice[0];
    adviceNumber.textContent = advice[1];
});


