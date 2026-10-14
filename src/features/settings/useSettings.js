import { useQuery } from "@tanstack/react-query"
import {getSettings} from "../../services/apiSettings"

const useSettings = () => {
  const {isLoading,data} = useQuery({
    queryKey:['settings'],
    queryFn:getSettings
  })
  return {isLoading , data}
}

export default useSettings