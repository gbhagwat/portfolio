import {Footer} from '../Components/Footer';
import { Link } from 'react-router-dom';

import calculator from '../Assets/images/calculator.jpeg';
import header from '../Assets/images/header-calculator.jpeg';


export function Development() {
    const home = false;
    const prev = "/ux-leadership";
    const next = "/visual-design";
    const prevText = "Prev | UX Leadership";
    const nextText = "Design | Next";

    return (
        <div>
          <section className="container mt-10" id="about">
            <div className="grid grid-cols-3 gap-12">
                <div class="col-span-3">
                  <h1>Front-End Development</h1>
                  <p>You can view <Link to="https://cqolh.csb.app/calculate-your-plate">my VueJS Nutrition Calculator personal project</Link>.</p>
                  <img src={header} alt="header of Gusto Nutrition Calculator" />
                  <img src={calculator} alt="print screen of Nutrition Calculator" />
                </div>
            </div>
          </section>
          <Footer home={home} prev={prev} next={next} prevText={prevText} nextText={nextText} /> 
        </div>
    ) 
}