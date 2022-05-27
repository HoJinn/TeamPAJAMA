import { List, ListItem, ListItemText, Collapse, makeStyles } from "@material-ui/core"
import { FC, useState } from 'react'
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { CategoryMenu, SubCategoryMenu } from "recoilStates/comm";

export type defaultProps = {
  info: CategoryMenu;
}


const useStyles = makeStyles((theme) => ({

  subMenu: {
    paddingLeft: theme.spacing(4),
    backgroundColor: "transparent"

  },
  colorFFF: {
    color: '#fff'
  },
  subColor: {
    // color: '#D5D5D5'
    
    
    fontSize:theme.typography.subtitle2.fontSize,
    color: 'black',
    '& span':{
      fontWeight:400
    }
    
  },
  mainTitle:{
    fontSize:theme.typography.subtitle1.fontSize,
  },
  subWrapper:{
    backgroundColor:"#f5f5f5"
  },
  activeColor: {
    color: theme.palette.secondary.main
  }
}))
  ;

const CollapseMenuItem: FC<defaultProps> = ({ info }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  
  const subMenus = info.sub.map((subMenu: SubCategoryMenu, i: number) => <ListItem key={i} button className={classes.subMenu}>
    <ListItemText className={classes.subColor} primary={subMenu.title} />
  </ListItem>)
  return (<>
    <ListItem button onClick={() => setOpen(!open)}>
      <ListItemText className={classes.mainTitle}  primary={info.title} />
      {open ? <ExpandLess/> : <ExpandMore/>}
    </ListItem>
    <Collapse className={classes.subWrapper} in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {subMenus}
      </List>
    </Collapse>
  </>

  )
}

export default CollapseMenuItem;