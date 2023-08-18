import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';
import { BlogPost } from '../lib/helper';
export default function newsSection({ data }) {
  const { blogs } = data;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">En Son Haberler</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.map((item) =>
          BlogPost(item, {
            width: 300,
            height: 250,
            maxContentLenght: 200,
            firstDividerClasses: 'item',
            imgDividerClasses: 'image',
            infoDividerClasses: 'info flex justify-center flex-col py-4',
            catDividerClasses: 'cat',
            titleDividerClasses: 'title',
            titleTextClasses: 'text-xl font-bold',
            contentClasses: 'text-black-500 py-3',
          })
        )}
      </div>
    </section>
  );
}
