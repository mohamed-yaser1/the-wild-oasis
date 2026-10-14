import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";


const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Capcity = styled.div`
  font-family: "sono";
  text-align: left;
`
const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
`

const CabinRow = ({cabin}) => {

  const {mutate:createCabin} = useCreateCabin();

  const {isPending:isDeleting,mutate:deleteCabin} = useDeleteCabin()

  function handleDublicate () {
    createCabin({
      name:cabin.name,
      maxCapcity:cabin.maxCapcity,
      regularPrice:cabin.regularPrice,
      discount:cabin.discount,
      image:cabin.image,
      description:cabin.description
    },cabin.id)
  }
  return (
    <>

    <TableRow>
      <Img src={cabin.image}/>
      <Cabin>{cabin.name}</Cabin>
      <Capcity>{cabin.maxCapcity}</Capcity>
      <Price>{cabin.regularPrice}</Price>
      <Discount>{cabin.discount ? cabin.discount : "-"}</Discount>
      <Modal>
        <Menus>
          <Menus.toggle id={cabin.cabinId}/>
          <Menus.List id={cabin.cabinId}>
            <Menus.Button>
              <Modal.Open opens={'deleteCabin'}>
                  <button><HiTrash/></button>
              </Modal.Open>
            </Menus.Button>
            <Menus.Button>
              <Modal.Open opens={'editCabin'}>
                <button><HiPencil/></button>
              </Modal.Open>
            </Menus.Button>
            <Menus.Button onClick={handleDublicate}>
              <button><HiSquare2Stack/></button>
            </Menus.Button>
          </Menus.List>
          <Modal.Window name={'deleteCabin'}>
            <ConfirmDelete disabled={isDeleting} onConfirm={() => deleteCabin(cabin.id)}/>
          </Modal.Window>
          <Modal.Window name={'editCabin'}>
            <CreateCabinForm cabinToEdit={cabin}/>           
          </Modal.Window>
        </Menus>
      </Modal>
      
    </TableRow>
    </>
  )
}

export default CabinRow

/*
<Btns>
        <Modal >
          <Modal.Open opens={'deleteCabin'}>
            <button><HiTrash/></button>
          </Modal.Open>
          <Modal.Window name={'deleteCabin'}>
            <ConfirmDelete disabled={isDeleting} onConfirm={() => deleteCabin(cabin.id)}/>
          </Modal.Window>
          <Modal.Open opens={'editCabin'}>
            <button><HiPencil/></button>
          </Modal.Open>
          <Modal.Window name={'editCabin'}>
            <CreateCabinForm cabinToEdit={cabin}/>           
          </Modal.Window>
        </Modal>
        <button onClick={() => handleDublicate()}><HiSquare2Stack/></button>
      </Btns>


*/
