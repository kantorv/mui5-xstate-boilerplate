import React from "react";
import { render, fireEvent, waitFor , screen} from "@testing-library/react";

import {HomeMain, WidgetAMain, WidgetBMain} from '../widgets'

describe("Renders WidgetA", () => {


  test("Renders text", async () => {
    render(<WidgetAMain />)
    const text = screen.getByText(/WidgetAMain/i);
    expect(text).toBeInTheDocument();
  });


});