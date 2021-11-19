import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Card from "../commons/Card";
import { getCoursesFromCategory, getAllCourses } from "../state/courses";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// estilos
import "../assets/styles/general.css";
import "../assets/styles/grid.css";

const Grid = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const courses = useSelector((state) => state.courses);
  const navigate = useNavigate();

  console.log("====>>>", category);

  useEffect(() => {
    category === "vertodos"
      ? dispatch(getAllCourses())
      : dispatch(getCoursesFromCategory(category));
  }, [category]);

  return (
    <div>
      <div>
        {courses.length === 0 ? (
          <h1>No se encontraron resultados!</h1>
        ) : (
          <>
            <h1>Resultados para {category ? category : "Ver todos"}:</h1>
            <div id="contGrid">
              {courses.map((course) => (
                <div id="espacio">
                  <div key={course.id}>
                    <Card key={course.id} course={course} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Button className="boton" onClick={() => navigate(-1)}>
        Volver
      </Button>
    </div>
  );
};

export default Grid;
