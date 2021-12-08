import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewContainer from "../review/review_container";
// import { clearErrors } from "../../actions/session_actions";
import Spinner from '../spinner/spinner';
function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'create listing':
            component = <CreateListingContainer />;
            break;
        case 'edit listing':
            component = <EditListingContainer />;
            break;
        case 'create review':
            component = <ReviewContainer />;
            break;
        case 'spinner':
            component = <Spinner />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        // clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
