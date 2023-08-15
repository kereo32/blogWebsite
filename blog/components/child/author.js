import Image from 'next/image';
import Link from 'next/link';

export default function author() {
  return (
    <div className="author flex py-5">
      <Image className="rounded-full" width={40} height={40} src={'/images/krm.jpg'} />

      <div className="flex flex-col justify-center px-4">
        <Link className="text-md font-bold text-gray-800 hover:text-gray-600" href={'/'}>
          Kerem Hacışabanoğlu
        </Link>
        <span className="text-sm text-gray-500">Yazar,Borsa Uzmanı</span>
      </div>
    </div>
  );
}
