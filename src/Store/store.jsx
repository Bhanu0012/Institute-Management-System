import { createContext, useEffect, useState } from "react";
import { FaUser, FaBookReader } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

export const DataContext = createContext();

function Store({ children }) {
  // Dashboard Card Data
  const cardDAta = [
    {
      icon: <BiRupee />,
      bgColor: "#7b74ec",
      title: "8,282",
      descriptioin: "Fees Collection",
    },
    {
      icon: <FaUser />,
      bgColor: "#ea580cbf",
      title: "200,521",
      descriptioin: "Total Students",
    },
    {
      icon: <FaBookReader />,
      bgColor: "#e45d99",
      title: "15",
      descriptioin: "Available Courses",
    },
  ];

  // Add Student button handle

  const [popup, setPopup] = useState(false);

  const [btn, setBtn]=useState(false)


  const handleOnclick = () => {
    setUpdateData('')
    setBtn(false)
    setPopup(true);
  };
  const removeOnclick = () => {
    setPopup(false);
  };

// Edit Student
 const [updateData , setUpdateData]= useState([])


const handleUpdate=(id)=>{
  setBtn(true)
 setPopup(true)
 const updateData = addStudent[id]
 console.log(updateData) 
 setUpdateData(updateData) 
}

const handleContentClick = (e) => {
  e.stopPropagation();
};
  





  // Add Student

  const addStudentHeading = [
    {
      headline: "NAME",
    },
    {
      headline: "INSTITUTION NAME",
    },
    {
      headline: "COURSE ENROLLED",
    },
    {
      headline: "",
    },
  ];

  // Add Student API Data
  const [addStudent, setAddStudent] = useState([]);
  const addStudentData = async () => {
    const listedStudent = await fetch(
      "https://mocki.io/v1/f556c11e-4966-4fd8-a33b-9c26b4295d67"
    );
    const data = await listedStudent.json();
    setAddStudent(data);
  };
  useEffect(() => {
    addStudentData();
  }, []);
  // Dashboard StudenList Headings

  const studentHeading = [
    {
      headline: "NAME",
    },
    {
      headline: "TITLE",
    },
    {
      headline: "STATUS",
    },
    {
      headline: "COURSE",
    },
  ];

  // Dashboard StudentList
  const [studentsList, setStudentList] = useState([]);
  const studentList = async () => {
    const studentListData = await fetch(
      "https://mocki.io/v1/bab9648e-2c95-45a9-bc0b-6f9c92c3ca78"
    );
    const studentData = await studentListData.json();
    setStudentList(studentData);
  };
  useEffect(() => {
    studentList();
  }, []);

  return (
    <DataContext.Provider
      value={{
        cardDAta,
        studentsList,
        studentHeading,
        addStudentHeading,
        addStudent,
        handleOnclick,
        removeOnclick,
        popup,
        handleContentClick,
        setAddStudent,
        setPopup,
        handleUpdate,
        updateData,
        setUpdateData, 
        btn, 
        setBtn
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default Store;
