
import ControlsWrapper from "../../../components/controls/common/ControlsWrapper"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box } from "@mui/material"


export const Main = () => {

    return (
        <Box>
            <ControlsWrapper
                title="Menu Item1"
                subheader="Subheader string"
                icon={<AcUnitIcon />}
                expanded={false}
                expand={() => { }}
            ></ControlsWrapper>

            <ControlsWrapper
                title="Menu Item2"
                subheader="Subheader string"
                icon={<AcUnitIcon />}
                expanded={false}
                expand={() => { }}
            ></ControlsWrapper>

            <ControlsWrapper
                title="Menu Item3"
                subheader="Subheader string"
                icon={<AcUnitIcon />}
                expanded={false}
                expand={() => { }}
            ></ControlsWrapper>
        </Box>
    )
}

