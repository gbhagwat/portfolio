import {Link} from 'react-router-dom';

export function Pagination(props){
    const home = props.home;
    const prev = props.prev;
    const next = props.next;
    const prevText = props.prevText;
    const nextText = props.nextText;

    return (
        <nav aria-label="Page navigation" className="flex flex-col uppercase py-6">
          <ul className="flex flex-row join justify-content-center self-center">
            <li className={home ? 'hidden' : ''}>
              <Link className="join-item btn btn-outline-primary" to={prev}>{prevText}</Link>
            </li>
            <li>
            <Link className="join-item btn btn-outline-primary" to={next}>{nextText}</Link>
            </li>
          </ul>
        </nav>
    )
}