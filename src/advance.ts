import type { AdvanceRequestHandler } from "./types";
import { decodeFunctionData } from "viem";
import { ABI } from "./abis";

// data encode by ABI
export const handleAdvance: AdvanceRequestHandler = async (data) => {
  //console.log("Received advance request data " + JSON.stringify(data));
  //console.log("Payload is " + data.payload);

  const { functionName, args } = decodeFunctionData({
    abi: ABI,
    data: data.payload,
  });

  if (functionName === "createPost") {
    await createPost(args);
  }

  return "accept";
};

async function createPost(args: any) {}
