import React, { Component } from 'react';
import PortfolioService from '../../services/PortfolioService'
import SliderDownComponent from '../SliderDownComponent'

const githubService = new PortfolioService();

class GithubComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            repositoryList: [],
            totalCommits: 0
        }
    }

    componentDidMount(){
        var self = this;
        githubService.getRepositories().then(function (response) {
            self.setState( {repositoryList: response} )
        });
    }

    render(){
        return (
            <div className="container" id='my-git-link'>
                <section className="my-git">
                    <GithubHeader />
                    <GithubAppsContainer repositoryList={this.state.repositoryList} />
                    <SliderDownComponent />
                </section>
            </div>
        );
    }
}

class GithubHeader extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <h2 className="my-4">Мой гит</h2>
                    <h3>В данном разделе отображаются закрепленные репозитории из моего гита и краткая информация о них</h3>
                </div>
            </div>
        )
    }
}

class GithubAppsContainer extends Component  {
    render() {
        const { repositoryList } = this.props;
        const tagList = repositoryList.map(repo => <GithubPinnedApp key={repo.id} repository={repo}/>);
        // console.log(tagList);
         return(
             <div className="row d-flex align-content-between flex-wrap">
                {tagList}
             </div>
         );
    }
}

class GithubPinnedApp extends Component {
    render(){
        const {repository} = this.props;

        return (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 git-item">
                <h4 className="repos-title">
                    <a href={repository.link}>{repository.name}</a>
                </h4>

                <div className="repos-description">
                <p>{repository.description}</p>
                </div>

                <p className="number-of-commits">
                    Коммитов: {repository.number_of_commits}
                </p>
            </div>
        );
    }
}

export default GithubComponent