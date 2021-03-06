import { CommonRequest, CommonResponse } from "servie/dist/common";

/**
 * Default `user-agent` header.
 */
export const DEFAULT_USER_AGENT =
  "Popsicle (https://github.com/serviejs/popsicle)";

/**
 * Set a `User-Agent` header for every request.
 */
export function userAgent<T extends CommonRequest, U extends CommonResponse>(
  userAgent = DEFAULT_USER_AGENT
): (req: T, next: () => Promise<U>) => Promise<U> {
  return (req, next) => {
    if (!req.headers.has("User-Agent")) {
      req.headers.set("User-Agent", userAgent);
    }

    return next();
  };
}
