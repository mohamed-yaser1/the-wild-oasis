import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCapins";
import toast from "react-hot-toast";


 const  useDeleteCabin = ()=> {
    const queryClient = useQueryClient();
    const {mutate , isPending ,error} = useMutation({
        mutationFn:(id) => deleteCabin(id), // mutationFn : deleteCabin()  /the same
        onSuccess: () => {
        toast.success("succesfully deleted");
        queryClient.invalidateQueries({
            queryKey:["cabins"]
        })
        },
        onError:() => {
        toast.error(error.message)
        }
    })
    
    return {mutate , isPending}
}
export default useDeleteCabin;
