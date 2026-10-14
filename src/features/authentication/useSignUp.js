import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/auth";
import toast from "react-hot-toast";

export function useSignUp(){
    
    const {mutate:signUp,isPending} = useMutation({
        mutationFn:signUpApi,
        onSuccess:()=>{
            toast.success("user created succesfully VERIFY it using users email address")
        },
        onError:(err)=>{
            toast.error(err.message);
        }
    })

    return {signUp,isPending}
}