import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin(){
    const navigate = useNavigate();

    const {mutate:login,isPending} = useMutation({
        mutationFn:({email,password})=>logIn({email,password}),
        onError:(e)=>{
            toast.error("password or email uncorrect",e.message)
            navigate("/dashboard",{replace:true});
        },
        onSuccess:(user)=> {
            console.log(user);
            navigate("/dashboard",{replace:true});
        }
    })
    return {login,isPending}
}