<template>
<body>
  <div class="container-fluid text-center ">
      <div class="container ">
      <div class="row">
      <div class="col-12 col-md-2 col-sm-3 pt-5" >
<button @click="toggleAudio" class="pauseMusic">
      <img  :class="audioPlaying ? 'fas fa-volume-mute' : 'fas fa-volume-up'" src="../img/Audio-mute.png" alt="" class="muteImg">
    </button>

    <audio ref="audioPlayer" autoplay loop>
    <source :src="audioSource" type="audio/mpeg">
  </audio>
    </div>  

    </div>
    </div>
    </div>

<div class="mt-2">
    <div class="container-fluid text-center">
      <div class="container pt-5">
      <div class="row mt-5">
      <div class="col-12 col-md-2 col-sm-3 pt-5">
        
        <img src="../img/PokeTrees.png" alt="PokeImage" width="100%" class="pt-4">
  
      
    </div>
      <div class="col-12 col-md-8 col-sm-6 row ">
        
          <img src="../img/PokemonLogo.png" alt="PokeImage" width="100%" class="pokeImmage">
    
        </div>
        <div class="col-12 col-md-2 col-sm-3 pt-5">
        
        <img src="../img/PokeTrees.png" alt="PokeImage" width="100%" class="pt-4">
  
      
    </div>
      </div>
    </div>

</div>

<div class="container-fluid col-md-6 col-sm-12 pt-5 startButton1" id="Logo">
    <div class="container pt-5">
      <div class="row justify-content-md-start mt-2" >

  <button id="enter" class="startButton"><RouterLink to="/Pokelist" style="text-decoration: none; color: #001e3c; ">
    Lets Go Catch 'Em All!!</RouterLink></button>
  
  
</div>
</div>
</div>
</div>




  
  


</body>

</template>
<script>
import TitleScreenSound from '@/assets/music/TitleScreen.mp3';
import CapturedSound from '@/assets/music/capturedPokemon.mp3';

export default {
  data() {
    return {
      audioSource: TitleScreenSound,
      audioPlaying: true,
      audioSource2: CapturedSound
    };
  },
  methods: {
    toggleAudio() {
      const audioPlayer = this.$refs.audioPlayer;

      if (this.audioPlaying) {
        audioPlayer.pause();
        
      } else {
        audioPlayer.play();
      }

      this.audioPlaying = !this.audioPlaying;
    }
  },
  beforeDestroy() {
    this.$refs.audioPlayer.pause();
  }
};

</script>
<style>
.startButton{
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 25px;
    
    background-color: #a2d4e5;
    
    

    animation: mover 1.5s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
    

}

body{
    background-color: #f5feeb;
}
.pokeLogo{
    margin-top: 100px;
    margin-bottom: 100px;
}

.pokeImmage {
  -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
    
}



.pauseMusic {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

}

.fa-volume-mute {
  color: #000;
  font-size: 24px;
}

.muteImg{
  
  height: 25px;
  align-items: center;
 
}

.startButton1{ 
  padding-bottom: 50px;
}
</style>
