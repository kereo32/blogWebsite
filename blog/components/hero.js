import { BlogPost } from '../lib/helper';
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
            <SwiperSlide key={index}>
              {BlogPost(item, {
                width: 600,
                height: 500,
                maxContentLenght: 200,
                firstDividerClasses: 'grid md:grid-cols-2',
                imgDividerClasses: 'image mr-5',
                infoDividerClasses: 'info',
                catDividerClasses: 'cat',
                titleDividerClasses: 'title',
                titleTextClasses: 'text-3xl md:text-6xl',
                contentClasses: 'text-black-500 py-3',
              })}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
