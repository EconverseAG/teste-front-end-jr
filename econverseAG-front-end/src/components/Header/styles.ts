import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderBar = styled.header`
    height: 144px;
    max-height: 100%;
`

export const HeaderShip = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 6px 0 6px 0;
    border-bottom: 1px solid ${cores.brancoLinha};

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    p {
        font-size: 12px;
        font-family: Poppins;
        font-weight: 500;
        line-height: 18px;
        color: ${cores.cinzaClaro};
    }

    span {
        color: ${cores.roxoEscuro};
        font-weight: 600;
        }
`

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    
`