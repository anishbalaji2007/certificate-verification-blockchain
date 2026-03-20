// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {

    address public admin;

    mapping(bytes32 => bool) public certificates;

    constructor() {
        admin = msg.sender; // deployer is admin
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function addCertificate(bytes32 hash) public onlyAdmin {
        certificates[hash] = true;
    }

    function verifyCertificate(bytes32 hash) public view returns (bool) {
        return certificates[hash];
    }
}