import {User} from "./user";
import {Category} from "./category";

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  content: string;
  author: User;
  category: Category;
  createdAt: Date;
  comments: Comment[];
}
