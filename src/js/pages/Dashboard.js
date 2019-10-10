import React from 'react'
import Card from "../components/Card";
import PropTypes from "prop-types";


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  createCards(cardsInfo) {
    return cardsInfo.map(cardInfo => <Card link={cardInfo.urlLink}
                                           imageUrl={cardInfo.imageUrl} name={cardInfo.name}/>)
  }

  render() {
    const {data} = this.props;
    console.log(data);
    return <div className="page">
      {this.createCards(data.cardsInfo)}
    </div>;
  }
}

Dashboard.propTypes = {
  data: PropTypes.object
};
