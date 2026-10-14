import { useQuery } from "@tanstack/react-query";
import { getCapins } from "../../services/apiCapins";


export function useCabins(){
    const {data:cabins,isLoading} = useQuery({
        queryKey:["cabins"],
        queryFn:()=>getCapins()
    })

    return {cabins,isLoading};
}