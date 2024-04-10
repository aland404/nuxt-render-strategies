<template>
    <div>Affichage des variables d'environnements accessible depuis le client:</div>
    <div>Public: {{ publicVars }}</div>
    <div>Secret: {{ secretVars }}</div>
</template>

<script setup lang="ts">
    const { public: publicVars, app, nitro, ...secretVars} = useRuntimeConfig()
</script>