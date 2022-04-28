
const PostItemDetail = (Post) => {


    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-tighter"> {Post.id} - {Post.title} </h1>
            <p className="text-base tracking-normal">{Post.body?Post.body:`Hello, nothing here`}</p>
        </div>
    )

}


export default PostItemDetail;



export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map(post => ({
        params: { id: post.id.toString() }
    })
    )

    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({params}){

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const Post  = await res.json()
    console.log(Post)


    return {
        props: {
            Post,
        },
    }
}
