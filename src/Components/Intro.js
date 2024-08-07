import '../Assets/styles/intro.css';

export function Intro(){
    return (
        <section id="intro">
        <div className="container pt-5">
          <p className="lead mt-5 mb-0">Hi, My name is Gabrielle.</p>
          <h1 className="hello">
            <span>I'm a Full-Stack Designer.</span><br />
            I design experiences & develop interfaces that bring users +
            technology together.
          </h1>
          <p>
            I'm a creative, user-centric problem-solver whose expertise lies in my passions <br />--- UX/UI Design, Accessibility &
            Front-End Development.
          </p>
  
          <a href="#timeline" className="btn btn-outline-secondary"
            >FOLLOW MY UX JOURNEY</a>
          <a
            href="mailto:gabrielle.bhagwat@gmail.com"
            className="btn btn-outline-secondary"
            >CONTACT ME</a>
  
          <a className="scroll" href="#timeline"
            ><span></span><span></span><span></span
            ><span className="sr-only">Scroll</span></a
          >
        </div>
      </section>        
    )
}