const app = Vue.createApp({
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
            const exists = this.wishlist.some((ibook) => ibook.id == book.id);
            if (exists) return;
            
            this.wishlist.push(book);
        },
        removeFromWishlist(book) {
            const exists = this.wishlist.some((ibook) => ibook.id == book.id);
            if (exists) {
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
        getBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books');
                this.books = response.data;
            } catch (err) {
                console.log(err);
            }
        };
        getBooks();
    },
});

app.mount('#root');
