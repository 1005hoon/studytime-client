export interface IEventDetail {
  id: number;
  eventId: number;
  type: string | null;
  img_url: string;
  url: string | null;
  description: string;
  createdAt: Date;
  isDeleted: number;
}
