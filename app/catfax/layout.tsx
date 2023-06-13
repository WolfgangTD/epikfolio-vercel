import NavBar from '../components/navbar/page';

export default function CatFactsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className='bg-zinc-800'><NavBar></NavBar>{children}</section>
  }