import Link from 'next/link';
import Image from 'next/image';
import Author from './child/author';
export default function newsSection() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">En Son Haberler</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="image">
        <Link href={'/'}>
          <Image src={'/images/img1.jpg'} alt="Cover image" width={500} height={350} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            Tekstil Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            - Haziran,2023
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className="text-xl font-bold">
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
