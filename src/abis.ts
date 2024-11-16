export const ABI = [
  {
    type: "function",
    name: "commentPost",
    inputs: [
      { name: "id", type: "bytes32", internalType: "bytes32" },
      { name: "comment", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createPost",
    inputs: [
      { name: "creator", type: "address", internalType: "address" },
      { name: "content", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "id", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "likePost",
    inputs: [{ name: "id", type: "bytes32", internalType: "bytes32" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
];
