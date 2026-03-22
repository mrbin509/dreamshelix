// frontend/api.js
import { BASE_URL } from "./config";

// ---------- POST REQUEST HELPER ----------
async function postData(endpoint, data, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  return response.json();
}

// ---------- GET REQUEST HELPER ----------
async function getData(endpoint, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });
  return response.json();
}

// ---------- DREAMSHELIX ENDPOINTS ----------

// Auth
export const registerUser = (data) => postData("/users/register/", data);
export const loginUser = (data) => postData("/users/login/", data);

// Wallet
export const getWallet = (token) => getData("/users/wallet/", token);
export const addTransaction = (data, token) => postData("/users/transaction/", data, token);

// Referral
export const getReferrals = (token) => getData("/users/referrals/", token);
export const generateReferralCode = (token) => postData("/users/generate-referral/", {}, token);

// User
export const getUserProfile = (token) => getData("/users/profile/", token);
export const updateUserProfile = (data, token) => postData("/users/profile/", data, token);