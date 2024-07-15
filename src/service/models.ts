export type NavigationItem = {
  id: number;
  name: string;
  url: string;
  slug: string;
};

export type Navigation = NavigationItem[];

export type Widget = {};

export type Page = {
  id: string;
  title: string;
  description: string;
  widgets: Widget[];
};
