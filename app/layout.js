import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/user";
import PatataProvider from "./context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lanchy App",
  description: "Lanchy app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <UserProvider>
          <PatataProvider>{children}</PatataProvider>
        </UserProvider>
      </body>
    </html>
  );
}
