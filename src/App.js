import "./app.css";
import ReactMapGL, { GeolocateControl,Marker, Popup } from "react-map-gl";
import { useEffect, useState, useRef, useCallback } from "react";
import { Room, Star, Delete, ExitToApp, Search, HowToReg, Input, Favorite} from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";
import Geocoder from "react-map-gl-geocoder";
// import {useNavigate} from 'react-router-dom'
import Comments from "./comments/Comments";
import "./index.css"

function App() {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(1);
  const [visitDate, setVisitDate] = useState(null);
  // const [data, setData] = useState();
  // const [state,dispatch] = useContext(UserContext);
  const [viewport, setViewport] = useState({
    latitude: 12.9354553,
    longitude: 77.5348926,
    zoom: 8,
  });
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };


// const makeComment = (text,postid)=>{
//     fetch('/',{
//         method:"put",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":"Bearer "+localStorage.getItem()  
//  }
//     }).then(res=>res.json())
//     .then(result=>{
//         console.log(result)
//         const newData = data.map(p=>{
//           if(p._id===result._id){
//               return result
//           }else{
//               return p
//           }
//        })
//       setData(newData)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

  // const navigate = useNavigate();

  const deletePin = (id,pin)=>{
    fetch(`/pins/${id}`,{
        method:"delete",
    }).then(async res=>res)
    .then(result=>{
        // console.log(result)
        setCurrentPlaceId(null)
    })
}

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
      visitDate,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };

    const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 };
    
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          });
        },
        [handleViewportChange]
      );


  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        width="100%"
        height="100%"
        transitionDuration="100"
        // mapStyle="mapbox://styles/rakesh-k-s/cl3erq2dl006p14thtfgxh4gf"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        // mapStyle='mapbox://styles/mapbox/satellite-v9'
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={currentUsername && handleAddClick}
      >
        {pins.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3 * viewport.zoom}
              offsetTop={-6 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 6 * viewport.zoom,
                  color:
                    currentUsername === p.username ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
                className="popup"
              >
                <div className="card" >
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<Star className="star" />)}
                  </div>
                  <label>Tour-Date</label>
                  <p className="visitDate">{p.visitDate.slice(0,10)}</p>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.username}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                  {/* <label>Comments</label> */}
                  <Comments
                    currentUserId="1"
                    />
                    <div className="like">
                {/* {
                  p.comments.map(record=>{
                      return(
                      <h6  key={record._id}><span   style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
                      )
                  })
              }
 
              <form onSubmit={(e)=>{
                  e.preventDefault()
                  makeComment(e.target[0].value,p._id)
              }} className>
                <input type="text" placeholder="add a comment"  />  
              </form> */}
                    {/* <Favorite /> */}
                  <Delete className="delete" style={{
                    // color:
                    // currentUsername === p.username ? "tomato" : "white",
                    cursor: "pointer",
                    marginBottom:"-10px",
                    visibility:
                    currentUsername === p.username ? "visible" : "hidden",
                  }}
                  onClick={() => deletePin(p._id,p.lat, p.long)}
                  />
                  </div>
                </div>
              </Popup>
            )}
          </>
        ))}
        {newPlace && (
          <>
            <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetLeft={-3 * viewport.zoom}
              offsetTop={-6 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 6 * viewport.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
            </Marker>
            <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >
              <div>
                <form onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea className="desc"
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <label>Tour-Date</label>
                  <input className="visitDate" type="date" onChange={(e) => setVisitDate(e.target.value)}/>
                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>
            </Popup>
          </>
        )}
        <div className="head" style={{ height: "10vh", width: "100wh",position:'relative', backgroundColor:"dodgerblue" }}>
        <h1 className="title">My Travel Log</h1>
        
        {currentUsername ? (
         <> <div className="icon">
           <ExitToApp style={{ fontSize: 20 }} />
         <button className="button logout" onClick={handleLogout}>
            SignOut 
          </button>
          </div>
          <div className="logos">
          <Search style={{ fontSize: 20 }} />
          <a href="http://localhost:3005/" className="button search">Search places</a>
          </div>
          </>
        ) : (
          <div className="buttons">
            <button className="button login" onClick={() => setShowLogin(true)}>
              <Input style={{ fontSize: 20 }}/>
              SignIn
            </button>
            <button
              className="button register"
              onClick={() => setShowRegister(true)}
              ><HowToReg style={{ fontSize: 20 }}/>
              SignUp
            </button>
          </div>
        )}
        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && (
          <Login
          setShowLogin={setShowLogin}
          setCurrentUsername={setCurrentUsername}
          myStorage={myStorage}
          />
          )}
          </div>
          <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          position="top-right"
          />
           <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            showUserLocation={true}
            showAccuracyCircle={false}
            style={{
              position: "fixed",
              right: 0,
              bottom: 15,
              margin: 10,
              // marginBotton: 360,
              marginRight: 8,
            }} 
          />
      </ReactMapGL>
    </div>
  );
}

export default App;
