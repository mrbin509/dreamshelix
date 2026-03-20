"use client";

export default function Referrals() {
  const referralLink = "https://dreamshelix.com?ref=USER123";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Refer & Earn 💸</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="mb-2">Your Referral Link:</p>

        <div className="flex gap-2">
          <input
            value={referralLink}
            readOnly
            className="border p-2 w-full rounded"
          />

          <button
            onClick={copyLink}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-2">Stats</h2>
        <p>Total Referrals: 0</p>
        <p>Total Earnings: ₹0</p>
      </div>
    </div>
  );
}