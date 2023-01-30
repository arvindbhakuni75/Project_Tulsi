
import member1 from '../images/Hexagon1.png';
import member2 from '../images/Hexagon2.png';
import member3 from '../images/hexagon3.png';
import teamHeading from '../images/ourTeamsimage.png'


export default function Section4 () {
    return (
        <section className='section section-4'>
            <div className="container container-4">
                <div className="row">
                    <div className="col-md12 our-team">
                        <img src={teamHeading} alt="" />
                        <p>Amet minim mollit non deserunt ullamco est aliqua dolor <br />
                            do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12 our-team-members">
                        <div className="img1 img">
                            <img src={member1} alt="" />
                            <div  className='team-name'>
                                <h6>Jenny Wilson</h6>
                                <p>Cameron Williamson</p>
                            </div>
                        </div>
                        <div className="img2 img">
                            <img src={member3} alt="" />
                            <div className='team-name'>
                                <h6>Wade Warren</h6>
                                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624 Floyd Miles</p>
                            </div>
                        </div>
                        <div className="img3 img">
                            <img src={member2} alt="" />
                            <div className='team-name'>
                                <h6>Eleanor Pena</h6>
                                <p>8502 Prestorn Rd. Inglewood, Maine 98380 Devon Lane</p>
                            </div>
                        </div>

                        <div className="row view-more">
                            <div className="col-md-12">
                                <button>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}