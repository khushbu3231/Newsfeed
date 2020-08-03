import * as actionTypes from '../action/type'
const intialState = {
    topHeadlines: [],
    topArticles: [],
    sportNews: [],
    techNews: [],
    businessNews:[],
    scienceNews:[],
    entertainmentNews:[]
}
export const newsFeed = (state = intialState, action) => {
    // console.log("TOP ARTICLE REDUCER");  
    switch (action.type) {
        case actionTypes.TOP_HEADLINES:
            return {
                ...state,
                topHeadlines: [...action.topHeadlines]
            }
        case actionTypes.TOP_ARTICLES:
            return {
                ...state,
                topArticles: [...action.topArticles]
            }
        case actionTypes.SPORT:
            return {
                ...state,
                sportNews: [...action.sportNews]
            }
        case actionTypes.TECH:
            return {
                ...state,
                techNews: [...action.techNews]
            }
        case actionTypes.BUSINESS:
            return {
                ...state,
                businessNews: [...action.businessNews]
            }
        case actionTypes.SCIENCE:
            return {
                ...state,
                scienceNews: [...action.scienceNews]
            }
        case actionTypes.ENTERTAINMENT:
            return {
                ...state,
                entertainmentNews: [...action.entertainmentNews]
            }
        default:
            return state
    }
}
