<template>

  <body>

    <div class="container-fluid text-center ">
      <div class="container ">
      <div class="row">
      

    </div>
    </div>
    </div>

  <div>
    <h1 style="text-align: center;">Pokedex</h1>
    <div class="container-fluid text-center">
      <div class="container">
        <div class="row">

          <div class="col-12 col-md-1 col-sm-3 pt-5" >
<button @click="toggleAudio" class="pauseMusic">
      <img  :class="audioPlaying ? 'fas fa-volume-mute' : 'fas fa-volume-up'" src="../img/Audio-mute.png" alt="" class="muteImg">
    </button>

    <audio ref="audioPlayer" autoplay >
    <source :src="audioSource" type="audio/mpeg">
  </audio>
    </div>  
          <div class="col-12 col-md-10 col-sm-9 pt-5 text-center py-5">
            <h2>Pokelist</h2>
          </div>


        </div>


        <div class="row">
          <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-12 col-md-4 col-sm-6 pokeCardSize  ">




            <div class="card-image PokeCard py-2 my-auto ">
              <router-link :to="'/pokemon/' + pokemon.id">
                <img :src="pokemon.sprites.front_default" @click="redirectToDescription(pokemon.id)" class="pokeImage" />
              </router-link>

              <h2 class="pokemonName">{{ pokemon.name }}</h2>

            </div>




          </div>
        </div>


        <!-- <div v-for="pokemon in pokemons" :key="pokemon.id">

              <h3>{{ pokemon.name }}</h3>
              <p>Base Experience: {{ pokemon.base_experience }}</p>
              <p>Weight: {{ pokemon.weight }}</p>
              <img :src="pokemon.sprites.front_default" alt="Pokemon Image" />

              <p>Abilities: {{ pokemon.abilities.map(ability => ability.ability.name).join(', ') }}</p>
            </div> -->
        <!-- Add other properties you want to display -->


      </div>
    </div>
  </div>

  <div class="mt-2 pageFooter">
    <div class="container-fluid text-center">
      <div class="container pt-5">
      <div class="row mt-5">
      <div class="col-12 col-md-1 col-sm-3 pt-5">
        
        <img src="../img/PokeGrass2.png" alt="PokeImage" width="100%" class="pt-4">
        <img src="../img/PokeGrass2.png" alt="PokeImage" width="100%" class="pt-4">
      
    </div>
    <div class="col-12 col-md-1 col-sm-3 pt-5">
        
        <img src="../img/PokeGrass2.png" alt="PokeImage" width="100%" class="pt-4">
        <img src="../img/PokeGrass2.png" alt="PokeImage" width="100%" class="pt-4">
        
  
      
    </div>
      <div class="col-12 col-md-8 col-sm-6 row ">
        
          <img src="../img/PokemonLogo.png" alt="PokeImage" width="100%" class="pokeImmage">
    
        </div>
        <div class="col-12 col-md-1 col-sm-3 pt-5">
        
        <img src="../img/PokeGrass3.png" alt="PokeImage" width="100%" class="pt-4">
        <img src="../img/PokeGrass3.png" alt="PokeImage" width="100%" class="pt-4">
  
      
    </div>
    <div class="col-12 col-md-1 col-sm-3 pt-5">
        
        <img src="../img/PokeGrass3.png" alt="PokeImage" width="100%" class="pt-4">
        <img src="../img/PokeGrass3.png" alt="PokeImage" width="100%" class="pt-4">
  
      
    </div>
      </div>
    </div>
</div>

</div>
  </body>
</template>
  
<script>
//Importar las funciones necesarias de Vue
//   import { ref, onMounted } from 'vue';
//   import axios from 'axios';

//   export default { //Exportar el componente

//     data() {
//       return {
//         pokemons: [],
//       }
//     },
//     name: 'App', //Nombre del componente
//     setup() { //Función setup que sirve para inicializar el componente
//       const pokemons = ref([]); //Variable reactiva que almacena los pokemons

