'use client';
import { usePathname } from 'next/navigation';

function Loading() {
    const pathname = usePathname();

    return (
        <div className="animate-pulse lg:mt-28 md:mt-24">
            <div className="w-full bg-navbar h-[3.125rem] rounded-md"></div>

            {pathname === '/' && (
                <>
                    <div className="w-64 h-[3.125rem] mt-5 bg-navbar"></div>
                    <div className="flex mt-8 w-[calc(100%+1.8rem)] mb-14">
                        {...Array(4)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[28rem] h-[14rem] shrink-0 mr-10 rounded-lg bg-navbar"
                                ></div>
                            ))}
                    </div>
                </>
            )}

            <div className={`w-64 h-[3.125rem] mt-5 bg-navbar`}></div>
            <div className="grid grid-cols-fluid gap-10 mt-8 md:gap-6">
                {...Array(20)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="w-full h-[11rem] rounded-lg bg-navbar"
                        ></div>
                    ))}
            </div>
        </div>
    );
}

export default Loading;
