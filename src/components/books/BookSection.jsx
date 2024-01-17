import BooksGrid from "./BooksGrid";
import Header from "./Header";
import data from "../../../data.json";
import { useState } from "react";

export default function BookSection() {
    const [books, setBooks] = useState(data.books);

    function handleSearch(searchTerm) {
        if (searchTerm === "") {
            const filtered = books.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setBooks(filtered);
        }
    }

    function handleFavourite(favBook) {
        const newBooks = [...books];
        const favBookIndex = newBooks.findIndex(
            (book) => book.id === favBook.id
        );

        newBooks[favBookIndex].isFavourite =
            !newBooks[favBookIndex].isFavourite;

        setBooks(newBooks);
    }

    return (
        <main className="my-10 lg:my-14">
            <Header onSearch={handleSearch} />
            <BooksGrid books={books} onFav={handleFavourite} />
        </main>
    );
}
