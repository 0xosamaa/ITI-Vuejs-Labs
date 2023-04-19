<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <button
                @click.prevent="toggleWishlistVisible"
                class="navbar-brand bg-transparent"
                style="border: none; outline: none"
            >
                Books Store
            </button>
            <button
                @click="toggleWishlistVisible"
                class="btn btn-success my-2 my-sm-0"
            >
                {{ wishlist.length }}
                {{ wishlist.length == 1 ? 'Item' : 'Items' }} in Wishlist
            </button>
        </nav>

        <div class="container my-5">
            <div v-if="!isWishlistVisible" class="row books">
                <div
                    class="card col-sm-12 col-md-4"
                    style="width: 18rem"
                    v-for="book in books"
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
                                >{{ formatCurrency(book.price) }}</span
                            ><span style="float: right"
                                >{{ book.pages_no }} Pages</span
                            >
                        </p>
                        <div
                            class="d-flex justify-content-between alig-items-baseline"
                        >
                            <button
                                @click.once="addToWishlist(book)"
                                class="btn btn-success"
                                :disabled="isInWishlist(book)"
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
            <div v-if="isWishlistVisible" class="wishlist">
                <h1>Wishlist</h1>
                <div class="row">
                    <div
                        class="card col-sm-12 col-md-4"
                        style="width: 18rem"
                        v-for="book in wishlist"
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
                                    >{{ formatCurrency(book.price) }}</span
                                ><span style="float: right"
                                    >{{ book.pages_no }} Pages</span
                                >
                            </p>
                            <div
                                class="d-flex justify-content-between alig-items-baseline"
                            >
                                <button
                                    @click.once="removeFromWishlist(book)"
                                    class="btn btn-success"
                                >
                                    Remove From Wishlist
                                </button>
                                <span
                                    style="font-weight: bold; font-size: 0.8rem"
                                    >Stock:
                                    <span
                                        :class="[
                                            book.stock > 50 ? 'more' : 'less',
                                        ]"
                                        >{{ book.stock }}</span
                                    ></span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    components: {},
    data() {
        return {
            books: [],
            wishlist: [],
            isWishlistVisible: false,
        };
    },

    methods: {
        toggleWishlistVisible() {
            this.isWishlistVisible = !this.isWishlistVisible;
        },
        addToWishlist(book) {
            if (this.isInWishlist(book)) return;

            this.wishlist.push(book);
        },
        isInWishlist(book) {
            return this.wishlist.some((ibook) => ibook.id == book.id);
        },
        removeFromWishlist(book) {
            if (this.isInWishlist(book)) {
                this.wishlist = this.wishlist.filter((ibook) => {
                    return ibook.id != book.id;
                });
            }
        },
        formatCurrency(price) {
            const formattedPrice = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(price);

            return formattedPrice;
        },
    },

    mounted() {
        this.getBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books');
                this.books = response.data;
            } catch (err) {
                console.log(err);
            }
        };
        this.getBooks();
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
