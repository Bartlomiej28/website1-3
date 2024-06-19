import React from 'react'
import "./library.css"

import rectangle from "./../../Rectangle 22.png";
import rectangle2 from "./../../Rectangle 23.png";
import rectangle3 from "./../../Rectangle 24.png";
import rectangle4 from "./../../Rectangle 25.png";

export default function Library() {
  return (
    <div className="section library container" id="library">
          <div className="row">
            <div className="library-title col-xl-12 col-md-12 col-sm-12 h1">
              A lot is happening, We are blogging about it.
            </div>

            <div className="blog1 col-xl-4 col-md-4 col-sm-12">
              <div className="blog-image">
                <img src={rectangle} className="blog-img img-fluid" alt="rectangle"/>
              </div>
              <div className="blog-desc">
                <p>Sep 26, 2021</p>
                <div className="article-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </div>
                <div className="link">Read Full Article</div>
              </div>
            </div>

            <div className="blog1 col-xl-4 col-md-4 col-sm-12">
              <div className="blog-image">
                <img src={rectangle2} className="blog-img img-fluid" alt="rectangle"/>
              </div>
              <div className="blog-desc">
                <p>Sep 26, 2021</p>
                <div className="article-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </div>
                <div className="link">Read Full Article</div>
              </div>
            </div>

            <div className="blog1 col-xl-4 col-md-4 col-sm-12">
              <div className="blog-image">
                <img src={rectangle3} className="blog-img img-fluid" alt="rectangle"/>
              </div>
              <div className="blog-desc">
                <p>Sep 26, 2021</p>
                <div className="article-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </div>
                <div className="link">Read Full Article</div>
              </div>
            </div>

            <div className="blog1 col-xl-4 col-md-4 col-sm-12">
              <div className="blog-image">
                <img src={rectangle4} className="blog-img img-fluid" alt="rectangle"/>
              </div>
              <div className="blog-desc">
                <p>Sep 26, 2021</p>
                <div className="article-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </div>
                <div className="link">Read Full Article</div>
              </div>
            </div>

            <div className="blog1 col-xl-4 col-md-4 col-sm-12">
              <div className="blog-image">
                <img src={rectangle} className="blog-img img-fluid" alt="rectangle"/>
              </div>
              <div className="blog-desc">
                <p>Sep 26, 2021</p>
                <div className="article-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </div>
                <div className="link">Read Full Article</div>
              </div>
            </div>

            <div className="blog1 col-xl-4 col-md-4 col-sm-12">
              <div className="blog-image">
                <img src={rectangle2} className="blog-img img-fluid" alt="rectangle"/>
              </div>
              <div className="blog-desc">
                <p>Sep 26, 2021</p>
                <div className="article-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </div>
                <div className="link">Read Full Article</div>
              </div>
            </div>
          </div>
        </div>
  )
}
