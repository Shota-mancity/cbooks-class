import React from "react";
import Howto from "./Howto";
import Search from "./Search";
import Processing from "./Processing";
import Output from "./Output";
import Ad from "./Ad";

class Main extends React.Component {
  render() {
    const processList = [
      { process: "取得中" },
      { process: "取得失敗" },
      { process: "該当なし" },
      { process: "ログ" }
    ];

    const tableList = [
      { category: "ISBN" },
      { category: "タイトル" },
      { category: "タイトルよみ" },
      { category: "シリーズ" },
      { category: "シリーズよみ" },
      { category: "著者" },
      { category: "著者よみ" },
      { category: "著者2" },
      { category: "著者よみ" },
      { category: "NDC（分類記号）" },
      { category: "出版社" },
      { category: "出版年" },
      { category: "価格" },
      { category: "大きさ" },
      { category: "ページ数" }
    ];

    const adList = [
      {
        ad:
          "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101279"
      },
      {
        ad:
          "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101709"
      },
      {
        ad:
          "https://www25.a8.net/svt/bgt?aid=210507427152&wid=001&eno=01&mid=s00000010273002011000&mc=1"
      }
    ];

    return (
      <div className="main">
        <div className="description-conteiner">
          <h1>書誌データ作成ツール - cBooks</h1>
          <p>
            cBooksはISBNから書籍情報を取得できる誰でも利用可能なオンラインツールです。
          </p>
          <p>今後、アップデートや機能の追加を随時行う予定です。</p>
          <Howto />
        </div>
        <div className="search-conteiner">
          <Search />
          <div className="processing">
            {processList.map(item => {
              return <Processing process={item.process} />;
            })}
          </div>
        </div>
        <div className="output-conteiner">
          <table>
            <thead>
              <tr>
                <th className="checkbox-fixed">
                  <input disabled className="checkbox" type="checkbox" />
                </th>
                <div className="slide">
                  {tableList.map(item => {
                    return <th className="th-cell">{item.category}</th>;
                    /*<Output category={item.category} />;*/
                  })}
                </div>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div className="slide">
                  <td></td>
                </div>
              </tr>
            </tbody>
          </table>
          <div className="transmission">
            <button type="button">
              <a download="test.csv" target="_self" href="">
                CSV出力
              </a>
            </button>
          </div>
        </div>

        <div className="ad-conteiner">
          <ul className="ad">
            {adList.map(item => {
              return <Ad ad={item.ad} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
