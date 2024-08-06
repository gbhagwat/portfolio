import {Social} from '../Components/Social';
import {Intro} from '../Components/Intro';
import {Timeline} from '../Components/Timeline';
import {Kudos} from '../Components/Kudos';
import {Footer} from '../Components/Footer';

export function Home() {
    const home = true;
    const next = "/about";
    const nextText = "Read More";
    return (
        <div>
            <Social />
            <Intro />
            <Timeline />
            <Kudos />
            <Footer home={home} next={next} nextText={nextText} />
        </div>
    ) 
}