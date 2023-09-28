import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestRouter } from "../../../tests/test-utils";
import { it } from "vitest";

const user = userEvent.setup();
let cartQuantity, button, input, increment, decrement;
beforeEach(async () => {
  renderTestRouter("/shop");
  cartQuantity = screen.getByLabelText("Cart Quantity");
  const buttons = await screen.findAllByRole("button", {
    name: "Add to Cart",
  });
  button = buttons[0];
  input = screen.getAllByLabelText("quantity")[0];
  increment = screen.getAllByRole("button", { name: "+" })[0];
  decrement = screen.getAllByRole("button", { name: "-" })[0];
});

describe("Add to cart button", () => {
  it("adds 1 to the cart quantity", async () => {
    await user.click(button);
    expect(cartQuantity.textContent).toBe("1");
  });

  it("adds 2 to the cart quantity", async () => {
    await user.type(input, "{backspace}2");
    await user.click(button);
    expect(cartQuantity.textContent).toBe("2");
  });
});

describe("decrement button", () => {
  it("does not decrement when input value is 1", async () => {
    await user.click(decrement);
    expect(input.value).toBe("1");
  });

  it("decrements by 1 when input is greater than 1", async () => {
    await user.type(input, "{backspace}3");
    await user.click(decrement);
    expect(input.value).toBe("2");
  });
});

describe("increment button", () => {
  it("adds 1 to the input", async () => {
    await user.click(increment);
    expect(input.value).toBe("2");
  });
});
