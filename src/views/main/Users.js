import React, { useEffect, useState } from "react";
import { Footer } from "../../components/gen";
import { Sheet } from "../../components/users";
// import { getUserData } from "../../api/auth";
const Users = () => {
  // const [users, setUsers] = useState(getUserData);
  // useEffect(()=>console.log(users))

  return (
    <>
      <Sheet />
      <Footer />
    </>
  );
};

export default Users;
