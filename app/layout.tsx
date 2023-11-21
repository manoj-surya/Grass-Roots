import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/index'
import './globals.css'

export const metadata: Metadata = {
  title: 'BBB BRICKS',
  description: 'Red Bricks Manufacturing Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
