<template>
    <ul>
        <li @click="goToProductDetails(1, 'Choux fleur', true)">Choux fleur</li>
        <li @click="goToProductDetails(2, 'Pot de fleur')">Pot de fleur</li>
        <li @click="goToProductDetails(3, 'Carafe à vin')">Carafe à vin</li>
        <li @click="goToProductDetails(4, 'Pied de table')">Pied de table</li>
        <li @click="goToProductDetails(5, '3 carottes', true)">3 carottes</li>
    </ul>
</template>

<script setup lang="ts">
const goToProductDetails = (productId: number, productName: string, isVegetable = false) => {
    navigateTo({path: `/products/${productId}`, query: {productName, isVegetable: isVegetable.toString()}})
    console.log({productId}, {productName}, {isVegetable})
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