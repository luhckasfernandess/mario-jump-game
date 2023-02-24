const heroSkill = () => {
    const hero = document.querySelector('.game-hero');
    hero.classList.add('hero-skill');
    setTimeout(() => hero.classList.remove('hero-skill'), 500);
}

document.addEventListener('keydown', heroSkill);