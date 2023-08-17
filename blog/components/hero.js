import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function hero({ data }) {
  const { blogs } = data;
  const backgroundImage = { background: 'url(/images/banner.png)no-repeat', backgroundPosition: 'right' };

  return (
    <section className="py-16" style={backgroundImage}>
      <div className="container mx-auto md:px-20 xxs:text-center">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={index}>{Slide(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide(data) {
  const MAX_CONTENT_LENGTH = 200;

  const truncatedContent = data.content_text.length > MAX_CONTENT_LENGTH ? data.content_text.slice(0, MAX_CONTENT_LENGTH) + '...' : data.content_text;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image mr-5">
        <Link href={`/posts/${data.id}`}>
          <Image src={data.photo_url} alt="Cover image" width={600} height={600} />
        </Link>
      </div>
      <div className="info">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            {data.category.toUpperCase()} Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            &nbsp;
            {data.created_at.split('-')[0]}-{data.created_at.split('-')[1]}
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className="text-3xl md:text-6xl">
            {data.title}
          </Link>
        </div>
        <p className="text-black-500 py-3">{truncatedContent}</p>
        <Author />
      </div>
    </div>
  );
}
