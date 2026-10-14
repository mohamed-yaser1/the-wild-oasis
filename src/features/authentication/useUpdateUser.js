import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/auth";
import toast from "react-hot-toast";


export function useUpdatedUser() {
    const queryClient = useQueryClient();

    const {mutate:updateUser,isPending:isUpdating} = useMutation({
        mutationFn:updateCurrentUser,
        onSuccess:({user})=>{
            toast.success("user succesfully edited");
            queryClient.setQueryData(["user"],user)
        },
        onError:(e)=>{
            toast.error(e.message)
        }
    })
    return {updateUser,isUpdating};
}