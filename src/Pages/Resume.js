import { Footer } from "../Components/Footer";

export function Resume() {
    const home = false;
    const prev = "/user-research";
    const next = "/";
    const prevText = "Previous | User Research";
    const nextText = "Return Home";
    return (
        <div>Resume
            <Footer home={home} prev={prev} next={next} prevText={prevText} nextText={nextText} /> 
        </div>
    ) 
}