import Head from 'next/head';

export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data?.map( (posts) => ({
        params : { id : posts.id.toString() }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    
    return {
        props: {
            post
        }
    }
}

const PostItemDetail = ({post}) => {

    const { id, title, body } = post

    return (
        <div>
            <Head>
                <title> Nextjs Blog - {title}</title>
            </Head>
            <h1 className="text-3xl font-semibold tracking-tighter"> {`${id} - ${title}`} </h1>
            <p className="text-lg tracking-wider"> {body}</p>
        </div>
    )

}


export default PostItemDetail;
