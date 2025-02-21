"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test("should print Hello World and not Hello Cats", () => {
    expect((0, index_1.getMessage)()).toBe("Hello World");
    expect((0, index_1.getMessage)()).not.toBe("Hello Cats");
});
