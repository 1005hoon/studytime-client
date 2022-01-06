export interface IArticle {
  id: number;
  title: string;
  contents: string;
  stId: string;
  nickname: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  isNotice: boolean;
  isHot: boolean;
  isDeleted: boolean;
  categoryId: number;
  imageUrl: string | null;
  userThumbnail: string;
  // category: CafeCategory;
  // cafeReplies: CafeReply[];
}
