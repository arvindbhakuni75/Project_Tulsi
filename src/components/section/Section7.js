
import vectorWave from '../images/WaveVector.png';
import partnerHeading from '../images/partner-heading.png';
import partnerImage from '../images/Frame1.png';
import partnerImage2 from '../images/Group4.png';
import partnerImage3 from '../images/Group2.png';
import partnerImage4 from '../images/Group4.png';
import partnerImage5 from '../images/Group4.png';
import partnerImage6 from '../images/Group2.png';
import partnerImage7 from '../images/Group4.png';
import partnerImage8 from '../images/Frame1.png';


export default function Section7 () {
    return(
        <section className='section'>
            <div className='vectorWave'>
                <img src={vectorWave} alt="" />
            </div>
            <div className="container container-7">
            <div className="row">
                    <div className="col-md12 our-partner">
                        <img src={partnerHeading} alt = "" />
                    </div>
                    <div className="col-md-12 partner-line">
                        <img src={partnerImage} alt="" />
                        <img src={partnerImage2} alt="" />
                        <img src={partnerImage3} alt="" />
                    </div>
                    <div className="col-md-12 partner-line-2">
                        <img src={partnerImage4} alt="" />
                        <img src={partnerImage5} alt="" />
                    </div>
                    <div className="col-md-12 partner-line">
                        <img src={partnerImage6} alt="" />
                        <img src={partnerImage7} alt="" />
                        <img src={partnerImage8} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}