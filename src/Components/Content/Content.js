import { React } from "react";
import "./Content.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HavaMahl from "../../assets/bestofindia/havamahal.jpg";
import Himachal from "../../assets/bestofindia/himachal.jpg";
import Indiagate from "../../assets/bestofindia/indiagate.jpg";
import kedarnath from "../../assets/bestofindia/kedrnath.jpg";
import kerala from "../../assets/bestofindia/kerala.jpg";
import Ladakh from "../../assets/bestofindia/ladkah.jpg";
import nanital from "../../assets/bestofindia/nanital.jpg";
import tajmaghal from "../../assets/bestofindia/tajmahal.jpg";
import explore1 from "../../assets/explore/holly-mandarich-UVyOfX3v0Ls-unsplash.jpg";
import explore2 from "../../assets/explore/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import explore3 from "../../assets/explore/vincentiu-solomon-R86bzJSneuw-unsplash.jpg";
// import explore4 from '../../assets/explore/andrew-neel-z55CR_d0ayg-unsplash.jpg '
import cycle1 from "../../assets/h3.jpg";

import explore5 from "../../assets/explore/jakob-owens-MctEgCk1Dm0-unsplash.jpg";

import Carousel from "react-bootstrap/Carousel";
const Brands = [
  { Brand: "Hero", key: 0 },
  { Brand: "Hercules", key: 1 },
  { Brand: "Avon", key: 2 },
  { Brand: "Atlas", key: 3 },
  { Brand: "Bianchi", key: 4 },
  { Brand: "BSA", key: 5 },
  { Brand: "Btwin ", key: 6 },
  { Brand: "Firefox ", key: 7 },
];
const BestOfIndia = [
  {
    key: 1,
    Place: "HAVA MAHAL",
    Img: cycle1,
    discription: "Place in jaipur",
  },
  {
    key: 2,
    Place: "KEDARNTH",
    Img: cycle1,
    discription: "Holi Lord shiva place",
  },
  {
    key: 3,
    Place: "KERALA",
    Img: kerala,
    discription: "Holi Lord vishnu place",
  },
  {
    key: 4,
    Place: "TAJ MAHAL",
    Img: tajmaghal,
    discription: "One of the 7 wonders ",
  },
  {
    key: 5,
    Place: "LADAKH",
    Img: Ladakh,
    discription: "place to ride bike ",
  },
  {
    key: 6,
    Place: "NANITAL",
    Img: nanital,
    discription: "ciityb of lakes ",
  },
  {
    key: 7,
    Place: "DELHI",
    Img: Indiagate,
    discription: "Capital  of india",
  },
  {
    key: 8,
    Place: "HIMACHAL",
    Img: Himachal,
    discription: "heaven of earth",
  },
];

