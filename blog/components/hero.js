import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function hero() {
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image mr-5">
        <Link href={'/'}>
          <Image src={'/images/img1.jpg'} alt="Cover image" width={600} height={600} />
        </Link>
      </div>
      <div className="info">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            Tekstil Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            - Haziran,2023
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className="text-3xl md:text-6xl">
            Borsa İstanbul'daki gelişmeler Tekstil sektörünü nasıl etkiledi ?
          </Link>
        </div>
        <p className="text-black-500 py-3">
          Dün yurt içinde veri akışı sakindi. BIST 100 endeksi günü %1,43 değer kaybederek 1.371,69 puandan kapatırken toplam işlem hacmi 15,8 milyar lira
          seviyesinde gerçekleşti. Tüm sektör endeksleri düşüş gösterirken, en çok kaybettiren ise %3,85 ile tekstil, deri oldu. Dolar/TLkuru dün yataya yakın
          kapanış yaşarken bu sabah itibariyle kurda dolar endeksindeki düşüşe paralel değer kaybı yaşanıyor.
        </p>
        <Author />
      </div>
    </div>
  );
}
