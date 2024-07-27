import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "Christian Lee Lunaba",
  description: "Christian Lee Lunaba's Portfolio Website",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/CLL.svg" sizes="any" />
      </head>
      <body>
          <Nav></Nav>
          <div className="internal">
            {children}
          </div>
          <div className="bg-black h-10 w-100 py-3 mt-20 bg-transparent">
            <hr className="opacity-25"></hr>
            <p className="text-white text-sm py-10 w-100 text-center opacity-25">&copy; 2024 Christian Lee Lunaba | Made with Next.js</p>
          </div>  
      </body>
    </html>
  )
}
