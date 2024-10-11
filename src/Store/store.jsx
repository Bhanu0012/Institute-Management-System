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

  const [btn, setBtn] = useState(false);

  const handleOnclick = () => {
    setUpdateData("");
    setBtn(false);
    setPopup(true);
  };
  const removeOnclick = () => {
    setPopup(false);
  };

  // Edit Student
  const [updateData, setUpdateData] = useState([]);

  const handleUpdate = (id) => {
    setBtn(true);
    setPopup(true);
    const updateData = addStudent[id];
    console.log(updateData);
    setUpdateData(updateData);
  };

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

  // course page Api Data
  const [Button, setButton] = useState(false);
  const [course, setCourse] = useState([]);
  const [courseImage, setCourseImage] = useState("");
  const [courseName, setCourseName] = useState("");
  useEffect(() => {
    const showCourses = async () => {
      const Course = await fetch(
        "https://mocki.io/v1/edb1d2b9-c549-4b61-960e-1a72c10a0fa9"
      );
      const getCourses = await Course.json();
      setCourse(getCourses);
    };
    showCourses();
  }, []);

  const [coursePopup, setCousePopup] = useState(false);
  const handleCoursePopup = () => {
    setCousePopup(true);
    setButton(false);
    setCourseImage("");
    setCourseName("");
  };
  const removeCoursePopup = () => {
    setCousePopup(false);
  };
  const contentCoursePopup = (e) => {
    e.stopPropagation();
  };

  const handleAddCourse = () => {
    if (courseImage === "" || courseName === "") {
      return alert("All Field Are Required");
    }

    const newCourseData = {
      title: courseName,
      image: courseImage,
    };
    setCourse([newCourseData, ...course]);
    setCourseImage("");
    setCourseName("");
    setCousePopup(false);
    setButton(false);
  };

  const deleteCourseItem = (id) => {
    console.log(id);
    const deleted = confirm("Are you Sure You want to delete the Course ?");

    if (deleted) {
      const remainingCourses = course.filter((items) => items.id !== id);
      setCourse(remainingCourses);
    }
  };
  const [updateCourseData, setupdateCourseData] = useState([]);
  const editCourseData = (index) => {
    setCousePopup(true);
    const updateCourse = course[index];

    setCourseImage(updateCourse.image);
    setCourseName(updateCourse.title);
    setupdateCourseData(updateCourse);
    setButton(true);
  };

  const handleCourseUpdate = () => {
    if (courseImage === "" || courseName === "") {
      return alert("All Field Are Required");
    }
    setCourse((prev) => {
      const courseIndex = prev.findIndex((course) => {
        return (
          course.id === updateCourseData.id &&
          course.image === updateCourseData.image &&
          course.title === updateCourseData.title
        );
      });

      if (courseIndex !== -1) {
        prev[courseIndex] = {
          image: courseImage,
          title: courseName,
        };
      }

      return [...prev];
    });

    setCousePopup(false);
    setCourseImage("");
    setCourseName("");
  };

  // Announcement page

const [anTitle, setAnTitle] = useState("");
const [anDes, setAnDes] = useState("");
const [anbtn, setAnbtn] = useState(false);


  const [announce, setAnnounce] = useState([]);

  useEffect(() => {
    const announcmentData = async () => {
      const getData = await fetch(
        "https://mocki.io/v1/b7c9d543-769a-41f3-a683-0b6eba120d6b"
      );
      const finalData = await getData.json();
      setAnnounce(finalData);
    };
    announcmentData();
  }, []);

  const [announcPopup, setAnnouncePopup] = useState(false);
  const handleAnnouncementPopup = () => {
    setAnnouncePopup(true);
  };
  const removeAnnouncementPopup = () => {
    setAnnouncePopup(false);
    setAnbtn(false)
    setAnDes("")
    setAnTitle("")
  };
  const handleAnnouncmentContent = (e) => {
    e.stopPropagation();
  };

 

const handleAnFun = () => {
const formData = {
  title:anTitle,
  description: anDes, 
}
if(!formData.title || !formData.description ){
  alert("All fields are required")
  return 
}

setAnnounce([formData , ...announce])
 setAnnouncePopup(false)
 setAnbtn(false)
  setAnDes("")
  setAnTitle("")
}


const [updateAnData, setupdateAnData] = useState([]);



const handleAnnEdit=(id)=>{
  setAnnouncePopup(true);
  setAnbtn(true)
  const updateAn=announce[id];

  setupdateAnData(updateAn);

  setAnTitle(updateAn.title)
  setAnDes(updateAn.description)
  console.log(updateAn)
}

const updateAnFun=()=>{
  if (anTitle === "" || anDes === "") {
    return alert("All Field Are Required");
  }

  setAnnounce((prev) => {
    const anIndex = prev.findIndex((course) => {
      return (
        // course.id === updateCourseData.id &&
        course.title === updateAnData.title &&
        course.description === updateAnData.description
      );
    });

    if (anIndex !== -1) {
      prev[anIndex] = {
        title: anTitle,
        description: anDes,
      };
    }

    return [...prev];
  });

  setAnnouncePopup(false);
  setAnbtn(false)
  setAnTitle("");
  setAnDes("");
}






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
        setBtn,
        course,
        coursePopup,
        handleCoursePopup,
        removeCoursePopup,
        contentCoursePopup,
        courseImage,
        setCourseImage,
        courseName,
        setCourseName,
        handleAddCourse,
        deleteCourseItem,
        editCourseData,
        Button,
        setButton,
        handleCourseUpdate,
        announce,setAnnounce,
        handleAnnouncementPopup,
        announcPopup,
        removeAnnouncementPopup,
        handleAnnouncmentContent,
        anTitle, setAnTitle,
        anDes, setAnDes,
        handleAnFun,
        handleAnnEdit, 
        setAnbtn, anbtn, 
        updateAnFun, 
        // editAnData, 
        // editAnData
        // updateAnData, setupdateAnData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default Store;
