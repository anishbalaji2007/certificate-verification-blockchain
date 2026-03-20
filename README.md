# 🔗 Blockchain Certificate Verification System

A decentralized application (DApp) that verifies the authenticity of certificates using blockchain technology. This system ensures that certificates cannot be forged or tampered with.

---

## 🚀 Features

- 📁 Upload certificate files (PDF/Image)
- 🔐 Generate SHA-256 hash of uploaded file
- ⛓️ Store certificate hash on blockchain
- ✅ Verify certificate authenticity instantly
- 🔑 Admin-only certificate addition (secure smart contract)
- 🌐 Simple and clean React frontend

---

## 🧱 Tech Stack

- **Blockchain:** Ethereum (Hardhat)
- **Smart Contract:** Solidity
- **Frontend:** React.js
- **Web3 Library:** Ethers.js
- **Hashing:** Crypto-JS

---

## 🏗️ Project Structure

project/
├── contracts/        # Solidity smart contracts  
├── scripts/          # Deployment & interaction scripts  
├── frontend/         # React frontend  
├── hardhat.config.js  
├── package.json  

---

## ⚙️ How It Works

1. User uploads a certificate file  
2. The file is converted into a SHA-256 hash  
3. Admin stores the hash on blockchain  
4. User uploads file again for verification  
5. If hash matches → ✅ Valid certificate  
6. If not → ❌ Fake certificate  

---

## 🔐 Security

- Only admin can add certificates (enforced in smart contract)
- Data stored on blockchain is immutable
- No central authority required

---

## ▶️ Run Project Locally

### 1️⃣ Start Hardhat blockchain

npx hardhat node

---

### 2️⃣ Deploy smart contract

npx hardhat run scripts/deploy.js --network localhost

---

### 3️⃣ Run frontend

cd frontend  
npm install  
npm start  

---

## 📸 Demo

![alt text](image.png)

---

## 🌍 Future Improvements

- 🔗 Deploy contract to testnet (Polygon / Sepolia)
- 🦊 MetaMask wallet authentication
- 📦 IPFS integration for file storage
- 📱 QR code verification system
- 🎨 Improved UI/UX design

---

## 👨‍💻 Author

Anish Balaji

---

## ⭐ Project Purpose

This project demonstrates how blockchain can be used to build a secure, tamper-proof certificate verification system, eliminating fraud and ensuring trust.