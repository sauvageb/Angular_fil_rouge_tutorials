import {User} from "./user";

export interface Comment {
  id: number;
  content: string;
  author: User;
}
