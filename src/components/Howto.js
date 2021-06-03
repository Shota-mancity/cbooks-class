import React from "react";

class Howto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickOpen() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div
          className="modal-outer"
          onClick={() => {
            this.handleClickClose();
          }}
        >
          <div className="modal-inner">
            <div className="modal-text">
              <h2>cBooksの使い方</h2>
              <p>
                cBooksは、書籍の裏表紙などに記載されているISBNコード※を(バーコードリーダーなどで)入力することで、その書籍の情報を取得できる誰でも利用可能なオンラインツールです。
              </p>
              <p>取得した書籍情報はCSV形式でダウンロードすることも可能です。</p>
              <div className="asterisk">
                <p>
                  ※ISBNコードとは書籍の裏表紙等に記載されている2段のバーコードのうちの上段のバーコードを指します。（すべての書籍に記載があるとは限りません）
                </p>
              </div>
              <div className="procedure">
                <p>①バーコード(isbn)入力欄が選択されていることを確認する</p>
              </div>
              <p>
                isbnの入力欄が選択されていない状態でバーコードを読み取っても入力されないため、入力欄が選択されているか確認します。
              </p>
              <p>選択されていなければ、クリックして選択状態にします。</p>
              <div className="procedure">
                <p>②バーコードリーダーでISBNコードを読み取る</p>
                <p>③取得した書籍情報を確認する</p>
                <p>④ダウンロードしたい項目にチェックを入れる</p>
                <p>⑤CSV出力ボタンをクリックする</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="description">
        <div
          className="description-item"
          onClick={() => {
            this.handleClickOpen();
          }}
        >
          <button className="description-button" type="bottun">
            <span className="underline">使い方</span>
          </button>
        </div>
        {modal}
      </div>
    );
  }
}

export default Howto;
