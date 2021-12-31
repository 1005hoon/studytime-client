import { IEventDetail } from './event-detail.interface';

export interface IEvents {
  id: number;
  name: string;
  createdAt: Date;
  isDeleted: number;
}

export interface IEventWithDetails {
  event: IEvents;
  details: IEventDetail[];
}
