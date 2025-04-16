import Image from "next/image";
import styles from "./comment-section.module.css";
import { commentStatus } from "@/constant/commentStatus";
import { Comments } from "@/types/comments";

const comments: Comments[] = [
  {
    id: 1,
    avatar: "/images/avatar1.jpg",
    name: "شهاب حسینی",
    status: commentStatus.pending,
    title: "تجربه من:",
    text: "همه چیز خیلی خوب پیش رفت",
  },
  {
    id: 2,
    avatar: "/images/avatar2.jpg",
    name: "خیریه شیرخوارگان",
    status: commentStatus.approved,
    title: "تجربه من:",
    text: "همه چیز خیلی خوب پیش رفت",
  },
  {
    id: 3,
    avatar: "/images/avatar3.jpg",
    name: "چالش کاشت درخت",
    status: commentStatus.rejected,
    title: "تجربه من:",
    text: "همه چیز خیلی خوب پیش رفت",
  },
  {
    id: 4,
    avatar: "/images/avatar4.jpg",
    name: "توپ امضا شده تیم فوتبال پرسپولیس",
    status: commentStatus.approved,
    title: "تجربه من:",
    text: "همه چیز خیلی خوب پیش رفت",
  },
  {
    id: 5,
    avatar: "/images/avatar5.jpg",
    name: "ساخت مدرسه در مناطق محروم",
    status: commentStatus.approved,
    title: "تجربه من:",
    text: "همه چیز خیلی خوب پیش رفت",
  },
  {
    id: 6,
    avatar: "/images/avatar6.jpg",
    name: "ملاقات با علی‌دایی ",
    status: commentStatus.approved,
    title: "تجربه من:",
    text: "همه چیز خیلی خوب پیش رفت",
  },
];

const CommentSection = () => {
  return comments.map((comment) => (
    <div key={comment.id} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Image
            className={styles.avatar}
            src={comment.avatar}
            width={60}
            height={60}
            alt={comment.name}
          />
          <h5>{comment.name}</h5>
        </div>
        <div className={`${styles.status} ${styles[comment.status.variant]}`}>
          {comment.status.name}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.subTexts}>
          <strong>{comment.title}</strong>
          <small>{comment.text}</small>
        </div>
        <div className={styles.icons}>
          {comment.status === commentStatus.pending ? (
            <>
              <Image src="/icons/edit.svg" width={24} height={24} alt="edit" />
              <Image
                src="/icons/trash.svg"
                width={24}
                height={24}
                alt="trash"
              />
            </>
          ) : comment.status === commentStatus.approved ? (
            <Image src="/icons/trash.svg" width={24} height={24} alt="trash" />
          ) : null}
        </div>
      </div>
    </div>
  ));
};

export default CommentSection;
