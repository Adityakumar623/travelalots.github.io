import React,{useEffect} from 'react';
import './main.css';
import img1 from '../../Assets/newyork.jpg'
import img2 from '../../Assets/Mayapur.jpg'
import img3 from '../../Assets/bodhgaya.jpg'
import img4 from '../../Assets/pyramids.jpg'
import img5 from '../../Assets/Netherland-2.png'
import img6 from '../../Assets/burj2.jpg'
import img7 from '../../Assets/Bora1.webp'
import img8 from '../../Assets/Himeji1.jpg'
import img9 from '../../Assets/buckingham-palace-tour-640.jpg'
import img10 from '../../Assets/effiel.jpeg'
import img11 from '../../Assets/statue.jpg'
import img12 from '../../Assets/Machu_Picchu,_Peru.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'New York',
    location:'U.S.A',
    grade:'Cultural Relax',
    feees:'$400',
    description:'Visiting New York is worthwhile at any time of year, but I personally like the warm months best. Summer in New York can be very hot and humid. So, for many, the best times to visit New York is April and June, and September and October. Spending Christmas in New York or enjoying the pre-Christmas season in New York City is also a wonderful experience. The ice rinks are open, the city is beautifully decorated, and, if it snows, the dream vacation at wintertime is perfect!'

      
  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Mayapur',
    location:'West Bengal , India',
    grade:'Cultural Relax',
    feees:'$200',
    description:'The holiest of all places in entire India, Mayapur Chandrodaya Temple of ISKCON is the major reason why devotees all over the world come to this sacred land. Inside you can see the magnificent deities of Pancatattva, Lord Nrisingha Dev, Srila Prabhupada and Radha-Madhav with the Gopis. This is a place flowing with devotion like no other place on earth.Mayapur ISKCON temple, the birth place of Sri Chaitanya Mahaprabhu, is the Head Quarter of ISKCON. .'
  },
  {
    id:3,
    imgSrc:img9,
    destTitle:'Buckingham Palace',
    location:'London , UK',
    grade:'Cultural Relax',
    feees:'$800',
    description:'During the summer and on selected dates from November to December and at Easter, visitors can tour the 19 State Rooms, which form the heart of the Palace. These magnificent rooms are decorated with some of the greatest treasures from the Royal Collection, including paintings by Rembrandt, Rubens and Canaletto. Read about the top 10 things to see on a Buckingham Palace tour.The Royal Mews .'

    
  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Pyramids Of Giza',
    location:'Egypt',
    grade:'Cultural Relax',
    feees:'$400',
    description:'The Pyramids of Giza, along with the Sphinx and a handful of smaller tombs, form one of the most iconic sights in the world. If you have plans to visit Egypt, then most likely these pyramids are at the top of your list.     In this guide, get all the answers to your questions about how to visit the Pyramids of Giza. In order to give you the information you need to know to plan your visit, we visited the Giza Plateau twice. '


  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Netherland',
    location:'Netherland',
    grade:'Cultural Relax',
    feees:'$400',
    description:'f you think of the Netherlands, flowers, windmills and wooden shoes come to mind - but Holland has so much more to offer! Enjoy the bracing wind with a beach walk along the Dutch coast or a cycling tour of the Veluwe. Experience the welcoming hospitality of North Brabant and Limburg, the authentic charm of our Hanseatic cities and the Achterhoek in eastern Holland, and the freedom of the provinces of Friesland and Groningen with their wide horizons.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Burj Khalifa',
    location:'Dubai',
    grade:'Cultural Relax',
    feees:'$400',
    description:'The Burj Khalifa is the tallest building in the world and a global icon. Truly a feat of engineering, the building represents the conceptual heart and soul of the city of Dubai.At 828m tall, this magnificent structure is located next to Dubai Mall and has drawn visitors from all over the world since opening in 2010. The unmatched Burj Khalifa view can be taken in from not one but two observations decks – the two-storey At the Top on the 124th and 125th floors '
    
    
    
  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'Cultural Relax',
    feees:'$400',
    description:'The Bora Bora island is one of the most popular islands in The Islands of Tahiti. One of nine islands within the Society Islands, Bora Bora was formed over seven million years ago by a volcano. Like most of the islands of French Polynesia, Bora Bora is surrounded by a ring of coral reef, also known as an atoll.Bora Bora island will make you feel love at first sight. With ocean views  of turquoise waters resembling an artist’s palette of bright blues and greens. '
  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'Himeji Castle',
    location:'Japan',
    grade:'Cultural Relax',
    feees:'$500',
    description:'Himeji Castle is located on a hilltop in Himeji city, Hyogo Prefecture. The castle is regarded as the finest surviving example of prototypical Japanese castle architecture, comprising a network of 83 buildings with advanced defensive systems from the feudal period.The castle is also called Hakuro-jo or Shirasagi-jo (“White Egret Castle” or “White Heron Castle”) because of its brilliant white exterior and supposed resemblance to a bird taking flight.'
  },
  {
    id:9,
    imgSrc:img3,
    destTitle:'Bodhgaya',
    location:'Bihar , India',
    grade:'Cultural Relax',
    feees:'$200',
    description:'Bodh Gaya is considered to be the holiest site in Buddhism.[7] Known as Uruvela in the Buddha time .  it is situated by the bank of Lilajan River. The first temple at the site was built by King Ashoka.[8] At this place, the Buddha was abandoned by the five men who had been his companions of earlier austerities. All they saw was an ordinary man; they mocked his well-nourished appearance. "Here comes the mendicant Gautama," they said, "who has turned away from asceticism. ."'
  } ,
  {
    id:10,
    imgSrc:img10,
    destTitle:'Eiffel Tower',
    location:'Paris , France',
    grade:'Cultural Relax',
    feees:'$200',
    description:'Eiffel Tower, French Tour Eiffel, Parisian landmark that is also a technological masterpiece in building-construction history. When the French government was organizing the International Exposition of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a suitable monument. More than 100 plans were submitted, and the Centennial Committee accepted that of the noted bridge engineer Gustave Eiffel"'
  },
  {
    id:11,
    imgSrc:img11,
    destTitle:'Statue Of Unity',
    location:'Gujrat , India',
    grade:'Cultural Relax',
    feees:'$200',
    description:'The Statue of Unity is the worlds tallest statue, with a height of 182 metres (597 feet),[3] located near Kevadia in the state of Gujarat, India. It depicts Indian statesman and independence activist Vallabhbhai Patel (1875–1950), who was the first deputy prime minister and home minister of independent India and an adherent of Mahatma Gandhi. Patel is highly respected for his leadership in uniting 562 princely states of India to form the single Union of India' 
  },
  {
    id:12,
    imgSrc:img12,
    destTitle:'Machu Picchu',
    location:'Southern Peru',
    grade:'Cultural Relax',
    feees:'$200',
    description:'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate."'
  },
 
]





