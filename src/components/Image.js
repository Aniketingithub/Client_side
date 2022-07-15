import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Image = ({id, Name, Desc, url}) => {
   const [detail, setdetail] = useState({
      id: id,
      imageName: Name,
      imageDesc: Desc,
      imageUrl: url
   });

   return (
      <>
         <Link to={`/show/${id}`} state={detail}>
            <div className="col">
               <div className="card h-100" style={{borderColor: "white"}}>
                  <img src={url} className="card-img-top" alt="sdjb" />
                  <div className="card-body">
                     <h5 className="card-title">{Name}</h5>
                     <p class="card-text">{Desc}</p>
                  </div>
                  {/* Description */}
               </div>
            </div>
         </Link>
      </>
   )
}

export default Image;