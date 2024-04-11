<template>
    <header>
        <h1>{{ title }}</h1>
        <slot />
    </header>
</template>

<script setup lang="ts">
    const { title } = useAppConfig()
</script>

<style>
header {
    background-color: lightblue;
    text-align: center;
}
</style>