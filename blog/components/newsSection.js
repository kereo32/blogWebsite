import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';
export default function newsSection({ data }) {
  const { blogs } = data;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">En Son Haberler</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">{blogs.map((item) => Post(item))}</div>
    </section>
  );
}

function Post(blog) {
  const MAX_CONTENT_LENGTH = 200;

  const truncatedContent = blog.content_text.length > MAX_CONTENT_LENGTH ? blog.content_text.slice(0, MAX_CONTENT_LENGTH) + '...' : blog.content_text;
  return (
    <div className="item">
      <div className="image">
        <Link href={'/'}>
          <Image src={blog.photo_url} alt="Cover image" width={500} height={350} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            {blog.category.toUpperCase()} Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            <br />
            {blog.created_at.split('-')[0]} -{blog.created_at.split('-')[1]}
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className="text-xl font-bold">
            {blog.title}
          </Link>
        </div>
        <p className="text-black-500 py-3">{truncatedContent}</p>
        <Author />
      </div>
    </div>
  );
}
