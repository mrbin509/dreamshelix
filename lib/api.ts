// api.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Generic POST request
async function postData(endpoint: string, data: any, token?: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` }),
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}

// Generic GET request
async function getData(endpoint: string, token?: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      ...(token && { "Authorization": `Bearer ${token}` }),
    },
  });
  return await res.json();
}

// ---- DREAMSHELIX ENDPOINTS ----
export async function registerUser(data: { name: string; email: string; password: string }) {
  return await postData("/users/register", data);
}

export async function loginUser(data: { email: string; password: string }) {
  return await postData("/users/login", data);
}

export async function getWallet(token: string) {
  return await getData("/wallet/", token);
}

export async function getTransactionHistory(token: string) {
  return await getData("/wallet/transactions", token);
}

export async function applyReferral(token: string, referralCode: string) {
  return await postData("/referral/apply", { code: referralCode }, token);
}

// You can add more endpoints here as your backend grows