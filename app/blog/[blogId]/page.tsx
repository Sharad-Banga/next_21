import axios from "axios";
export default async function blog({params}:any){

  const blogId = params.blogId;

  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${blogId}`);

  const data = res.data;

  return(
    <>

    <div className=" flex flex-col bg-black h-screen w-screen items-center justify-center">

      <div className="text-white text-4xl">
        Blog {data.userId+1}
      </div>

      <div className=" text-pink-200  w-[300px] p-6 flex align-center justify-center">
          <div>{data.title}</div> &nbsp;
          <div className="flex justify-center">{data.completed?"✅":"❌"}</div>
      </div>

    </div>
    </>
  )
}