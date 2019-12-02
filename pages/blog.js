import react from "React";
import "./styles/index.less";
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
        <ul className={styles.noteList}>
          <li className={styles.note}>
            <div className={styles.content}>
              <a target="_blank" className={styles.title} href="/article">
                Android面试：为什么Handler容易造成内存泄露？
              </a>
              <p className={styles.abstract}>
                非静态内部类造成的内存泄露
                原因：非静态内部类会持有外部类对象的引用。
                结合代码及Profiler查看内存泄露情况 Handler申明 模拟异步...
              </p>
              <div className={styles.meta}>
                <a target="_blank">
                  <svg
                    t="1574871932997"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3479"
                    width="14"
                    height="14"
                    style={{ marginRight: "5px" }}
                  >
                    <path
                      d="M337.36192 914.688c-3.5584 0-7.13728-0.75776-10.496-2.304-8.89856-4.096-14.61248-12.99968-14.61248-22.8096L312.25344 782.5408c0-13.29152-10.81344-24.09984-24.12544-24.09984l-122.88 0c-41.00096 0-74.35264-33.3568-74.35264-74.33216L90.89536 235.6992c0-40.9856 33.35168-74.33728 74.35264-74.33728l708.80768 0c40.97536 0 74.32704 33.35168 74.32704 74.33728l0 448.41472c0 40.97536-33.35168 74.33216-74.32704 74.33216l-336.19968 0c-5.76 0-11.35104 2.048-15.73888 5.8368l-168.41728 144.3584C349.06112 912.62464 343.24992 914.688 337.36192 914.688z"
                      p-id="3480"
                    ></path>
                  </svg>
                  1
                </a>
                <span>
                  <svg
                    t="1574871979007"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5648"
                    width="14"
                    height="14"
                    style={{ marginRight: "5px" }}
                  >
                    <path
                      d="M844.231111 391.39555600000006H659.9111109999999c-13.653333-2.275556-18.204444-15.928889-20.48-22.755556V202.52444400000002c0-45.511111-36.408889-81.92-81.92-81.92-40.96 0-75.093333 31.857778-81.92 70.542223-25.031111 157.013333-120.604444 209.351111-182.044444 225.28 2.275556 6.826667 2.275556 11.377778 2.275555 15.928889v441.457777c0 9.102222-2.275556 18.204444-6.826666 27.306666999999997h446.008888c43.235556-9.102222 72.817778-25.031111 93.297778-68.266667l93.297778-327.68c18.204444-59.16444400000001-11.377778-116.053333-77.368889-113.77777699999999zM257.137778 876.0888889999999V432.355556c0-13.653333-18.204444-25.031111-38.684445-25.031112H157.013333c-31.857778 0-59.16444400000001 27.306666999999997-59.16444400000001 59.16444500000001v373.191111c0 34.133333 25.031111 61.44 59.16444400000001 61.44h61.44c20.48 0 38.684444-11.377778 38.684445-25.031111z m0 0"
                      fill=""
                      p-id="5649"
                    ></path>
                  </svg>
                  2
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
