


import * as React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
// import { ExpandMoreIcon } from '@mui/material';


import rightTik from '../../images/right-tik.png';
import dropdown from '../../images/down-drop.png';
import upload from '../../images/upload.png';
import dlt from '../../images/delete.png';



// import './Accordian.css';
import '../Dashboard.css';



export default function SimpalAccordion() {

    
  return (
    <div submission>

            <div className="headingLine">
                <div className="headingLine1">
                    <sapn>No.</sapn> <span>Campain</span>
                </div>
                <div className="headingLine1">
                    <span>Approval Status</span> <span id='more'>More</span>
                </div>
            </div>
            <hr />

      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"v"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>1</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"+"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>2</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"+"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>3</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>





      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"+"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>4</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>





      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"+"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>5</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"+"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>6</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion className='accordionbody'>
        <AccordionSummary className='panel bg-dark' aria-controls='panel1-content' 
            expandIcon={"+"}>
            <Typography >
                <div className="acc-header bg-dark">
                    <p>7</p>
                    <h6>Decrib your data about yur product</h6>
                </div>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography >
                <>
                <div className="id col-md-12 bg-dark">
                    <div className="col-md-2">ID</div>
                    <div className="col-md-2">Description</div>
                    <div className="col-md-2">Due Date</div>
                    <div className="col-md-3 approve">Approve Status</div>
                    <div className="col-md-2">Approve Date</div>
                    <div className="col-md-1">Action</div>
                </div>
                <hr />

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"> 

                        <select className="slection-box">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                    
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve">
                        
                    <select className="slection-box awi">
                            <option className="a-btn" selected>
                                <img className='Simg1' src={rightTik} alt="" /> Awaiting<img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="option2 y-btn" value={1}>
                               <img className='Simg1' src={rightTik}   alt="" /> Approve <img className='Simg2' src={dropdown} alt="" />
                            </option>
                            <option className="n-btn" value={2}>
                                <><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></>
                            </option>

                        </select>
                        
                    </div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='n-btn'><img className='Simg1' src={rightTik} alt="" /> Negative <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}   alt="" /><img src={dlt} alt=""  /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='y-btn'><img className='Simg1' src={rightTik}  alt="" /> Awaiting <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload}  alt=""  /><img src={dlt}  alt="" /></div>
                </div>

                <div className="ids col-md-12 bg-dark">
                    <div className="col-md-2">ABC1232</div>
                    <div className="col-md-2">http://www.tulsi.com</div>
                    <div className="col-md-2">November 07, 2022</div>
                    <div className="col-md-3 approve"><button className='a-btn'><img className='Simg1' src={rightTik} alt="" /> Approve <img className='Simg2' src={dropdown} alt="" /></button></div>
                    <div className="col-md-2">Desember 05, 2022</div>
                    <div className="col-md-1 up-dlt"><img src={upload} alt="" /><img src={dlt} alt="" /></div>
                </div>
                <hr />
                </>
            </Typography>
        </AccordionDetails>
      </Accordion>


     



    </div>
  );
}
