import Navigation from './navigation/index'
import './globals.css'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="uk">
        <body>
        <Navigation />
        <main className="">
            {children}
        </main>
        </body>
        </html>
    )
}