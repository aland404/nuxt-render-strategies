<template>
    <Header>
        <div>
            <div class="nav-list">
                <a>Layouts:</a>
                <nav><NuxtLink to="/custom">Custom Layout</NuxtLink></nav>
                <nav><NuxtLink to="/nuxt-layout-component">Nuxt Layout Component</NuxtLink></nav>
            </div>
            <div class="nav-list">
                <a>Route params:</a>
                <nav><NuxtLink to="/products">Static product list</NuxtLink></nav>
                <nav><NuxtLink to="/pokemons">Fetched pokemon list</NuxtLink></nav>
            </div>
        </div>
    </Header>
    <slot/>
    <Footer/>
</template>

<style>
.nav-list {
    display: flex;
    justify-content: center;
}

a, nav {
    margin: 10px;
}
</style>