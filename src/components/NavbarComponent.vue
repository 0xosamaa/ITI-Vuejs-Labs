<template>
    <nav class="navbar navbar-dark bg-dark">
        <router-link to="/">
            <button
                class="navbar-brand bg-transparent"
                style="border: none; outline: none"
            >
                Books Store
            </button>
        </router-link>
        <router-link to="/wishlist">
            <button class="btn btn-success my-2 my-sm-0">
                {{ useBooksStore.wishlist.length }}
                {{ useBooksStore.wishlist.length == 1 ? 'Item' : 'Items' }} in
                Wishlist
            </button>
        </router-link>
    </nav>
</template>

<script>
import { useBooksStore } from '@/stores/BooksStore';

export default {
    data() {
        return {
            useBooksStore: useBooksStore(),
        };
    },
};
</script>
