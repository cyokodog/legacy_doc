# ドキュメント管理方法  

## ドキュメントファイルの作成

ドキュメントは /doc/md ディレクトリに、拡張子.md ファイルを作成しそこに記述します。
例えばセキュリティソフトのパッチ関連のドキュメントを書く場合、security_patch.md のようなファイルを作成します。

- 例. /doc/md/security_patch.md

## マークダウン記法

ドキュメントはマークダウン記法を使用し記述します。
マークダウン記法とは HTML を簡略化した記述方法で、今見てるこのアプリを経由しマークダウンで記述されたドキュメントを参照することで HTML に変換し表示されます。

### マークダウンで書いてみる

例えば次のようなマークダウンを書いてみます。

#### code

##### html

    # マークダウン記法のサンプル

    ## リストの例

    - item1
    - item2
    - item3

    ## 文章の例

    これは文章です。

    ## リンクの例

    例えばグーグルへのリンクは[こう](http://wwww.google.com)書きます。

    ## 画像の例

    画像は次のようにリンクさせます。以下は /doc/assets/images ディレクトリに 208x128.png という名前の画像ファイルを置いた場合の例です。

    ![画像だよ](assets/images/208x128.png)

    ## テーブルの例

    テーブルは次のように書きます。

    | title1 | title2 | title3 |
    |--------|--------|--------|
    | data   | data   | data   |
    | data   | data   | data   |
    | data   | data   | data   |

    ## 見出しの例

    ### h3

    #### h4

    ##### h5


### 変換されるHTML

すると次のような HTML に変換され画面に表示されます。

#### code

##### html

    <h1>マークダウン記法のサンプル</h1>

    <h2>リストの例</h2>

    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>

    <h2>文章の例</h2>

    <p>これは文章です。</p>

    <h2>リンクの例</h2>

    <p>例えばグーグルへのリンクは<a href="http://wwww.google.com">こう</a>書きます。</p>

    <h2>画像の例</h2>

    <p>画像は次のようにリンクさせます。以下は /doc/assets/images ディレクトリに 208x128.png という名前の画像ファイルを置いた場合の例です。</p>

    <p><img src="assets/images/208x128.png" alt="画像だよ"></p>

    <h2>テーブルの例</h2>

    <p>テーブルは次のように書きます。</p>

    <table>
      <thead>
        <tr>
          <th>title1</th>
          <th>title2</th>
          <th>title3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
      </tbody>
    </table>

    <h2>見出しの例</h2>

    <h3 id="h3">h3</h3>

    <h4 id="h4">h4</h4>

    <h5 id="h5">h5</h5>



### 変換されたドキュメントを見る

前述のマークダウンは次のように表示されます。

[クリックして見る](#markdown_demo.md)
