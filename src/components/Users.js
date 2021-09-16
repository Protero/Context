import { useContext } from "react";
import { useParams } from "react-router-dom";
import context from "../state/context";

const Users = () => {
  let { id } = useParams();
  const { school } = useContext(context);

  return <h1>{school.alumnos[id]}</h1>;
};

export default Users;
