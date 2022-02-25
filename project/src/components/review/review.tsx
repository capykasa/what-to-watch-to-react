import React from 'react';
import { Comment } from '../../types/comments';

type ReviewProps = {
  comment: Comment;
}

export default class Review extends React.Component<ReviewProps> {

  render() {
    const { comment } = this.props;

    return (
      <>
        <blockquote className="review__quote">
          <p className="review__text">{comment.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{comment.user.name}</cite>
            <time className="review__date" dateTime={comment.date}>{comment.date}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{comment.rating}</div>
      </>
    );
  }
}
