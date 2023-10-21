import { BrowserRouter } from "react-router-dom";
import mixpanel from 'mixpanel-browser';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Profile } from "./components";

const App = () => {


    mixpanel.init("753a60ffc7c2666e40a17736f6e1b418", { debug: true, track_pageview: true, persistence: 'localStorage' });

        mixpanel.identify("visitor-id-12345")

        mixpanel.track('Visit', {
            'Visit': 'Portfolio'
        })

    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                </div>
                <Profile />
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className='relative z-0'>
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
