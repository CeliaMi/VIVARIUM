import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import {Parrafos} from "./Paraffos"

describe('Parrafo', () => {
    it('must display a title', () => {
        render(<Parrafos />);
        expect(screen.Parrafos(/parrafo/i)).toBeInTheDocument();
    });
});
