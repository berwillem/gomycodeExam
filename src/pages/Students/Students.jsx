import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import StudentList from "../../components/StudentList/StudentList";
const Students = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <StudentList students={students}></StudentList>
    </>
  );
};

export default Students;
