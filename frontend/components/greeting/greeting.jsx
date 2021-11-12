// import React from "react";
// import { withRouter } from 'react-router-dom';
// import Dropdown from "react-dropdown";
// import { DropdownButton } from 'react-bootstrap';
// import SearchContainer from "../search/search_container";
// import {

//     Link,

// } from 'react-router-dom';


// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         // console.log(props);

//     }
//     gotoMain() {
//         this.props.history.push(`/`)
//     };
//     gotoProfile() {
//         this.props.history.push(`/users/${this.props.currentUser.id}`)
//     }

//     //  = ({ currentUser, logout, openModal })
//     render() {
//         const { currentUser, logout, openModal, title } = this.props 
//         // debugger; 
        
//         const sessionLinks = (
//             <div className="ddown">
//                 <SearchContainer />
//                 {/* <Link to="/" className="header-link">
//                     <div className="cozybnb"><p className="name"><i id="hellobob" className="fab fa-airbnb" ></i>cozybnb</p></div>
//                 </Link> */}
//                 <div className="pfcontainer">

//                 <button className="pf-ask" >☰</button>
//                 <ul className="login-signup-ul">
//                     <li className="menu-li" onClick={() => openModal("login")}>
//                         Log In
//                     </li>
//                     <li className="menu-li" onClick={() => openModal("signup")}>
//                         Sign Up
//                     </li>
//                 </ul> 
//                 </div>
              
       

  
               
//             </div>
            
//         );
        

//         let personalGreeting
//         if (currentUser) {
//             personalGreeting = (
                
//                 <div className="ddown">
//                 <Link to="/" className="header-link">
//                     <div className="cozybnb"><p className="name"><i id="hellobob" className="fab fa-airbnb" ></i>cozybnb</p></div>
//                 </Link>
//                 <div className="pfcontainer">

//                 <button className="pf-ask" >☰</button>
//                 <ul className="login-signup-ul">
//                     {/* <li className="menu-li">
//                         Profile
//                     </li> */}
//                     <button className="menu-li" onClick={this.gotoProfile.bind(this)}>
//                         <i className="fas fa-address-card"></i>
//                     </button>
//                     <li className="menu-li" onClick={logout}>
//                         Logout
//                     </li>
//                 </ul> 
//                 </div>
              
       

  
               
//             </div>


//             );
//         }
//         return (
//             <div>
//             {currentUser ?
//             personalGreeting :
//                 sessionLinks}
//             </div>
//         );

//     }
// };


// export default Greeting;


import React from "react";
import { withRouter } from 'react-router-dom';
import Dropdown from "react-dropdown";
import { DropdownButton } from 'react-bootstrap';
import SearchContainer from "../search/search_container";
import {

    Link,

} from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

    }
    gotoMain() {
        this.props.history.push(`/`)
    };
    gotoProfile() {
        this.props.history.push(`/users/${this.props.currentUser.id}`)
    }

    //  = ({ currentUser, logout, openModal })
    render() {
        const { currentUser, logout, openModal, title } = this.props
        // debugger; 

        const sessionLinks = (
            <div className="ddown">
                {/* <SearchContainer /> */}
                <Link to="/" className="header-link">
                    <div className="cozybnb"><p className="name"><i id="hellobob" className="fab fa-airbnb" ></i>cozybnb</p></div>
                </Link>
                <div className="pfcontainer">
                    <div className="moodal">
                    <button className="pf-ask" >☰</button>
                    <ul className="login-signup-ul">
                        <li className="menu-li" onClick={() => openModal("login")}>
                            Log In
                        </li>
                        <li className="menu-li" onClick={() => openModal("signup")}>
                            Sign Up
                        </li>
                    </ul>
                </div>

                    </div>






            </div>

        );


        let personalGreeting
        if (currentUser) {
            personalGreeting = (

                <div className="ddown">
                    <Link to="/" className="header-link">
                        <div className="cozybnb"><p className="name"><i id="hellobob" className="fab fa-airbnb" ></i>cozybnb</p></div>
                    </Link>
                    <div className="pfcontainer">

                        <button className="pf-ask" >☰</button>
                        <ul className="login-signup-ul2">
                            {/* <li className="menu-li">
                        Profile
                    </li> */}
                            {/* <button className="menu-li" onClick={this.gotoProfile.bind(this)}> */}
                                {/* <i className="fas fa-address-card"></i> */}
                                <li className="menu-li2" onClick={this.gotoProfile.bind(this)}>
                                    Profile
                                </li>
                            {/* </button> */}
                            <li className="menu-li2" onClick={logout}>
                                Logout
                            </li>
                        </ul>
                    </div>





                </div>


            );
        }
        return (
            <div>
                {currentUser ?
                    personalGreeting :
                    sessionLinks}
            </div>
        );

    }
};


export default Greeting;






