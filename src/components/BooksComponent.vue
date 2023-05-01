<template>
    <div class="container my-5">
        <div class="row books">
            <div
                class="card col-sm-12 col-md-4"
                style="width: 18rem"
                v-for="book in useBooksStore.books"
                :key="book.id"
            >
                <img
                    :src="book.image"
                    class="card-img-top w-100"
                    :alt="book.title"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        {{ book.title }}
                        <span
                            style="
                                color: lightgray;
                                font-size: 0.8rem;
                                float: right;
                            "
                            >{{ book.category }}</span
                        >
                    </h5>

                    <p class="card-text">
                        <span
                            style="
                                color: red;
                                font-weight: bold;
                                font-size: 1.5rem;
                            "
                            >{{ useBooksStore.formatCurrency(book.price) }}</span
                        ><span style="float: right"
                            >{{ book.pages_no }} Pages</span
                        >
                    </p>
                    <div
                        class="d-flex justify-content-between alig-items-baseline"
                    >
                        <button
                            @click="useBooksStore.addToWishlist(book)"
                            class="btn btn-success"
                            :disabled="useBooksStore.isInWishlist(book)"
                        >
                            Add to Wishlist
                        </button>
                        <span style="font-weight: bold; font-size: 0.8rem"
                            >Stock:
                            <span
                                :class="[book.stock > 50 ? 'more' : 'less']"
                                >{{ book.stock }}</span
                            ></span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useBooksStore } from '@/stores/BooksStore';
export default {
    name: 'BooksComponent',
    components: {},
    data() {
        return {
            useBooksStore: useBooksStore(),
        };
    },

    methods: {},

    async mounted() {
        await this.useBooksStore.getAllBooks();
    },
};
</script>
<style>
.more {
    color: green;
}

.less {
    color: red;
}
</style>
