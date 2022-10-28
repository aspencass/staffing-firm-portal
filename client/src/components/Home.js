import React from 'react';
import { useHistory } from 'react-router-dom'


import { Card, Button, Footer } from 'flowbite-react';
import wholefoods from '../assets/logos/wholefoods.png';
import ball from '../assets/logos/ball.png';
import fresca from '../assets/logos/fresca.png';
import coors from '../assets/logos/coors.png';
import cardinal from '../assets/logos/cardinal.png';
import acme from '../assets/logos/acme.png';
import aspen from '../assets/logos/aspen.png';
import bigo from '../assets/logos/bigo.png';
import bmc from '../assets/logos/bmc.png';
import brownss from '../assets/logos/brownss.png';
import cintas from '../assets/logos/cintas.png';
import dmco from '../assets/logos/dmco.png';
import empire from '../assets/logos/empire.png';
import forterra from '../assets/logos/forterra.png';
import jepp from '../assets/logos/jepp.png';
import liva from '../assets/logos/liva.png';
import metal from '../assets/logos/metal.png';
import napa from '../assets/logos/napa.png';
import sorin from '../assets/logos/sorin.png';
import sund from '../assets/logos/sund.png';
import tms from '../assets/logos/tms.png';
import trelle from '../assets/logos/trelle.png';
import uec from '../assets/logos/uec.png';
import map_footer from '../assets/map_footer.jpeg';



