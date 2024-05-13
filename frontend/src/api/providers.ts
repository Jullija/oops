import { Provider } from "../utils";

export const getProviders = (): Provider[] => {
  return providers;
};

const providers: Provider[] = [{ id: "1", name: "Michał Idzik" }];
