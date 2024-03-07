import {Router} from "express";

import {TodayTixOauthAPIError} from "../types/base";
import {
  TodayTixRefreshTokenReq,
  TodayTixRefreshTokenRes
} from "../types/loginTokens";

const postToken200Response: TodayTixRefreshTokenRes = {
  access_token: "access-token",
  token_type: "Bearer",
  original_token_id: "original-token-id",
  expires_in: 1800,
  scope: "customer"
};

const postToken400Response: TodayTixOauthAPIError = {
  error_description: "Request is missing username parameter.",
  error: "invalid_request"
};

const tokenRoute = (router: Router) =>
  router.post<
    "/token",
    null,
    TodayTixRefreshTokenRes | TodayTixOauthAPIError,
    TodayTixRefreshTokenReq
  >("/token", (req, res) => {
    if (req.body.refresh_token === "refresh-token") {
      return res.status(200).json(postToken200Response);
    }

    return res.status(400).json(postToken400Response);
  });

export default tokenRoute;
