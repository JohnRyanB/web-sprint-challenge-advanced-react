import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

test("renders without errors", () => {
	render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
	render(<CheckoutForm />);

	const firstNameInput = screen.getByLabelText(/First Name/i);
	const lastNameInput = screen.getByLabelText(/Last Name/i);
	const addressInput = screen.getByLabelText(/Address/i);
	const cityInput = screen.getByLabelText(/City/i);
	const stateInput = screen.getByLabelText(/State/i);
	const zipInput = screen.getByLabelText(/Zip/i);
	const checkoutButton = screen.getByRole("button", { name: /checkout/i });

	userEvent.type(firstNameInput, "John");
	userEvent.type(lastNameInput, "Blackburn");
	userEvent.type(addressInput, "1234 I Declare A Thumb War Dr");
	userEvent.type(cityInput, "Wherever");
	userEvent.type(stateInput, "Parts Unknown");
	userEvent.type(zipInput, "55555");
	userEvent.click(checkoutButton);

	expect(screen.getByTestId(/successMessage/i)).toBeVisible();
	const firstName = await screen.findByText(/John/i);
	const lastName = await screen.findByText(/Blackburn/i);
	const address = await screen.findByText(/1234 I Declare A Thumb War Dr/i);
	const city = await screen.findByText(/Wherever/i);
	const state = await screen.findByText(/Parts Unknown/i);
	const zip = await screen.findByText(/55555/i);
});
