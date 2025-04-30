<template>
    <div>
        <h1>Catálogo de Libros</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.title }} - {{ book.published_year }}
            </li>
        </ul>
    </div>
</template>

<script>
import BookService from '@/services/BookService'

export default {
    name: 'BookList',
    data() {
        return {
            books: []
        }
    },
    created() {
        BookService.getBooks().then(response => {
            this.books = response.data
        }).catch(error => {
            console.error("Error al obtener los libros:", error)
        })
    }
}
</script>