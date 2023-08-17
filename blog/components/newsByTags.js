import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
export default function newsByTags({ data }) {
  const { blogs } = data;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="text-4xl font-bold py-12">Ekonomi Haberleri</h1>
          <div className="flex flex-col gap-6">{blogs.map((item) => item.category == 'math' && Post(item))}</div>
        </div>
        <div className="item">
          <h1 className="text-4xl font-bold py-12">Sektör Haberleri</h1>
          <div className="flex flex-col gap-6">{blogs.map((item) => item.category == 'gaming' && Post(item))}</div>
        </div>
      </div>
    </section>
  );
}

function Post(blog) {
  const MAX_CONTENT_LENGTH = 50;

  const truncatedContent = blog.content_text.length > MAX_CONTENT_LENGTH ? blog.content_text.slice(0, MAX_CONTENT_LENGTH) + '...' : blog.content_text;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={'/'}>
          <Image src={blog.photo_url} className="rounded" alt="Cover image" width={300} height={250} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            {blog.category.toUpperCase()} Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            {blog.created_at.split('-')[0]}-{blog.created_at.split('-')[1]}
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className=" text-md font-bold">
            {blog.title}
          </Link>
        </div>
        <p className="text-black-500 py-3">{truncatedContent}</p>
        <Author />
      </div>
    </div>
  );
}
