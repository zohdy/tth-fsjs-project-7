import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

// Components
import ImageList from "./ImageList";
import axios from 'axios';
import config from '../config';
import NotFound from './NotFound';
import Header from "./Header";

class App extends Component {
  state = {
      images: [],
      searchTerm : '',
      searchInitialized : false,
      loading: false
  };
    fetchImages = async (searchTerm) => {
        if(searchTerm !== ''){
            try {
                this.setState({loading: true});
                const response = await axios.get('https://api.flickr.com/services/rest/', {
                    params: {
                        api_key: config,
                        method: 'flickr.photos.search',
                        per_page: 24,
                        tags: searchTerm,
                        format: 'json',
                        nojsoncallback: 1
                    }
                });
                this.setState(
                    {
                        images: response.data.photos.photo,
                        searchTerm: searchTerm,
                        searchInitialized: true,
                        loading: false
                    }
                );
            } catch (e) {
                console.log(e);
            }

        }
  };

  render() {
      return (
          <BrowserRouter>
              <div className="container">
                  <Route path="/" render={ () =>
                      <Header
                          onFormSubmit={this.fetchImages}
                          onItemClick={this.fetchImages}
                      /> }
                  />
                  {(this.state.searchInitialized) ? <Redirect to={`/search/${this.state.searchTerm}`} /> : null }

                  <Switch>
                      <Route exact path="/search/:searchTerm" render={ () =>
                      (this.state.loading) ? <div className="loader"> </div>
                          : <ImageList
                              images={this.state.images}
                              searchTerm={this.state.searchTerm}
                              searchInitialized={this.state.searchInitialized}
                          />
                      }/>
                      <Route exact path="/" />
                      <Route component={NotFound} />
                  </Switch>
              </div>
          </BrowserRouter>
    );
  }
}
export default App;

