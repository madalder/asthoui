import "./outputs/stories.js";
import { handlePage } from "./layout.js";
import { moveLookup } from "./lookup.js";

$(() => {
  handlePage();
  moveLookup();
});
