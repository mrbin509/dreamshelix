export default function Wallet() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Wallet 💰</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2>Available Balance</h2>
        <p className="text-2xl font-bold text-green-600">₹0</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="mb-2">Withdraw Money</h2>

        <input
          type="number"
          placeholder="Enter amount"
          className="border p-2 w-full mb-3 rounded"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Request Withdrawal
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2>Transaction History</h2>
        <p className="text-gray-500">No transactions yet</p>
      </div>
    </div>
  );
}