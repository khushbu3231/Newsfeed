import * as actionTypes from '../action/type';
import axios from 'axios';

//Top Headlines 
export const getTopHeadlines = () => async dispatch => {
    console.log("get headlines")
    await axios({
         method: "GET",
         url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=Enter your news api key"
     }).then(response => {
         dispatch(dispatch_getTopHeadlines(response.data.articles))
     })
 
 }
 
 const dispatch_getTopHeadlines=data=>{
      return{
         type:actionTypes.TOP_HEADLINES,
         topHeadlines:data
     }
 }


//Get all Articles
export const getTopArticles = () => async dispatch => {
   await axios({
        method: "GET",
        url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=Enter your news api key"
    }).then(response => {
       // console.log(response.data.articles)
        dispatch(dispatch_getTopArticles(response.data.articles))
    })

}

const dispatch_getTopArticles=data=>{
   // console.log(data)
    return{
        type:actionTypes.TOP_ARTICLES,
        topArticles:data
    }
}

//get sport news
export const getSportNews = () => async dispatch => {
    console.log("sport api")
    await axios({
         method: "GET",
         url: "https://newsapi.org/v2/top-headlines?category=sports&sortBy=popularity&apiKey=Enter your news api key"
     }).then(response => {
         dispatch(dispatch_getSportNews(response.data.articles))
     })
 
 }
 
 const dispatch_getSportNews=data=>{
         return{
         type:actionTypes.SPORT,
         sportNews:data
     }
 }


//get Tech news
export const getTechNews = () => async dispatch => {
    //console.log("sport api")
    await axios({
         method: "GET",
         url: "https://newsapi.org/v2/top-headlines?category=technology&sortBy=popularity&apiKey=Enter your news api key"
     }).then(response => {
        //console.log(response.data.articles)
         dispatch(dispatch_getTechNews(response.data.articles))
     }) 
 }
 
 const dispatch_getTechNews=data=>{
     return{
         type:actionTypes.TECH,
         techNews:data
     }
 }

//get Business news
export const getBusinessNews = () => async dispatch => {
    //console.log("sport api")
    await axios({
         method: "GET",
         url: "https://newsapi.org/v2/top-headlines?category=business&sortBy=popularity&apiKey=Enter your news api key"
     }).then(response => {
        //console.log(response.data.articles)
         dispatch(dispatch_getBusinessNews(response.data.articles))
     }) 
 }
 
 const dispatch_getBusinessNews=data=>{
     return{
         type:actionTypes.BUSINESS,
         businessNews:data
     }
 }

 //get Science news
export const getScienceNews = () => async dispatch => {
        await axios({
         method: "GET",
         url: "https://newsapi.org/v2/top-headlines?category=science&sortBy=popularity&apiKey=Enter your news api key"
     }).then(response => {
           dispatch(dispatch_getScienceNews(response.data.articles))
     }) 
 }
 
 const dispatch_getScienceNews=data=>{
     return{
         type:actionTypes.SCIENCE,
         scienceNews:data
     }
 }

 //get Entertainment news
export const getEntertainmentNews = () => async dispatch => {
    await axios({
         method: "GET",
         url: "https://newsapi.org/v2/top-headlines?category=entertainment&sortBy=popularity&apiKey=Enter your news api key"
     }).then(response => {
         dispatch(dispatch_getEntertainmentNews(response.data.articles))
     }) 
 }
 
 const dispatch_getEntertainmentNews=data=>{
     return{
         type:actionTypes.ENTERTAINMENT,
         entertainmentNews:data
     }
 }

