import './App.css';
import introImage from './assets/images/introduction_illustration.png';
import chapter3Image from './assets/images/chapter3_illustration.png';
import chapter8Image from './assets/images/chapter8_expanded_illustration.png';
import chapter11Image from './assets/images/chapter11_expanded_illustration.png';
import chapter12Image from './assets/images/chapter12_illustration.png';
import { Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const isChinese = location.pathname.startsWith('/zh');
  const isEnglish = location.pathname.startsWith('/en');
  const lang = isChinese ? 'zh' : isEnglish ? 'en' : 'zh'; // Default to Chinese if no path specified

  // Update Open Graph Protocol (OGP) meta tags based on language
  useEffect(() => {
    const currentContent = content[lang];
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', currentContent.hero.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', currentContent.hero.subtitle.split('\n')[0]);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${window.location.origin}${location.pathname}`);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'zh' ? 'zh_TW' : 'en_US');
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', `${window.location.origin}/assets/images/introduction_illustration.png`);
  }, [lang, location.pathname]);

  // Content for Chinese and English
  const content = {
    zh: {
      hero: {
        title: '迷信的復興：我們是和沒有血氣的惡靈爭戰',
        subtitle: '一場幽默反諷的靈性探索之旅，從迷信到信仰，從黑暗到光明\n張渝江，2025/5',
        cta: '立即閱讀全書',
        imgAlt: '迷信的復興：光明戰勝黑暗',
      },
      intro: {
        title: '關於本書',
        p1: '在這個充斥著「正能量」、「宇宙能量」與「靈性覺醒」的時代，我們是否真的理解了信仰與迷信的區別？',
        p2: '《迷信的復興》以幽默反諷的筆觸，探索現代社會中迷信的新形式，從阿Q精神勝利法到社群媒體上的「轉發祝福」，從心靈雞湯到靈性商品化，一一剖析其背後的心理機制與社會現象。',
        p3: '本書不僅是一場知識之旅，更是一場靈性探索，引導讀者從迷信的束縛走向信仰的自由，從黑暗走向光明。',
      },
      highlights: {
        title: '精彩內容',
        item1: {
          title: '正向思維：阿Q正傳還是聖靈的超能力？',
          quote: '「你知道阿Q和現代正向思維大師的區別嗎？一個是自我欺騙，另一個是...好吧，也許沒那麼大的區別。」',
          desc: '本章對比阿Q精神勝利法與基督教正向思維，探討真正的信心與自我欺騙的本質區別，揭示如何在不否認現實的情況下保持真正的希望。',
          imgAlt: '正向思維：阿Q正傳還是聖靈的超能力？',
        },
        item2: {
          title: '佛洛伊德vs.惡靈：常見爭戰的正信與迷信大對決',
          quote: '「當佛洛伊德遇上保羅，心理分析與屬靈爭戰在現代生活的戰場上展開了一場精彩對決。」',
          desc: '本章分析十種當代常見爭戰場景，從職場霸凌到網路成癮，從家庭衝突到身份危機，探討如何用正信、寬恕、包容和愛來化解這些衝突。',
          imgAlt: '佛洛伊德vs.惡靈：常見爭戰的正信與迷信大對決',
        },
        item3: {
          title: '邪教的陷阱：當迷信變成惡靈的狂歡',
          quote: '「你是否曾收到過一份傳單，上面印著一位笑容可掬、眼神空洞的領袖，承諾給你宇宙的秘密、永恆的幸福，外加免費的素食自助餐？」',
          desc: '本章深入探討宗教特權、擅權與醜聞的結構性原因，說明神職人員面臨的魔鬼試探，並提供協助宗教機構避免這類問題的實用建議。',
          imgAlt: '邪教的陷阱：當迷信變成惡靈的狂歡',
        },
        item4: {
          title: '從迷信到信仰：正向、愛與聖靈帶你回家',
          quote: '「杜斯妥也夫斯基與托爾斯泰，一個專寫黑暗的刑事事件，一個專寫苦行後的光明，殊途同歸，指向同一真理。」',
          desc: '本章通過杜斯妥也夫斯基與托爾斯泰的文學比較，探討從迷信到信仰的旅程，展示如何在現代社會中活出真實、健康的信仰。',
          imgAlt: '從迷信到信仰：正向、愛與聖靈帶你回家',
        },
      },
      features: {
        title: '本書特色',
        item1: {
          title: '幽默反諷風格',
          desc: '以輕鬆幽默的筆觸探討嚴肅話題，讓閱讀過程充滿樂趣',
        },
        item2: {
          title: '深度神學探討',
          desc: '結合聖經、神學與現代心理學，提供多層次的靈性洞見',
        },
        item3: {
          title: '當代生活應用',
          desc: '將古老智慧應用於現代生活場景，提供實用的靈性指導',
        },
        item4: {
          title: '精美英文插圖',
          desc: '每章配有專業設計的英文插圖，視覺化核心概念',
        },
      },
      cta: {
        title: '準備好開始這場靈性探索了嗎？',
        desc: '從迷信的束縛走向信仰的自由，從黑暗走向光明',
        button: '立即閱讀全書',
      },
      footer: '© 2025 迷信的復興：我們是和沒有血氣的惡靈爭戰',
    },
    en: {
      hero: {
        title: 'Revival of Superstition: We Wrestle Against Spiritual Wickedness',
        subtitle: 'A humorous and satirical journey of spiritual exploration, from superstition to faith, from darkness to light\nEugen Chang (YU Jiang Chang), 2025/5',
        cta: 'Read the Full Book Now',
        imgAlt: 'Revival of Superstition: Light Overcomes Darkness',
      },
      intro: {
        title: 'About This Book',
        p1: 'In an era filled with "positive energy," "cosmic energy," and "spiritual awakening," do we truly understand the difference between faith and superstition?',
        p2: '"Revival of Superstition" explores new forms of superstition in modern society with a humorous and satirical tone, from the self-deceptive "Ah Q’s mental victory" to "forward-for-blessings" on social media, from chicken soup for the soul to the commercialization of spirituality, dissecting the psychological mechanisms and social phenomena behind them.',
        p3: 'This book is not only a journey of knowledge but also a spiritual exploration, guiding readers from the bondage of superstition to the freedom of faith, from darkness to light.',
      },
      highlights: {
        title: 'Featured Content',
        item1: {
          title: 'Positive Thinking: Ah Q’s Story or the Superpower of the Holy Spirit?',
          quote: '"Do you know the difference between Ah Q and modern positive thinking gurus? One is self-deception, the other is... well, maybe not that different."',
          desc: 'This chapter compares Ah Q’s mental victory method with Christian positive thinking, exploring the essential difference between true faith and self-deception, revealing how to maintain real hope without denying reality.',
          imgAlt: 'Positive Thinking: Ah Q’s Story or the Superpower of the Holy Spirit?',
        },
        item2: {
          title: 'Freud vs. Evil Spirits: The Battle of True Faith and Superstition in Common Struggles',
          quote: '"When Freud meets Paul, psychoanalysis and spiritual warfare engage in a fascinating duel on the battlefield of modern life."',
          desc: 'This chapter analyzes ten common contemporary struggles, from workplace bullying to internet addiction, from family conflicts to identity crises, exploring how to resolve these conflicts with true faith, forgiveness, inclusivity, and love.',
          imgAlt: 'Freud vs. Evil Spirits: The Battle of True Faith and Superstition in Common Struggles',
        },
        item3: {
          title: 'The Trap of Cults: When Superstition Becomes a Carnival for Evil Spirits',
          quote: '"Have you ever received a flyer with a smiling, hollow-eyed leader promising the secrets of the universe, eternal happiness, and a free vegetarian buffet?"',
          desc: 'This chapter delves into the structural causes of religious privilege, abuse of power, and scandals, explaining the temptations clergy face from the devil and offering practical advice to help religious institutions avoid such issues.',
          imgAlt: 'The Trap of Cults: When Superstition Becomes a Carnival for Evil Spirits',
        },
        item4: {
          title: 'From Superstition to Faith: Positivity, Love, and the Holy Spirit Bring You Home',
          quote: '"Dostoevsky and Tolstoy, one writing about dark criminal events, the other about the light after asceticism, both point to the same truth through different paths."',
          desc: 'Through a literary comparison of Dostoevsky and Tolstoy, this chapter explores the journey from superstition to faith, demonstrating how to live out authentic, healthy faith in modern society.',
          imgAlt: 'From Superstition to Faith: Positivity, Love, and the Holy Spirit Bring You Home',
        },
      },
      features: {
        title: 'Book Features',
        item1: {
          title: 'Humorous Satirical Style',
          desc: 'Explores serious topics with a lighthearted and humorous tone, making the reading process enjoyable',
        },
        item2: {
          title: 'In-Depth Theological Discussion',
          desc: 'Combines the Bible, theology, and modern psychology to provide multi-layered spiritual insights',
        },
        item3: {
          title: 'Contemporary Life Applications',
          desc: 'Applies ancient wisdom to modern life scenarios, offering practical spiritual guidance',
        },
        item4: {
          title: 'Exquisite English Illustrations',
          desc: 'Each chapter features professionally designed English illustrations that visualize core concepts',
        },
      },
      cta: {
        title: 'Ready to Embark on This Spiritual Journey?',
        desc: 'From the bondage of superstition to the freedom of faith, from darkness to light',
        button: 'Read the Full Book Now',
      },
      footer: '© 2025 Revival of Superstition: We Wrestle Against Spiritual Wickedness',
    },
  };

  const currentContent = content[lang];

  return (
    <div className="App">
      <Analytics />
      {/* Language Switch Links */}
      <div className="language-switch">
        <Link to="/zh" className={lang === 'zh' ? 'active' : ''}>中文</Link>
        <Link to="/en" className={lang === 'en' ? 'active' : ''}>English</Link>
      </div>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>{currentContent.hero.title}</h1>
          <p className="subtitle">{currentContent.hero.subtitle.split('\n').map((line, index) => (
            <span key={index} style={{ display: 'block' }}>{line}</span>
          ))}</p>
          <a href="https://docs.google.com/document/d/1Pn33AiQQWErYrtrUvUzeO0ydhx987EtMDGY7HPl9e6w/edit?usp=sharing" className="cta-button">{currentContent.hero.cta}</a>
        </div>
        <div className="hero-image">
          <img src={introImage} alt={currentContent.hero.imgAlt} />
        </div>
      </header>

      {/* Book Introduction */}
      <section className="book-intro">
        <div className="container">
          <h2>{currentContent.intro.title}</h2>
          <p>{currentContent.intro.p1}</p>
          <p>{currentContent.intro.p2}</p>
          <p>{currentContent.intro.p3}</p>
        </div>
      </section>

      {/* Book Highlights */}
      <section className="book-highlights">
        <div className="container">
          <h2>{currentContent.highlights.title}</h2>
          
          <div className="highlight-item">
            <div className="highlight-image">
              <img src={chapter3Image} alt={currentContent.highlights.item1.imgAlt} />
            </div>
            <div className="highlight-content">
              <h3>{currentContent.highlights.item1.title}</h3>
              <p>{currentContent.highlights.item1.quote}</p>
              <p>{currentContent.highlights.item1.desc}</p>
            </div>
          </div>

          <div className="highlight-item reverse">
            <div className="highlight-content">
              <h3>{currentContent.highlights.item2.title}</h3>
              <p>{currentContent.highlights.item2.quote}</p>
              <p>{currentContent.highlights.item2.desc}</p>
            </div>
            <div className="highlight-image">
              <img src={chapter8Image} alt={currentContent.highlights.item2.imgAlt} />
            </div>
          </div>

          <div className="highlight-item">
            <div className="highlight-image">
              <img src={chapter11Image} alt={currentContent.highlights.item3.imgAlt} />
            </div>
            <div className="highlight-content">
              <h3>{currentContent.highlights.item3.title}</h3>
              <p>{currentContent.highlights.item3.quote}</p>
              <p>{currentContent.highlights.item3.desc}</p>
            </div>
          </div>

          <div className="highlight-item reverse">
            <div className="highlight-content">
              <h3>{currentContent.highlights.item4.title}</h3>
              <p>{currentContent.highlights.item4.quote}</p>
              <p>{currentContent.highlights.item4.desc}</p>
            </div>
            <div className="highlight-image">
              <img src={chapter12Image} alt={currentContent.highlights.item4.imgAlt} />
            </div>
          </div>
        </div>
      </section>

      {/* Book Features */}
      <section className="book-features">
        <div className="container">
          <h2>{currentContent.features.title}</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📖</div>
              <h3>{currentContent.features.item1.title}</h3>
              <p>{currentContent.features.item1.desc}</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔍</div>
              <h3>{currentContent.features.item2.title}</h3>
              <p>{currentContent.features.item2.desc}</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>{currentContent.features.item3.title}</h3>
              <p>{currentContent.features.item3.desc}</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>{currentContent.features.item4.title}</h3>
              <p>{currentContent.features.item4.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>{currentContent.cta.title}</h2>
          <p>{currentContent.cta.desc}</p>
          <a href="https://docs.google.com/document/d/1Pn33AiQQWErYrtrUvUzeO0ydhx987EtMDGY7HPl9e6w/edit?usp=sharing" className="cta-button">{currentContent.cta.button}</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>{currentContent.footer}</p>
        </div>
      </footer>

      {/* Routing Setup */}
      <Routes>
        <Route path="/zh" element={<Navigate to="/zh" replace />} />
        <Route path="/en" element={<Navigate to="/en" replace />} />
        <Route path="/" element={<Navigate to="/zh" replace />} />
      </Routes>
    </div>
  );
}

export default App;
