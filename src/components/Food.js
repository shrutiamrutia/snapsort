import React, { Component } from 'react'
import axios from 'axios';
import Gallery from './Gallery';

class Food extends Component {
    state = {
        imageList: []
    }
    componentDidMount() {
        const path = this.props.location.pathname
        // console.log("path", path)
        const newPath = path.slice(1)
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${newPath}&per_page=24&format=json&nojsoncallback=1`;
        axios.get(apiUrl)
            .then((response) => this.setState({ imageList: response.data.photos.photo }));
    }
    render() {

        return (
            <div>
                <body>
                    <div id="root">
                        <div class="container">
                            <div>
                                <h1>SnapShot</h1>
                                <form class="search-form">
                                    <input type="text" name="search" placeholder="Search..." value="" />
                                    <button type="submit" class="search-button null" disabled="">
                                        <svg height="32" width="32"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fill-rule="evenodd"></path></svg>
                                    </button>
                                </form>
                                <nav class="main-nav">
                                    <ul>
                                        <li><a href="/mountain">Mountain</a></li>
                                        <li><a href="/beaches">Beaches</a></li>
                                        <li><a href="/birds">Birds</a></li>
                                        <li><a href="/foods" aria-current="page" class="active">Food</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <h2>food Pictures</h2>
                                <div class="photo-container"><div>
                                    <ul>
                                        <Gallery data={this.state.imageList} />        </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}
export default Food