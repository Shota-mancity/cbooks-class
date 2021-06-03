import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form>
          <div className="search-form">
            {/*<label for="isbn-code-label">上段のバーコード（ISBN-13）</label>*/}
            <input
              className="search-input"
              type="text"
              name="isbn-code"
              id="isbn-code-label"
              placeholder="上段のバーコード（ISBN-13）"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
