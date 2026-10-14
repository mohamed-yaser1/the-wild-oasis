import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting } from "../../services/apiSettings"
import toast from "react-hot-toast"

export const useEditSettings = () => {
  const queryClient = useQueryClient();

    const {mutate ,isPending} = useMutation({
        mutationFn:updateSetting,
        onSuccess:()=>{
            toast.success('settings updated successfully')
            queryClient.invalidateQueries({
                queryKey:["settings"]
            })
        },
        onError:(err)=>{
            toast.error("something went wrong ",err.message)
        }
    })
    return {mutate,isPending};
}
