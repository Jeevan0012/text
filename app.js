let web3;
let contract;
const contractAddress = "0x947D1eE4a3eed60a25abC00B6865C75aa4E6165e"; // Replace with your deployed contract address
const contractABI = [  
    {
      "inputs": [],
      "name": "doctorCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "doctors",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "specialization",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "patientCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "patientHistory",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "patientId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "doctorId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "comment",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "patients",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_specialization",
          "type": "string"
        }
      ],
      "name": "addDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "addPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_patientId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_doctorId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_comment",
          "type": "string"
        }
      ],
      "name": "assignDoctorToPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_patientId",
          "type": "uint256"
        }
      ],
      "name": "getPatientHistory",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "patientId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "doctorId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "comment",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct HospitalManagement.History[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_doctorId",
          "type": "uint256"
        }
      ],
      "name": "getDoctorDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "specialization",
              "type": "string"
            }
          ],
          "internalType": "struct HospitalManagement.Doctor",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_patientId",
          "type": "uint256"
        }
      ],
      "name": "getPatientDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "doctorsAssigned",
              "type": "string[]"
            }
          ],
          "internalType": "struct HospitalManagement.Patient",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]; // Replace with your contract ABI

window.addEventListener("load", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log("Connected to contract", contract);
    } else {
        alert("Please install MetaMask!");
    }
});

async function addDoctor() {
    const name = document.getElementById("doctorName").value;
    const specialization = document.getElementById("doctorSpecialization").value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addDoctor(name, specialization).send({ from: accounts[0] });
    alert("Doctor added successfully!");
}

async function addPatient() {
    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addPatient(name, age).send({ from: accounts[0] });
    alert("Patient added successfully!");
}

async function assignDoctor() {
    const patientId = document.getElementById("assignPatientId").value;
    const doctorId = document.getElementById("assignDoctorId").value;
    const comment = document.getElementById("doctorComment").value;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.assignDoctorToPatient(patientId, doctorId, comment).send({ from: accounts[0] });
    alert("Doctor assigned successfully!");
}

async function getPatientDetails() {
    const patientId = document.getElementById("patientId").value;
    const patient = await contract.methods.getPatientDetails(patientId).call();
    document.getElementById("patientDetails").innerText = `ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}`;
}
