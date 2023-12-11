import {User} from "./User";
import {Tag} from "./Tag";
import {Category} from "./Category";

export interface Project {
  id ?: number,
  name: string,
  description: string,
  fundType: string,
  fundTarget: number,
  fundStart: Date,
  fundEnd: Date,
  createdAt: Date,
  user: User,
  category: Category,
  tags: Tag[]
}
