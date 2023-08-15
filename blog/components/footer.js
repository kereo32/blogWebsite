import Link from 'next/link';
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
export default function footer() {
  const background = {
    backgroundImage: 'url(/images/footer.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
  };
  return (
    <footer className="bg-gray-50" style={background}>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">Bütün hakları TEKSTİL ŞOV EVİNE saklıdır. 2023.</p>
          <p className="text-gray-400 text-center">Şartlar ve koşullar</p>
        </div>
      </div>
    </footer>
  );
}
