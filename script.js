const hero = document.querySelector('.game-hero');
const gameObstacle = document.querySelector('.game-obstacle');

const heroSkill = () => {
    hero.classList.add('hero-skill');
    setTimeout(() => hero.classList.remove('hero-skill'), 500);
}

const verificationLoop = setInterval(() => {

    const obstaclePosition = gameObstacle.offsetLeft;
    const heroPosition = +window.getComputedStyle(hero).bottom.replace('px', '');

    if (obstaclePosition <= 120 && obstaclePosition > 0 && heroPosition <= 80) {

        gameObstacle.style.animation = 'none';
        gameObstacle.style.left = `${obstaclePosition}px`;

        hero.style.animation = 'none';
        hero.style.bottom = `${heroPosition}px`;
        hero.src = './images/game-over.webp'
        hero.style.width = '100px'
        hero.style.marginLeft = '50px'

        clearInterval(verificationLoop);
    }
}, 10);

document.addEventListener('keydown', heroSkill);