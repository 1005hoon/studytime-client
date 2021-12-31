export interface IEventDetail {
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
