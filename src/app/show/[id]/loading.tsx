function Loading() {
    return (
        <div className="animate-pulse max-w-[1536px] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-1 lg:mt-28">
                <div className="w-[350px] h-[525px] bg-navbar rounded-md mx-auto" />
                <div className="pt-6">
                    <div className="flex justify-between">
                        <div className="w-64 h-[3.125rem] bg-navbar" />

                        <div className="flex items-center">
                            <div className="w-32 h-[3.125rem] bg-navbar" />
                        </div>
                    </div>
                    <div className="mt-2 flex items-center">
                        <div className="w-32 h-6 bg-navbar" />
                    </div>
                    <div className="mt-3 flex items-center">
                        <div className="w-52 h-10 bg-navbar" />
                    </div>
                    <div className="mt-8">
                        <div className="w-full h-32 bg-navbar" />
                        <div className="my-8">
                            <div className="w-60 h-8 bg-navbar mb-2" />
                            <div className="w-60 h-8 bg-navbar mb-2" />
                            <div className="w-60 h-8 bg-navbar mb-2" />
                        </div>
                        <div className="w-60 h-10 bg-navbar mb-2" />
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="w-64 h-[3.125rem] bg-navbar" />

                <div className="grid grid-cols-4 gap-10 mt-6 lg:grid-cols-2 md:grid-cols-1 md:gap-6">
                    {...Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="w-full h-[11rem] rounded-lg bg-navbar"
                            ></div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Loading;
