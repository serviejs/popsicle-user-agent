import { userAgent } from "./index";
import { Request, Response } from "servie/dist/node";

describe("popsicle user agent", () => {
  const req = new Request("http://example.com/");

  it("should use cookie store for requests", async () => {
    const transport = userAgent();

    const r = req.clone();
    const res = await transport(r, async () => new Response(null));

    expect(r.headers.get("user-agent")).toMatch("Popsicle");
  });
});
