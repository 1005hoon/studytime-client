export interface IEventDetail {
  [key: string]: string | number | null | Date;
  id: number;
  eventId: number;
  type: string | null;
  img_url: string;
  url1: string | null;
  url2: string | null;
  description: string;
  createdAt: Date;
  isDeleted: number;
}
