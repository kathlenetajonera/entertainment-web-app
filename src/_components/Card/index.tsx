import BookmarkButton from '@/_components/Icons/BookmarkButton';
import MovieIcon from '@/_components/Icons/MovieIcon';

const Card = () => {
    return (
        <div>
            <div className="h-[11rem] p-4 rounded-lg flex flex-col justify-between bg-[url('/images/sample-bg.jpg')] bg-no-repeat bg-cover bg-blend-multiply bg-[rgba(0,0,0,0.1)]">
                <div className="ml-auto">
                    <BookmarkButton />
                </div>
            </div>
            <div className="mt-2">
                <div className="flex items-center">
                    <p className="text-xs font-extralight">2019</p>
                    <p className="flex items-center text-xs font-extralight px-2 before:content-['•'] before:pr-2 after:content-['•'] after:pl-2">
                        <span className="mr-2">
                            <MovieIcon
                                customConfig={{
                                    width: 12,
                                    height: 12,
                                }}
                            />
                        </span>
                        Movie
                    </p>
                    <p className="text-xs font-extralight">PG</p>
                </div>

                <div>
                    <h2 className="text-lg">Beyond Earth</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
