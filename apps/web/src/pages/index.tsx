import { api } from "@/utils/api";
import { Button, Greeting } from "ui"; 

export default function IndexPage() {


    const useQuery = api.hello.greeting.useQuery()
    return(
        <>

            <h1 className="text-xl">Hello</h1>
            <Greeting data={useQuery.data??"Error"}/>
            <Button/>
        </>
    )
}