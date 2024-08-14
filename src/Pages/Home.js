import {Social} from '../Components/Social';
import {Intro} from '../Components/Intro';
import {Timeline} from '../Components/Timeline';
import {Kudos} from '../Components/Kudos';
import {Footer} from '../Components/Footer';

export function Home() {
    const nav = {
        home: true,
        next: "/about",
        nextText: "Read More"
    }

    return (
        <><Social /><div>
            <Intro />
            <Timeline />
            <Kudos />
            <Footer home={nav.home} next={nav.next} nextText={nav.nextText} />
        </div></>
    ) 
}