import React from 'react'
import PropTypes from "prop-types";

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {link, name, imageUrl} = this.props;
    return <div className={"card"}>
      <div className={"card-header"}> {name}</div>
      <div className={"card-body"}><img src={imageUrl} alt=""/></div>
      <div className={"card-footer"}><a href={link} target={"_blank"}> PLAY </a></div>
    </div>
  }
}

Card.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string
};


