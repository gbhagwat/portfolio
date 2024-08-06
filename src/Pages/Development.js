import {Footer} from '../Components/Footer';

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
                <div>
                    Development
                </div>
            </div>
          </section>
          <Footer home={home} prev={prev} next={next} prevText={prevText} nextText={nextText} /> 
        </div>
    ) 
}