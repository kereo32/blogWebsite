import Format from '../../layout/format';
import Author from '../../components/child/author';
import Image from 'next/image';
import Related from '../../components/child/related';
export default function Page({ data, relatedPosts }) {
  const { blog } = data;
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{blog.title}</h1>
          <p className="text-gray-600 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="py-10">
            <Image src={blog.photo_url} width={900} height={600} alt={'Blog Image'}></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>{blog.content_text}</p>
          </div>
          <Related relatedPosts={relatedPosts.blogs}></Related>
        </div>
      </section>
    </Format>
  );
}
export async function getStaticProps({ params }) {
  const postId = params.postId;

  const postResponse = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${postId}`);
  const postData = await postResponse.json();

  const relatedResponse = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?category=${postData.category}&limit=3`);
  const relatedPostsData = await relatedResponse.json();

  return {
    props: {
      data: postData,
      relatedPosts: relatedPostsData,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?limit=10');
  const data = await response.json();

  const paths = data.blogs.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
