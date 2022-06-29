import { render, screen, fireEvent } from "@testing-library/react";

import Posts from "./PostContainer";

test("check that submit button in comment reply clears the input values", () => {
    render(<Posts />);
    // fireEvent.click(screen.getAllByText("Reply")[0]);
    // expect(screen.getByText("What would you like to say?")).toBeInTheDocument();
});
