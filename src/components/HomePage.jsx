

import myImage from '../images/home.svg';
const HomePage = () =>
{
    return(
    <>
        <h1 class="h11" align="left">Unleash Your Inner Developer</h1>
        <img src={myImage} alt="My Image" id="imgtag"/>
        <p id="ptag" align="left">Dive into the world of coding with out powerful online code editor project. Create, collaborate, and conquer any coding challenge, all while having a blast</p>
        </>
    )
    
}

export default HomePage