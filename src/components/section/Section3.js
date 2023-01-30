
import ForIcon1 from '../images/Sec3Icon1.png';
import ForIcon2 from '../images/Sec3Icon2.png';


export default function Section3 () {
    return(
        <section className="section">
            <div className="container">
                <div className="container-3">
                    <div className="col-md-6 For-elements">
                        <img src={ForIcon1} alt="" />
                        <h4>For Hackers</h4>
                        <p>Hack DeFi, save users from theft, and get paid doing it. Sign up to Immunefi as a hacker.</p>
                        <button>Signup</button>
                    </div>
                    <div className="col-md-6 For-elements">
                        <img src={ForIcon2} alt="" />
                        <h4>For Project</h4>
                        <p>Secure your projects against catastrophic exploit with DeFi's leading security talent.</p>
                        <button>Learn Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}