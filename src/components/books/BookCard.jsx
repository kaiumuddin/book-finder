import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import BookImage from "../../assets/book.png";

export default function BookCard({ book, onFav }) {
    return (
        <div className="space-y-3 flex flex-col">
            {/* <!-- thumbnail --> */}
            <div className="flex-1 flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
                <img
                    className="max-w-[144px]"
                    src={book.image}
                    alt={book.title}
                />
            </div>
            {/* <!-- info --> */}
            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl">
                    {book.title} ({book.published})
                </h4>
                <p className="text-xs lg:text-sm">
                    By : <span>{book.author}</span>
                </p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">
                        ${book.price}
                    </h4>
                    {/* <!-- stars --> */}
                    <div className="flex items-center space-x-1">
                        {Array(book.rating)
                            .fill(0)
                            .map((item, index) => (
                                <FaStar key={index} />
                            ))}
                        {Array(5 - book.rating)
                            .fill(0)
                            .map((item, index) => (
                                <FaRegStar key={index} />
                            ))}
                        <span className="text-xs lg:text-sm">
                            ({book.rating})
                        </span>
                    </div>
                    {/* <!-- stars ends --> */}
                </div>

                <div className="flex items-center gap-3 text-xs lg:text-sm">
                    <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                        <FaCartPlus />
                        Add to Cart
                    </button>
                    {book.isFavourite ? (
                        <button
                            onClick={() => onFav(book)}
                            className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                        >
                            <FaRegHeart />
                            Favourite
                        </button>
                    ) : (
                        <button
                            onClick={() => onFav(book)}
                            className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] transition-all hover:bg-[#DC2954]/[24%] lg:py-1.5"
                        >
                            <FaHeart />
                            Favourite
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
