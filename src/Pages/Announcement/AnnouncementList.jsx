import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Store/store"

function AnnouncementList() {
const {announce} = useContext(DataContext)
// const title = announce.title.length>20?announce.title.slice(0, 20):announce.title;
// const desc=announce.description.length>30?announce.description.slice(0,30):announce.description;


const [date, setDate] = useState('');
useEffect(()=>{
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    setDate(currentDate);



},[])

  return (
    
    <>
    <div className="flex flex-col w-[97.5%] ">
  <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
    <div className="inline-block min-w-full overflow-hidden align-middle  shadow sm:rounded-lg border-b border-gray-200 ">
      <table className=" min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              TITLE
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              DESCRIPTION
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              DATE
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50" />
          </tr>
        </thead>
        <tbody className="bg-white">
{announce.map((announce,index)=>{
    return(
  <tr key={index}>
  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
    <div className="flex items-center">
 
      <div className="ml-0">
        <div className="text-[15px] font-medium leading-5 text-gray-900">
        {announce.title.length>30?(announce.title.slice(0,30)+"..."):<>{announce.title}</>}
        </div>
        
      </div>
    </div>
  </td>
  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
    <div className="text-sm leading-5 text-gray-900">{announce.description.length>60?<>{announce.description.slice(0,60)}...</>:announce.description}</div>
    <div className="text-sm leading-5 text-gray-500" />
  </td>
  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
    {date}
  </td>
  <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
    <div className="flex justify-end items-start gap-2">
      <button
        type="button"
        className=" text-white bg-[#4f46e5]  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Edit
      </button>
      <button className="text-[35px] text-[#e02424]">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
      </button>
    </div>
  </td>
</tr>

)

})}
        




        </tbody>
      </table>
    </div>
  </div>
</div>

    
    
    
    
    
    
    
    
    
    </>
  )
}

export default AnnouncementList