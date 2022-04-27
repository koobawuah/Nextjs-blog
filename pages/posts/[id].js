import { useRouter } from "next/router";


const PostItem = () => {

    const route  = useRouter()
    const { id } = route.query

    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-tighter">Title </h1>
            <p className="text-base tracking-normal">{id}</p>
        </div>
    )

}


export async function getStaticProps(context) {

    const post;

    return {
        props : {
            post,
        }
    }

}

export default PostItem;
