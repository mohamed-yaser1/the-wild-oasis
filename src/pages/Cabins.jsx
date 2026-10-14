import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { AddCabin } from "../features/cabins/AddCabin";
import { CapinTableOpreations } from "../features/cabins/CapinTableOpreations";

function Cabins() {
  return (
   <>
     <Row type="horizantal">
        <Heading as="h1">All cabins</Heading>
        
        <CapinTableOpreations/>
      </Row>
      <CabinTable/>
      <AddCabin/>
   </>
  );
}

export default Cabins;
