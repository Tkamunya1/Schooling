import { useEffect, useState, React } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import CourseForm from '../Components/CourseForm';
import CourseDetails from '../Components/CourseDetails';



const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    fetch('https://schooling-system.herokuapp.com/courses')
    .then(r => r.json())
    .then(data => setAllCourses(data))
  }, []);


  function handlePosting(data){
    setAllCourses([...allCourses, data])
  }

  function deleteCourse(id){
    fetch(`https://schooling-system.herokuapp.com/courses/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const goThru = allCourses.filter((course) => course.id !== id)
            setAllCourses(goThru)
        })
    }

    function handleUpdateCourse(updateCourse) {
      const updatedCourse = allCourses.map((course) => {
        if (course.id === updatedCourse.id) {
          return updatedCourse;
        } else {
          return course;
        }
      });
      setAllCourses(updatedCourse);
    }

  return (
    <div>
      <CourseForm handlePosting={handlePosting}/>
      <CourseDetails allCourses ={allCourses} deleteCourse={deleteCourse}/>
    </div>
  )
}

export default CoursesPage
