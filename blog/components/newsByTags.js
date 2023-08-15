import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
export default function newsByTags() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="text-4xl font-bold py-12">Ekonomi Haberleri</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="text-4xl font-bold py-12">Sektör Haberleri</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={'/'}>
          <Image src={'/images/img1.jpg'} className="rounded" alt="Cover image" width={300} height={250} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={'/'} className="text-orange-600 hover:text-orange-800">
            Tekstil Haberleri
          </Link>
          <Link href={'/'} className="text-gray-600 hover:text-gray-800">
            - Haziran,2023
          </Link>
        </div>
        <div className="title">
          <Link href={'/'} className=" text-md font-bold">
            Borsa İstanbul'daki gelişmeler Tekstil sektörünü nasıl etkiledi ?
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
