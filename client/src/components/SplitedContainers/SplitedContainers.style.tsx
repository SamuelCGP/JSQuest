import styled from "styled-components";
import ColorPalette from "../../utils/ColorPalette";
import Split from 'react-split'

export const SplitContainer = styled(Split)`
    width: 100%;
    height: calc(100vh - 3.5rem);
    @media (min-width: 900px) {
        height: calc(100vh - 2rem);
    }
`;

export const Container1 = styled.div`
    background-color: lightgray;
`;
export const Container2 = styled.div`
    background-color: gray;
`;