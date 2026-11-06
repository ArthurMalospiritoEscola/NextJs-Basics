
import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Next.Js Basics",
  description:"Funcionalidades básicas do Next.Js"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col ">
        <Header/>
        {children}
      </body>
    </html>
  );
}
