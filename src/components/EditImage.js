import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import './style.css'

const EditImage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, imageName, imageDesc, imageUrl} = location.state;  

  const [imageDetails, setimageDetails] = useState({
    id: id,
    name: imageName,
    desc: imageDesc,
    url: imageUrl
  });

  let name, value;
  const handleImage = (e) => {
    name = e.target.name;
    value = e.target.value;
    setimageDetails({...imageDetails, [name]: value});
  }
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }

  const editImage = async (e) => {
    e.preventDefault();
    try {
      const {id, name, desc, url} = imageDetails;
      const req = await fetch(`http://localhost:5000/${id}/edit`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, name, desc, url})
      });
      if(!req || req.status === 404 || req.status === 401) {
        window.alert("Image not found");
      } else if(req.status === 200) {
        window.alert("Image updated");
        navigate('/');
      }
    } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-lg-12 col-xl-11">
						<div className="card text-black" style={{borderRadius: "25px"}}>
							<div className="card-body p-md-5">
								<div className="row justify-content-center">
								<div className="col-md-10 col-lg-6 col-xl-8 order-2 order-lg-1">

									<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Change the required fields</p>

									<form className="mx-1 mx-md-4">

										<div className="d-flex flex-row align-items-center mb-4">
										<div className="form-outline flex-fill mb-0">
											<i className="fas fa-image fa-lg me-3 fa-fw"></i>
											<label className="form-label" for="form3Example1c">Name of Image</label>
											<input type="text" id="form3Example1c" className="form-control" name="name"
													value={imageDetails.name}
													onChange={handleImage}
											/>
										</div>
										</div>
                    
                    <div className="d-flex flex-row align-items-center mb-4">
										<div className="form-outline flex-fill">
										<i className="fas fa-id-card fa-lg me-3 fa-fw"></i>
											<label className="form-label" for="form3Example3c">Description</label>
											<input type="email" id="form3Example3c" className="form-control" 
												name="desc"
												value={imageDetails.desc}
												onChange={handleImage}
											/>
										</div>
										</div>

										<div className="d-flex flex-row align-items-center mb-4">
										<div className="form-outline flex-fill">
										<i className="fas fa-link fa-lg me-3 fa-fw"></i>
											<label className="form-label" for="form3Example3c">URL</label>
											<input type="email" id="form3Example3c" className="form-control" 
												name="url"
												value={imageDetails.url}
												onChange={handleImage}
											/>
										</div>
										</div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg"
                        onClick={editImage}
                      >Update Image</button>
                    </div>
									</form>
								</div>
								{/* Image  */}
								<div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
									<img src={imageUrl} className="img-fluid" alt="Sample image" />
								</div>
								{/* Image */}
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}

export default EditImage