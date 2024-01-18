import BooksGrid from "./BooksGrid";
import Header from "./Header";
import data from "../../../data.json";
import { useState } from "react";

export default function BookSection() {
    const [books, setBooks] = useState(data.books);
    const [sortOption, setSortOption] = useState("");

    function handleSearch(searchTerm) {
        const sortedBooks = sortBook(data.books, sortOption);
        if (searchTerm !== "") {
            const filtered = sortedBooks.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setBooks(filtered);
        } else {
            setBooks(sortedBooks);
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

    function sortBook(newBooks, option) {
        if (option === "year_asc") {
            newBooks.sort((a, b) => a.published - b.published);
        } else if (option === "year_desc") {
            newBooks.sort((a, b) => b.published - a.published);
        } else if (option === "name_asc") {
            newBooks.sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === "name_desc") {
            newBooks.sort((a, b) => b.title.localeCompare(a.title));
        }

        return newBooks;
    }

    function handleSort(option) {
        const sortedBooks = sortBook(books, option);
        setBooks(sortedBooks);
        setSortOption(option);
    }

    return (
        <main className="my-10 lg:my-14">
            <Header
                onSearch={handleSearch}
                sortOption={sortOption}
                onSort={handleSort}
            />
            <BooksGrid books={books} onFav={handleFavourite} />
        </main>
    );
}
