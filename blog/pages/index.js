import useSWR from 'swr';
import Format from '../layout/format';
import db from '../lib/db';

import Hero from '../components/hero';
import NewsSection from '../components/newsSection';
import NewsByTags from '../components/newsByTags';

export default function Home({ data }) {
  return (
    <Format>
      <Hero data={data} />
      <NewsSection data={data} />
      <NewsByTags data={data} />
    </Format>
  );
}

async function fetchBlogs() {
  const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?limit=10');

  const data = await response.json();
  return data;
}

export async function getStaticProps() {
  const data = await fetchBlogs();
  db.query('SELECT * FROM BlogPosts', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    console.log('Data fetched successfully', results);
  });
  return {
    props: {
      data,
    },
  };
}
