import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../../translations/i18";
import { IpSearchField } from "./IpSearchField";

describe("IpSearchField component", () => {
  test("should render TextField component and set value", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId("ip-search-input");

    fireEvent.change(textField, { target: { value: "255.255.255.255" } });

    expect(textField).toHaveValue("255.255.255.255");
  });

  test("should render TextField component and set valid value, the flag and local time will appear", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId("ip-search-input");

    fireEvent.change(textField, { target: { value: "12.12.12.12" } });
    fireEvent.blur(textField);

    expect(textField).toHaveValue("12.12.12.12");

    await waitFor(
      () => {
        const countryFlagImage = screen.getByTestId("country-image");
        const countryLocalTime = screen.getByTestId("country-local-time");

        expect(countryFlagImage).toBeInTheDocument();
        expect(countryLocalTime).toBeInTheDocument();
      },
      { timeout: 2000, interval: 200 }
    );
  });

  test("should render TextField component and set out of range value", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId("ip-search-input");

    fireEvent.change(textField, { target: { value: "255.255.255.255" } });
    fireEvent.blur(textField);

    expect(textField).toHaveValue("255.255.255.255");

    await waitFor(
      () => {
        const errorMessage = screen.queryByText("Your IP is out of range");
        expect(errorMessage).toBeInTheDocument();
      },
      { timeout: 2000, interval: 200 }
    );
  });

  test("should render TextField component and set invalid value", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId("ip-search-input");

    fireEvent.change(textField, { target: { value: "hello" } });
    fireEvent.blur(textField);

    expect(textField).toHaveValue("hello");

    const errorMessage = screen.queryByText("IP address is invalid");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should render TextField component set invalid value, after clearing it should be default state", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId("ip-search-input");

    fireEvent.change(textField, { target: { value: "hello" } });
    fireEvent.blur(textField);
    fireEvent.change(textField, { target: { value: "" } });
    fireEvent.blur(textField);
    expect(textField).toHaveValue("");

    const errorMessage = screen.queryByText("IP address is invalid");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
