import { React } from 'react'
import "./Content.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HavaMahl from '../../assets/bestofindia/havamahal.jpg'
import Himachal from '../../assets/bestofindia/himachal.jpg'
import Indiagate from '../../assets/bestofindia/indiagate.jpg'
import kedarnath from '../../assets/bestofindia/kedrnath.jpg'
import kerala from '../../assets/bestofindia/kerala.jpg'
import Ladakh from '../../assets/bestofindia/ladkah.jpg'
import nanital from '../../assets/bestofindia/nanital.jpg'
import tajmaghal from '../../assets/bestofindia/tajmahal.jpg'









const
  BestOfIndia = [
    {
      key: 1,
      Place: "HAVA MAHAL",
      Img: HavaMahl,
      discription: "Place in jaipur"
    },
    {
      key: 2,
      Place: "KEDARNTH",
      Img: kedarnath,
      discription: "Holi Lord shiva place"
    },
    {
      key: 3,
      Place: "KERALA",
      Img: kerala,
      discription: "Holi Lord vishnu place"
    },
    {
      key: 4,
      Place: "TAJ MAHAL",
      Img: tajmaghal,
      discription: "One of the 7 wonders "
    },
    {
      key: 5,
      Place: "LADAKH",
      Img: Ladakh,
      discription: "place to ride bike "
    },
    {
      key: 6,
      Place: "NANITAL",
      Img: nanital,
      discription: "ciityb of lakes "
    },
    {
      key: 7,
      Place: "DELHI",
      Img: Indiagate,
      discription: "Capital  of india"
    },
    {
      key: 8,
      Place: "HIMACHAL",
      Img: Himachal,
      discription: "heaven of earth"
    }
  ]

const NorthIndia = [
  {
    key: 1,
    Place: "DELHI",
    Img: HavaMahl,
    discription: "Place in jaipur"
  },
  {
    key: 2,
    Place: "KEDARNTH",
    Img: kedarnath,
    discription: "Holi Lord shiva place"
  },
  {
    key: 3,
    Place: "KERALA",
    Img: kerala,
    discription: "Holi Lord vishnu place"
  },
  {
    key: 4,
    Place: "TAJ MAHAL",
    Img: tajmaghal,
    discription: "One of the 7 wonders "
  },
  {
    key: 5,
    Place: "LADAKH",
    Img: Ladakh,
    discription: "place to ride bike "
  },
  {
    key: 6,
    Place: "NANITAL",
    Img: nanital,
    discription: "ciityb of lakes "
  },
  {
    key: 7,
    Place: "DELHI",
    Img: Indiagate,
    discription: "Capital  of india"
  },
  {
    key: 8,
    Place: "HIMACHAL",
    Img: Himachal,
    discription: "heaven of earth"
  }
]




