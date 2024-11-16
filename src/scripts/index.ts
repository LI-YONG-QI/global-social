import { encodeFunctionData, decodeFunctionData } from "viem";
import { ABI } from "../abis";

const data = encodeFunctionData({
  abi: ABI,
  functionName: "createPost",
  args: ["0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC", "First post"],
});

const { functionName, args } = decodeFunctionData({
  abi: ABI,
  data: "0xfe7ec5a5000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000a466972737420706f737400000000000000000000000000000000000000000000",
});

console.log(data);
console.log(functionName, args);
