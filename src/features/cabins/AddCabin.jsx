import Modal from "../../ui/Modal"
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"

// export const AddCabin = () => {
//     const [closeModal,setCloseModal] = useState(false)

//     const handleCloseModal = () => {
//         setCloseModal(x=>!x)
//     }
//   return (
//     <div>
//          <Button onClick={()=>handleCloseModal()} variation="primary" size='large'>Add new cabin</Button>
//             {
//                 closeModal &&  <Modal closeModal={handleCloseModal}><CreateCabinForm closeModal={handleCloseModal}/></Modal>
//             }
//     </div>
//   )
// }

export const AddCabin = ()=> {
  return(
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button variation="primary" size='large'>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm/>
      </Modal.Window>
    </Modal>
  )
}


