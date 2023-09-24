'use client';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
    className?: string;
    children: JSX.Element[];
};

const ListSlider = ({ children, className }: Props) => {
    const [hasLoaded, setHasLoaded] = useState(false);

    const CustomNextArrow = (props: any) => {
        const { onClick } = props;

        return (
            <div
                onClick={onClick}
                className={`absolute top-0 right-0 z-10 bg-gradient-to-l from-[rgba(0,0,0,0.6)] h-full px-10 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in cursor-pointer hover:opacity-100`}
            >
                <FontAwesomeIcon icon={faAngleRight} size="2xl" />
            </div>
        );
    };

    const CustomPrevArrow = (props: any) => {
        const { onClick } = props;

        return (
            <div
                onClick={onClick}
                className={`absolute top-0 left-0 z-10 bg-gradient-to-r from-[rgba(0,0,0,0.6)] h-full px-10 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in cursor-pointer hover:opacity-100`}
            >
                <FontAwesomeIcon icon={faAngleLeft} size="2xl" />
            </div>
        );
    };

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    useEffect(() => {
        setHasLoaded(true);
    }, []);

    return hasLoaded ? (
        <Slider {...config} className={className || ''}>
            {children}
        </Slider>
    ) : (
        <>
            <div className="flex mt-8 w-[calc(100%+1.9rem)] mt-5 mb-14 overflow-x-hidden md:w-[calc(100%+1.1rem)]">
                {...Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="w-[28rem] h-[14rem] shrink-0 mr-10 rounded-lg bg-navbar md:w-[18rem] md:mr-6 md:h-[12rem]"
                        ></div>
                    ))}
            </div>
        </>
    );
};

export default ListSlider;
