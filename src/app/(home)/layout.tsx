import '../globals.css'
import Header from '@/app/(home)/components/Header'

export const metadata = {
  title: 'Cardapio-Online',
  description: 'Cardapio-Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='flex flex-col justify-center items-center bg-orange-50 p-4'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
