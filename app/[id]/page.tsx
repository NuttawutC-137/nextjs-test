"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const parm = useParams<{id : string}>();
    const [dataByid,setDataById] = useState<IUser|null>(null);

    const getDataById = async()=>{
        const response = await axios.get(`https://663489d89bb0df2359a1cffd.mockapi.io/api/v1/users/${parm.id}`)
        setDataById(response.data)
    }
    useEffect(()=>{
        getDataById();
       },[])

  return (
    <div>
        <div style={{margin:'10px'}}>
            <h2>Detail</h2>
            <label>Firstname :</label>{dataByid?.firstname} <br />
            <label>Lastname :</label>{dataByid?.lastname} <br />
            <label>Phone number :</label>{dataByid?.phoneNumber} <br />
            <label>Email :</label>{dataByid?.email} <br />
        </div>
    </div>
  )
}