import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import '@/ui/globals.css';
import { newsreader } from '@/ui/fonts';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
	title: {
		template: '%s | Paw Squad',
		default: 'Paw Squad'
	},
	description: 'a friendly pet adoption application built with nextjs.',
	icons: { icon: '/pets.png' }
};

export default function RootLayout({ children } : Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${newsreader.className} p-0 m-0 box-border flex flex-col h-screen mx-auto max-w-[2000px] antialiased`}>
				<SessionProvider>
					<Header/>
					<main className="flex-1">
						{children}
					</main>
					<Footer/>
				</SessionProvider>
			</body>
		</html>
	);
}