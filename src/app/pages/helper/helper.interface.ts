export interface HoursData {
  hour: string,
  background: string | null,
  events: Events;
}

export interface Events {
  name: string | null,
  location: string | null
}
