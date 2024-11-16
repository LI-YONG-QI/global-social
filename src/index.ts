import createClient from "openapi-fetch";
import { paths } from "./schema";
import type {
  RequestHandlerResult,
  RollupsRequest,
  AdvanceRequestData,
  InspectRequestData,
} from "./types";
import { handleAdvance } from "./advance";
import { handleInspect } from "./inspect";

const { Database } = require("node-sqlite3-wasm");
export const db = new Database("/tmp/database.db");

try {
  db.run(
    "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, creator TEXT, content TEXT, likes INTEGER)"
  );
  console.log("Post table initialized");
} catch (e) {
  console.log("ERROR initializing database: ", e);
}

const rollupServer = process.env.ROLLUP_HTTP_SERVER_URL;
console.log("HTTP rollup_server url is " + rollupServer);

const main = async () => {
  const { POST } = createClient<paths>({ baseUrl: rollupServer });
  let status: RequestHandlerResult = "accept";
  while (true) {
    const { response } = await POST("/finish", {
      body: { status },
      parseAs: "text",
    });

    if (response.status === 200) {
      const data = (await response.json()) as RollupsRequest;
      switch (data.request_type) {
        case "advance_state":
          status = await handleAdvance(data.data as AdvanceRequestData);
          break;
        case "inspect_state":
          await handleInspect(data.data as InspectRequestData);
          break;
      }
    } else if (response.status === 202) {
      console.log(await response.text());
    }
  }
};

main().catch((e) => {
  console.log(e);
  process.exit(1);
});
