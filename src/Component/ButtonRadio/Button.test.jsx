import { render } from '@testing-library/react';
import ButtonRadio from "./ButtonRadio";

test("test Button", ()=>{
    const rendered = render(<ButtonRadio/>);
    expect(rendered).toBeInTheDocument();
})