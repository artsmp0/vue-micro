import { ref } from "vue";
import { Options } from "./types";

export const defaultOptions: Required<Options> = {
  componentPath: "components",
  routePath: "/dynamic-component",
};
const finalOptions = ref<Required<Options>>(defaultOptions);
export const useOptions = (options?: Options) => {
  console.log(import.meta);
  if (options) {
    finalOptions.value = { ...defaultOptions, ...options };
  }
  return finalOptions;
};
