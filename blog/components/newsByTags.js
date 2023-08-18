import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
import { BlogPost } from '../lib/helper';
export default function newsByTags({ data }) {
  const { blogs } = data;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="text-4xl font-bold py-12">Ekonomi Haberleri</h1>
          <div className="flex flex-col gap-6">
            {blogs.map(
              (item) =>
                item.category == 'math' &&
                BlogPost(item, {
                  width: 300,
                  height: 250,
                  maxContentLenght: 50,
                  firstDividerClasses: 'flex gap-5',
                  imgDividerClasses: 'image flex flex-col justify-start',
                  infoDividerClasses: 'info flex justify-center flex-col',
                  catDividerClasses: 'cat',
                  titleDividerClasses: 'title',
                  titleTextClasses: 'text-md font-bold',
                  contentClasses: 'text-black-500 py-3',
                })
            )}
          </div>
        </div>
        <div className="item">
          <h1 className="text-4xl font-bold py-12">Sektör Haberleri</h1>
          <div className="flex flex-col gap-6">
            {blogs.map(
              (item) =>
                item.category == 'gaming' &&
                BlogPost(item, {
                  width: 300,
                  height: 250,
                  maxContentLenght: 50,
                  firstDividerClasses: 'flex gap-5',
                  imgDividerClasses: 'image flex flex-col justify-start',
                  infoDividerClasses: 'info flex justify-center flex-col',
                  catDividerClasses: 'cat',
                  titleDividerClasses: 'title',
                  titleTextClasses: 'text-md font-bold',
                  contentClasses: 'text-black-500 py-3',
                })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
