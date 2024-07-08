import type { Metadata } from 'next';
import { Inter, Permanent_Marker } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import { DataProvider } from './components/Provider';

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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${marker.variable} h-svh w-svw`}
            >
                <DataProvider>{children}</DataProvider>
            </body>
        </html>
    );
}
