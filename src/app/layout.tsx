import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ReduxProvider } from '@/_redux/provider';
import Navbar from '@/_components/Navbar';
import Attribution from '@/_components/Attribution';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const inter = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Entertainment Web App',
    description: 'Entertainment web app is a challenge from Front-End Mentor.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>
                    <div className="min-h-screen bg-dark">
                        <Navbar />

                        <main className="min-h-screen ml-32 py-12 px-8 text-white lg:ml-0 lg:p-8 lg:pb-20 md:p-5 md:pb-20">
                            {children}
                            <Attribution />
                        </main>
                    </div>
                </ReduxProvider>
            </body>
        </html>
    );
}
