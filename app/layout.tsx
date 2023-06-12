import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className='bg-zinc-800'>
                {children}
            </body>
        </html>
    );
}