const baseUrl = "https://flamingo-valid-sadly.ngrok-free.app" as const;

export const environment = {
  production: false,
  baseUrl,
  apiUrl: baseUrl + "/api/v1",
};
