import Link from 'next/link';
import Image from 'next/image';
import Author from './author';
export default function Related({ relatedPosts }) {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Alakalı Yazılar</h1>

      <div className="flex flex-col gap-10">
        {relatedPosts.map((item) => {
          return Post(item);
        })}
      </div>
    </section>
  );
}

function Post(item) {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={'/'}>
          <Image src={item.photo_url} className="rounded" alt="Cover image" width={300} height={200} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            {item.category.toUpperCase()} Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            {item.created_at.split('-')[0]}-{item.created_at.split('-')[1]}
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className=" text-md font-bold">
            {item.title}
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
