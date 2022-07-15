import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Image from './Image';

const Home = () => {
	const [images, setImages] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const {data} = await axios.get('http://localhost:5000/');
				setImages(data);
				console.log(images);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);


   return (
      <>
			<div className="container" style={{marginTop: "100px"}}>
				<div class="row row-cols-1 row-cols-md-3 g-4">	
					{images.map((image) => (
							<Image id={image._id} Name={image.Name} Desc={image.Description} url={image.URL} />
					))}	
				</div>
			</div>
      </>
   );
}

export default Home