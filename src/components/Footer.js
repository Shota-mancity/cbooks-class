import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          cBooksは国立国会図書館サーチ(NDL Search)より書誌情報を取得しています。
        </p>
        <p>
          『国立国会図書館サーチ(NDL Search)：
          <a href="https://iss.ndl.go.jp/" target="_blank">
            https://iss.ndl.go.jp/
          </a>
          』
        </p>
      </div>
    );
  }
}

export default Footer;
