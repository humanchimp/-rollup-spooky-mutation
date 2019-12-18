import * as pathModule from "path";

hose(pathModule);

export const b = "defined by b";

function hose(module) {
  module.join = "overridden by b";
}
