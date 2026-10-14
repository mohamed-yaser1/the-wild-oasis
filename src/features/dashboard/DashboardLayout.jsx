import styled from "styled-components";
import { useRecentBookings } from "./useReecentsBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentstays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

  const {bookings,isLoading} = useRecentBookings();
  const {confirmedStays,isLoading:isStaysLoading,stays,numDays} = useRecentStays();
  const {cabins,isLoading:loadingCabins} = useCabins();

  if(isLoading || isStaysLoading || loadingCabins) return <Spinner/>
  console.log(stays)
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
      <div>kkkk</div>
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart bookings={bookings} numdays={numDays}/>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
