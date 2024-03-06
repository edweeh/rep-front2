// ProductDetails.jsx
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import baseUrl from '../../Api';
// import Card from './Card';

const Viewdetails = () => {
    const {Petcode} = useParams();
    const [petinfo,setPetinfo] = useState()
    const [data,setData] = useState();

  useEffect(()=>{
    axios
      .get(baseUrl + '/pet/tfetch')
      .then((response) => {
        console.log(response.data);
        setPetinfo(response.data);
      })
      .catch((err) => console.log(err));
      
  }, []);

  useEffect(()=>{
    if(petinfo){
        const matchedPet = petinfo.find((item) => item.Petcode === Petcode);
        setData(matchedPet);
        console.log(matchedPet);
    }
  })
  return (
    <div>
        {data &&(<>
        <img src={`data:${data.Image.contentType};base64,${data.Image.data}`} alt="petImage" />
                <h3>Pet Name:{data.PetName}</h3>
                <p>Breed:{data.Breed}</p>
                <p>Color:{data.Color}</p>
                <p>Age:{data.Age}</p>
                <p>Petcode:{data.Petcode}</p>
                <p>Price:{data.Price}</p>
                <p>Gender:{data.Gender}</p>
                <p>Description:{data.Description}</p>
      {/* <button>Go Back</button> */}
      <button><a href='/Home1'>Go Back</a></button></>)}
      
    </div>
  );
};

export default Viewdetails;
