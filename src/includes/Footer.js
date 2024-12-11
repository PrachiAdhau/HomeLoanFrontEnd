import React from "react";
import '../style/footer.css';
function Footer()
{
    return(
        <div className="footer">
            <div className="section">
                <h3>Our Address</h3>
                <p>123 Main st.cityville,state,cali blue building,<br/>1111 7th floor cali blue building</p>
            </div>
            
            <div className="section">
            <h3>Contact Us</h3> 
            <p>Email: info@example.com</p> 
            <p>Phone: 9587554786</p>
            </div>

            <div className="section">
            <h3>Other Information</h3> 
            <p>Twitter: @cityville</p> 
            <p>Instagram: @cityville11</p>
            </div>

        </div>
    );
}
export default Footer;