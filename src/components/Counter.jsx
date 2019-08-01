import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(["tag1","tag2","tag3"])
    const formatCount = () => {
        return count === 0 ? "Zero" : count;
    };
    const getBadgeClasses = () => {
        let classes = "badge m-2";
        classes += (count === 0) ? " badge-warning" : " badge-primary";
        return classes;
    };
    return (
        <Fragment>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
        </Fragment>
    );
};

Counter.propTypes = {

};

export default Counter;