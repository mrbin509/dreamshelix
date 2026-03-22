// next.config.ts
import { defineConfig } from "next";

export default defineConfig({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: "https://dreamshelix-backend.onrender.com/api",
    NEXT_PUBLIC_RAZORPAY_KEY: "rzp_test_SUDCQjRBfMW6qv",
  },
});