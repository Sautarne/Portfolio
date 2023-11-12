<template>

<div class="accueil">
    <h1 id="accueil">Développeur Web Junior Front-End</h1>
    <p>
        Christophe PEREZ,<br>
        Développeur passionné par les nouvelles technologies et l’univers du web, je suis spécialisé dans le développement front-end. Polyvalent, je maîtrise plusieurs langages de programmation dont HTML, CSS et JavaScript et la création de sites web et d’applications. Je sais identifier et comprendre les besoins des utilisateurs pour de meilleurs résultats.
    </p>
    <div class="compétences">
        <h2 id="compétences">Compétences</h2>
        <div class="compétences-list">
            <ol>
            <li><img src="../../Images/HTML.png" alt="">HTML</li>
            <li><img src="../../Images/CSS.png" alt="">CSS</li>
            <li><img src="../../Images/JAVASCRIPT.png" alt="">JAVASCRIPT</li>
            </ol>
        </div>
    </div>
</div>

</template>

<script>

export default {
    name: 'Accueil'
}

</script>

<style>

main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.accueil{
    width: 100%;
    height: 900px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(../../Images/synthwave-wallpaper.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
}
h1, h2{
    color: var(--color-main);
    display: flex;
    justify-content: center;
    font-family: var(--police-neon);
    font-size: 2.5em;
    border: 0.1em solid var(--color-main);
    border-radius: 0.5em;
    padding: 0.2em;
    text-shadow: 2px 0px 2px rgba(255,0,255,0.5), -2px 0px 2px rgba(0,255,191,0.5), 0px 0px 10px rgba(49,122,255,1);
    box-shadow: 2px 0px 2px rgba(255,0,255,0.5), -2px 0px 2px rgba(0,255,191,0.5), 0px 0px 10px rgba(49,122,255,1);
    box-shadow: inset 2px 0px 2px rgba(255,0,255,0.5), -2px 0px 2px rgba(0,255,191,0.5), 0px 0px 10px rgba(49,122,255,1);
    scroll-margin-top: 200px;
}
.accueil p{
    max-width: 60em;
    color: white;
    display: flex;
    flex-wrap: wrap;
    font-family: var(--police-Noto);
    line-height: 1.5em;
    font-size: 1.3em;
    text-align: center;
}
.compétences{
    color: white;
    font-family: var(--police-Noto);
}
.compétences ol{
    max-width: 60em;
    display: flex;
    flex-direction: column;
    padding: 0;
    font-size: 1.5em;
    line-height: 2em;
}
.compétences li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.compétences-list img{
    height: 100px;
    width: 100px;
}

#projets{
scroll-margin-top: 200px;
}

</style>