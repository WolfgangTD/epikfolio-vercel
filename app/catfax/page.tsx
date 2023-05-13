import Head from "next/head"
import Link from "next/link";
import { InferGetStaticPropsType, GetStaticProps } from 'next';

type Post = {
	fact: string;
	length: 0;
  };

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
	context,
  ) => {
	const res = await fetch('https://catfact.ninja/fact?max_length=200');
	const posts: Post[] = await res.json();
   
	return {
	  props: {
		posts,
	  },
	};
  };

function CatFax({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
    <>
		<div className='text-center'>

		<Head>
        <title>Cat Facts</title>
      	</Head>
			<main>
			<p className="text-white">
				Cat Fact:
				
			</p>
			</main>
		</div>
    </>
	);
}

export default CatFax