const Main = () => {

   // let create a react hook to add a scroll animation... 
 useEffect(()=>{
  Aos.init({duration:2000})
 },[])



  return (
    <section className="main container section">
      <div className="secTitle">
        <h3  data-aos="fade-right"  className="title">
          Most Visited Destination
        </h3>
      </div>

     <div className="secContent grid">
         {/* we will now use high order array (map) */}
         {/* so for that we will use list of objects in one array */}
         {/* now we will create an array named data and from that we shall .map() array 
         to fetch each destination once */}

{
  Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
    return(
      <div key={id} data-aos="fade-up"
       className="singleDestination">
        {/* here it will return single single id from the map aaray*/}
      <div className="imageDiv">
        <img src={imgSrc} alt={destTitle} />
      </div>

      <div className="cardInfo">
        <h4 className="destTitle">
          {destTitle}
        </h4>
        <span className="continent flex">
        <HiOutlineLocationMarker className="icon" />
        <span className="name">{location}</span>
        </span>
    
       <div className="fees flex">
        <div className="grade">
          <span>{grade}<small>+1</small></span>
        </div>
        <div className="price">
          <h5>{fees}</h5>
        </div>
       </div>

       <div className="desc">
        <p>{description}</p>
       </div>
    
        <button className="btn flex">
          DETAILS :<HiOutlineClipboardCheck  className='icon'/>
        </button>

      </div>
      </div>
    )
  })
}
         
     </div>

    </section>
  )
}

export default Main