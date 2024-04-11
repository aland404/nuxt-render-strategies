<template>
    <footer>
        copyright {{ copyright }}
    </footer>
</template>

<script setup lang="ts">
    const { copyright } = useAppConfig()
</script>


<style>
footer {
    background-color: lightblue;
    text-align: center;
}
</style>