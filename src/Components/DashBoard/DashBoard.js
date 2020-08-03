import React, { Component } from 'react';

import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TopArticles from '../TopArticles/TopArticles';
import TopHeadLines from '../TopHeadLines/TopHeadLines';
import Sport from '../Sport/Sport';
import Tech from '../Tech/Tech';
import Business from '../Business/Business';
import Science from '../Science/Science';
import Entertainment from '../Entertainment/Entertainment';

import * as action from '../../action/newsFeed'
import './DashBoard.css'

class DashBoard extends Component {

    componentDidMount() {
        this.props.fetchTopHeadlines();
        this.props.fetchTopArticles();
        this.props.fetchSportNews();
        this.props.fetchTechNews();
        this.props.fetchBusinessNews();
        this.props.fetchScienceNews();
        this.props.fetchEntertainmentNews();
    }

    render() {
        return (
            <BrowserRouter>
                <div>

                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div className="collapse navbar-collapse" id="navbarToggler">
                                <ul className="navbar-nav">
                                    <li className="nav-item active"><Link className="nav-link custom-navlink" to="/"> Top Headlines</Link> </li>
                                    <li className="nav-item "><Link className="nav-link" to="/topArticles"> Top Artices</Link> </li>
                                    <li className="nav-item "><Link className="nav-link" to="/sport"> Sport</Link> </li>
                                    <li className="nav-item "><Link className="nav-link" to="/tech"> Technology</Link> </li>
                                    <li className="nav-item "><Link className="nav-link" to="/business"> Business</Link> </li>
                                    <li className="nav-item "><Link className="nav-link" to="/science"> Science</Link> </li>
                                    <li className="nav-item "><Link className="nav-link" to="/entertainment"> Entertainment</Link> </li>
                                </ul>
                            </div>
                        </nav>
                    </header>

                    <div>
                        <Route exact path="/" render={(value) => <TopHeadLines value={this.props.newsFeed.topHeadlines} />} />
                        <Route exact path="/topArticles" render={(value) => <TopArticles value={this.props.newsFeed.topArticles} />} />
                        <Route exact path="/sport" render={(value) => <Sport value={this.props.newsFeed.sportNews} />} />
                        <Route exact path="/tech" render={(value) => <Tech value={this.props.newsFeed.techNews} />} />
                        <Route exact path="/business" render={(value) => <Business value={this.props.newsFeed.businessNews} />} />
                        <Route exact path="/science" render={(value) => <Science value={this.props.newsFeed.scienceNews} />} />
                        <Route exact path="/entertainment" render={(value) => <Entertainment value={this.props.newsFeed.entertainmentNews} />} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = ({ newsFeed }) => {
    return {
        newsFeed
    }

}
const mapDispatchToProps = dispatch => {
    return {
        fetchTopHeadlines: () => dispatch(action.getTopHeadlines()),
        fetchTopArticles: () => dispatch(action.getTopArticles()),
        fetchSportNews: () => dispatch(action.getSportNews()),
        fetchTechNews: () => dispatch(action.getTechNews()),
        fetchBusinessNews: () => dispatch(action.getBusinessNews()),
        fetchScienceNews: () => dispatch(action.getScienceNews()),
        fetchEntertainmentNews: () => dispatch(action.getEntertainmentNews())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
