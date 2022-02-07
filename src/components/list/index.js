import React from "react";
import PropTypes from "prop-types";

class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title,description} =  this.props;
        return (
            <>
            <section data-test="section-list">
                <div data-test="title-list">{title}</div>
                <div data-test="description-list">{description}</div>
            </section>
            </>
        )
    }
}

List.propTypes = {
    title:PropTypes.string,
    desc : PropTypes.string
}

export default List;