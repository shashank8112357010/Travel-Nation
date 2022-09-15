import React from 'react'
import "./Content.css"
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const
  BestOfIndia = [
    {
      Place: "Kasol",
      Img: "",
      discription: "Best place to hangout"
    },
    {
      Place: "Kedarnath",
      Img: "",
      discription: "Holi Lord shiva place"
    },
    {
      Place: "Badrinath",
      Img: "",
      discription: "Holi Lord vishnu place"
    },
    {
      Place: "Tajmahal",
      Img: "",
      discription: "One of the 7 wonders "
    },
    {
      Place: "Amarnath",
      Img: "",
      discription: "Holi Lord shiva place"
    },
    {
      Place: "Nanital",
      Img: "",
      discription: "City of lakes"
    },
    {
      Place: "Banaras",
      Img: "",
      discription: "Famous for pan"
    },
    {
      Place: "Delhi",
      Img: "",
      discription: "Capital  of india"
    },
    {
      Place: "kashmir",
      Img: "",
      discription: "heaven of earth"
    }
  ]




export default function Content() {

console.log("BestOfIndia==============>",BestOfIndia)

  return (
    <div>
      <div className='container-fluid' >
        <div className="row title" style={{ marginBottom: "20px" }} >
        
        </div>
      </div>
      <div className='container-fluid' >
        <div className='row ms-3'>
          <div className='col-3 align-items-center d-flex ms-3'>
            It's time for new
          </div>
          <div className='col-8 align-items-center d-flex ms-4' >
            <OwlCarousel items={1} dots={false} margin={2} autoplay={true}  >
              <div >shashank1</div>
              <div>shashank2</div>
              <div>shashank3</div>
              <div>shashank4</div>
              <div>shashank5</div>
              <div>shashank6</div>
              <div>shashank7</div>
            </OwlCarousel>  </div>

        </div>

      </div>
    </div>
  )
}




// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })