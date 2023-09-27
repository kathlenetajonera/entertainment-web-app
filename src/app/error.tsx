'use client';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="bg-navbar h-[calc(100vh-6rem)] flex flex-col items-center justify-center rounded-lg lg:mt-28 lg:h-[calc(100vh-12rem)]">
            <div className="block">
                <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    size="3x"
                    color="#5A698F"
                />
            </div>
            <p className="text-inactive mt-2">
                Something went wrong. Please try again.
            </p>
            <button
                className="bg-white py-2 px-4 rounded-lg text-sm text-inactive mt-4 cursor-pointer border-2 border-transparent transition hover:bg-transparent hover:border-white hover:text-white"
                onClick={reset}
            >
                Reload
            </button>
        </div>
    );
}
