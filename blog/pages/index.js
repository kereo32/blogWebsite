import Header from '../components/header';
import Footer from '../components/footer';
import Format from '../layout/format';

import Hero from '../components/hero';
import NewsSection from '../components/newsSection';
export default function Home() {
  return (
    <Format>
      <Hero />
      <NewsSection />
    </Format>
  );
}
