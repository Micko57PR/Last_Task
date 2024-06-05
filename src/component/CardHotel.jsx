import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const CardHotel = ({data}) => {
    let navigate = useNavigate();
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
<Carousel responsive={responsive}>
{data.map((item, i) => ( 
  <Link key={i} to={`/hotel-suvenir/${item.googleMaps}`}>
<div class="card m-2">
  <img className="rounded card-img-top" src={item.gambar} style={{width:"18em"}}/>
  <div className="bottom-left fw-bold text-capitalize display-7"
  style={{color:'white'}}>{item.hotel}</div>
</div>
</Link>
))}
</Carousel>
        </>
    )
}

export default CardHotel