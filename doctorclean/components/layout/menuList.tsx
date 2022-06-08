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
      <ListItem button onClick={() => router.push("/about")}>
        <ListItemText primary="회사 소개" />
      </ListItem>

      <ListItem button onClick={() => router.push("/home")}>
        <ListItemText primary="홈클리닝" />
      </ListItem>

      <ListItem button onClick={() => router.push("/office")}>
        <ListItemText primary="오피스클리닝" />
      </ListItem>

      <ListItem button onClick={() => router.push("/virus")}>
        <ListItemText primary="방역∙소독" />
      </ListItem>
    </List>

  )
}

export default MenuList;