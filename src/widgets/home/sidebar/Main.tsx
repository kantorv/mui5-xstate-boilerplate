
import ControlsWrapper from "../../../components/controls/common/ControlsWrapper"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box } from "@mui/material"


export const Main = (props:{
    changeWidget:(name:string)=>void
}) => {
    const {changeWidget}  = props
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
                title="WidgetA"
                subheader="Subheader string"
                icon={<AcUnitIcon />}
                expanded={false}
                expand={() => changeWidget('widgeta')}
            ></ControlsWrapper>

            <ControlsWrapper
                title="WidgetB"
                subheader="Subheader string"
                icon={<AcUnitIcon />}
                expanded={false}
                expand={() => changeWidget('widgetb')}
            ></ControlsWrapper>
        </Box>
    )
}

