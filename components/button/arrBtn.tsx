import { FC } from "react"
import { Box,  ButtonProps, IconButton, makeStyles } from "@material-ui/core"

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useRecoilValue } from "recoil";
import { windowLayoutSelector } from "recoilStates/layout";
interface RadiusButtonProps extends Omit<ButtonProps, 'size'> {
  slideFn:Function
}
const useRadiusButtonStyles = makeStyles(_theme => ({
    buttonWrap: {
        border: '1px solid #DBDBDB',
        backgroundColor:'white'
    },
    buttonWrapMo: {
        border: '1px solid #DBDBDB',
        backgroundColor:'white',
        marginRight:'20px'
    },
    button: {
        borderRadius: 0,
        height:'60px',
        width:'60px'
    },
    buttonMo: {
        borderRadius: 0,
        height:'30px',
        width:'30px'
    }
}))
const ArrBtn: FC<RadiusButtonProps> = ({  slideFn }) => {
    const classes = useRadiusButtonStyles();
    const size = useRecoilValue(windowLayoutSelector)
    const propsSlider=(e: string)=>{
        slideFn(e)
    }
    const mobileClass=size.grade==='xl'?classes.button:classes.buttonMo
    const mobileWrapClass=size.grade==='xl'?classes.buttonWrap:classes.buttonWrapMo
    return (
        <Box className={mobileWrapClass}>
            <IconButton onClick={()=>propsSlider('left')} style={{borderRight:'1px solid #DBDBDB'}} className={mobileClass}><ArrowBackIcon/></IconButton>
            <IconButton onClick={()=>propsSlider('right')} className={mobileClass}><ArrowForwardIcon/></IconButton>
        </Box>
    )
}

export default ArrBtn;