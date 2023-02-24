const gameHero = document.querySelector('.game-hero');
const gameObstacle = document.querySelector('.game-obstacle');
const gameClouds = document.querySelector('.game-clouds');

const heroSkill = () => {
    gameHero.classList.add('hero-skill');
    setTimeout(() => hero.classList.remove('hero-skill'), 500);
}

const verificationLoop = setInterval(() => {

    const obstaclePosition = gameObstacle.offsetLeft;
    const cloudsPosition = gameClouds.offsetLeft;
    const heroPosition = +window.getComputedStyle(gameHero).bottom.replace('px', '');

    if (obstaclePosition <= 120 && obstaclePosition > 0 && heroPosition <= 125) {

        gameObstacle.style.animation = 'none';
        gameObstacle.style.left = `${obstaclePosition}px`;

        gameHero.style.animation = 'none';
        gameHero.style.bottom = `${heroPosition}px`;
        gameHero.src = './images/game-over.webp'
        gameHero.style.width = '100px'
        gameHero.style.marginLeft = '35px'

        gameClouds.style.animation = 'none';
        gameClouds.style.left = `${cloudsPosition}px`;

        clearInterval(verificationLoop);
    }
}, 10);

document.addEventListener('keydown', heroSkill);