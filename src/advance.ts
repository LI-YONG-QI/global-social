import type { AdvanceRequestHandler } from "./types";
import { decodeFunctionData } from "viem";
import { ABI } from "./abis";
import { db } from "./index";

// data encode by ABI
export const handleAdvance: AdvanceRequestHandler = async (data) => {
  const { functionName, args } = decodeFunctionData({
    abi: ABI,
    data: data.payload,
  });

  console.log(functionName, args);

  switch (functionName) {
    case "createPost":
      await createPost(args);
      break;
    case "likePost":
      await likePost(args);
      break;
  }

  return "accept";
};

async function likePost(args: any) {
  db.run("UPDATE posts SET likes = likes + 1 WHERE id = ?", [args[0]]);
}

async function createPost(args: any) {
  db.run("INSERT INTO posts (creator, content, likes) VALUES (?, ?, ?)", [
    args[0],
    args[1],
    0,
  ]);

  console.log(`Creator: ${args.creator}, Content: ${args.content}`);
}
