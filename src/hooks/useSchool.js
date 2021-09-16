import { useState } from "react";

const useSchool = () => {
  const [school, dispatch] = useState({
    ta: "Borja",
    alumnos: [
      "Diego",
      "Juan",
      "Cristina",
      "Maider",
      "Teresa",
      "Pablo",
      "Juan Carlos"
    ]
  });

  return [school, dispatch];
};

export default useSchool;
