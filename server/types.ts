import { RequestHandler } from "express";

export interface User {
  id: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
export interface Post {
  id: string;
  title: string;
  url: string;
  userId: string;
  postedAt: number;
}
export interface Like {
  userId: string;
  postId: number;
}
export interface Comment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  postedAt: number;
}
export type ExpressHandler<Req, Res> = RequestHandler<
  string,
  Partial<Res>,
  Partial<Req>,
  any
>;