import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18n from "../../../translations/i18";
import { IpSearchField } from "./IpSearchField";
import {
  COUNTRY_CLOCK_TYPOGRAPHY_TEST_ID,
  COUNTRY_FLAG_IMAGE_TEST_ID,
  IP_SEARCH_INPUT_TEST_ID,
} from "../../../utils/data-test-ids";

describe("IpSearchField component", () => {
  test("should render TextField component and set value", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId(IP_SEARCH_INPUT_TEST_ID);

    fireEvent.change(textField, { target: { value: "255.255.255.255" } });

    expect(textField).toHaveValue("255.255.255.255");
  });

  test("should render TextField component and set valid value, the flag and local time will appear", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpSearchField index={1} />
      </I18nextProvider>
    );

    const textField = screen.getByTestId(IP_SEARCH_INPUT_TEST_ID);

    fireEvent.change(textField, { target: { value: "12.12.12.12" } });
    fireEvent.blur(textField);

    expect(textField).toHaveValue("12.12.12.12");

    await waitFor(
      () => {
        const countryFlagImage = screen.getByTestId(COUNTRY_FLAG_IMAGE_TEST_ID);
        const countryLocalTime = screen.getByTestId(
          COUNTRY_CLOCK_TYPOGRAPHY_TEST_ID
        );

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

    const textField = screen.getByTestId(IP_SEARCH_INPUT_TEST_ID);

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

    const textField = screen.getByTestId(IP_SEARCH_INPUT_TEST_ID);

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

    const textField = screen.getByTestId(IP_SEARCH_INPUT_TEST_ID);

    fireEvent.change(textField, { target: { value: "hello" } });
    fireEvent.blur(textField);
    fireEvent.change(textField, { target: { value: "" } });
    fireEvent.blur(textField);
    expect(textField).toHaveValue("");

    const errorMessage = screen.queryByText("IP address is invalid");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
