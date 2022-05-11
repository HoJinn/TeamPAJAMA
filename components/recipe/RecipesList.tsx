import { Box, Container,FormControl, Grid, IconButton, InputBase, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { NextPage } from 'next';
import ListSelectBox, { SelectProps } from 'components/bbs/ListSelectBox';
import { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Search } from '@material-ui/icons'
import { defSuccess, NextAxios } from 'src/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { Artworks } from 'recoilStates/artwork';
import PageInfo from 'src/entity/PageInfo';
import RecipeCard from 'components/card/RecipeCard';
import { Menu } from 'recoilStates/menu';

import PageItem from 'components/bbs/pagingItem'
import { RecipeCardBottomItem } from './BestList';
import theme from 'theme/theme';
import { LayoutGrade } from 'recoilStates/layout';

const useStyles = makeStyles((_theme) => ({
  searchWrapper: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'flex-start',
    height: '70px',
    width: '100%',
    flexDirection:'row',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      justifyContent: 'center',
      flexDirection:'column',
    }
  },
  formControl: {
    paddingLeft: theme.spacing(1),
    minWidth: "auto",
    height: '100%',
    width: '100%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      paddingLeft:0,
    }
  },
  input: {
    borderRadius: 0,
    height: '100%',
    backgroundColor: '#F3F3F3',
    width: '100%',
    padding: '0 20px'
  },
  searchBtn: {
    borderRadius: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  icon: {
    color: 'black'
  },
  pagingWrapper: {
    display: 'flex'
  },
  pagingBox: {
    flexGrow: 1
  },
    a: {
    color: "inherit",
    position: "relative",
    textDecoration: "none",
    display:'block',
    "&:focus":{
      outline:'3px solid black',
    }
  }
}));

const RecipesList: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const { cPage, keyword } = router.query;
  const [category, setCategory] = useState<string>("client.recipes");
  const [innerKeyword, setKeyword] = useState<string>(keyword ? keyword as string : "");
  const [listData, setListData] = useState<Array<Artworks>>([]);
  const [menuList, setMenuList] = useState<Array<SelectProps>>([]);
  const [paging, setPaging] = useState<PageInfo | undefined>(undefined)
  const taFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  const selectChange = (value: string) => {
    setCategory(value);
  }

  const innerKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  const keywordChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key == "Enter") {
      if (innerKeyword.length < 1)
        router.push({ pathname: router.pathname })
      else
        router.push({ pathname: router.pathname, query: { keyword: innerKeyword } })
    }
  }

  const searchClick = () => {
    if (innerKeyword.length < 1)
      router.push({ pathname: router.pathname })
    else
      router.push({ pathname: router.pathname, query: { keyword: innerKeyword } })
  }
  // ${process.env.NEXT_PUBLIC_API_URL}/menus/client.recipes}/direct
  useEffect(() => {
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/menus/client.recipes/direct`)
      .then(async (res: AxiosResponse) => {
        const { status, data } = defSuccess<Array<Menu>>(res);
        const temp: Array<SelectProps> = status === 200 && data ? data.map(menu => {
          const obj: SelectProps = { title: menu.title, value: menu.absoluteKey }
          return obj
        }) : [];
        setMenuList(temp)
      }).catch((_err: AxiosError) => {
        setMenuList([])
      })

  }, [router])
  useEffect(() => {
    const tempCategory = category ? category : 'client.recipes'
    NextAxios().get(`${process.env.NEXT_PUBLIC_API_URL}/artworks/${tempCategory}/page`, { params: {menuBranchType:"deep", "title": keyword, detail: 'attachments', curPage: cPage ? cPage : 1, rowPerPage: 9 } })
      // , { params:{[innerSearchType]:keyword,detail:"attachments", menuMetadata: 'notice', curPage: cPage?cPage:1, rowPerPage: 10 } })
      .then(async (res: AxiosResponse) => {
        const { data } = defSuccess(res);
        setListData(data.list)
        setPaging(data.page)
      }).catch((_err: AxiosError) => {
        setListData([]);
        setPaging(undefined)
      })
  }, [category, keyword])

  // const itemClick = (uk: string) => {
  //   router.push(`/recipes/${uk}`)
  // }
  const itemArr = listData && listData.length > 0 ? listData.map((info, i) => <Grid item xs={taFlag ? 12 : 4} key={i} >
    <a href={`/recipes/${info.uk}`} className={classes.a} title="페이지 이동">
      <RecipeCard itemDirection={i === 0 ? "column" : "row"} topTxtColor="primary" topVariant="body1" midTxt={info.title}
        midTxtColor="textPrimary" midVariant="subtitle2" img={info.attachments[0]}>
        <RecipeCardBottomItem difficulty={info.property ? info.property.difficulty : "초급"}
          time={info.property ? info.property.time : "00분"} />
      </RecipeCard>
    </a>
  </Grid>
  )
    : <Grid item xs={12}><Typography style={{textAlign:"center"}} variant="subtitle2">No Data</Typography> </Grid>
  const handlePage = (page: number) => {
    if (page > 0) {
      if (innerKeyword.length < 1) {
        router.push({ pathname: router.pathname, query: { cPage: page } })
      } else {
        router.push({ pathname: router.pathname, query: { cPage: page, keyword: innerKeyword } })
      }
    }
    // if(page>0) router.push({pathname:router.pathname,query:{cPage:page}})
  }

  return (
    <Box>
      <Box textAlign="center">
        <Typography variant="h6" className="times bold">Daon Recipe</Typography>
        <Typography variant='body1' className="medium" color='textSecondary'>다온과 함께 건강한 요리를 만들어보세요.</Typography>
      </Box>
      <Box marginY={7} className={classes.searchWrapper}>
        <ListSelectBox
          values={menuList}
          handleSelect={selectChange}
          defaultV={category}
        />
        <Box display='flex' width='100%' marginTop={taFlag?'10px':'0px'}>
          <label style={{ width: '100%', marginLeft:taFlag?'0px' : '16px' }}>
            <FormControl
              className={classes.formControl}
              variant="outlined" >
              <InputBase
                className={classes.input}
                inputProps={{title:'검색어 입력'}}
                name="keyword"
                value={innerKeyword}
                onKeyUp={keywordChange}
                onChange={innerKeyChange}
                placeholder="검색어 입력"
              // labelWidth={0}
              />
            </FormControl>
          </label>
          <IconButton title="검색버튼" color='primary' onClick={searchClick} className={classes.searchBtn}>
            <Search className={classes.icon} />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={3}>{itemArr}</Grid>
      <Container className={classes.pagingWrapper} >
        <Box className={classes.pagingBox}>
          {paging ? (<PageItem paging={paging} handleClick={handlePage} />) : (null)}
        </Box>
      </Container>
    </Box>
  )
}

export default RecipesList;
