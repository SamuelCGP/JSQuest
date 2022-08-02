import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Container } from "../../components/Global";

export const MainContainer = styled(Container)`
    margin: 0;
    padding: 0;
    @media (min-width: 900px) {
        margin-left: 5rem;
        padding: 1rem;
    }
`;

export const ResizableContainer = styled.div`
    background: radial-gradient(#16174e, #03042c);
    width: 100%;
    height: calc(50vh - 3.5rem);
    @media (min-width: 900px) {
        width: 100%;
        height: calc(50vh - 1rem);
        max-height: calc(50vh - 1rem);
        min-height: 20vh;
        resize: vertical;
        overflow: auto;
    }
    &::-webkit-resizer{
        display: block;
        background-color: ${ColorPalette.navyBlue};
        width: 5rem;
    }
`;