import { Box, Button, IconButton, makeStyles } from "@material-ui/core";
import { onlyClasse } from 'public/common'
import { NavigateNextSharp, FirstPage, LastPage, NavigateBeforeSharp } from '@material-ui/icons'
import { pxToRem } from "src/util";
import PageInfo from "src/entity/PageInfo";

const useStyles = makeStyles((theme) => ({
  ...onlyClasse,
  pageBtn: {
    marginRight: theme.spacing(0),
    minWidth: 'auto',
    // padding: theme.spacing(1),
    fontSize:pxToRem(16),
    color: theme.palette.grey[700],
    cursor: 'pointer',
    width:'40px'

  },
  boxBtn: {
    // border: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'white',
    borderRadius: 0,
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  active: {
    color: '#fff',
    fontWeight:700,
    backgroundColor:theme.palette.primary.main,
    borderRadius:'100px',
    width:'40px'

  }
}))

export type defaultProps = {
  paging?: PageInfo,
  handleClick: Function
}

const pagingItem = ({ handleClick, paging }: defaultProps) => {
  const classes = useStyles()
  let page = [], cPage = 0, isPrevBlock = 1, isNextBlock = 1,
    nextPage = 0, prevPage = 0, isNextPage = 1, isPrevPage = 1,
    nextBlock = 1, prevBlock = 1;
  if (paging&&paging.totalPage>0) {
    isPrevBlock = paging.isPrevBlock; //이전 블럭 유무

    isNextBlock = paging.isNextBlock; //다음 블럭 유무
    nextBlock = paging.endPage + 1; //다음 블럭 페이지

    prevBlock = paging.startPage - 1; //이전 블럭 페이지

    cPage = paging.curPage; //현재 페이지    

    isNextPage = paging.isNextPage;//다음 페이지 유무
    isPrevPage = paging.isPrevPage;//이전 페이지 유무
    nextPage = isNextPage||isNextBlock?cPage + 1:0; //다음 페이지 
    prevPage = isPrevPage||isPrevBlock?cPage - 1:0; //이전 페이지

    for (let i = paging.startPage; i <= paging.endPage; i++) {
      page.push(<Button title="페이지 이동" key={i} onClick={_e => handleClick(i)} className={`${i == cPage ? classes.active : ''} ${classes.pageBtn}`}>{i}</Button>
      )
    }
 
  // const nextArrow = "action";
  // const prevArrow = "action";
  // const nextBlockArrow = "action";
  // const prevBlockArrow = "action";
  const nextArrow = isNextPage||isNextBlock ? "inline-block" : "none";
  const prevArrow = isPrevPage||isPrevBlock ? "inline-block" : "none";
  const nextBlockArrow = isNextBlock ? "inline-block" : "none";
  const prevBlockArrow = isPrevBlock ? "inline-block" : "none";

  const prevBlockPage = isPrevBlock ? prevBlock:0;
  const nextBlockPage = isNextBlock ? nextBlock:0;

  return (
    <Box position="relative" display="flex" alignItems="center" justifyContent="center">
      <Box display="flex" alignItems="center">
        <IconButton style={{display:prevBlockArrow}} title='이전블럭' onClick={_e=>handleClick(prevBlockPage)} className={classes.boxBtn}><FirstPage></FirstPage></IconButton>
        <IconButton style={{display:prevArrow}} title='이전페이지' onClick={_e=>handleClick(prevPage)} className={classes.boxBtn}><NavigateBeforeSharp/></IconButton>
        {page}
        <IconButton style={{display:nextArrow}} title='다음페이지' onClick={_e=>handleClick(nextPage)} className={classes.boxBtn}><NavigateNextSharp/></IconButton>
        <IconButton style={{display:nextBlockArrow}} title='다음블럭' onClick={_e=>handleClick(nextBlockPage)} className={classes.boxBtn}><LastPage/></IconButton>
      </Box>
    </Box>
  ) 
}else return <></>
}
export default pagingItem;