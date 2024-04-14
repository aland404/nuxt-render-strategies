<template>
    <div>Product id: {{ id }}</div>
    <div>Product name: {{ queries.productName }}</div>
    <div>Is it a isVegetable: {{ isItAVegetable() }}</div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const queries = route.query

const isItAVegetable = () => {
    const isVegetable = queries.isVegetable
    if(!isVegetable) return 'maybe...'

    if(isVegetable === 'true') return 'YES'
    
    return 'NO'
}
</script>

