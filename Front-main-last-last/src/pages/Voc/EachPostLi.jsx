import {
    EachPostLi,
    PostLink,
    PostRepl,
} from './styledComponent';

import {
    faLocationPin,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EachPost({title,replCount}) {
    return (
        <EachPostLi>
            <div>
                <FontAwesomeIcon icon ={faLocationPin} />
                <PostLink>
                    {title}
                </PostLink>
            </div>
            <PostRepl>{replCount}</PostRepl>
        </EachPostLi>
    );
}

export default EachPost;