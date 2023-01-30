
import Bounty from '../Bount-status';
import Navbar from '../elements/Navbar';

export default function Section1 () {
    return (
        <section className="section">
            <div className="image">
                <div className="container">

                    <Navbar />

                    <div className="row">
                        <div className="col-md-7 first-heading">
                            <h1>Web3's Leading Bug <br /> Bounty Platform, <br /> Protecting <span>$60 Billion</span> <br /> In User Founds</h1>
                            <p>Amet minim mollit non deserunt ullamco est aliqua dolor <br />
                                do amet sint. Velit officia consequat duis enim velit</p>
                            
                            <button type="submit">Get protected</button>
                        </div>

                        <div className="col-md-5"></div>
                    </div>
                </div>

                <Bounty />

            </div>
        </section>
    );
}