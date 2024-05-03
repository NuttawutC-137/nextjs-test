"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
  const router = useRouter;
  const [firstname,setFirstname] = useState<string>("");
  const [lastname,setLastname] = useState<string>("");
  const [phoneNumber,setPhoneNumber] = useState<string>("");
  const [email,setEmail] = useState<string>("");

  const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault

    const data : IUser = {
      firstname,
      lastname,
      phoneNumber,
      email 
    }

    const response = await axios.post("https://663489d89bb0df2359a1cffd.mockapi.io/api/v1/users",data)
    if (response.status ===201){
      alert("Add user success")
      router
    }
    else{
      alert("Add user failed")
    }
  }
  return (
    <div>
      <h1>Add user</h1>
      <form action="">
        <label>First name</label>
        <input type="text" name="firstname" required onChange={(e)=>{setFirstname(e.target.value)}} value={firstname}/>
        <br />
        <label>Last name</label>
        <input type="text" name="lastname" required onChange={(e)=>{setLastname(e.target.value)}} value={lastname}/>
        <br />
        <label>Phone number</label>
        <input type="text" name="phoneNumber" required onChange={(e)=>{setPhoneNumber(e.target.value)}} value={phoneNumber}/>
        <br /><label>Email</label>
        <input type="email" name="email" required onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
        <br />
        <button type='submit' onClick={handleAdd}>Add</button>
      </form>
    </div>
  )
}