import "./outputs/stories.js";
import "./shortcut.js";
import { handlePage } from "./layout.js";
import { moveLookup } from "./lookup.js";

$(() => {
  handlePage();
  moveLookup();
});
