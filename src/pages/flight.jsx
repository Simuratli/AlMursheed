import React, {useState} from 'react';


// Components
import ButtonDark from '../components/button-dark/button-dark'
import FlightCard from '../components/flight-card/flight-card.component'
import Col from 'react-bootstrap/Col'
import Pagination from '../components/pagination/pagination.component'
import FlightHeadCard from '../components/flight-head-card/flight-head-card-component'
const Flight = () =>{

    const [flight,setFlight] = useState([
        {name:'Aerflot',image:'aerflot',link:'https://www.aeroflot.com/xx-en'},   
        {name:'Air Arabia',image:'air_arabia',link:'https://www.airarabia.com/en'},   
        {name:'KLM',image:'klm',link:'https://www.klm.com'},   
        {name:'Qatar',image:'qatar',link:'https://www.aeroflot.com/xx-en'},   
        {name:'Georgian',image:'georgian',link:'https://www.aeroflot.com/xx-en'},   
        {name:'Lustance',image:'lustance',link:'https://www.aeroflot.com/xx-en'},  
        {name:'Lustance',image:'lustance',link:'https://www.aeroflot.com/xx-en'},  
        {name:'Lustance',image:'lustance',link:'https://www.aeroflot.com/xx-en'},  
        {name:'Lustance',image:'lustance',link:'https://www.aeroflot.com/xx-en'},  
        {name:'Lustance',image:'lustance',link:'https://www.aeroflot.com/xx-en'},  
        {name:'Lustance',image:'lustance',link:'https://www.aeroflot.com/xx-en'},  
  ])

  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [cardPerPage,setCardPerPage] = useState(6);

// Get current posts
const indexOfLastCard = currentPage * cardPerPage;
const indexOfFirstCard = indexOfLastCard- cardPerPage;
const currentPost = flight.slice(indexOfFirstCard,indexOfLastCard)

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <section id="guides_drivers">
        <div className="container">
            <div className="row">
                <div className="col-md-12" >
                    
                    <FlightHeadCard />

                    <div className="content">
                        <div className="header">
                            <h4>Flight Reservation<span>({flight.length})</span></h4>
                        </div>
                        <div className="body">
                            <div className="row">
                             
                               {
                                currentPost.map(({image, ...otherProps},index)=>{
                                   return <FlightCard key={index} image={require(`../images/flight/${image}.png`)} {...otherProps} ></FlightCard>
                                  }) 
                               }
                               
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Pagination
                postsPerPage={cardPerPage}
                totalPosts={flight.length}
                paginate={paginate}
            />
        </div>
        
    </section>
    )
}


export default Flight;