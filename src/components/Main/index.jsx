import Table from "../Table"

const Main = () => {
  return (
    <div className="m-auto p-4">
        <div className="text-md font-thin">
          <h1> Dashboard </h1>   
          <div className="flex">
          <p> Home /&nbsp;</p>
          <p className="font-normal text-green-500"> Tables</p>   
          </div>

          <Table />

        </div>

    </div>
  )
}

export default Main