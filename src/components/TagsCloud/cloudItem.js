import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cloudData from '../db/db.json';

class cloudItem extends Component {
    state = {
        selectedCloudItem: null
    };
    componentDidMount () {
        const { id } = this.props.match.params;
        const selectedCloudItem = cloudData.find(el => el.id === id);
        this.setState({ selectedCloudItem });
    }

    renderCloudItem = ({ sentiment: {positive, negative, neutral}, label, pageType}) => {
        const positiveMention = positive || 0;
        const negativeMention = negative || 0;
        const neutralMention = neutral || 0;
        const totalMentions = positiveMention + negativeMention + neutralMention;
        let pageTypeArr = [];        
        for (const key in pageType) {
                pageTypeArr.push({
                    value: pageType[key],
                    name: key
                });
        };
        return(
            <div className='cloudItemInfo'>
                <h1>{label}</h1>
                <p>positive: {positiveMention}</p>
                <p>negative: {negativeMention}</p>
                <p>neutral: {neutralMention}</p>
                <p>total: {totalMentions}</p>
                <ul>
                    {
                        pageTypeArr.map((el, index) => <li key={index}>{`${el.name}: ${el.value}`}</li>)
                    }
                </ul>
            </div>
        )
    }

    goBack = () => this.props.history.goBack()

    render() {
        const { selectedCloudItem } = this.state;
        return (
            <div>
                <button className='goBackBtn' onClick={this.goBack}>Go Back</button>
                {
                    selectedCloudItem ? this.renderCloudItem(selectedCloudItem)  : <p>Loading</p>
                }
            </div>
        );
    }
}

export default withRouter(cloudItem);