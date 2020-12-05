import React from "react";

import {Container, ToggleLabel, ToggleSelector} from "./styles"

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Dark</ToggleLabel>
        <ToggleSelector
            checked
            uncheckedIcon={false}
            checkedIcon={true}
            onChange={() => console.log("Mudou")}
        />
        <ToggleLabel>Light</ToggleLabel>
    </Container>
)

export default Toggle;