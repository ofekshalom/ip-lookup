import { fireEvent, render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { IpLookup } from "./IpLookup";
import i18n from "../../translations/i18";

describe("IpLookup component", () => {
  test("should render add ip button", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpLookup />
      </I18nextProvider>
    );

    expect(screen.getByText("Add IP")).toBeInTheDocument();
  });

  test("should click on 'add ip' button and render single IpSearchField Component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpLookup />
      </I18nextProvider>
    );

    const button = screen.getByTestId("add-ip-button");

    fireEvent.click(button);

    const ipSearchWrapper = screen.getByTestId("ip-search-wrapper");

    expect(ipSearchWrapper.children).toHaveLength(1);
  });

  test("should click 3 times on 'add ip' button and render 3 IpSearchField Components", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <IpLookup />
      </I18nextProvider>
    );

    const button = screen.getByTestId("add-ip-button");

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const ipSearchWrapper = screen.getByTestId("ip-search-wrapper");

    expect(ipSearchWrapper.children).toHaveLength(3);
  });
});
