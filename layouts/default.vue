<template>
    <Header>
        <div class="nav-list">
            <nav><NuxtLink to="/custom">Custom Layout</NuxtLink></nav>
            <nav><NuxtLink to="/nuxt-layout-component">Nuxt Layout Component</NuxtLink></nav>
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

nav {
    margin: 10px;
}
</style>