
import how from '../images/HowItWorks.png';
import howIcon1 from '../images/Sec2Icon1.png';
import howIcon2 from '../images/Sec2Icon2.png';
import howIcon3 from '../images/Sec2Icon3.png';

export default function Section2 () {
    return(
        <section className="section">
            <div className="container container-2">
                <div className="row">
                    <div className="col-md-12 how-it-works">
                        <div className="heading-image">
                            <img src={how} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam <br /> totam provident et minus consequatur quisquam laboriosam <br /> velit, voluptatum eveniet iusto</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 how-it-elements">
                        <img src={howIcon1} alt="" />
                        <h6>Set up your wallet</h6>
                        <p>Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                    </div>
                    <div className="col-md-4 how-it-elements">
                        <img src={howIcon2} alt="" />
                        <h6>Add your idea</h6>
                        <p>Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                    </div>
                    <div className="col-md-4 how-it-elements">
                        <img src={howIcon3} alt="" />
                        <h6>Sell Your bug</h6>
                        <p>Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}