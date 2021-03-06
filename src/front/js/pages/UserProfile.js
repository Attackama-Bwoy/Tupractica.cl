import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/footer";
import ProfilePhoto from "../component/ProfilePhoto";
import ProfileDataPerson from "../component/ProfileDataPerson";
import AddressData from "../component/AddressData";
import ContacInformation from "../component/ContactInformation";
import Anexos from "../component/anexos";
import Bio from "../component/Bio";
import ModalUser from "../component/ModalUser";
import EditButton from "../component/EditButton";
import { BiEdit } from "react-icons/bi";

export const UserProfile = () => {
  const [info, setInfo] = useState([]);
  const token = sessionStorage.getItem("jwt-token");

  const initialUrl =
    "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/ProfilePracticante";

  /*   const fetchCharacters = () => {
    fetch("https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/Profile", ,
    headers: 
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token,
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
      
  }; */

  function prueba() {
    fetch(
      "https://5000-4geeksacade-reactflaskh-dii2hv6x3jn.ws-us46.gitpod.io/ProfilePractiante",
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    prueba();
  }, []);

  return (
    <div className="container ">
      <button
      type="button"
      className="btn btn-info p-1 m-1"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Editar Perfil<BiEdit className="fs-4" />
    </button>
      <ProfilePhoto />
      <Bio info={info}/>
      <ProfileDataPerson info={info}/>
      <AddressData info={info}/>
      <ContacInformation info={info}/>
      <Anexos info={info}/>
      <ModalUser info={info}/>
    </div>
  );
};
