import React, { useEffect, useState } from 'react'
import TeacherForm from '../Components/TeacherForm';
import TeachersDetails from '../Components/TeachersDetails';


const TeachersPage = () => {
  const [allTeachers, setAllTeachers] = useState([])

  useEffect(() => {
    fetch('https://schooling-system.herokuapp.com/teachers')
    .then(r => r.json())
    .then(data => setAllTeachers(data))
  }, []);


  function handlePosting(data){
    setAllTeachers([...allTeachers, data])
  }

  function deleteTeacher(id){
    fetch(`https://schooling-system.herokuapp.com/teachers/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const goThru = allTeachers.filter((teacher) => teacher.id !== id)
            setAllTeachers(goThru)
        })
    }

    function handleUpdateTeach(updatedTeacher) {
      const updatedTeach = allTeachers.map((teacher) => {
        if (teacher.id === updatedTeacher.id) {
          return updatedTeacher;
        } else {
          return teacher;
        }
      });
      setAllTeachers(updatedTeach);
    }

  return (
    <div>
      <TeacherForm handlePosting={handlePosting} onUpdateTeach={handleUpdateTeach}/>
      <TeachersDetails allTeachers = {allTeachers} deleteTeacher={deleteTeacher}/>
    </div>
  )
}

export default TeachersPage