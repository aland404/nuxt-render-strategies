<template>
    <b>Display the pokemon from number {{  firstNumber }} to {{ lastNumber }}</b>
    <ul v-if="data?.results">
        <li
            v-for="(pokemon, index) in data.results"
            :key="pokemon.name"
            @click="goToPokemonDetails(pokemon.name)">
            {{pokemon.name}} ({{ index + 1 + offset }})
        </li>
    </ul>
    <button :disabled="firstNumber === 1" @click="displayPreviousPokemons">Display the previous {{ limit }} pokemons</button>
    <button @click="displayNextPokemons">Display the next {{ limit }} pokemons</button>
</template>

<script setup lang="ts">
const offset = ref(0)
const limit = ref(10)
const firstNumber = ref(1)
let lastNumber = 10

type Results = {
    results: { name: string, url: 'string' }[]
}
const { data } = await useFetch<Results>(`https://pokeapi.co/api/v2/pokemon?limit=${limit.value}`, {
    method:'get',
    query: { offset },
    server: false
})

const goToPokemonDetails = (pokemonSlug: string) => {
    navigateTo({path: `/pokemons/${pokemonSlug}`})
}

const displayNextPokemons = async () => {
    firstNumber.value += limit.value
    lastNumber += limit.value
    offset.value += limit.value
}
const displayPreviousPokemons = async () => {
    firstNumber.value -= limit.value
    lastNumber -= limit.value
    offset.value -= limit.value
}
</script>

<style scoped>
ul {
    list-style-type: disclosure-closed;
    padding: 0;
}

li {
    cursor: pointer;
    width: fit-content;
    margin-bottom: 10px;
    padding: 5px;
    text-decoration: underline;
    background-color: #f2f2f2;
}
</style>