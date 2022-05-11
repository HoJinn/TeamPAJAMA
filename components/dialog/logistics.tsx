import { Box, Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from "@material-ui/core"
import Swipper from "components/slider/swipper_"
import { FC, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { logisticsShowAtom } from 'recoilStates/dialogs'
// import AspectRatioBox from 'components/shape/aspectRatioBox'
// import Logo from 'assets/logo_logistics_yeonsu.png'
// import Char from 'assets/logo_logistics_char.png'
// import LogiBg from 'assets/bg_logi.jpg'
// import FirstImg from 'assets/img_logistics_vip.png'
// import SecImg from 'assets/img_logistics_bus.png'
import CloseIcon from '@material-ui/icons/Close'
import { NavigateBefore, NavigateNext } from "@material-ui/icons"
import { LayoutGrade } from "recoilStates/layout"


const useLogisticsDialogStyles = makeStyles(theme => ({

  title: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    paddingLeft: theme.spacing(4.5),
    [theme.breakpoints.down(LayoutGrade.XS)]: {
      paddingLeft: theme.spacing(2.5),
    }
  },
  char: {
    marginRight: theme.spacing(2),
    height: "80px",
    [theme.breakpoints.down(LayoutGrade.XS)]: {
      height: "50px"
    }

  },
  logo: {
    height: "66px",
    [theme.breakpoints.down(LayoutGrade.XS)]: {
      height: "40px"
    }
  },
  content: {
    // backgroundImage: `url(${LogiBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // padding:theme.spacing(5),
    color: "black",
    position: 'relative'
  },
  img: {
    cursor: "pointer"
  },
  prevArrow: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 10,
    top: '50%',
    left: "3%"
  },
  nextArrow: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 10,
    top: '50%',
    right: "3%"
  }
}))
const LogisticsDialog: FC = () => {
  const classes = useLogisticsDialogStyles();
  const [show, setShow] = useRecoilState(logisticsShowAtom);
  const [screenFlag, setScreenFlag] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const moveImg = (isNext: boolean) => {
    if (isNext) {
      setIndex(index >= 1 ? 0 : index + 1)
    } else {
      setIndex(index < 1 ? 1 : index - 1)
    }
  }

  useEffect(() => {
    if (!show) {
      setScreenFlag(false);
    }
  }, [show])

  return <Dialog fullScreen={screenFlag}
    open={show} onClose={_ => setShow(false)} scroll="body"
    maxWidth="md"
    fullWidth
  >
    <DialogTitle className={classes.title}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {/* <Box display="flex" alignItems="flex-start">
          <img className={classes.char} height="80px" src={Char} />
          <img className={classes.logo} height="66px" src={Logo} />
        </Box> */}
        <Box>
          <IconButton onClick={_ => setShow(false)}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent className={classes.content} >
      <IconButton className={classes.prevArrow} onClick={_e => moveImg(false)}>
        <NavigateBefore color="inherit" />
      </IconButton>
      <Swipper index={index} auto={false} >
        {/* <AspectRatioBox aspectRatio={0.625} width="100%">
          <img className={classes.img} onClick={_=>window.open(FirstImg)} width="100%" height="100%" src={FirstImg} />
          <Box display="flex" alignItems="center" width="100%" height="100%">
            <img className={classes.img} onClick={_ => setScreenFlag(!screenFlag)} width="100%" src={FirstImg} />
          </Box>
        </AspectRatioBox> */}
        {/* <AspectRatioBox aspectRatio={0.625} width="100%">
          <img className={classes.img} onClick={_=>window.open(SecImg)} src={SecImg} width="100%" height="100%" />
          <Box display="flex" alignItems="center" width="100%" height="100%">
            <img className={classes.img} onClick={_ => setScreenFlag(!screenFlag)} src={SecImg} width="100%"/>
          </Box>
        </AspectRatioBox> */}
      </Swipper>
      <IconButton className={classes.nextArrow} onClick={_e => moveImg(true)}>
        <NavigateNext color="inherit" />
      </IconButton>
    </DialogContent>
  </Dialog>
}

export default LogisticsDialog;