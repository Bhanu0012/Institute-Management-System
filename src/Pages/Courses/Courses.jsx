import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../../Store/store";
import AddCourseBtn from "./AddCourseBtn";

function Courses() {
  const { course } = useContext(DataContext);

  return (
    <>
      <div className="flex container gap-6 py-[25px] flex-wrap justify-left px-[25px]">
      <div className="flex justify-end w-[97.5%] ">
    <AddCourseBtn/>
  </div>


        {course.map((courseItems, index) => {
          return <Card key={index}  index={index} courseItems={courseItems} />;
        })}
      </div>
    </>
  );
}

export default Courses;
