import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCapins } from "../services/apiCapins";

function Cabins() {
  useEffect(() => {
    const getData = async () => {
    const data = await getCapins();
    console.log(data)
  }
  getData();
  },[])
  
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
