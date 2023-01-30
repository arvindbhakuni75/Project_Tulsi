
import testimonialHeading from '../images/Testimonial.png';
import jj1 from '../images/img1.png';

export default function Section5 () {
    return (
        <section className='section '>
            <div className="container">
                <div>
                    <div className="col-md-12 testimonial-heading">
                        <img src={testimonialHeading} alt="" />
                    </div>
                </div>
                <div className="row text">
                    <div className="col-md-4 text-box">
                        <img src={jj1} alt="" /><span>Jacob Jones</span> 
                        <h6>&#9733;&#9733;&#9733;&#9733;&#9733; <span>New</span></h6>
                        <p>Thank you for your continuous support. Your performance and professionalism is much appreciated. <br />
                        Looking forward to working with you in future projects.
                        <br /><br />
                        - Mr. Jacb Jones - Finance Manager
                        (Platinum Cost Hotel Apartments)</p>
                    </div>
                    <div className="col-md-4 text-box">
                        <img src={jj1} alt="" /><span>Jacob Jones</span> 
                        <h6>&#9733;&#9733;&#9733;&#9733;&#9733; <span>New</span></h6>
                        <p>Thank you for your continuous support. Your performance and professionalism is much      appreciated. <br />
                        Looking forward to working with you in future projects.
                        <br /><br />
                        - Mr. Jacb Jones - Finance Manager
                        (Platinum Cost Hotel Apartments)</p>
                    </div>

                    <div className="col-md-4 text-box">
                        <img src={jj1} alt="" /><span>Jacob Jones</span> 
                        <h6>&#9733;&#9733;&#9733;&#9733;&#9733; <span>New</span></h6>
                        <p>Thank you for your continuous support. Your performance and professionalism is much appreciated. <br />
                            Looking forward to working with you in future projects.
                        <br /><br />
                            - Mr. Jacb Jones - Finance Manager
                        (Platinum Cost Hotel Apartments)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}