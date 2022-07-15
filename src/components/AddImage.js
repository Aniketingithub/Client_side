import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const AddImage = () => {
   const navigate = useNavigate();
   const [image, setImage] = useState({
      Name: "",
		Description: "",
      URL: "",
   });

	let name, value;
   const handleImage = (e) => {
      name = e.target.name;
      value = e.target.value;
      setImage({...image, [name]: value});
   }

   const postImage = async (e) => {
      e.preventDefault();
      const {Name, Description, URL} = image;
      const imageDetail = await fetch("/new", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({Name, Description, URL}),
      });
      if(imageDetail.status === 200) {
         window.alert("Image added Succesfully.");
      } else if(imageDetail.status === 404 || imageDetail.status === 422) {
         window.alert("Invalid image");
      } else {
         window.alert("Image added");
      }
      navigate("/");
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

									<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Enter the required fields</p>

									<form className="mx-1 mx-md-4">

										<div className="d-flex flex-row align-items-center mb-4">
										<div className="form-outline flex-fill mb-0">
											<i className="fas fa-image fa-lg me-3 fa-fw"></i>
											<label className="form-label" for="form3Example1c">Name of Image</label>
											<input type="text" id="form3Example1c" className="form-control" 			name="Name"
												value={image.Name}
												onChange={handleImage}
											/>
										</div>
										</div>
										
										<div className="d-flex flex-row align-items-center mb-4">
										<div className="form-outline flex-fill">
										<i className="fas fa-id-card fa-lg me-3 fa-fw"></i>
											<label className="form-label" for="form3Example3c">Description</label>
											<input type="email" id="form3Example3c" className="form-control" 
												name="Description"
												value={image.Description}
												onChange={handleImage}
											/>
										</div>
										</div>

										<div className="d-flex flex-row align-items-center mb-4">
										<div className="form-outline flex-fill">
										<i className="fas fa-link fa-lg me-3 fa-fw"></i>
											<label className="form-label" for="form3Example3c">URL</label>
											<input type="email" id="form3Example3c" className="form-control" 
												name="URL"
												value={image.URL}
												onChange={handleImage}
											/>
										</div>
										</div>

										<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
											<button
												type="submit"
												className="btn btn-primary btn-lg"
												onClick={postImage}
											>
												Add Image to database
											</button>
										</div>
									</form>
								</div>
								{/* Image  */}
								<div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center align-items-center order-1 order-lg-2">
									<img src={image.URL} className="img-fluid" alt="Sample image" />
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

export default AddImage