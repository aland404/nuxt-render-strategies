<template>
    <header>
        <h1>My nuxt layout component</h1>
        <div class="nav-list">
            <nav><NuxtLink to="/">Home - Default layout</NuxtLink></nav>
            <nav><NuxtLink to="/custom">Custom layout</NuxtLink></nav>
        </div>
    </header>
    <slot/>
    <footer>My custom footer</footer>
</template>

<style scoped>
header, footer {
    background-color: lightgreen;
    text-align: center;
}
</style>

<style>
.nuxt-page {
  padding: 0px;
}

.nav-list {
    display: flex;
    justify-content: center;
}

nav {
    margin: 10px;
}
</style>