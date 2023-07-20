import { api } from "@/utils/api";
import { Button, Greeting, PostsList } from "ui"; 

export default function IndexPage() {


    const useQuery = api.hello.greeting.useQuery()
    const usePostsQuery = api.posts.listPosts.useQuery()
    return(
        <>

            <h1 className="text-xl">Hello</h1>
            <Greeting data={useQuery.data??"Error"}/>
            <Button/>
            <div>
                <PostsList data={usePostsQuery.data || []}/>
                {/* {JSON.stringify(usePostsQuery.data ?? {error: "Enmpty!"})} */}
            </div>
        </>
    )
}