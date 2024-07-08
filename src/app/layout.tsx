import type { Metadata } from 'next';
import { Inter, Permanent_Marker } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import { DataProvider } from '@/utils/Provider';

const inter = Inter({ subsets: ['latin'] });

const marker = Permanent_Marker({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-marker',
});

export const metadata: Metadata = {
    title: 'Unchi Log',
    description: 'Track your unchi',
};

export default function RootLayout({
    children,
    calendar,
}: Readonly<{
    children: React.ReactNode;
    calendar: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${marker.variable} h-svh w-svw`}
            >
                <DataProvider>
                    <main className="h-full w-full flex flex-col">
                        <Nav />
                        {calendar}
                        {children}
                    </main>
                </DataProvider>
            </body>
        </html>
    );
}
