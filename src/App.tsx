import './App.css';
import introImage from './assets/images/introduction_illustration.png';
import chapter3Image from './assets/images/chapter3_illustration.png';
import chapter8Image from './assets/images/chapter8_expanded_illustration.png';
import chapter11Image from './assets/images/chapter11_expanded_illustration.png';
import chapter12Image from './assets/images/chapter12_illustration.png';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>迷信的復興：我們是和沒有血氣的惡靈爭戰</h1>
          <p className="subtitle">一場幽默反諷的靈性探索之旅，從迷信到信仰，從黑暗到光明，張渝江著，2025/5</p>
          <a href="https://docs.google.com/document/d/1Pn33AiQQWErYrtrUvUzeO0ydhx987EtMDGY7HPl9e6w/edit?usp=sharing" className="cta-button">立即閱讀全書</a>
        </div>
        <div className="hero-image">
          <img src={introImage} alt="迷信的復興：光明戰勝黑暗" />
        </div>
      </header>

      {/* Book Introduction */}
      <section className="book-intro">
        <div className="container">
          <h2>關於本書</h2>
          <p>在這個充斥著「正能量」、「宇宙能量」與「靈性覺醒」的時代，我們是否真的理解了信仰與迷信的區別？</p>
          <p>《迷信的復興》以幽默反諷的筆觸，探索現代社會中迷信的新形式，從阿Q精神勝利法到社群媒體上的「轉發祝福」，從心靈雞湯到靈性商品化，一一剖析其背後的心理機制與社會現象。</p>
          <p>本書不僅是一場知識之旅，更是一場靈性探索，引導讀者從迷信的束縛走向信仰的自由，從黑暗走向光明。</p>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="book-highlights">
        <div className="container">
          <h2>精彩內容</h2>
          
          <div className="highlight-item">
            <div className="highlight-image">
              <img src={chapter3Image} alt="正向思維：阿Q正傳還是聖靈的超能力？" />
            </div>
            <div className="highlight-content">
              <h3>正向思維：阿Q正傳還是聖靈的超能力？</h3>
              <p>「你知道阿Q和現代正向思維大師的區別嗎？一個是自我欺騙，另一個是...好吧，也許沒那麼大的區別。」</p>
              <p>本章對比阿Q精神勝利法與基督教正向思維，探討真正的信心與自我欺騙的本質區別，揭示如何在不否認現實的情況下保持真正的希望。</p>
            </div>
          </div>

          <div className="highlight-item reverse">
            <div className="highlight-content">
              <h3>佛洛伊德vs.惡靈：常見爭戰的正信與迷信大對決</h3>
              <p>「當佛洛伊德遇上保羅，心理分析與屬靈爭戰在現代生活的戰場上展開了一場精彩對決。」</p>
              <p>本章分析十種當代常見爭戰場景，從職場霸凌到網路成癮，從家庭衝突到身份危機，探討如何用正信、寬恕、包容和愛來化解這些衝突。</p>
            </div>
            <div className="highlight-image">
              <img src={chapter8Image} alt="佛洛伊德vs.惡靈：常見爭戰的正信與迷信大對決" />
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-image">
              <img src={chapter11Image} alt="邪教的陷阱：當迷信變成惡靈的狂歡" />
            </div>
            <div className="highlight-content">
              <h3>邪教的陷阱：當迷信變成惡靈的狂歡</h3>
              <p>「你是否曾收到過一份傳單，上面印著一位笑容可掬、眼神空洞的領袖，承諾給你宇宙的秘密、永恆的幸福，外加免費的素食自助餐？」</p>
              <p>本章深入探討宗教特權、擅權與醜聞的結構性原因，說明神職人員面臨的魔鬼試探，並提供協助宗教機構避免這類問題的實用建議。</p>
            </div>
          </div>

          <div className="highlight-item reverse">
            <div className="highlight-content">
              <h3>從迷信到信仰：正向、愛與聖靈帶你回家</h3>
              <p>「杜斯妥也夫斯基與托爾斯泰，一個專寫黑暗的刑事事件，一個專寫苦行後的光明，殊途同歸，指向同一真理。」</p>
              <p>本章通過杜斯妥也夫斯基與托爾斯泰的文學比較，探討從迷信到信仰的旅程，展示如何在現代社會中活出真實、健康的信仰。</p>
            </div>
            <div className="highlight-image">
              <img src={chapter12Image} alt="從迷信到信仰：正向、愛與聖靈帶你回家" />
            </div>
          </div>
        </div>
      </section>

      {/* Book Features */}
      <section className="book-features">
        <div className="container">
          <h2>本書特色</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📖</div>
              <h3>幽默反諷風格</h3>
              <p>以輕鬆幽默的筆觸探討嚴肅話題，讓閱讀過程充滿樂趣</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h3>深度神學探討</h3>
              <p>結合聖經、神學與現代心理學，提供多層次的靈性洞見</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>當代生活應用</h3>
              <p>將古老智慧應用於現代生活場景，提供實用的靈性指導</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>精美英文插圖</h3>
              <p>每章配有專業設計的英文插圖，視覺化核心概念</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>準備好開始這場靈性探索了嗎？</h2>
          <p>從迷信的束縛走向信仰的自由，從黑暗走向光明</p>
          <a href="https://docs.google.com/document/d/1Pn33AiQQWErYrtrUvUzeO0ydhx987EtMDGY7HPl9e6w/edit?usp=sharing" className="cta-button">立即閱讀全書</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 迷信的復興：我們是和沒有血氣的惡靈爭戰，張渝江，all rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