const NorthIndia = [
  {
    key: 1,
    Place: "DELHI",
    Img: HavaMahl,
    discription: "Place in jaipur",
  },
  {
    key: 2,
    Place: "KEDARNTH",
    Img: kedarnath,
    discription: "Holi Lord shiva place",
  },
  {
    key: 3,
    Place: "KERALA",
    Img: kerala,
    discription: "Holi Lord vishnu place",
  },
  {
    key: 4,
    Place: "TAJ MAHAL",
    Img: tajmaghal,
    discription: "One of the 7 wonders ",
  },
  {
    key: 5,
    Place: "LADAKH",
    Img: Ladakh,
    discription: "place to ride bike ",
  },
  {
    key: 6,
    Place: "NANITAL",
    Img: nanital,
    discription: "ciityb of lakes ",
  },
  {
    key: 7,
    Place: "DELHI",
    Img: Indiagate,
    discription: "Capital  of india",
  },
  {
    key: 8,
    Place: "HIMACHAL",
    Img: Himachal,
    discription: "heaven of earth",
  },
];

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
    console.log("image =======>", image);
  };

  // console.log("BestOfIndia==============>",BestOfIndia)

  return (
    <>
      {/* Best of India  */}
      <div className="content">
        <div className="container-fluid">
          <div
            className="row title d-flex justify-content-center fs-20 "
            style={{
              marginBottom: "20px",
              fontSize: "50px",
              color: "#3a3a3a",
              fontWeight: "600",
            }}
          >
            Best Seller
          </div>
        </div>
        <div className="container">
          <div className="slider">
            <div className="align-items-center d-flex ">
              <OwlCarousel
                autoplayTimeout={2000}
                items={4}
                dots={false}
                autoplay={true}
                nav={true}
                loop={true}
              >
                {BestOfIndia &&
                  BestOfIndia.map((x) => {
                    return (
                      <div className="slider-img-wrapper" key={x.key}>
                        <img
                          alt={x.Place}
                          className="slider-img"
                          onClick={(e) => pickImage(x.Place)}
                          src={x.Img}
                          style={{
                            borderRadius: "20px",
                            height: "300px",
                            objectFit: "cover",
                            overflow: "hidden",
                            maxWidth: "300px",
                          }}
                        />
                        <div className="slider-discription d-flex justify-content-center ">
                          {x.Place}
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Best of North India */}
      <div className="content " style={{ marginTop: "-200px" }}>
        <div className="container-fluid">
          <div
            className="row title d-flex justify-content-center fs-20 "
            style={{
              marginBottom: "20px",
              fontSize: "50px",
              color: "#3a3a3a",
              fontWeight: "600",
            }}
          >
            Best of Geared
          </div>
        </div>
        <div className="container">
          <div className="slider">
            <div className="align-items-center d-flex ">
              <OwlCarousel
                autoplayTimeout={2000}
                items={4}
                dots={false}
                autoplay={true}
                nav={true}
                loop={true}
              >
                {NorthIndia &&
                  NorthIndia.map((x) => {
                    return (
                      <div className="slider-img-wrapper" key={x.key}>
                        <img
                          alt={x.Place}
                          className="slider-img"
                          onClick={(e) => pickImage(x.Place)}
                          src={x.Img}
                          style={{
                            borderRadius: "20px",
                            height: "300px",
                            objectFit: "cover",
                            overflow: "hidden",
                            maxWidth: "300px",
                          }}
                        />
                        <div className="slider-discription d-flex justify-content-center ">
                          {x.Place}
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* ....................best of south India .................. */}
      <div className="content " style={{ marginTop: "-200px" }}>
        <div className="container-fluid">
          <div
            className="row title d-flex justify-content-center fs-20 "
            style={{
              marginBottom: "20px",
              fontSize: "50px",
              color: "#3a3a3a",
              fontWeight: "600",
            }}
          >
            Best of Non-Geared
          </div>
        </div>
        <div className="container">
          <div className="slider">
            <div className="align-items-center d-flex ">
              <OwlCarousel
                autoplayTimeout={2000}
                items={4}
                dots={false}
                autoplay={true}
                nav={true}
                loop={true}
              >
                {BestOfIndia &&
                  BestOfIndia.map((x) => {
                    return (
                      <div className="slider-img-wrapper" key={x.key}>
                        <img
                          alt={x.Place}
                          className="slider-img"
                          onClick={(e) => pickImage(x.Place)}
                          src={x.Img}
                          style={{
                            borderRadius: "20px",
                            height: "300px",
                            objectFit: "cover",
                            overflow: "hidden",
                            maxWidth: "300px",
                          }}
                        />
                        <div className="slider-discription d-flex justify-content-center ">
                          {x.Place}
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* ................................best of east India ............. */}
      <div className="content " style={{ marginTop: "-200px" }}>
        <div className="container-fluid">
          <div
            className="row title d-flex justify-content-center fs-20 "
            style={{
              marginBottom: "20px",
              fontSize: "50px",
              color: "#3a3a3a",
              fontWeight: "600",
            }}
          >
            Accessories
          </div>
        </div>
        <div className="container">
          <div className="slider">
            <div className="align-items-center d-flex ">
              <OwlCarousel
                autoplayTimeout={2000}
                items={4}
                dots={false}
                autoplay={true}
                nav={true}
                loop={true}
              >
                {BestOfIndia &&
                  BestOfIndia.map((x) => {
                    return (
                      <div className="slider-img-wrapper" key={x.key}>
                        <img
                          alt={x.Place}
                          className="slider-img"
                          onClick={(e) => pickImage(x.Place)}
                          src={x.Img}
                          style={{
                            borderRadius: "20px",
                            height: "300px",
                            objectFit: "cover",
                            overflow: "hidden",
                            maxWidth: "300px",
                          }}
                        />
                        <div className="slider-discription d-flex justify-content-center ">
                          {x.Place}
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* .............................west India......................... */}
      <div className="content " style={{ marginTop: "-200px" }}>
        <div className="container-fluid">
          <div
            className="row title d-flex justify-content-center fs-20 "
            style={{
              marginBottom: "20px",
              fontSize: "50px",
              color: "#3a3a3a",
              fontWeight: "600",
            }}
          >
            Brands
          </div>
        </div>
        <div className="container">
          <div className="slider">
            <div className="align-items-center d-flex ">
              <OwlCarousel
                autoplayTimeout={2000}
                items={4}
                dots={false}
                autoplay={true}
                nav={true}
                loop={true}
              >
                {Brands &&
                  Brands.map((x) => {
                    return (
                      <div className="slider-img-wrapper" key={x.key}>
                        <img
                          alt={x.Brand}
                          className="slider-img"
                          onClick={(e) => pickImage(x.Place)}
                          src={x.Brand}
                          style={{
                            borderRadius: "20px",
                            height: "300px",
                            objectFit: "cover",
                            overflow: "hidden",
                            maxWidth: "300px",
                          }}
                        />
                        <div className="slider-discription d-flex justify-content-center ">
                          {x.Brand}
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: "-140px" }}>
        <div className="row">
          <div className="col-4">
            <div className="row escape">Find The Perfect Match</div>
            <div className="row ms-5 mt-2">Discover your Bycycle</div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4 px-0">
                <img
                  src={Ladakh}
                  style={{
                    height: "370px",
                    width: "220px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="col-4">
                {" "}
                <img
                  style={{
                    height: "370px",
                    width: "220px",
                    borderRadius: "20px",
                  }}
                  src={nanital}
                />
              </div>
              <div className="col-4">
                {" "}
                <img
                  src={tajmaghal}
                  style={{
                    height: "370px",
                    width: "220px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container explore" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-12">
            <Carousel fade={true}>
              <Carousel.Item
                interval={1000}
                style={{ border: "1px transparent", borderRadius: "20px" }}
              >
                <img
                  className="d-block w-100"
                  src={explore1}
                  style={{ height: "380px", borderRadius: "10" }}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                interval={500}
                style={{ border: "1px transparent", borderRadius: "20px" }}
              >
                <img
                  className="d-block w-100"
                  src={explore2}
                  style={{ height: "380px", borderRadius: "10" }}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                interval={500}
                style={{ border: "1px transparent", borderRadius: "20px" }}
              >
                <img
                  className="d-block w-100"
                  src={explore3}
                  style={{ height: "380px", borderRadius: "10" }}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                interval={500}
                style={{ border: "1px transparent", borderRadius: "20px" }}
              >
                <img
                  className="d-block w-100"
                  src={explore2}
                  style={{ height: "380px", borderRadius: "10" }}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{ border: "1px transparent", borderRadius: "20px" }}
                interval={500}
              >
                <img
                  className="d-block w-100"
                  src={explore5}
                  style={{ height: "380px", borderRadius: "10" }}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
