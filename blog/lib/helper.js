import Link from 'next/link';
import Image from 'next/image';
import Author from '../components/child/author';

export function BlogPost(data, options) {
  return (
    <div className={options.firstDividerClasses}>
      <div className={options.imgDividerClasses}>
        <Link href={`/posts/${data.id}`}>
          <Image src={data.photo_url} alt="Cover image" width={options.width} height={options.height} />
        </Link>
      </div>
      <div className={options.infoDividerClasses}>
        <div className={options.catDividerClasses}>
          <Link href={`/posts/${data.id}`} className="text-orange-600 hover:text-orange-800">
            {data.category.toUpperCase()} Haberleri
          </Link>
          <Link href={`/posts/${data.id}`} className="text-gray-600 hover:text-gray-800">
            &nbsp;
            {data.created_at.split('-')[0]}-{data.created_at.split('-')[1]}
          </Link>
        </div>
        <div className={options.titleDividerClasses}>
          <Link href={`/posts/${data.id}`} className={options.titleTextClasses}>
            {data.title}
          </Link>
        </div>
        <p className={options.contentClasses}>{truncateContent(data.content_text, options.maxContentLenght)}</p>
        <Author />
      </div>
    </div>
  );
}

function truncateContent(content, maxLength) {
  const truncatedContent = content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
  return truncatedContent;
}
