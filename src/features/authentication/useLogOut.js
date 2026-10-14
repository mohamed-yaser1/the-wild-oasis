import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as logoutfunc } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export function useLogOut()
{
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate:logOut,isPending} = useMutation({
        mutationFn:logoutfunc,
        onSuccess:()=>{
            navigate('/login',{replace:true});
            queryClient.removeQueries();
        }
    })

    return{logOut,isPending}
}