import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

// <Filter
//         filterFields="status"
//         options={[
//           { value: "all", label: "All" },
//           { value: "checked-out", label: "Checked out" },
//           { value: "checked-in", label: "Checked in" },
//           { value: "unconfirmed", label: "Unconfirmed" },
//         ]}
//       />

const Filter = ({ filteredFields, options }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterValue = searchParams.get(filteredFields) || options[0].value;

  const handleClick = (value) => {
    searchParams.set(filteredFields, value);
    console.log(value,filteredFields);    // value undefined
    setSearchParams(searchParams);
  };
  return (
    <StyledFilter>
      {options.map((opt) => (
        <FilterButton onClick={() => handleClick(opt.value)} key={opt.value} active={currentFilterValue == opt.value} >
          {opt.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
