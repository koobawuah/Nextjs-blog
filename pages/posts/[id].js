import { useRouter } from "next/router";


const PostItem = () => {

    const route  = useRouter()
    const { id } = route.query1

    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-tighter">Title </h1>
            <p className="text-base tracking-normal">{id}</p>
        </div>
    )

}

export default PostItem;
