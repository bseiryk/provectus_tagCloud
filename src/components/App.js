import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TagsCloud from './TagsCloud/tagsCloud';
import CloudItem from './TagsCloud/cloudItem';
import cloudData from './db/db.json';

import '../Styles/index.less';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/:id' exact component={CloudItem} />
            <Route path='/' render={() => <TagsCloud data={cloudData} />} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;