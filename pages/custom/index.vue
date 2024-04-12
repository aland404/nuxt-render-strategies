<template>
    <div><strong>This is my /custom page content with a custom layout</strong></div>
    <button @click="toggleLayout">Toggle layout</button>
</template>


<script setup>
    definePageMeta({
        layout:'custom-layout'
    })

    const route = useRoute()

    const toggleLayout = () => {
        setPageLayout(route.meta.layout === 'default' ? 'custom-layout' : 'default')
    }
</script>