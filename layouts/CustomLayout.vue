<template>
    <header>
        <h1>My custom layout</h1>
        <div class="nav-list">
            <nav><NuxtLink to="/">Home - Default layout</NuxtLink></nav>
            <nav><NuxtLink to="/nuxt-layout-component">Nuxt layout component</NuxtLink></nav>
        </div>
    </header>
    <slot/>
    <footer>My custom footer</footer>
</template>

<style scoped>
header, footer {
    background-color: lightcoral;
    text-align: center;
}

.nav-list {
    display: flex;
    justify-content: center;
}

nav {
    margin: 10px;
}
</style>