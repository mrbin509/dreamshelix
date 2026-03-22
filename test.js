import { registerUser, loginUser, getWallet, getReferrals } from "./lib/api.js";

let token = ""; // Will store JWT token after login
const output = document.getElementById("output");

// Helper to print
function log(data) {
  output.textContent += JSON.stringify(data, null, 2) + "\n\n";
}

// Register button
window.register = async () => {
  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  const res = await registerUser({ username, email, password });
  log({ action: "Register", res });
};

// Login button
window.login = async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const res = await loginUser({ email, password });
  log({ action: "Login", res });

  if (res.access) token = res.access; // store JWT token
};

// Wallet button
window.wallet = async () => {
  if (!token) return log({ error: "Login first!" });
  const res = await getWallet(token);
  log({ action: "Wallet", res });
};

// Referrals button
window.referrals = async () => {
  if (!token) return log({ error: "Login first!" });
  const res = await getReferrals(token);
  log({ action: "Referrals", res });
};