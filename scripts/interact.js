const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const Certificate = await hre.ethers.getContractFactory("CertificateVerification");
  const contract = await Certificate.attach(contractAddress);

  // Example certificate hash
  const certHash = hre.ethers.utils.id("Anish Certificate");

  // Add certificate
  const tx = await contract.addCertificate(certHash);
  await tx.wait();
  console.log("Certificate added!");

  // Verify certificate
  const result = await contract.verifyCertificate(certHash);
  console.log("Is certificate valid?", result);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});