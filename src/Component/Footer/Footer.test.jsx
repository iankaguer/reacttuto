import Footer from "./Footer";
import { render } from '@testing-library/react';

test("test Footer", ()=>{
    const rendered = render(<Footer/>);
    expect(rendered).toBeInTheDocument();
})