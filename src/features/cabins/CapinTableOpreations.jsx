import Filter from "../../ui/Filter"
import SortBy from "../../ui/SortBy"
import TableOperations from "../../ui/TableOperations"

export const CapinTableOpreations = () => {
  return (
    <TableOperations>
        <Filter filteredFields={"discount"} options={[
            {value:"all" , label:"All"},
            {value:"no-discount" , label:"No Discount"},
            {value:"with-discount" , label:"With Discount"},
        ]}/>
        <SortBy options={[
            {value: "name-asc", label:"Sort by name (A-Z)"},
            {value: "name-desc" , label:"Sort by name (Z-A)"},
            {value: "regularPrice-asc", label:"Sort by price (low first)"},
            {value: "regularPrice-desc", label:"Sort by price (high first)"},
            {value: "maxCapcity-asc", label: "Sort by capacity (low first)"},
            {value: "maxCapcity-desc", label: "Sort by capacity (high first)"},
        ]}/>
    </TableOperations>
  )
}
