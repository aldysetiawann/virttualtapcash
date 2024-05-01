const baseUrl = "https://flamingo-valid-sadly.ngrok-free.app" as const;

export const environment = {
  production: true,
  baseUrl,
  apiUrl: baseUrl + "/api/v1",
};
