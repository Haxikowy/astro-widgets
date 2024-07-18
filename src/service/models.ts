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

export type ContactWidget = {
  type: "ContactWidget";
};

export type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export type SuccessResponse<TData = undefined> = {
  status: "success";
  data: TData;
};

export type ErrorResponse = {
  status: "error";
  message: string;
};

export type ApiResponse<TData = undefined> =
  | SuccessResponse<TData>
  | ErrorResponse;

export type Widget =
  | ImageWidget
  | TextWidget
  | TwoTextColsWidget
  | ContactWidget;

export type Page = {
  id: string;
  title: string;
  description: string;
  widgets: Widget[];
};