export default function Home () {

    const history = useHistory();

    function onInterviewClick() {
        history.push('/interview')
    }

    function onResumeClick() {
        history.push('/resume')
    }

    function onOpportunitiesClick() {
        history.push('/opportunities')
    }

    function onAboutClick() {
        history.push('/about')
        }

    function onCandidatesClick() {
        history.push('/opportunities')
        }

    function onClientsClick() {
        history.push('/clients')
        }


    

    return (
        <>
        <div class="bg-hero bg-cover bg-no-repeat">
                <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
                    <div class="p-20 text-7xl text-black bg-gray-300 bg-opacity-75">
                        EXCEL PERSONNEL <br /> 
                        <div class="text-xl pt-8">
                            We specialize in Administration, Forklift Operations, Packaging, Quality Control, Shipping & Receiving, and Warehouse talent. 
                        </div>
                    </div> 
                </header>
        </div>

        <div class="grid-container">
            <div class="grid-child1">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Candidates
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                    Excel Personnel has been providing expert recruiting services in Denver, CO for over three decades. We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed.
                                </p>
                                <Button type="button" onClick={onCandidatesClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                        Read more
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </Button>
                            </Card>
                    </div>

            <div class="grid-child2">
                    <Card class="bg-gray-100 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Clients
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            We know staffing. Use our 30+ years of Denver recruiting and staffing services to your benefit. We are devoutly committed to developing a strong understanding of our clients’ business to continue providing each client with customized solutions to your talent needs.
                        </p>
                            <Button type="button" onClick={onClientsClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52">
                                Read more
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Button>
                    </Card>
                </div>
        </div>

                <section>
                    <div>
                        <h1><span class="highlight-container"><span class="highlight">Companies who chose us</span></span></h1> 
                        <br />
                    </div>
                    <div class="skill-icons inline-grid grid-cols-5 gap-44 p-24 shrink">
                        <div class="wf-icon"><img src={wholefoods} alt="wholefoods logo"/></div>
                        <div class="ball-icon"><img src={ball} alt="ball logo"/></div>
                        <div class="fresca-icon"><img src={fresca} alt="fresca logo"/></div>
                        <div class="coors-icon"><img src={coors} alt="coors logo"/></div>
                        <div class="cardinal-icon"><img src={cardinal} alt="cardinal logo"/></div>
                        <div class="acme-icon"><img src={acme} alt="acme logo"/></div>
                        <div class="aspen-icon"><img src={aspen} alt="aspen logo"/></div>
                        <div class="bigo-icon"><img src={bigo} alt="bigo logo"/></div>
                        <div class="bmc-icon"><img src={bmc} alt="bmc logo"/></div>
                        <div class="brownss-icon"><img src={brownss} alt="brownss logo"/></div>
                        <div class="cintas-icon"><img src={cintas} alt="cintas logo"/></div>
                        <div class="dmco-icon"><img src={dmco} alt="dmco logo"/></div>
                        <div class="empire-icon"><img src={empire} alt="empire logo"/></div>
                        <div class="forterra-icon"><img src={forterra} alt="forterra logo"/></div>
                        <div class="jepp-icon"><img src={jepp} alt="jepp logo"/></div>
                        <div class="liva-icon"><img src={liva} alt="liva logo"/></div>
                        <div class="metal-icon"><img src={metal} alt="metal logo"/></div>
                        <div class="napa-icon"><img src={napa} alt="napa logo"/></div>
                        <div class="sorin-icon"><img src={sorin} alt="sorin logo"/></div>
                        <div class="sund-icon"><img src={sund} alt="sund logo"/></div>
                        <div class="tms-icon"><img src={tms} alt="tms logo"/></div>
                        <div class="trelle-icon"><img src={trelle} alt="trelle logo"/></div>
                        <div class="uec-icon"><img src={uec} alt="uec logo"/></div>


                    </div>    
                </section>

        <div class="grid-container2">
            <div class="grid-child3">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Schedule an Interview
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                    We work with thousands of associates every year, and we know what is important to you and how to get things done so you may succeed. 
                                </p>
                                <Button type="button" onClick={onInterviewClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24">
                                        {/* I'm ready to leap! */}
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </Button>
                            </Card>
            </div>

            <div class="grid-child4">
                    <Card class="bg-gray-200 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Submit your Resume
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            Quick Apply for New Candidates. Provide Your Contact Information & Upload Your Resume. 
                        </p>
                            <Button type="button" onClick={onResumeClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24">
                                {/* Send it!  */}
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                            </Button>
                    </Card>
            </div>

            <div class="grid-child5">
                        <Card class="bg-gray-200 ml-0 h-80 ">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Job Opportunities
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-800">
                                   We pride ourselves in getting to know you, giving you personalized attention, clear communication, and honest accountability.
                                </p>
                                <Button type="button" onClick={onOpportunitiesClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24">
                                        {/* Peep some jobs! */}
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
                                    </Button>
                            </Card>
            </div>

            <div class="grid-child6">
                    <Card class="bg-gray-200 mr-0 h-80">
                        <h5 className="text-2xl font-bold tracking-tight ">
                            Who We Are
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-800">
                            If you are looking for a partner with the best new job opportunities throughout the Denver area, you’ve found us. Welcome to Excel Personnel.
                        </p>
                            <Button type="button" onClick={onAboutClick} class="text-white bg-gray-700 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-24">
                                {/* Tell me more! */}
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </Button>
                    </Card>
                </div>
        </div>
  
        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                <img src={map_footer} class="mr-3 max-h-96 pr-16" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Conveniently located at I-25 and Thornton Pkwy, <br />our office is located just off of Grant St.</span>
                </div>
                    <div className="grid grid-cols-2 gap-x-24 max-w-full mr-24 mt-10">
                        <div>
                        <Footer.Title title="Denver / Thornton Office" />
                        <Footer.LinkGroup col={true}>
                            9351 Grant St.<br />Suite 570<br />Thornton, CO 80229<br />Phone: (303)-427-4600<br /> Fax: (303)427-4147
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title="Corporate / Payroll Office" />
                        <Footer.LinkGroup col={true}>
                            10111 Inverness Main St.<br />Englewood, CO 80112<br />Phone: (303)-805-2300<br /> Fax: (303)805-2400
                        </Footer.LinkGroup>
                        </div>
                  
                    </div>
                </div>
                <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}/>
        
                </div>
            </div>
        </Footer>


  

    </>
    )

};
