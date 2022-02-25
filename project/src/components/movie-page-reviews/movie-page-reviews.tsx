import React from 'react';
import { Comment } from '../../types/comments';
import Review from '../review/review';

type MoviePageReviewsProps = {
  comments: Comment[];
}

export default class MoviePageReviews extends React.Component<MoviePageReviewsProps> {

  render() {
    const { comments } = this.props;

    return (
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="review"
            >
              <Review
                comment={comment}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
