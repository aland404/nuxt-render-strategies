<template>
    <div>_Environment variables_</div>
    <div>Secrets, only available server-side</div>
    <div>{{ secretVars }}</div>
    <div>Publics, are also available client-side</div>
    <div>Public: {{ publicVars }}</div>
    <br/>
    <div>_Public variables that can be determined at build time_</div>
    <div>{{ appConfig }}</div>
</template>

<script setup lang="ts">
    const { public: publicVars, app, nitro, ...secretVars} = useRuntimeConfig()
    const {nuxt, ...appConfig} = useAppConfig()
</script>