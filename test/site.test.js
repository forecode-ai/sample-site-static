import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("every page has a title and a language", () => {
  const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(html, /<html lang="[a-z]{2}/);
});
