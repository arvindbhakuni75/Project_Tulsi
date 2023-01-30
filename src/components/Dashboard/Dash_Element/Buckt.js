
import React from 'react';

import rightTik from '../../images/right-tik.png';
import dropdown from '../../images/down-drop.png';
import upload from '../../images/upload.png';
import dlt from '../../images/delete.png';
import dwn from '../../images/downloade.png';


export default function Submission () {

    return(
        <>
        <div className="submission">
            <div className="headingLine">
                <div className="headingLine1">
                    <sapn>No.</sapn> <span>Campain</span>
                </div>
                <div className="headingLine1">
                    <span>Approval Status</span> <span id='more'>More</span>
                </div>
            </div>
            <hr />

            <div className="contentLine">
                <div className="headingLine2">
                    <sapn>1</sapn> <span id='decrib'>Decrib your data about yur product</span>
                </div>
                <div className="headingLine2">
                    <div className='red-dot'></div><span> Status Negative</span> <span id='minus-box'>	&#8211;</span>
                </div>
            </div>
            <hr />

            {/* ////////////////////////////////////////// */}

            <div className="id col-md-12">
                <div className="col-md-2">ID</div>
                <div className="col-md-2">Description</div>
                <div className="col-md-2">Due Date</div>
                <div className="col-md-3 approve">Approve Status</div>
                <div className="col-md-2">Approve Date</div>
                <div className="col-md-1">Action</div>
            </div>
            <hr />

            <div className="ids col-md-12">
                <div className="col-md-2">ABC1232</div>
                <div className="col-md-2">http://www.tulsi.com</div>
                <div className="col-md-2">November 07, 2022</div>
                <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                <div className="col-md-2">Desember 05, 2022</div>
                <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
            </div>

            <div className="ids col-md-12">
                <div className="col-md-2">ABC1232</div>
                <div className="col-md-2">http://www.tulsi.com</div>
                <div className="col-md-2">November 07, 2022</div>
                <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik} alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                <div className="col-md-2">Desember 05, 2022</div>
                <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
            </div>

            <div className="ids col-md-12">
                <div className="col-md-2">ABC1232</div>
                <div className="col-md-2">http://www.tulsi.com</div>
                <div className="col-md-2">November 07, 2022</div>
                <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                <div className="col-md-2">Desember 05, 2022</div>
                <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
            </div>

            <div className="ids col-md-12">
                <div className="col-md-2">ABC1232</div>
                <div className="col-md-2">http://www.tulsi.com</div>
                <div className="col-md-2">November 07, 2022</div>
                <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                <div className="col-md-2">Desember 05, 2022</div>
                <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
            </div>

            <div className="ids col-md-12">
                <div className="col-md-2">ABC1232</div>
                <div className="col-md-2">http://www.tulsi.com</div>
                <div className="col-md-2">November 07, 2022</div>
                <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                <div className="col-md-2">Desember 05, 2022</div>
                <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
            </div>
            <hr />

            {/* //////////////////////////////////////////// */}

            <div className="contentLine">
                <div className="col-md-6">
                    <sapn>2</sapn> <span id='decrib'>New data fillDecrib your data about yur product</span>
                </div>
                <div className="col-md-6 second-col">
                    <div><div className='red-dot'></div><span> Status Negative</span></div> <span id='last-icon'> <img src={dwn} alt="" /></span>
                </div>
            </div>
            <hr />

            <div className="contentLine">
                <div className="col-md-6">
                    <sapn>3</sapn> <span id='decrib'>New data fillDecrib your data about yur product</span>
                </div>
                <div className="col-md-6 second-col">
                    <div><div className='white-dot'></div><span> All Approved</span></div> <span id='last-icon'>	&#8211;</span>
                </div>
            </div>
            <hr />

            <div className="contentLine">
                <div className="col-md-6">
                    <sapn>4</sapn> <span id='decrib'>New data fillDecrib your data about yur product</span>
                </div>
                <div className="col-md-6 second-col">
                    <div><div className=''></div><span> </span></div> <span id='last-icon'>	&#8211;</span>
                </div>
            </div>
            <hr />

            <div className="contentLine">
                <div className="col-md-6">
                    <sapn>5</sapn> <span id='decrib'>New data fillDecrib your data about yur product</span>
                </div>
                <div className="col-md-6 second-col">
                    <div><div className='white-dot'></div><span> All Approved</span></div> <span id='last-icon'>	&#8211;</span>
                </div>
            </div>
            <hr />

            <div className="contentLine">
                <div className="col-md-6">
                    <sapn>6</sapn> <span id='decrib'>New data fillDecrib your data about yur product</span>
                </div>
                <div className="col-md-6 second-col">
                    <div><div className='white-dot'></div><span> All Approved</span></div> <span id='last-icon'>	&#8211;</span>
                </div>
            </div>
            <hr />
            

        </div>

        </>
    );
}