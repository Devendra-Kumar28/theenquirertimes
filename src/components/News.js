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

    async updateNews(){
        this.props.setProgress(1);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c8139deaa757431c8445e885df774e18&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
       
        let data = await fetch(url);
        this.props.setProgress(25);
        let parsedData = await data.json()
        this.props.setProgress(50);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
        this.props.setProgress(100);

    }



    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0de43a9426424135815f488a23a2ebd5&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
        this.updateNews();


    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0de43a9426424135815f488a23a2ebd5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading:false,
        // })
        this.setState({page: this.state.page -1});
        this.updateNews();


    }
    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {



        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0de43a9426424135815f488a23a2ebd5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     console.log(parsedData);
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading:false,
        //     })
        // }
        this.setState({page: this.state.page +1});
        this.updateNews();


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
                <h2 className="text-center" style={{fontWeight: 'bold', marginTop: '50px'}}>  <span style={{fontWeight: 'bold'}}>  Top Headlines</span> </h2>
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
