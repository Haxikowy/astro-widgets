import type {
  ApiResponse,
  ContactRequest,
  Navigation,
  Page,
} from "./models.ts";

class ApiClient {
  BASE_URL = import.meta.env.PUBLIC_API_URL ?? "";

  private async get<TData>(url: string): Promise<TData> {
    const response = await fetch(this.BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  private async post<TData, TPayload>(
    url: string,
    payload: TPayload,
  ): Promise<TData> {
    const response = await fetch(this.BASE_URL + url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async getNavigation(): Promise<Navigation> {
    return this.get<Navigation>("/navigation");
  }

  async getPage(slug: string) {
    return this.get<Page>(`/pages/${slug}`);
  }

  async postContact(payload: ContactRequest) {
    return this.post<ApiResponse, ContactRequest>("/contact", payload);
  }
}

export default new ApiClient();
