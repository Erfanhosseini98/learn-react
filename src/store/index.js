

import { init } from "@rematch/core";
// import * as  from "./blogs";
// import * as todos from "./todos";
// import * as todos from './todos'
import * as models from './blogs'
const store = init({ models });
export default store;