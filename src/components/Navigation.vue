<template>

<header> 
    <div class="navigation">
        <nav>
            <a href="#accueil"><img class="logo-coderez-nav" src="../../Images/logo_CodeRez.png" alt="Logo CodeRez avec une balise à gauche" onmouseover="this.src='../../Images/logo_CodeRez_hover.png';" onmouseout="this.src='./Images/logo_CodeRez.png';"></a>
            <ol class="menu">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#compétences">Compétences</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
            </ol>
        </nav>
    </div>
</header>

</template>

<script>

export default {
    name: 'Navigation'
}

</script>

<style>
header{
    width: 100%;
    box-shadow: 0px 19px 50px -40px white;
    display: flex;
    justify-content: center;
    position : fixed;
    background-image: url(../../Images/ligne-perspective.png);
    background-color: #0D0126;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}   
.navigation{
    height: 150px;
    width: 100%;
    max-width: 60em;
    display: flex;
    align-items: center;
}
.logo-coderez-nav{
    width: 20em;
    height: 5em;
    cursor: pointer;
}
nav{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.menu{
    list-style: none;
    display: flex;
    width: 100%;
    font-size: 1.6em;
    display: flex;
    justify-content: space-around;
}
nav li{
    font-family: var(--police-neon);
    border: 0.1em solid var(--color-main);
    border-radius: 0.5em;
    padding: 0.3em;
}
nav li:hover{
    text-shadow: 0 0 1em var(--color-shadow);
    box-shadow: inset 0px 0px 10px 1px var(--color-shadow),
    0px 0px 20px 1px var(--color-shadow);
}
a{
    text-decoration: none;
    color: var(--color-main);
}

</style>