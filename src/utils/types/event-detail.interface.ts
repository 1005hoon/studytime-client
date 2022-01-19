export interface IEventDetail {
  [key: string]: string | number | null | Date;
  id: number;
  eventId: number;
  type: string | null;
  imgUrl: string;
  url1: string | null;
  urlButtonName1: string;
  url2: string | null;
  urlButtonName2: string;
  description: string;
  createdAt: Date;
  isDeleted: number;
}
