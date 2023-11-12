<template>

    <Navigation></Navigation>

    <Main></Main>

    <Contenu
    name="mon_cv"
    backgroundColor="orange"
    :imageSrc="imagePaths[0]"
    :titreModale="titreModale[0]"
    :langageUsed="langageUsed[0]"
    :projectLink="projectLink[0]"
    :modaleDescription="modaleDescription[0]"
    :creationDate="creationDate[0]"
    :siteLink="siteLink[0]">

    </Contenu>

    <Contenu
    name="espace_commentaire"
    backgroundColor="rose"
    :imageSrc="imagePaths[1]"
    :titreModale="titreModale[1]"
    :langageUsed="langageUsed[1]"
    :projectLink="projectLink[1]"
    :modaleDescription="modaleDescription[1]"
    :creationDate="creationDate[1]"
    :siteLink="siteLink[1]">
    </Contenu>

</template>


<script>

import Navigation from './components/Navigation.vue';
import Main from './components/Main.vue';
import Contenu from './components/Contenu.vue';

export default {

  name: 'App',
  components: {
    Contenu,
    Navigation,
    Main,
},
  data(){
    return{
      imagePaths: [
        "../../Images/Mon_CV.PNG",
        "../../Images/Espace-commentaire.png",
      ],
      titreModale: [
        "Mon CV",
        "Un espace commentaire",
      ],
      langageUsed: [
        "HTML / CSS",
        "HTML / CSS / JS",
      ],
      projectLink: [
        "https://github.com/Sautarne/Mon_CV",
        "https://github.com/Sautarne/Espace-commentaire",
      ],
      modaleDescription: [
        "Voici mon CV créé entièrement avec du HTML et CSS. Il permet de montrer mes anciennes expériences ainsi que mes formations. Vous pourrez y retrouver également mes compétences",
        "Voici un exemple d'espace commentaire que j'ai réalisé en HTML / CSS et JS. Il permet de remplir un message, avec son nom et prénom, et de le rajouter dans la liste au dessus"
      ],
      creationDate: [
        "30/08/2023",
        "17/10/2023",
      ],
      siteLink: [
        "../../projects/Mon_CV-main/index.html",
        "../../projects/Espace-commentaire-main/index.html",
      ]
    }
  }
}

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Tilt+Neon&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Press+Start+2P&family=Tilt+Neon&display=swap');

:root{
    --police-neon: 'Tilt Neon', sans serif;
    --police-Noto: 'Noto sans', sans serif;
    --police-pixel: 'Press Start 2P', sans serif;
    --color-main: #E1C4FF;
    --color-shadow: #8C1EFF; 
}

html{
    scroll-behavior: smooth;
}

body{
    box-sizing: border-box;
    background-color: #0D0126;
    margin: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

</style>
