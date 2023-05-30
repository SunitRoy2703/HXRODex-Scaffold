
import { FC, useCallback } from 'react';
import { useRouter } from 'next/router';

export const OpenDex: FC = () => {
    const router = useRouter();

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-white"
                    onClick={() => router.push('/dex')}>
                    <span>Launch App</span>

                </button>
            </div>
        </div>
    );
};
