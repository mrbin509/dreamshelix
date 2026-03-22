// api.ts

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// ---------- GENERIC HELPERS ----------

// POST request helper
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

// GET request helper
async function getData(endpoint: string, token?: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      ...(token && { "Authorization": `Bearer ${token}` }),
    },
  });

  return await res.json();
}

// ---------- DREAMSHELIX API ENDPOINTS ----------

// 1️⃣ Register new user
export async function registerUser(data: { name: string; email: string; password: string }) {
  return await postData("/users/register", data);
}

// 2️⃣ Login user
export async function loginUser(data: { email: string; password: string }) {
  return await postData("/users/login", data);
}

// 3️⃣ Get wallet info (requires token)
export async function getWallet(token: string) {
  return await getData("/wallet/", token);
}

// 4️⃣ Get wallet transaction history
export async function getTransactionHistory(token: string) {
  return await getData("/wallet/transactions", token);
}

// 5️⃣ Apply referral code
export async function applyReferral(token: string, referralCode: string) {
  return await postData("/referral/apply", { code: referralCode }, token);
}

// 6️⃣ Optional: add more endpoints as backend grows