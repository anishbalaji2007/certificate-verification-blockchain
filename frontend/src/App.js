import { useState } from "react";
import { ethers } from "ethers";
import SHA256 from "crypto-js/sha256";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const abi = [
  "function verifyCertificate(bytes32 hash) public view returns (bool)",
  "function addCertificate(bytes32 hash) public"
];

const ADMIN_USER = "anish";
const ADMIN_PASS = "2007";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [hash, setHash] = useState("");
  const [result, setResult] = useState("");

  // 🔐 LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>🔐 Admin Login</h2>

          <input
            style={styles.input}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={styles.button}
            onClick={() => {
              if (username === ADMIN_USER && password === ADMIN_PASS) {
                setIsLoggedIn(true);
              } else {
                alert("Invalid Credentials");
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // 📁 HANDLE FILE
  const handleFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      const wordArray = SHA256(reader.result).toString();
      setHash("0x" + wordArray);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  // ➕ ADD CERTIFICATE
  const addCertificate = async () => {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const signer = provider.getSigner(0);

    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.addCertificate(hash);
    await tx.wait();

    setResult("🎉 Certificate Added!");
  };

  // 🔍 VERIFY
  const verify = async () => {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const contract = new ethers.Contract(contractAddress, abi, provider);

    const res = await contract.verifyCertificate(hash);
    setResult(res ? "✅ Valid Certificate" : "❌ Fake Certificate");
  };

  // 🟢 MAIN PAGE
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📜 Certificate System</h2>

        <button style={styles.logout} onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>

        <input type="file" onChange={handleFile} style={{ margin: "20px 0" }} />

        <p style={{ fontSize: "12px" }}>Hash: {hash}</p>

        <div>
          <button style={styles.button} onClick={verify}>
            Verify
          </button>

          <button style={{ ...styles.button, marginLeft: "10px" }} onClick={addCertificate}>
            Add Certificate
          </button>
        </div>

        <h3 style={{ marginTop: "20px" }}>{result}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white"
  },
  card: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none"
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer"
  },
  logout: {
    marginBottom: "10px",
    background: "#ef4444",
    padding: "5px 10px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    cursor: "pointer"
  }
};

export default App;