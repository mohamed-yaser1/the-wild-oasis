import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCapins";
import toast from "react-hot-toast";

const useCreateCabin = () => {
//      const queryClient = useQueryClient();

//   const { mutate, isPending } = useMutation({
//     mutationFn: createCabin,
//     onSuccess: () => {
//       toast.success("cabin added succesfully");
//       queryClient.invalidateQueries({
//         queryKey: ["cabins"],
//       });
//     },
//     onError: () => {
//       toast.error("cabin could not been added");
//     },
//   });

//   return {mutate,isPending}

    const queryClient = useQueryClient();
    
      const { mutate, isPending} = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
          toast.success("New cabin successfully created");
          queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (err) => toast.error(err.message),
      });
        return { isPending, mutate };

}

export default useCreateCabin