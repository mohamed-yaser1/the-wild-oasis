import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useSearchParams } from "react-router-dom";
import { useCabins } from "./useCabin";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {
 const {cabins,isLoading} = useCabins();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";
  console.log(cabins);

  // let filteredCabins;
  // if(filterValue == 'all') filteredCabins = cabins;
  // if(filterValue == 'no-discount') filteredCabins = cabins.filter(cabin => cabin.discount === 0);
  // if(filterValue == 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount > 0);

  //filter
  let filteredCabins = [];

  if (!isLoading && cabins) {
    if (filterValue === "all") filteredCabins = cabins;
    if (filterValue === "no-discount")
      filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
    if (filterValue === "with-discount")
      filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }
  //sort
  const sortValue = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortValue.split("-");

  const modifier = direction == "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;
  return (
    // ⁡⁢⁣⁢before using reusable table component⁡
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1.5fr">
      <Table.Header>
        <div></div>
        <div>CABIN</div>
        <div>CAPACITY</div>
        <div>PRICE</div>
        <div>DISCOUNT</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={sortedCabins}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
    // <Table role="table">
    //   <TableHeader role="row">
    //     <div></div>
    //     <div>CABIN</div>
    //     <div>CAPACITY</div>
    //     <div>PRICE</div>
    //     <div>DISCOUNT</div>
    //     <div></div>
    //   </TableHeader>
    //   {
    //     sortedCabins.map(cabin => <CabinRow cabin={cabin} key={cabin.id}/>)
    //   }
    // </Table>
  );
};

export default CabinTable;
