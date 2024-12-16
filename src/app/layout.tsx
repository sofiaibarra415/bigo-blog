import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/ui/Navigation"; // Componente cliente
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-primary text-primary-foreground py-4">
            <div className="container mx-auto">
              <Navigation />
            </div>
          </header>
          <Layout>{children}</Layout>
          <footer className="bg-white m--10 p-4 text-center text-gray-700">
            <div className="container text-center mx-auto">
              <p>&copy; 2024 PetBlog. Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
