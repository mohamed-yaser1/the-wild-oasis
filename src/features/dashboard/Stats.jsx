import {HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";



export default function Stats({bookings,confirmedStays,numDays,cabinCount}) {
    const numBookings = bookings.length;
    const sales = bookings.reduce((acc,curr) => acc + curr.totalPrice , 0);
    const checkins = confirmedStays.length;
    const occupation = confirmedStays.reduce((acc,cur) => acc + cur.numNights , 0) / (numDays*cabinCount)
  return (
    <>
    <Stat title={"Bookings"} color={"blue"} value={numBookings} icon={<HiOutlineBriefcase/>} />
    <Stat title={"Sales"} color={"green"} value={formatCurrency(sales)} icon={<HiOutlineBanknotes/>} />
    <Stat title={"check ins"} color={"indigo"} value={checkins} icon={<HiOutlineCalendarDays/>} />
    <Stat title={"Occupancy rate"} color={"yellow"} value={Math.round(occupation*100)+" %"} icon={<HiOutlineChartBar/>}/>
    </>
  )
}
