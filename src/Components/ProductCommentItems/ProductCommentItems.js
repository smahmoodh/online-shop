import React from 'react';

import './ProductCommentItems.css';

const ProductCommentItems = ({comments}) => {
  return (
      <>
          {comments.length > 0 ?
              comments.map(comment => {
                  return <li className="comment" id="comment_592659" key={comment.id}>
                      <div className="comments-box">
                          <div className="comment_title clearfix off">
                              <div className="comment_name">
                                  <div className="comment_name_inner">
                                      <div className="comment_author">
                                          <span className="author-title">
                                              {comment.name ? comment.name : 'علی قاسمی'}
                                              <span className="author-status jhidden"> خریدار </span>
                                          </span>
                                          <a className="comment_date" href="#comment_592659" title="دوشنبه 28 فروردین 1402 - 22:51">
                                              {comment.created_at}
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="comment_message clearfix">
                              {comment.body}
                          </div>
                      </div>
                  </li>
              })
              :
              null
          }
      </>
  )
}

export default ProductCommentItems