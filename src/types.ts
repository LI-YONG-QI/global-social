import { components } from "./schema";

export type AdvanceRequestData = components["schemas"]["Advance"];
export type InspectRequestData = components["schemas"]["Inspect"];
export type RequestHandlerResult = components["schemas"]["Finish"]["status"];
export type RollupsRequest = components["schemas"]["RollupRequest"];
export type InspectRequestHandler = (data: InspectRequestData) => Promise<void>;
export type AdvanceRequestHandler = (
  data: AdvanceRequestData
) => Promise<RequestHandlerResult>;
