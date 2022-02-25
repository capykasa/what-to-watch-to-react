import { Comment } from '../types/comments';

export const comments: Comment[] = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Mur',
    },
    rating: 8.9,
    comment: `It is certainly a magical and childlike way of storytelling, even if the
    content is a little more adult.`,
    date: '2019-05-08T10:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.2,
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and
    here and there, gruesome and/or heartbreaking.`,
    date: '2019-05-08T14:13:56.569Z',
  },
  {
    id: 3,
    user: {
      id: 4,
      name: 'Kate Mrrrrrr',
    },
    rating: 8.1,
    comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an
    hour and 40 minutes I wish I could take back.`,
    date: '2019-05-08T14:13:56.569Z',
  },
];
