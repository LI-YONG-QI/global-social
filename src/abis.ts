export const ABI = [
  {
    type: "function",
    name: "commentPost",
    inputs: [
      { name: "id", type: "uint256", internalType: "uint256" },
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
    name: "getAllPosts",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getPostByContent",
    inputs: [{ name: "keyword", type: "string", internalType: "string" }],
    outputs: [
      { name: "id", type: "bytes32", internalType: "bytes32" },
      { name: "creator", type: "address", internalType: "address" },
      { name: "likes", type: "uint256", internalType: "uint256" },
      { name: "comments", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "likePost",
    inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
];
