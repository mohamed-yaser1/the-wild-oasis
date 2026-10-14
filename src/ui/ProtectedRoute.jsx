import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage=styled.div `
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
`

function ProtectedRoute({children}) {

    const navigate = useNavigate();
    // load the authenticated user
    const {user,isLoading} = useUser();


    //if there is no authenticated user redirect to the login page
    useEffect(function(){
        if(!isLoading && !user)
            navigate("/login");
    },[user,isLoading,navigate])

    //if is loading render spinner
    if(isLoading) return(
        <FullPage>
            <Spinner/>;
        </FullPage> 
    )

    //if there is a user render the app
  return children
}

export default ProtectedRoute