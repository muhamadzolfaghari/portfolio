import createCache from "@emotion/cache";
import React, { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "fttx",
  stylisPlugins: [rtlPlugin],
});

const RTL = ({ children }: PropsWithChildren) => (
  <CacheProvider value={cacheRtl}>{children}</CacheProvider>
);

export default RTL;
