import Head from "next/head";

const posts = ({ Posts }) => {
  return (
    <div>
      <Head>
        <title> Nextjs Blog - Posts </title>
      </Head>
      <h1 className="text-3xl font-semibold tracking-tighter">
        Posts from Nextjs Blog
      </h1>
      <p className="inline-block p-2 my-6 bg-green-300 rounded-lg"> New posts below: </p>

      <div className="px-6 space-y-4">
        {Posts.map(({id, title, body}) => (
          <div key={id}>
            <h3 className="text-xl font-semibold tracking-tighter"> {title}</h3>
            <p className="pt-3 text-base font-normal tracking-normal truncate"> {body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const getData = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const Posts = await getData.json();
  //console.log(Posts);

  return {
    props: {
      Posts,
    },
  };
}

export default posts;
