import "./globals.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SyntaxBlog",
  description: "SyntaxBlog is a platform for developers to share and discover blog posts.",
  keywords: "developer blog, programming, tech blog, coding, SyntaxBlog",
  openGraph: {
    title: "SyntaxBlog",
    description: "SyntaxBlog is a platform for developers to share and discover blog posts.",
    images: [
      {
        url: "preview.png",
        width: 1200,
        height: 630,
        alt: "SyntaxBlog Preview Image",
      },
    ],
    site_name: "SyntaxBlog",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntaxBlog",
    description: "SyntaxBlog is a platform for developers to share and discover blog posts.",
    image: "preview.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}