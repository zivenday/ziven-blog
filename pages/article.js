import React, { useState } from "react";
import styles from "./styles/article.less";

import marked from "marked";
import emoji from "emoji";
export default function article() {
  let INITIAL_STATE = { comments: "", previewShow: false, emojiShow: false };
  let [state, setState] = useState(INITIAL_STATE);

  const setStateFunc = argv => {
    setState(prevState => {
      return {
        ...prevState,
        ...argv
      };
    });
  };
  return (
    <div style={{ width: "960px", margin: "0 auto", overflow: "hidden" }}>
      <div className={styles.main}>
        <div className={styles.title}></div>
        <div className={styles.date}></div>
        <article
          className={styles.article}
          style={{ height: "300px" }}
        ></article>
        <div className={styles.comments}>
          <div className={styles.inputs}>
            <input placeholder="昵称"></input>
            <input placeholder="邮箱"></input>
            <input placeholder="http(//)"></input>
          </div>
          <div>
            <textarea
              placeholder="论伦？"
              rows="5"
              value={state.comments}
              onChange={e => {
                e.persist();
                setStateFunc({ comments: e.target.value });
              }}
            ></textarea>
          </div>
          <div>
            <span>
              <span
                onClick={() => {
                  setStateFunc({ previewShow: false, emojiShow: true });
                }}
              >
                表情
              </span>
              |
              <span
                onClick={() => {
                  console.log(emoji);
                  setStateFunc({ previewShow: true, emojiShow: false });
                  document.getElementById("preview").innerHTML = marked(
                    state.comments
                  );
                }}
              >
                预览
              </span>
            </span>
            <div
              id="preview"
              style={{ display: state.previewShow ? "block" : "none" }}
            ></div>
            <div
              id="emoji"
              style={{ display: state.emojiShow ? "block" : "none" }}
              className={styles.emojiList}
            >
              {Object.keys(emoji.EMOJI_MAP).map(i => {
                return (
                  <span
                    className={styles.emoji}
                    onClick={() => {
                      setStateFunc({ comments: state.comments + i });
                    }}
                  >
                    {i}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <button>回复</button>
          </div>
        </div>
      </div>
      <aside></aside>
    </div>
  );
}
