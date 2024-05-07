const baseUrl = "https://virtualtapcash-production.up.railway.app" as const;

export const environment = {
  production: false,
  baseUrl,
  apiUrl: baseUrl + "/api/v1",
};
