import { Box, Button, Grid, makeStyles, MenuItem, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { FC } from "react";
import { LayoutGrade } from "recoilStates/layout";
import { RadiusSelect } from "components/input/radiusSelect";

export type defaultProps = {
  active?: number | string;
  handleClick?: Function;
  menuArr: Array<arrProps>;

}
export type arrProps = {
  value: any;
  id: any;
}


const useStyles = makeStyles((theme) => ({
  tabItem: {
    backgroundColor: "#EAEDF2",
    cursor: 'pointer',
    '&.active': {
      backgroundColor: theme.palette.primary.main, 
      color: '#fff'
    }
  },
  select: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main, 
    '& .MuiSelect-icon': {
      color: "white"
    }
  },
  option: {
    padding: '10px 5px',
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: 'white'
    }
  }
}))

const TabMenu: FC<defaultProps> = ({ active = 0, handleClick, menuArr }) => {
  const classes = useStyles();
  const itemClick = (index: number) => {
    if (handleClick) handleClick(index);
  }
  const onChange = (e: React.ChangeEvent<{ name?: string; value: unknown | string }>) => {
    if (handleClick) handleClick(e.target.value);
  }
  const theme = useTheme();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  const tabItem = menuArr.map((info: arrProps, i: number) => <Grid key={i} xs item style={{ marginRight: i === menuArr.length - 1 ? 0 : '5px' }}>
    <Box onClick={_e => itemClick(info.id)} textAlign="center" height={'80px'} alignItems="center" display="flex" justifyContent="center"
      className={`${i == active ? "active" : ""} ${classes.tabItem}`}>
      <Button title="영역이동" fullWidth style={{height:'80px'}}><Typography className={i == active ? "bold" : ""} style={{ whiteSpace: 'pre-line',color:i == active ? "#fff" : "#000" }} variant="body1">{info.value}</Typography></Button>
    </Box>
  </Grid>);

  const selectItem = menuArr.map((info: arrProps, i: number) => <MenuItem className={classes.option} key={i} value={i}>
    {info.value}
  </MenuItem>);

  return mobileFlag ? (<RadiusSelect size="sm" onChange={onChange} value={active} className={classes.select} radius="none"

    fullWidth>
    {selectItem}
  </RadiusSelect>) : (
    <Grid container>
      {tabItem}
    </Grid>
  );
}


export default TabMenu;