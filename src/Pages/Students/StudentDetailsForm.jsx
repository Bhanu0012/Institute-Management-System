import { useContext, useState } from "react"
import { DataContext } from "../../Store/store"

function StudentDetailsForm() {

const {handleContentClick , addStudent, setAddStudent ,setPopup} = useContext(DataContext)


const [userProfile, setUserProfile] = useState("")
const [userName, setUserName] = useState("")
const [userEmail, setUserEmail] = useState("")
const [instituteName, setInstituteName] = useState("")
const [course, setCourse] = useState("")

const  handleStudentAdded = () =>{

if(userProfile=== "" || userName=== "" || userEmail=== "" || instituteName=== "" || course=== ""){
return alert("All fields Are Required")


}


const newStudent= {
    avatar:userProfile,
    course:course,
    title:instituteName,
    email:userEmail,
    name:userName,


}
setAddStudent([newStudent, ...addStudent])
alert("Student added Sucessfully")
setUserProfile("")
setUserName("")
setUserEmail("")
setInstituteName("")
setCourse("")
setPopup(false)
  
  
  }


  return (
    <div className="w-full max-w-[40%]" onClick={handleContentClick}>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex gap-3">
      <div className="mb-4 w-[100%]">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          User Profile 
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
          onChange={(e)=> setUserProfile(e.target.value)}
          value={userProfile}
          type="text"
          placeholder="User Profile Url"
        />
      </div>
      <div className="mb-4 w-[100%]">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username 
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={(e)=> setUserName(e.target.value)}
          value={userName}
          placeholder="Username"
        />
      </div>
      </div>
      <div className="flex gap-3">
      <div className="mb-4 w-[100%]">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Useremail 
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={(e)=> setUserEmail(e.target.value)}
          value={userEmail}
          placeholder="Useremail"
        />
      </div>
      <div className="mb-4 w-[100%]">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          InstituteName 
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={(e)=> setInstituteName(e.target.value)}
          value={instituteName}
          placeholder="InstituteName"
        />
      </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Course
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={(e)=> setCourse(e.target.value)}
          value={course}
          placeholder="Course"
        />
      </div>
    

  <div className="flex items-center justify-between">
        <button onClick={handleStudentAdded}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add Student
        </button>
        
      </div>
    </form>
    
  </div>
  
  )
}

export default StudentDetailsForm