export default function Content() {
  // const [image, setImage] = useState()
  // useEffect(() => {
  //   axios.get('http://localhost:8000/user/best-of-india', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((res) => {
  //     setImage(res.data.result[0].image)
  //     console.log("res from best of india =======>", res.data.result[1].image)
  //   })
  // })


  const pickImage = (image) => {
    console.log("image =======>", image)
  }



  // console.log("BestOfIndia==============>",BestOfIndia)

  return (
    <>
      {/* Best of India  */}
      <div className='content'>
        <div className='container-fluid' >
          <div className="row title d-flex justify-content-center fs-20 " style={{ marginBottom: "20px", fontSize: "50px", color: "#3a3a3a", fontWeight: "600" }} >
            Best Of India
          </div>
        </div>
        <div className='container' >
          <div className='slider'>
            <div className='align-items-center d-flex ' >
              <OwlCarousel autoplayTimeout={2000} items={4} dots={false} autoplay={true} nav={true} loop={true}  >
                {BestOfIndia && BestOfIndia.map((x) => {
                  return (
                    <div className='slider-img-wrapper' key={x.key} >
                      <img alt={x.Place} className='slider-img' onClick={e => pickImage(x.Place)} src={x.Img} style={{ borderRadius: "20px", height: "300px", objectFit: 'cover', overflow: 'hidden', maxWidth: "300px", }} />
                      <div className='slider-discription d-flex justify-content-center '>
                        {x.Place}
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>  </div>
          </div>
        </div>

      </div>
      {/* Best of North India */}
      <div className='content ' style={{ marginTop: "-200px" }}>
        <div className='container-fluid' >
          <div className="row title d-flex justify-content-center fs-20 " style={{ marginBottom: "20px", fontSize: "50px", color: "#3a3a3a", fontWeight: "600" }} >
            North  India
          </div>
        </div>
        <div className='container' >
          <div className='slider'>
            <div className='align-items-center d-flex ' >
              <OwlCarousel autoplayTimeout={2000} items={4} dots={false} autoplay={true} nav={true} loop={true}  >
                {NorthIndia && NorthIndia.map((x) => {
                  return (
                    <div className='slider-img-wrapper' key={x.key} >
                      <img alt={x.Place} className='slider-img' onClick={e => pickImage(x.Place)} src={x.Img} style={{ borderRadius: "20px", height: "300px", objectFit: 'cover', overflow: 'hidden', maxWidth: "300px", }} />
                      <div className='slider-discription d-flex justify-content-center '>
                        {x.Place}
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>  </div>
          </div>
        </div>

      </div>

      {/* ....................best of south India .................. */}
      <div className='content ' style={{ marginTop: "-200px" }}>
        <div className='container-fluid' >
          <div className="row title d-flex justify-content-center fs-20 " style={{ marginBottom: "20px", fontSize: "50px", color: "#3a3a3a", fontWeight: "600" }} >
            South  India
          </div>
        </div>
        <div className='container' >
          <div className='slider'>
            <div className='align-items-center d-flex ' >
              <OwlCarousel autoplayTimeout={2000} items={4} dots={false} autoplay={true} nav={true} loop={true}  >
                {BestOfIndia && BestOfIndia.map((x) => {
                  return (
                    <div className='slider-img-wrapper' key={x.key} >
                      <img alt={x.Place} className='slider-img' onClick={e => pickImage(x.Place)} src={x.Img} style={{ borderRadius: "20px", height: "300px", objectFit: 'cover', overflow: 'hidden', maxWidth: "300px", }} />
                      <div className='slider-discription d-flex justify-content-center '>
                        {x.Place}
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>  </div>
          </div>
        </div>

      </div>

      {/* ................................best of east India ............. */}
      <div className='content ' style={{ marginTop: "-200px" }}>
        <div className='container-fluid' >
          <div className="row title d-flex justify-content-center fs-20 " style={{ marginBottom: "20px", fontSize: "50px", color: "#3a3a3a", fontWeight: "600" }} >
            East  India
          </div>
        </div>
        <div className='container' >
          <div className='slider'>
            <div className='align-items-center d-flex ' >
              <OwlCarousel autoplayTimeout={2000} items={4} dots={false} autoplay={true} nav={true} loop={true}  >
                {BestOfIndia && BestOfIndia.map((x) => {
                  return (
                    <div className='slider-img-wrapper' key={x.key} >
                      <img alt={x.Place} className='slider-img' onClick={e => pickImage(x.Place)} src={x.Img} style={{ borderRadius: "20px", height: "300px", objectFit: 'cover', overflow: 'hidden', maxWidth: "300px", }} />
                      <div className='slider-discription d-flex justify-content-center '>
                        {x.Place}
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>  </div>
          </div>
        </div>

      </div>

      {/* .............................west India......................... */}
      <div className='content ' style={{ marginTop: "-200px" }}>
        <div className='container-fluid' >
          <div className="row title d-flex justify-content-center fs-20 " style={{ marginBottom: "20px", fontSize: "50px", color: "#3a3a3a", fontWeight: "600" }} >
            West  India
          </div>
        </div>
        <div className='container' >
          <div className='slider'>
            <div className='align-items-center d-flex ' >
              <OwlCarousel autoplayTimeout={2000} items={4} dots={false} autoplay={true} nav={true} loop={true}  >
                {BestOfIndia && BestOfIndia.map((x) => {
                  return (
                    <div className='slider-img-wrapper' key={x.key} >
                      <img alt={x.Place} className='slider-img' onClick={e => pickImage(x.Place)} src={x.Img} style={{ borderRadius: "20px", height: "300px", objectFit: 'cover', overflow: 'hidden', maxWidth: "300px", }} />
                      <div className='slider-discription d-flex justify-content-center '>
                        {x.Place}
                      </div>
                    </div>
                  )
                })}
              </OwlCarousel>  </div>
          </div>
        </div>

      </div>


      <div className='container ' style={{ marginTop: "-140px" }}>
        <div className='row'>
          <div className='col-4'>
            <div className='row escape'>Find The Perfect Escape</div>
            <div className='row ms-5 mt-2'>Discover your ideal Experience</div>
          </div>
          <div className='col-8'>
            <div className='row'>
              <div className='col-4 px-0'><img src={Ladakh} style={{ height: "370px", width: "220px", borderRadius: "20px" }} /></div>
              <div className='col-4'> <img style={{ height: "370px", width: "220px", borderRadius: "20px" }} src={nanital} /></div>
              <div className='col-4'> <img src={tajmaghal} style={{ height: "370px", width: "220px", borderRadius: "20px" }} /></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}