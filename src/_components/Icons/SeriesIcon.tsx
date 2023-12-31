'use client';
import { usePathname } from 'next/navigation';

type Props = {
    href?: string;
    customConfig?: any;
};

const SeriesIcon = ({ href, customConfig }: Props) => {
    const pathname = usePathname();
    let isActive = true;

    if (href) {
        isActive = pathname === href;
    }

    return (
        <svg
            width="20"
            height="20"
            className={`mx-auto fill-inactive transition-fill duration-300 hover:fill-white ${
                isActive ? 'fill-white' : ''
            }`}
            viewBox="0 0 20 20"
            {...customConfig}
        >
            <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
        </svg>
    );
};

export default SeriesIcon;
