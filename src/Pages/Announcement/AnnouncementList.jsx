import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Store/store";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AnnouncementList() {
  const { announce ,setAnnounce, handleAnnEdit} = useContext(DataContext);
  const [date, setDate] = useState("");
  useEffect(() => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    setDate(currentDate);
  }, []);

  const [eyePop, setEyePop] = useState(false);
  const [preview , setPreview] = useState([])
  const handleEye = (id) => {
    setEyePop(true);

const Ant = announce.filter((items => items.id == id))
setPreview(Ant)

  };
  const removeEye = () => {
    setEyePop(false);
  };

  const handleAnnDel = (index) => {
    const deleted = confirm("Are you Sure You want to delete the Course ?");

    if (deleted) {

    const deleteAnt = announce[index]
    const fff=announce.filter((items)=> items.id!==deleteAnt.id)
    setAnnounce(fff) 
    }
  }

 






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
                {announce.map((announce, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="ml-0">
                            <div className="text-[15px] font-medium leading-5 text-gray-900">
                              {announce.title.length > 30 ? (
                                announce.title.slice(0, 30) + "..."
                              ) : (
                                <>{announce.title}</>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">
                          {announce.description.length > 60 ? (
                            <>{announce.description.slice(0, 60)}...</>
                          ) : (
                            announce.description
                          )}
                        </div>
                        <div className="text-sm leading-5 text-gray-500" />
                      </td>
                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        {date}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                        <div className="flex justify-end items-start gap-2">
                          <button
                            onClick={() => handleEye(announce.id)}
                            type="button"
                            className="    font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                          >
                            <FaRegEye />
                          </button>

                          <button
                          onClick={()=>handleAnnEdit(index)}
                            type="button"
                            className=" text-white bg-[#4f46e5]  font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                          >
                            Edit
                          </button>
                          <button onClick={()=>handleAnnDel(index)} className="text-[35px] text-[#e02424]">
                          <MdDelete />

                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        onClick={removeEye}
        className={
          eyePop
            ? "z-10 absolute flex justify-center items-center bg-[#00000087] h-[100%] w-[100%] top-0 bottom-0 right-0 left-0"
            : "hidden"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[white] w-[600px] max-h-[80%] p-10 rounded-md  "
        >

        <h2 className="text-2xl  font-bold" >{preview[0]?.title}</h2>
<p>{preview[0]?.description}</p>


        </div>
      </div>
    </>
  );
}

export default AnnouncementList;
