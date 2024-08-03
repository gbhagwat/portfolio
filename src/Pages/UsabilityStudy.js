import { Footer } from "../Components/Footer";

export function UsabilityStudy() {
    const home = false;
    const prev = "/ux-principles";
    const next = "/user-research";
    const prevText = "Previous | UX Practices & Principles";
    const nextText = "User Research | Next";
    return (
        <div>UsabilityStudy
            <Footer home={home} prev={prev} next={next} prevText={prevText} nextText={nextText} /> 
        </div>
    ) 
}