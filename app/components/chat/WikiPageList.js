import React, { Component, PropTypes } from 'react';

import WikiPage from './WikiPage';

class WikiPageList extends Component {

  render(){
    let { pages, loadPageByKey } = this.props;

    return (
      <div className="pages">
        <h2>Pages</h2>

        <ul>
          {pages.map( (page) => {
            return (
              <WikiPage
                key={page.key}
                page={page}
                loadPageByKey={loadPageByKey} />
            )
          })}
        </ul>
      </div>
    );
  }
}

WikiPageList.propTypes = {
  pages: PropTypes.array.isRequired,
  loadPageByKey: PropTypes.func.isRequired
}

export default WikiPageList;
