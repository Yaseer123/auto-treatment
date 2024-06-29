import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/header/NavigationBar";
import TopBar from "../components/header/TopBar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Your App Title",
    description: "Your App Description",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <TopBar />
                <NavigationBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
