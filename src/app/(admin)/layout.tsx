import NavAdmin from "@/app/components/navAdmin";

export default function TabsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <NavAdmin/>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}

