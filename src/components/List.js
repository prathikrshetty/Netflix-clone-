import React  from 'react'
import { useEffect ,useState } from 'react';
import { fetchData } from '../api/Api'
import Delete from './Delete';
 const List = ({ title, param}) => {
    const [list, setList] = useState([]);
    useEffect(() => {
      fetchData(param).then( res => setList(res.data.results))
    },[param]);
    console.log(list)

    
  return (
    <div className="list">
      <div className="row">
        <h2 className=" text-white title">{ title}</h2>
        <div className="col">
          <div className="row_posters">
            {
              list.map(item => <img
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
           
          
              
              />)
            } 
          </div>
        </div>

      </div>
      
    </div>
  )
}
export default List;