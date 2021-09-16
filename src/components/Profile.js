import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import context from "../state/context";

const Card = ({ school }) => (
  <h1>
    TA: {school.ta} - ALUMNOS:{" "}
    {school.alumnos.map((el, i) => (
      <div>
        <Link to={`/users/${i}`} key={i}>
          {el}
        </Link>
      </div>
    ))}
  </h1>
);

const Profile = () => {
  const { school, dispatch } = useContext(context);

  return (
    <Fragment>
      <input
        onChange={(e) => {
          dispatch({ ...school, ta: e.target.value });
        }}
      />
      <Card school={school} />
    </Fragment>
  );
};

export default Profile;
