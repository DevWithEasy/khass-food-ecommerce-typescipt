import { useState } from "react";

const Dashboard = () => {
const [addView,setAddView] = useState(false)
const handleAddView=() : void=>{
  setAddView(!addView)
}
  return <div>
    <button onClick={handleAddView}>Add Category</button>
    {
      // addView && 
      // <AddCategory {...{
      //   view : addView,
      //   handleView : handleAddView
      // }}/>
    }
  </div>;
};

export default Dashboard;
