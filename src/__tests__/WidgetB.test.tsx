import React from "react";
import { render, fireEvent, waitFor , screen} from "@testing-library/react";

import {  WidgetBMain} from '../widgets'

describe("Renders WidgetB", () => {


  test("Renders text", async () => {
    render(<WidgetBMain />)
    const text = screen.getByText(/WidgetBMain/i);
    expect(text).toBeInTheDocument();
  });


});