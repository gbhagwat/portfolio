import '../Assets/styles/footer.css';
import { Pagination } from './Pagination';

export function Footer(props){
    return (
      <footer>
        <Pagination home={props.home} prev={props.prev} next={props.next} prevText={props.prevText} nextText={props.nextText} />
  
        <div className="progress-bar"></div>
        <button className="back-to-top hidden">
          <i className="fa fa-angle-double-up" aria-hidden="true"></i>
        </button>
        <div className="progress-bar"></div>
      </footer>        
    )
}