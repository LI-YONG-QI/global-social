import { encodeFunctionData, decodeFunctionData, fromHex } from "viem";
import { ABI } from "../abis";
import { extractQueryParam } from "../inspect";

const data = encodeFunctionData({
  abi: ABI,
  functionName: "createPost",
  args: ["0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC", "I hate coding"],
});

const likeData = encodeFunctionData({
  abi: ABI,
  functionName: "likePost",
  args: [2],
});

const { functionName, args } = decodeFunctionData({
  abi: ABI,
  data: "0xfe7ec5a5000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000d49204c696b6520636f64696e6700000000000000000000000000000000000000",
});

console.log(data);
console.log(functionName, args);

console.log(likeData);

console.log(extractQueryParam("getPostByContent", ""));
console.log(extractQueryParam("getPostByContent?keyword=Hello", "keyword"));
