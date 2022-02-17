import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({ children, IsGoogleSignedIn, Inverted, ...otherprops }) => (
    <button className={`${Inverted ? 'inverted' : ''}
                        ${IsGoogleSignedIn ? 'google-sign-in' : ''}
                        custom-button`} {...otherprops}
    >
        {children}
    </button>
);

export default CustomButton;