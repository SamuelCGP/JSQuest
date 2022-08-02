import ColorPalette from "../../utils/ColorPalette";
import styled from "styled-components";
import { Container } from "../../components";

export const MainContainer = styled(Container)`
    margin: 0;
    padding: 0;
    width: 100%;
    @media (min-width: 900px) {
        margin-left: 5rem;
        padding: 1rem;
        display: flex;
        
    }
`;