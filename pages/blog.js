import react from "React";
import styles from "./styles/blog.less";

const App = props => {
  return (
    <div className={styles.main}>
      <aside className={styles.aside}>
        <div>
          <section>
            <img
              className={styles.img}
              src="https://zivenday.github.io/images/WechatIMG13.jpeg"
            ></img>
            <p className={styles.name}>Ziven 先生</p>
            <p className={styles.description}>
              愿阳光中是个孩子,风雨中是个大人.
            </p>
          </section>
          <div className={styles.state}>
            <a>
              <span href="">20</span>
              <span href="">文章</span>
            </a>
            <a>
              <span href="">34</span>
              <span href="">留言</span>
            </a>
            <a>
              <span href="">33</span>
              <span href="">标签</span>
            </a>
          </div>
        </div>
      </aside>
      <div className={styles.inner}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
