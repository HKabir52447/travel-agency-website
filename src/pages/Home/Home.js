import React, { useEffect, useState } from "react";
import Places from "../Places/Places";
import "./Home.css";

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("https://shocking-dungeon-19775.herokuapp.com/Tourist-Places")
      .then((res) => res.json())
      .then((data) => setPlaces(data.slice(0, 6)));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <img
            className="img-fluid banner"
            src={
              "https://htmldesigntemplates.com/html/yatriiworld/images/slider/3.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <div className="row py-4 pb-5">
        <div className="col-md-12">
          <h2 className="text-primary pt-3">Famous Tourist Places</h2>
          <div className="places-container">
            {places.map((place) => (
              <Places key={places.id} place={place}></Places>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-primary py-4">Our Guides</h2>
          <div className='d-flex justify-content-evenly flex-wrap img-container'>
          <div class="pb-3">
            <img className='img-fluid image'
              src={
                "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
            <h5 className='text-primary pt-3'>MD. Kabir</h5>
          </div>
          <div class="pb-3">
            <img className='img-fluid image'
              src={
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
            <h5 className='text-primary pt-3'>Rima Akter</h5>
          </div>
          <div class="pb-3">
            <img className='img-fluid image'
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
            <h5 className='text-primary pt-3'>MD. Rashedul Islam</h5>
          </div>
          <div class="pb-3">
            <img className='img-fluid image'
              src={
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
            <h5 className='text-primary pt-3'>Mohona Akter</h5>
          </div>
          <div class="pb-3">
            <img className='img-fluid image'
              src={
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
            <h5 className='text-primary pt-3'>MD. Rayhan</h5>
          </div>
          </div>
        </div>
      </div>
      <div className="row pt-4 pb-5">
        <div className="col-md-12">
          <h2 className="text-primary">Top Reviews</h2>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="reviews">
                  <div className="review d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        src={
                          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-primary">Cox's Bazar</h3>
                      <p>
                        "HK Travel is a trusted and reliable tour and travel
                        agency among all the leading and upadte tour-operating
                        services in Bangladesh. We are here to bring the luxury
                        to your traveling."
                      </p>
                      <h4 className="text-primary">MD. Kabir</h4>
                    </div>
                  </div>
                  <div className="review d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        src={
                          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-primary">Taj Mahal</h3>
                      <p>
                        "HK Travel is a trusted and reliable tour and travel
                        agency among all the leading and upadte tour-operating
                        services in Bangladesh. We are here to bring the luxury
                        to your traveling."
                      </p>
                      <h4 className="text-primary">Mohona Akter</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="reviews">
                  <div className="review d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        src={
                          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-primary">Central Park</h3>
                      <p>
                        "HK Travel is a trusted and reliable tour and travel
                        agency among all the leading and upadte tour-operating
                        services in Bangladesh. We are here to bring the luxury
                        to your traveling."
                      </p>
                      <h4 className="text-primary">HK Himu</h4>
                    </div>
                  </div>
                  <div className="review d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        src={
                          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-primary">The Blue Mosque</h3>
                      <p>
                        "HK Travel is a trusted and reliable tour and travel
                        agency among all the leading and upadte tour-operating
                        services in Bangladesh. We are here to bring the luxury
                        to your traveling."
                      </p>
                      <h4 className="text-primary">MD. Himel Khan</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="reviews">
                  <div className="review d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        src={
                          "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-primary">Kuakata</h3>
                      <p>
                        "HK Travel is a trusted and reliable tour and travel
                        agency among all the leading and upadte tour-operating
                        services in Bangladesh. We are here to bring the luxury
                        to your traveling."
                      </p>
                      <h4 className="text-primary">MD. Kabir</h4>
                    </div>
                  </div>
                  <div className="review d-flex">
                    <div>
                      <img
                        className="img-fluid"
                        src={
                          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        }
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-primary">Burj Khalifa</h3>
                      <p>
                        "HK Travel is a trusted and reliable tour and travel
                        agency among all the leading and upadte tour-operating
                        services in Bangladesh. We are here to bring the luxury
                        to your traveling."
                      </p>
                      <h4 className="text-primary">Salma Akter</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