//       onMounted(async () => {   //Función que se ejecuta cuando el componente se monta en el DOM
//             try {
//             for (let index = 1; index < 152; index++) {
//                 const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`); //Petición a la API
//                 console.log(response.data);
//                 console.log(response.data.moves);


//               pokemons.value = response.data.results; //Asignar los resultados de la petición a la variable reactiva
//             }
//         } catch (error) {
//           console.error(error);
//         }
//       });

//       return {
//         pokemons
//       };
//     }
//   };

import { ref, onMounted } from 'vue';
import axios from 'axios';
import CapturedSound from '@/assets/music/capturedPokemon.mp3';

export default {
  name: "App",
  data() {
    return {
      pokemons: [],
      audioSource: CapturedSound,
      audioPlaying: true
      

    };
  },
  setup() {
    const pokemons = ref([]);
    onMounted(async () => {
      try {
        for (let index = 1; index < 152; index++) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`);
          console.log(response.data);
          //console.log(response.data.moves);
          pokemons.value.push(response.data); // Push each Pokemon data to the reactive array

        }
      }
      catch (error) {
        console.error(error);
      }
    });
    return {
      pokemons
    };
  },
  methods: {
    redirectToDescription(pokemonId) {
      this.$router.push('/pokemon/' + pokemonId);
    }, toggleAudio() {
      const audioPlayer = this.$refs.audioPlayer;

      if (this.audioPlaying) {
        audioPlayer.pause();

      } else {
        audioPlayer.play();
      }

      this.audioPlaying = !this.audioPlaying;
    },beforeDestroy() {
    this.$refs.audioPlayer.pause();
  }
    
  },
  


};
</script>


<style lang="scss" scoped>
.type {
  .grass {
    background: rgb(3, 139, 44) !important;
  }

  .poison {
    background: rgb(74, 7, 105) !important;
  }

  .water {
    background: rgb(8, 135, 219) !important;
  }

  .dragon {
    background: rgb(27, 2, 68) !important;
  }

  .ice {
    background: rgb(78, 199, 255) !important;
  }

  .flying {
    background: rgb(145, 215, 255) !important;
  }

  .fire {
    background: rgb(238, 135, 17) !important;
  }

  .ghost {
    background: rgb(74, 52, 87) !important;
  }

  .fighting {
    background: rgb(122, 0, 0) !important;
  }

  .normal {
    background: rgb(104, 104, 104) !important;
  }

  .psychic {
    background: rgb(195, 0, 255) !important;
  }

  .bug {
    background: rgb(52, 87, 6) !important;
  }

  .dark {
    background: rgb(43, 43, 43) !important;
  }

  .steel {
    background: rgb(116, 116, 116) !important;
  }

  .fairy {
    background: rgb(248, 165, 237) !important;
  }

  .eletric {
    background: rgb(255, 217, 1) !important;
  }

  .rock {
    background: rgb(88, 95, 100) !important;
  }

  .ground {
    background: rgb(92, 70, 70) !important;
  }
}

.pokemonName {
  text-transform: capitalize;
}

.types,
.abilities {
  margin-top: 20px;

}

.ability {
  margin: 0 0 20px 0;
  padding: 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;

  span {
    background: #A9AAAE;
    color: #ffe878;
    padding: 10px;
    border-radius: 29px;
    // border: 1px solid black;
  }
}

.type {
  // color: rgb(17, 67, 182);
  margin: 0 0 20px 0;
  padding: 10px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: capitalize;

  span {
    color: #ffffff !important;
    padding: 10px;
    border-radius: 29px;
  }
}

.pokeImage {

  width: 100%;
  object-fit: cover;
}

.PokeCard {
  border-radius: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: beige;
  margin-left: 50px;
  width: 75%;
  
}

.card-image img {
  width: 50%;

}

.pokeCardSize{
margin-top: 25px;

}

body {
    background: #def5ff;
}

h2 {
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 2px;
    
}
h1{
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 2px;
    padding-top: 75px;
}

.pageFooter{
  padding-bottom: 50px;
}

</style>