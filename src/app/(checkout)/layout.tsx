import Header from "./components/Header"
import "../../app/globals.css"
export const metadata = {
  title: 'Confirmar Compra',
  description: 'Confirmar Compra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='flex flex-col justify-center items-center bg-orange-50'>
        <main className="w-full flex flex-col items-center justify-center gap-4 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
