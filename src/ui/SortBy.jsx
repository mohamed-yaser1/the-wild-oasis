import { useSearchParams } from "react-router-dom"
import Select from "./Select"


// <SortBy options={[
//             {value: "name-asc", label:"Sort by name (A-Z)"},
//             {value: "name-desc" , label:"Sort by name (Z-A)"},
//             {value: "regularPrice-asc", label:"Sort by price (low first)"},
//             {value: "regularPrice-desc", label:"Sort by price (high first)"},
//             {value: "maxCapcity-asc", label: "Sort by capacity (low first)"},
//             {value: "maxCapcity-desc", label: "Sort by capacity (high first)"},
//         ]}/>

const SortBy = ({options}) => {
  const [searchParams,setSearchParams] = useSearchParams()
  const sortBy = searchParams.get("sortBy") || '';

  function handleChange(e){
    console.log(e.target.value)
    searchParams.set("sortBy",e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select options={options} onchange={handleChange} value={sortBy}>SortBy</Select>
  )
}

export default SortBy
