import { InspectRequestHandler } from "./types";
import { fromHex, toHex } from "viem";
import { db } from "./index";

export function extractQueryParam(
  route: string,
  param: string
): { routeName: string; paramValue: string | null } {
  const queryIndex = route.indexOf("?");
  const routeName = queryIndex === -1 ? route : route.substring(0, queryIndex);

  if (queryIndex === -1) return { routeName, paramValue: null };

  const queryString = route.substring(queryIndex + 1);
  const params = new URLSearchParams(queryString);
  return { routeName, paramValue: params.get(param) };
}

export const handleInspect: InspectRequestHandler = async (data) => {
  console.log("Received data: " + JSON.stringify(data));

  const payload = data["payload"];
  const route = fromHex(payload, "string");

  const { routeName } = extractQueryParam(route, "");

  let res;
  if (routeName === "getAllPosts") {
    res = await getAllPosts();
  } else if (routeName === "getPostByContent") {
    const { paramValue } = extractQueryParam(route, "keyword");
    res = await getPostByContent(paramValue);
  }

  await fetch(process.env.ROLLUP_HTTP_SERVER_URL + "/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload: toHex(JSON.stringify(res)),
    }),
  });
};

async function getAllPosts() {
  const listOfProducts = await db.all(
    `SELECT * FROM posts ORDER BY likes DESC`
  );

  console.log(listOfProducts);
  return listOfProducts;
}

async function getPostByContent(args: any) {
  const posts = await db.all(
    `SELECT * FROM posts WHERE content LIKE ? ORDER BY likes DESC`,
    [`%${args[0]}%`]
  );

  console.log(posts);
  return posts;
}
