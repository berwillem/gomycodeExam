import { useState } from "react";
import "./StudentList.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  // Initialize state to keep track of which button is clicked for each student
  const [presence, setPresence] = useState({});

  // Function to toggle the presence state when a button is clicked
  const togglePresence = (email) => {
    setPresence((prevPresence) => ({
      ...prevPresence,
      [email]: !prevPresence[email],
    }));
  };

  return (
    <div className="container student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Presence</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <Link to={`/students/${student.id}`}>{student.name}</Link>
              </td>
              <td>{student.email}</td>
              <td className="buttons">
                <button
                  onClick={() => togglePresence(student.email)}
                  className={
                    presence[student.email] === true
                      ? "checkButton activeButton"
                      : "checkButton"
                  }
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => togglePresence(student.email)}
                  className={
                    presence[student.email] === false
                      ? "crossButton activeButton"
                      : "crossButton"
                  }
                >
                  <ImCross />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
