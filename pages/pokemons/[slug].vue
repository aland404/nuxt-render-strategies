<template>
    <div v-if="pokemon">
        <div>Name: {{ pokemon.name }}</div>
        <div>Number: {{ pokemon.id }}</div>
        <div>Weight: {{ pokemon.weight }}</div>
        <div>Forms: {{ pokemon.types.map(form => form.type.name).join(', ') }}</div>
    </div>
    <br/><br/>
    <button @click="dollarFetchData('growlithe')">Fetch <strong>growlithe</strong> data with $fetch</button>
    <br/><br/>
    <button @click="useAsyncFetchData('kingler')">Fetch <strong>kingler</strong> data with useAsyncData</button>
    <br/><br/>
    <button @click="useFecthWithSSR('sandshrew')">Fetch <strong>sandshrew</strong> data with useFetch with ssr</button>
    <br/><br/>
    <button @click="useFetchWithCSROnly('magikarp')">Fetch <strong>magikarp</strong> data with useFetch only csr</button>
    <br/><br/>
    <div v-if="pokemon">
        <div>All fetched pokemon info: {{ pokemon }}</div>
    </div>
</template>

<script setup lang="ts">
type Pokemon = {
    id:number,
    name: String,
    weight: Number,
    types: [{ type: { name: String } }]
}
const route = useRoute()
const slug = route.params.slug

const { data: pokemon } = useFetch<Pokemon | null>(`https://pokeapi.co/api/v2/pokemon/${slug}`, {
    pick: ['name', 'weight', 'types', 'id']
})

const useFecthWithSSR = async (pokemonName: string) => {
    const { data } = await useFetch<Pokemon | null>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        pick: ['name', 'weight', 'types', 'id']
    })
    console.log('useFecthWithSSR', data.value)
    pokemon.value = data.value
}

const useFetchWithCSROnly = async (pokemonName: string) => {
    const { data } = await useFetch<Pokemon | null>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        server: false,
        pick: ['name', 'weight', 'types', 'id']
    })
    console.log('useFetchWithCSROnly', data.value)
    pokemon.value = data.value
}

const dollarFetchData = async (pokemonName: string) => {
    const data = await $fetch<Pokemon | null>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    console.log('dollarFetchData', data)
    pokemon.value = data
}

const useAsyncFetchData = async (pokemonName: string) => {
    const { data } = await useAsyncData<Pokemon | null>('photos',
        () => $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
        { pick: ['name', 'weight', 'types', 'id'] }
    )
    console.log('asyncFetchData', data.value)
    pokemon.value = data.value
}
</script>

