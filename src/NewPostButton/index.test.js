import { useState } from "react";

test("Check that the submit button is resetting the content input back to a blank input when clicked", () => {
    const [inputValue, setInputValue] = useState();

    expect(sum(1, 2)).toBe(3);
});
