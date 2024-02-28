import "./ExercicesList.css";
const ExercicesList = ({ exercices, removeExercice }) => {
  return (
    <>
      <div className="container">
        <ul className="exercices-list">
          {exercices.map((exercice, index) => (
            <div className="exercice" key={index}>
              <li>{exercice}</li>
              <button onClick={() => removeExercice(index)}>remove</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExercicesList;
