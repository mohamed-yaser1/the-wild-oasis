import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCapins";
import toast from "react-hot-toast";


const useEditCabin = () => {
//   const queryClient = useQueryClient();
//   const { mutate: editCabin, isPending: isEditing } = useMutation({
//     mutationFn: ({ newCabin, id }) => createCabin(newCabin, id),
//     onSuccess: () => {
//       toast.success("succesfully edited");
//       queryClient.invalidateQueries({
//         queryKey: ["cabins"],
//       });
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });
//   return {editCabin , isEditing}
    const queryClient = useQueryClient();
    
      const { mutate: editCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createCabin(newCabinData, id),
        onSuccess: () => {
          toast.success("Cabin successfully edited");
          queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (err) => toast.error(err.message),
      });
    
      return { isEditing, editCabin };
};

export default useEditCabin;
