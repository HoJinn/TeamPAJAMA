import { Box, ListItem, ListItemText, IconButton, List } from "@material-ui/core"
import { FC } from 'react'
import { Close } from '@material-ui/icons';
import { useRouter } from "next/dist/client/router";
export type defaultProps = {
  toggleMenu: Function
}
const MenuList: FC<defaultProps> = ({ toggleMenu }) => {
  const router = useRouter();
  // const menuItems = siteMapArr.map((menu:CategoryMenu,i:number)=><CollapseMenuItem key={i} info={menu} />)
  return (
    <List>
      <Box paddingX={0.5} display="flex" justifyContent="flex-end" color="black">
        <IconButton title="닫기버튼" onClick={_e => toggleMenu(false)} color="inherit">
          <Close />
        </IconButton>
      </Box>
      <ListItem button onClick={() => router.push("/notice")}>
        <ListItemText primary="공지사항" />
      </ListItem>

      <ListItem button onClick={() => router.push("/brand")}>
        <ListItemText primary="브랜드 소개" />
      </ListItem>

      <ListItem button onClick={() => router.push("/recipes")}>
        <ListItemText primary="레시피" />
      </ListItem>

      <ListItem button onClick={_=>alert("준비중입니다.")}>
        <ListItemText primary="쇼핑몰" />
      </ListItem>
    </List>

  )
}

export default MenuList;