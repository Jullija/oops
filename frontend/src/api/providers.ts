import { Provider } from "../utils";

export const getProviders = (): Provider[] => {
  return providers;
};

export const getProvider = (id: string): Provider | undefined => {
  return providers.find((provider) => provider.id === id);
};

const providers: Provider[] = [{ id: "1", name: "Michał Idzik" }];
