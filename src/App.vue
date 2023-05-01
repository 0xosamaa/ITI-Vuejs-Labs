<template>
    <div>
        <NavbarComponent />
        <router-view></router-view>
    </div>
</template>

<script>
import BooksComponent from './components/BooksComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import WishlistComponent from './components/WishlistComponent.vue';
export default {
    name: 'App',
    components: { BooksComponent, NavbarComponent, WishlistComponent },
};
</script>
