import NavBar from "../components/navbar/page"

export default function ElgatoLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className='bg-orange-500'><NavBar></NavBar>{children}</section>
  }