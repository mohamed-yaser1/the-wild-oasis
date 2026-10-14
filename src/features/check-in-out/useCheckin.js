import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

const UseCheckin = () => {
    const queryClient = useQueryClient();
   const {mutate:checkin , isPending:isCheckingIn} =  useMutation({
    mutationFn: (id)=>updateBooking(id,{
        status:"checked-in",
        isPaid:true,
    }),
    onSuccess:()=>{
        toast.success("checked-in succesfully");
        queryClient.invalidateQueries({ queryKey: ["bookings"] })
    },
    onError:(err) =>  toast.error(`checkin failed ${err.message}`)
   })

   return {checkin,isCheckingIn};
}

export default UseCheckin