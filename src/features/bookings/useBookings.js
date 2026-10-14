import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

const useBookings = () => {

    //filter
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get('status')
    const filter = filterValue === 'all' || !filterValue ? null : {field:'status',value:filterValue};

    //sort
    const sortByRow = searchParams.get('sortBy') || 'startDate-desc';  
    const [field,direction] = sortByRow.split('-');
    const sortBy = {field,direction};

    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    const {data:{data:bookings,count} = {},isLoading,error} = useQuery({
        queryKey:["bookings",filter,sortBy,page],
        queryFn: ()=>getBookings({filter,sortBy,page})
    })
    return {bookings,isLoading,error,count}
}

export default useBookings;