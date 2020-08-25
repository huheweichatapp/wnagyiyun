import React, { Component } from 'react';
import '../../style/Home/search.css'
class Search extends Component {
    render() {
        return (
            <div className="search">
                <div>
                    <input type="text" placeholder="搜索歌曲、歌手、专辑" />
                    <i className="iconfont icon-fangdajing"></i>
                </div>
                <p>热门搜索</p>
            </div>
        );
    }
}

export default Search;
