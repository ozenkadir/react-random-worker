import { useEffect, useState } from "react";
import Users from './components/users.js';
import Pagination from "./components/pagination.js";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await fetch("https://randomuser.me/api/?page=1&results=50&nat=us")
      const data = await res.json()
      console.log(data)
      setLoading(false)
      setUsers(data.results)
    }
    fetchUsers()
  },[])


  const handleClick = num => {
    setPage(num);
  }



  return (
    <div>
      <h1 className="title">Random Worker Information Page</h1>
      {
        loading ? <p>Loading ...</p> : <>
        <Users users={users} page={page} />
        <h5 className="title">Page: {page}</h5>
        <Pagination totalPages={totalPages}  handleClick={handleClick}/>
        </>
      }
    </div>
  );
}

export default App;
