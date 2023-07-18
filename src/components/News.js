import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0de43a9426424135815f488a23a2ebd5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})

    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0de43a9426424135815f488a23a2ebd5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading:false,
        })



    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {



            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0de43a9426424135815f488a23a2ebd5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading:false,
            })
        }


    }
    static defaultProps = {
        country: 'in',
        pageSize:6,
        category: 'general',
      }
      static propTypes = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category: PropTypes.string,
      }
           

    render() {
        return (

            <div className="container my-4" >
                <h2 className="text-center" style={{ margin:''}}> <p class=" "> <span style={{fontWeight: 'bold'}}>  Top Headlines</span> </p></h2>
                {this.state.loading && <Spinner />}
                <div className="row" >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (<div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title}  urlToImage={element.urlToImage} url={element.url} author={element.author} date = {element.publishedAt} source = {element.source.name}/>
                        </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-between">

                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>

            </div>
        )
    }
}
