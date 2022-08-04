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
    background: radial-gradient(${ColorPalette.navyBlue}, rgb(0, 98, 196));
`;
export const Container2 = styled.div`
    background: radial-gradient(rgb(18, 9, 48), ${ColorPalette.black});
`;