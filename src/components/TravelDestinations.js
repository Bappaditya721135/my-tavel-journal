export default function TravelDestinations(props) {
    return(
        <div className="destination-container">
            <img className="destination-image" src={props.img} alt="destination" />
           
                <div className="info">
                <img src="" alt="" className="location-logo" />
                <span className="country">{props.country}</span>
                <h2 className="landmark">{props.locationLandmark}</h2>
                <span className="date">{props.date}</span>
                </div>
                <div className="disc">
                <p className="discription">{props.discription}</p>
            </div>
        </div>
    );
}