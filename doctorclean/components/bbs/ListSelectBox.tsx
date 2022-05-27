import React from 'react'
import { makeStyles } from "@material-ui/core"
import theme from 'theme/theme';
import { LayoutGrade } from 'recoilStates/layout';

const useStyles = makeStyles((_theme) =>
({
  selectWrapper: {
    textAlign: 'left',
    borderRadius: 0,
    height: '100%',
    backgroundColor: '#F3F3F3',
    width: '400px',
    border:'none',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: '100%',
    }
  },
  formControl: {
    width: '400px',
    height: '100%', minWidth: 'auto',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: '100%',
    }
  },
  option: {

  },
  noneBorder:{
    border:'none'
  },
  root:{
    '& .MuiSelect-outlined':{
      border:'none',outline: 'none'
    }
  }
}))
  ;

export type SelectProps = {
  title: string, value: string
}
type SelectBoxProps = {
  values: Array<SelectProps>,
  defaultV: string,
  handleSelect: Function
}

const selectArr = [{ title: "제목", value: "title" }, { title: "작성자", value: 'writer' }];

const ListSelectBox = ({ handleSelect,values=selectArr, defaultV }: SelectBoxProps) => {

  const classes = useStyles();
  const selectChange = (e: any) => {
    handleSelect(e.target.value);
  }
  
  const arr = [
    <option key="-" className={classes.option} value="">
      전체
    </option>,
    values.map((select: SelectProps, i: number) => 
      <option key={i} className={classes.option} value={select.value}>
        {select.title}
      </option>
    )
  ]
  let inputSize = theme.typography.body2
  const defaultVal=defaultV?defaultV:values[0]?values[0].value:"";
  // const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (
      <select
          title="검색 카테고리 선택"
          // onClick={_=>setOpen(!open)}
          // onClose={_=>setOpen(false)}
          onChange={e => selectChange(e)}
          // SelectDisplayProps={}
          // SelectDisplayProps={{ style: { fontSize: inputSize.fontSize } }}
          style={{ fontSize: inputSize.fontSize } }
          defaultValue={defaultVal}
          // inputProps={{title:title}}
          className={classes.selectWrapper}
        // displayEmpty
        >
          {arr}
        </select>
    // <label style={{ padding: 0, width: taFlag ? '100%' : '400px' }}>
    //   <FormControl variant="outlined"
    //     className={classes.formControl}>
    //     <Select
    //       title="검색 카테고리 선택"
    //       // labelId="demo-simple-select-placeholder-label-label"
    //       // id="demo-simple-select-placeholder-label"
    //       inputProps={{ style: { padding: 0 } }}
    //       onChange={e => selectChange(e)}
    //       // SelectDisplayProps={}
    //       variant='filled'
    //       disableUnderline
    //       SelectDisplayProps={{ style: { padding: "16px 24px", fontSize: inputSize.fontSize } }}
    //       value={defaultVal}
    //       className={classes.selectWrapper}
    //     // displayEmpty
    //     >
    //       <MenuItem className={classes.option} value="client.recipes">
    //         전체보기
    //       </MenuItem>
    //       {arr}
    //     </Select>
    //   </FormControl>
    // </label>
  )
}

export default ListSelectBox;