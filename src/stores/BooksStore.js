import { defineStore } from 'pinia';

export const useBooksStore = defineStore('books', {
    state: () => ({
        books: [],
        wishlist: [],
    }),
    actions: {
        async getAllBooks() {
            const response = await fetch('http://localhost:3000/books');
            const books = await response.json();
            this.books = books;
        },
        addToWishlist(book) {
            if (this.isInWishlist(book)) return;

            this.wishlist.push(book);
        },
        isInWishlist(book) {
            return this.wishlist.some((ibook) => ibook.ISBN == book.ISBN);
        },
        removeFromWishlist(book) {
            if (this.isInWishlist(book)) {
                this.wishlist.splice(book, 1);
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
});
