import { makeStyles, MenuItem } from "@material-ui/core";
import { RadiusSelect } from "components/input/radiusSelect";
import { FC } from "react";

export type defaultProps = {
  active?: number;
  handleClick?: Function;
  menuArr: Array<arrProps>;

}
export type arrProps = {
  value: any;
  id: any;
}


const useStyles = makeStyles((theme) => ({
  select: {
    textAlign: 'center',
    color: 'white',
    fontWeight:600,
    backgroundColor: '#00449D',
    '& .MuiSelect-icon': {
      color: theme.palette.secondary.main
    }
  },
  tabItem: {
    backgroundColor: "#EAEDF2",
    cursor: 'pointer',
    '&.active': {
      backgroundColor: "#00449D", color: 'white'
    }
  }
}))

const SelectMenu: FC<defaultProps> = ({ active = 0, handleClick, menuArr }) => {
  const classes = useStyles();
  const onChange = (e: React.ChangeEvent<{ name?: string; value: unknown | string }>)=>{
    if (handleClick) handleClick(e.target.value);
  }
  const selectItem = menuArr.map((info: arrProps, i: number) => <MenuItem key={i} value={i}>
    {info.value}
  </MenuItem>);
  return (
    <RadiusSelect size="sm" onChange={onChange} value={active} className={classes.select} radius="sm" 
    fullWidth>
      {selectItem}
    </RadiusSelect>
  );
}


export default SelectMenu;