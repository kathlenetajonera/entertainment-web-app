'use client';
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
    const CustomNextArrow = (props: any) => {
        const { onClick } = props;

        return (
            <div
                onClick={onClick}
                className={`absolute top-0 right-0 z-10 bg-[rgba(0,0,0,0.4)] h-full px-8 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in cursor-pointer hover:opacity-100`}
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
                className={`absolute top-0 left-0 z-10 bg-[rgba(0,0,0,0.4)] h-full px-8 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in cursor-pointer hover:opacity-100`}
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

    return (
        <Slider {...config} className={className || ''}>
            {children}
        </Slider>
    );
};

export default ListSlider;
