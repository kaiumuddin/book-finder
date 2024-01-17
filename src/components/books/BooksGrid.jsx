import BookCard from "./BookCard";

export default function BooksGrid({ books, onFav }) {
    return (
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
                <BookCard key={book.id} book={book} onFav={onFav} />
            ))}
        </div>
    );
}
