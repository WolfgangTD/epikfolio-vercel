import NavBar from "../components/navbar/page"

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className='bg-gradient-to-b from-cyan-900 to-green-700' ><NavBar></NavBar>{children}</section>
  }