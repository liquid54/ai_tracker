import Navigation from "@/app/navigation";

export default function TabsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <body>
            <Navigation/>
            {children}
        </body>
    );
}