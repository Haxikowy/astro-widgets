import type { Navigation, Page } from "./models.ts";

class ApiClient {
  BASE_URL = import.meta.env.API_URL ?? "";

  private async get<TData>(url: string): Promise<TData> {
    const response = await fetch(this.BASE_URL + url, {
      method: "GET",
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
}

export default new ApiClient();
