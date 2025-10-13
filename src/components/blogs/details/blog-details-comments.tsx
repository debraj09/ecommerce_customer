import Image from "next/image";
import React from "react";

// postbox comment box
type IProps = { img: string; isChildren: boolean; name: string; desc: string };
function PostboxCommentBox({ img, isChildren, name, desc }: IProps) {
  return (
    <li className={`${isChildren ? "children mb-30" : ""}`}>
      <div
        className={`postbox__comment-box ${isChildren ? "pl-90" : ""} d-flex`}
      >
        <div className="postbox__comment-info">
          <div className="postbox__comment-avater mr-25">
            <Image
              src={`/assets/img/blog/comment-${img}.jpg`}
              alt="comment-img"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="postbox__comment-text">
          <div className="postbox__comment-name">
            <h5>{name}</h5>
          </div>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
          <div className="postbox__comment-reply">
            <a href="#">Leave Reply</a>
          </div>
        </div>
      </div>
    </li>
  );
}

const BlogDetailsComments = () => {
  return (
    <ul>
      <PostboxCommentBox
        img="1"
        isChildren={false}
        name="Kristin Watson"
        desc="The tiles are highly resistant to water and dirt and can be
              cleaned, so they are compatible with the cultivation of plants and
              cooking and the functions. There are few plugins and apps
              available for this purpose, many of them required a monthly
              subscription."
      />
      <PostboxCommentBox
        img="2"
        isChildren={true}
        name="Brooklyn Simmons"
        desc="Include anecdotal examples of your experience, or things you took
              notice of that you <br /> feel others would find useful."
      />
      <PostboxCommentBox
        img="3"
        isChildren={false}
        name="Kristin Watson"
        desc="The tiles are highly resistant to water and dirt and can be
              cleaned, so they are compatible with the cultivation of plants and
              cooking and the functions. There are few plugins and apps
              available for this purpose, many of them required a monthly
              subscription."
      />
    </ul>
  );
};

export default BlogDetailsComments;
