<template>
    <body>


        <div>
            <h1>Pokedex</h1>
            <div class="container-fluid text-center">
                <div class="container">
                    <div class="row">
                        <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-12 text-center py-5">
                            <div class="card-heading">
                                <h2 class="pokemonName">{{ pokemon.name }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">


                        <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-12 col-md-4 col-sm-6 ">
                            <div class="type  " v-for="(value, index) in pokemon.types.slice(0, 1)" :key="'value' + index">




                                <div :class="value.type.name" class="card-image PokeCard">
                                    <router-link :to="'/pokemon/' + pokemon.id">
                                        <img :src="pokemon.sprites.front_default" @click="redirectToDescription(pokemon.id)"
                                            class="pokeImage" />
                                    </router-link>
                                </div>

                            </div>



                        </div>
                        <!--  -->
                        <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-12 col-md-8 col-sm-6">
                            <div class="card-sl" data-aos="flip-left">

                                <div class="card-text ">
                                    <h2 class="typeHeading">Type:</h2>
                                    <div class="types d-flex justify-content-center">
                                        <div class="type  " v-for="(value, index) in pokemon.types" :key="'value' + index">
                                            <span :class="value.type.name"> {{ value.type.name }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-text ">
                                    <h2 class="typeAbility">Abilities:</h2>
                                    <div class="abilities d-flex justify-content-center">
                                        <div class="ability  " v-for="(value, index) in pokemon.abilities.slice(0, 2)"
                                            :key="'value' + index">
                                            <span :class="value.ability.name"> {{ value.ability.name }}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div v-for="pokemon in pokemons" :key="pokemon.id">
            <h2 class="generalDataTitle">General Data</h2>
            <div class="container-fluid text-center">
                <div class="container">
                    <div class="row">
                        <table class="table table-bordered pokeDataTable">
                            <tbody>
                                <tr>
                                    <th>Pokemon Number:</th>
                                    <td>{{ pokemon.id }}</td>

                                </tr>
                                <tr>
                                    <th>Pokemon Name:</th>
                                    <td class="pokemonName">{{ pokemon.name }}</td>

                                </tr>
                                <tr v-for="(value, index) in pokemon.types" :key="'value' + index">

                                    <th>Type {{ index + 1 }}</th>
                                    <td>{{ value.type.name }}</td>

                                </tr>
                                <tr v-for="(value, index) in pokemon.abilities" :key="'value' + index">

                                    <th>Ability {{ index + 1 }}</th>
                                    <td>{{ value.ability.name }}</td>

                                </tr>
                                <tr v-for="(value, index) in pokemon.stats" :key="'value' + index">

                                    <th>{{ value.stat.name }}</th>
                                    <td>{{ value.base_stat }} p</td>

                                </tr>
                                <tr>
                                    <th>Height: </th>
                                    <td>{{ pokemon.height }} m</td>

                                </tr>
                                <tr v-for="(value, index) in pokemon.moves.slice(0, 4)" :key="'value' + index">

                                    <th>Starting Move {{ index + 1 }}</th>
                                    <td>{{ value.move.name }}</td>

                                </tr>
                                <tr>
                                    <th>Species: </th>
                                    <td>{{ pokemon.species.name }}</td>

                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{{ pokemon.name }}{{ pokemon.id }}@mail.com</td>

                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
        <div class="mt-2">
    <div class="container-fluid text-center">
      <div class="container">
      <div class="row mt-5">
      <div class="col-12 col-md-2 col-sm-3">
        
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
</div>  
        
    </body>
</template>




<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
    name: "Describe",
    setup() {
        const pokemons = ref([]);
        const route = useRoute();

        onMounted(async () => {
            try {
                const pokemonId = route.params.id;
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                pokemons.value.push(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        });

        return {
            pokemons
        };
    }
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
    margin-top: 40px;

}

.ability {
    margin: 0 0 20px 0;
    padding: 10px;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: capitalize;
    margin-bottom: 45px;

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
        white-space: nowrap;
    }
}

.pokeImage {
    width: 100%;

    object-fit: cover;

}

.typeHeading {
    text-align: center;

    margin-bottom: 40px;
}

.typeAbility {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
}

.PokeCard {
    border-radius: 180px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #ffffff !important;
}

.card-sl {
    padding-top: 25px;

}

.card-image img {

    max-height: 100%;
    max-width: 100%;
    border-radius: 10px 10px 10px 10px;
}

.card-heading {
    font-size: 18px;
    font-weight: bold;

    margin: 25px;

}

.card-text {
    padding: 10px 15px;

    font-size: 14px;
    color: #636262;
}

body {
    background: #f9faf8;
}

.generalDataTitle {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
}

td {
    text-transform: capitalize;
}
th {
    text-transform: capitalize;
}

h2{
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 2px;
}

h1{
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 4px;
  padding-top: 50px;
   text-align: center;
}

.pokeDataTable {
    margin-bottom: 75px;
}

</style>