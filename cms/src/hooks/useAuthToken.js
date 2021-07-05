import { checkIsTokenExpired, getAuthToken } from "../helpers/api";

export const useAuthToken = () => getAuthToken();

export const useIsAuthTokenExpired = () => checkIsTokenExpired();
