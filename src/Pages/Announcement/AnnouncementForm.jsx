import { useContext } from "react";
import { DataContext } from "../../Store/store";

function AnnouncementForm() {
    const {handleAnnouncmentContent,anTitle, setAnTitle, anDes, setAnDes ,handleAnFun, anbtn, updateAnFun} = useContext(DataContext)
  return <>
     <div className="w-[400px]" onClick={handleAnnouncmentContent} >
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        AddTitle
      </label>
      <input
      value={anTitle}
     onChange={(e)=>setAnTitle(e.target.value)}
      
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="AddTitle"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Description
      </label>
      <input
      value={anDes}
      onChange={(e)=>setAnDes(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Description"
      />
    </div>
  
    <div className="flex items-center justify-between">
      <button
     onClick={anbtn?updateAnFun:handleAnFun}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
    {anbtn?"Update Announcement":"Add Announcement"}
      </button>
      
    </div>
  </form>
  
</div>
  
  
  
  
  </>;
}

export default AnnouncementForm;
