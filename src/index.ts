import { App } from "vue";
import { Options } from "./types";
import { defaultOptions, useOptions } from "./use-options";
import DynamicComp from "./components/DynamicComp.vue";
import { Router } from "vue-router";

export function setupMicro(app: App, router: Router, options?: Options) {
  useOptions(options);
  app.component("DynamicComp", DynamicComp);
  const path = options?.routePath || defaultOptions.routePath;
  let first = true;
  router.beforeEach((to) => {
    if (first) {
      router.addRoute({ path, component: DynamicComp });
      router.replace({ ...to });
      first = false;
    }
    console.log("router: ", router.getRoutes());
  });
}
