import Image from 'next/image';
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <Image alt="Logo" width={50} height={50} src={'/images/logo.png'} />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={'/'}>
            <h1 className=" font-bold uppercase text-2xl text-gray-600">Tekstil Şov Evi</h1>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={'/'}>
              <BsFacebook color="#888888" />
            </Link>
            <Link href={'/'}>
              <BsYoutube color="#888888" />
            </Link>
            <Link href={'/'}>
              <BsTwitter color="#888888" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
