import { api } from "@/utils/api";

export default function IndexPage() {

    const useQuery = api.hello.greeting.useQuery()

    return(
        <>
        
            <div>
                {useQuery.data}
            </div>
        </>
    )
}