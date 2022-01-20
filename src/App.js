import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaEdit } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Company />
    </div>
  );
}

function Star({ filled, onClick }) {
  return (
    <FaStar
      color={filled ? "green" : "lightgray"}
      onClick={onClick} />
  );
}

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );
}




function Company() {



  const companyData = [
    {
      image: '/images/reliance-img.png',
      title: "Relianceb Industries Ltd.",
      subTitle: "Digital Marketing Agency IN",
      address: "504 NBC Complex, Plot #43, Sector 11, Opp IDBI Bank, CBD Balapur, Navi-Mumbai, 400614",
      location: "Mumbai",
      foundingYear: "2017",
      mobileNumber: "+91 8888888888",
      openCloseTime: "Open 8AM Close 8PM",
      minOrder: "$ 1000-2200",
      team: "1-1000",
      responseRate: "20%",
      reviews: "987645 reviews",
    },
    {
      image: '/images/tata-image.png',
      title: "TATA Consultancy Services Ltd.",
      subTitle: "Digital Marketing Agency IN",
      address: "504 NBC Complex, Plot #43, Sector 11, Opp IDBI Bank, CBD Balapur, Navi-Mumbai, 400614",
      location: "Mumbai",
      foundingYear: "2017",
      mobileNumber: "+91 8888888888",
      openCloseTime: "Open 8AM Close 8PM",
      minOrder: "$ 1000-2200",
      team: "1-1000",
      responseRate: "20%",
      reviews: "987645 reviews",
    }
  ]


  function filterData(companyData, filters) {
    return companyData.filter(item => filters.includes(item.location));
  }

  return (
    <div>
      {/* {backendData.map(ele =>
        <div style={noteRootStyle}>
          <h3>{ele.title}</h3>
          <p>{ele.description}</p>
          <small>{ele.createdat}</small>
        </div>
      )} */}
      <div className='main-div'>
        <div className='filter-div'>
          <div>
            <label>Location</label><br />
            <input type="text" placeholder="Search here" />
          </div>
        </div>
        <div className='content-div'>
          {companyData.map(ele =>
            <div>
              <div className='image-div'>
                <img className="submenu-image" src={ele.image} alt="" />
              </div>
              <div className='comapny-details-div'>
                <span className='ad-css'>Ad </span><span className='title-css'>{ele.title}</span>
                <p className='subtitle-css'>{ele.subTitle}</p>
                <p className='value-css'>{ele.address}</p>
                <span className='lable-css'>Founding Year : </span><span className='value-css'>{ele.foundingYear}</span>
                <span className='value-css'>{ele.mobileNumber}</span>
                <span className='value-css'>{ele.openCloseTime}</span>
                <div className='divided-bottom'>
                  <span className='lable-css'>Min Order : </span><span className='value-css'>{ele.minOrder}</span>
                  <span className='lable-css'>Team : </span><span className='value-css'>{ele.team}</span>
                  <span className='lable-css'>Response Rate : </span><span className='value-css'>{ele.responseRate}</span>
                </div>
              </div>
              <div className='rating-div'>
                <StarRating /><br />
                <span className='reviews'>{ele.reviews}</span><br />
                <button className="write-review"><FaEdit style={{ color: 'grey' }} /> Write review</button><br />
                <div style={{marginTop:'10px'}}><button className="chat-btn">Chat</button> <button className="enquiry-btn">Enquiry</button></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
