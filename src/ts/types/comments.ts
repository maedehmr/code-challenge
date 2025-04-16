import { commentStatus } from "@/constant/commentStatus";
import { IconsStatus } from "../enums/iconsStatus";

export interface Comments {
  id: number;
  avatar: string;
  name: string;
  status: typeof commentStatus;
  title: string;
  text: string;
  icon: IconsStatus;
}
