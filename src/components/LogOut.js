import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function LogOut() {
    const navigation = useNavigate()

const logout = ()=>{

    localStorage.removeItem('token');
    localStorage.removeItem('data');
    navigation('/Login');
}
  return (
    <>
       <Button variant="dark" onClick={() => logout()}>LogOut</Button>

    </>
)
}
