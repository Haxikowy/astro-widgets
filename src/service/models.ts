export type NavigationItem = {
  id: number;
  name: string;
  url: string;
  slug: string;
};

export type Navigation = NavigationItem[];

export type ImageWidget = {
  type: "ImageWidget";
  image: {
    url: string;
    alt: string;
  };
};

export type TextWidget = {
  type: "TextWidget";
  text: string; // includes HTML
};

export type TwoTextColsWidget = {
  type: "TwoTextColsWidget";
  leftText: string; // includes HTML
  rightText: string; // includes HTML
};

export type Widget = ImageWidget | TextWidget | TwoTextColsWidget;

export type Page = {
  id: string;
  title: string;
  description: string;
  widgets: Widget[];
};
