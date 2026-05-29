import Propm1 from "./Propm1.jsx"
function Propm(){
    var students=[{rollno:201,name:"aniket",marks:21},
        {rollno:202,name:"vasani",marks:8},
        {rollno:203,name:"nirmal",marks:7},
        {rollno:204,name:"darshil",marks:15},
        {rollno:205,name:"pal",marks:22}]

    return(
        <div>
            <Propm1 stud={students}></Propm1>
        </div>
    )
}
export default Propm;