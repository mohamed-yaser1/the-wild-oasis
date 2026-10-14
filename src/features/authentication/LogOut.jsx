import { HiArrowRightOnRectangle } from "react-icons/hi2"
import ButtonIcon from "../../ui/ButtonIcon"
import { useLogOut } from "./useLogOut"

function LogOut() {
    const {logOut,isPending} = useLogOut();
  return (
    <ButtonIcon onClick={()=>logOut()}>
        {isPending ? "loding" :<HiArrowRightOnRectangle/>}
    </ButtonIcon>
  )
}

export default LogOut
