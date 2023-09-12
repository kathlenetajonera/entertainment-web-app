const BookmarkButton = () => {
    return (
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center opacity-60">
            <svg width="12" height="14" className="stroke-white stroke-[1.5px]">
                <path
                    d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                    // stroke="#FFF"
                    // stroke-width="1.5"
                    // fill="none"
                />
            </svg>
        </div>
    );
};

export default BookmarkButton;
