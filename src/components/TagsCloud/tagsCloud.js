import React, { Component } from 'react';
import { Link } from "react-router-dom";


const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const colorArr = ['blue', 'yellow', 'green', '#55ff00', 'orange', 'red', 'black', '#673ab7', '#ff0adf', '#0ad0ff'];

class TagsCloud extends Component {
    renderCloudItems = () => {
        const { data } = this.props;
        return data.map((el, index) => {
            const cloudItemStyle = {
                fontSize: el.sentimentScore / 3,
                top: getRandom(70, 90),
                color: colorArr[index % colorArr.length]
            };
            return (
                <Link key={el.id} to={`/${el.id}`}>
                    <span
                        style={cloudItemStyle}
                        className='tagsCloudItem'>
                        {el.label}
                    </span>
                </Link>
            )
        });
    }
    render() {
        return (
            <div className='tagsCloudWraper'>
                {
                    this.renderCloudItems()
                }
            </div>
        );
    }
}

export default TagsCloud;