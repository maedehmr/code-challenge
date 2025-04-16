import { commentStatus } from "@/constant/commentStatus";

export interface Comments {
  id: number;
  avatar: string;
  name: string;
  status: (typeof commentStatus)[keyof typeof commentStatus];
  title: string;
  text: string;
}
