type CommentUser = {
  id: number,
  name: string,
}

export type Comment = {
  id: number,
  user: CommentUser,
  rating: number,
  comment: string,
  date: string,
}
