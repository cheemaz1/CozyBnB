import React from "react";
import { Link } from "react-router-dom";



class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        let createListingButton;
        if (this.props.currentUserId) {
            createListingButton = (
                <li
                    className="create-listing-li"
                    onClick={() => this.props.openModal("create listing")}
                >
                    Create Listing
                </li>
            );
        } else {
            createListingButton = (
                <li
                    className="create-listing-li"
                    onClick={() => this.props.openModal("login")}
                >
                    Create Listing
                </li>
            );
        }

        return (
            <>
                <div className="splash-container">
                            {/* <img className="bg-img" src={splash_bg} alt="Splash BG" /> */}

                            <div>
                                <img className="splashbg" src={window.bg} alt="BG" />
                                <div>
                                    <p>Not sure where to go? Perfect.</p>
                                </div>
                                <div>
                                    <Link className="flex-button" to="/listings">
                                        I'm flexible
                                    </Link>
                                </div>
                            </div>
                    <div>
                        <div>
                            <h3>Explore Places To Stay</h3>
                        </div>
                        <div>
                                <div className="frog-row">
                            <div className="explore-location">
                                {/* <div className="img-row"> */}
                                <img className="location-img" src={toronto} alt="Location img" />
                                <Link
                                    to={`/listings/Toronto`}
                                    className="explore-location-text"
                                >
                                    Toronto
                                </Link>
                                    <p>
                                        <span>$250</span>/night avg.
                                    </p>
                            </div>
                            <div className="explore-location">
                                <img className="location-img" src={vancouver} alt="Location img" />
                                <Link
                                    to={`/listings/Vancouver`}
                                    className="explore-location-text"
                                >
                                    Vancouver
                                </Link>
                                <p>
                                    <span>$300</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                <img className="location-img" src={chicago} alt="Location img" />
                                <Link
                                    to={`/listings/Chicago`}
                                    className="explore-location-text"
                                >
                                    Chicago
                                </Link>
                                <p>
                                    <span>$180</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                <img className="location-img" src={nyc} alt="Location img" />
                                <Link to={`/listings/New York`} className="explore-location-text">
                                    New York
                                </Link>
                                <p>
                                    <span>$250</span>/night avg.
                                </p>
                            </div>
                            </div>
                            <div className="frog-row">

                            <div className="explore-location">
                                <img className="location-img" src={nj} alt="Location img" />
                                <Link
                                    to={`/listings/New Jersey`}
                                    className="explore-location-text"
                                >
                                    New Jersey
                                </Link>
                                <p>
                                    <span>$130</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                <img className="location-img" src={sanfran} alt="Location img" />
                                <Link
                                    to={`/listings/San Francisco`}
                                    className="explore-location-text"
                                >
                                    San Francisco
                                </Link>
                                <p>
                                    <span>$250</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                <img className="location-img" src={dallas} alt="Location img" />
                                <Link
                                    to={`/listings/Dallas`}
                                    className="explore-location-text"
                                >
                                    Dallas
                                </Link>
                                <p>
                                    <span>$180</span>/night avg.
                                </p>
                            </div>
                            <div className="explore-location">
                                <img className="location-img" src={houston} alt="Location img" />
                                <Link to={`/listings/Houston`} className="explore-location-text">
                                    Houston
                                </Link>
                                <p>
                                    <span>$140</span>/night avg.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div>
                        <div>
                            <div>
                                {/* <img className="try-hosting-img" src={try_hosting} alt="Location img" /> */}
                            </div>
                        

                            <div>
                                <h3>Try Hosting</h3>
                                <p>
                                    Earn extra income and unlock new opportunities by sharing your
                                    space
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Splash;