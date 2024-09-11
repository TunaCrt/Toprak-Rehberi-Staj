/*import { Redirect } from "react-router-dom";
import { useOktaAuth,oktaAuth} from "@okta/okta-react";

 import React from 'react'
import OktaSignInWidget from "./OktaSignInWidget";
import Home from "../pages/Home";
 
 const LoginWidget = ({config}) => {
    const {OktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };
    const onError = (err) =>{
        console.log('sign in error',err)
    }
    if(!authState){
        return(
            <Home />
        );
    }
   return authState.isAuthecticated ? 
   <Redirect to = {{ pathname: '/'}}/>
   :
   <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError}/>
 }
 
 export default LoginWidget */