import { getMessage } from "./index";

test("should print Hello World and not Hello Cats", () => {
    expect(getMessage()).toBe("Hello World");
    expect(getMessage()).not.toBe("Hello Cats");
});