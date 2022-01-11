export interface IPopup {
  [key: string]: number | string | null | Date;
  id: number;
  screen: string | null;
  targetId: number | null;
  imgUrl: string;
  url: string | null;
  useYn: number;
  createdAt: Date;
  isDeleted: number;
  description: string;
}
