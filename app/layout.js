import Header from "@/components/header";
// import Footer from "@/components/footer";
import "./globals.css";


export const metadata = {
  title: "Ab Shopping",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-100 text-stone-950 text-xl flex flex-col justify-around" >
        <div>
          <Header/>
        </div>
        <main className="mt-20">
        {children}
        </main>
       
      </body>
    </html>
  );
}