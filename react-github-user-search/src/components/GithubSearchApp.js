import React, { Component, Fragment } from 'react'
import GithubSearch from './GithubSearch';
import { clientID, clientSecret } from './GithubCredentials';
import Axios from 'axios';
import GithubProfile from './GithubProfile';
import GithubRepos from './GithubRepos';

export default class GithubSearchApp extends Component 
{ 
    constructor(props){
        super(props);
        this.state={
          username:'',
          profile:{},
          repos:[],
          errorMessage:''
        }
    }

    recieveUserName=(username)=>{
      this.setState({
        username:username
      });
      this.searchUserProfile(username);
      this.searchUserRepos(username);
    }

    searchUserProfile=(username)=>{
      let dataUrl=`https://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`;
    Axios.get(dataUrl).then((response)=>{
      this.setState({
        profile:response.data
      });
    }).catch((error)=>{
      this.setState({
        errorMessage:error
      });
    });
    }

    searchUserRepos=(username)=>{
      let dataUrl=`https://api.github.com/users/${username}/repos?clientId=${clientID}&clientSecret=${clientSecret}`;
      Axios.get(dataUrl).then((response)=>{
        this.setState({
          repos:response.data
        });
      }).catch((error)=>{
        this.setState({
          errorMessage:error
        });
      });

    }

  render() {
    return (
      <Fragment>
        {/* <pre>{JSON.stringify(this.state.profile)}</pre>
        <pre>{JSON.stringify(this.state.repos)}</pre> */}
        <div className='container mt-3'>
          <div className='row'>
            <div className='col'>
              <p className='h3'><GithubSearch  pushUserName={this.recieveUserName}/></p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              {
                Object.keys(this.state.profile).length!==0?<Fragment>
                  <GithubProfile  profile={this.state.profile}/>
                </Fragment>:null
              }
            </div>
          </div>
          <div className='row'>
            <div className='col'>
            {
                Object.keys(this.state.repos).length>=0?<Fragment>
                  <GithubRepos  repos={this.state.repos}/>
                </Fragment>:null
              }
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
