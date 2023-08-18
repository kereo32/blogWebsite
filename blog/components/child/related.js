import Link from 'next/link';
import Image from 'next/image';
import Author from './author';
import { BlogPost } from '../../lib/helper';
export default function Related({ relatedPosts }) {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Alakalı Yazılar</h1>

      <div className="flex flex-col gap-10">
        {relatedPosts.map((item) => {
          return BlogPost(item, {
            width: 300,
            height: 250,
            maxContentLenght: 50,
            firstDividerClasses: 'flex gap-5',
            imgDividerClasses: 'image flex flex-col justify-start',
            infoDividerClasses: 'info flex justify-center flex-col',
            catDividerClasses: 'cat',
            titleDividerClasses: 'title',
            titleTextClasses: 'text-md font-bold',
            contentClasses: '',
          });
        })}
      </div>
    </section>
  );
}
