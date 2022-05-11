
import { makeStyles } from "@material-ui/core"
import {onlyClasse} from 'public/common'

const useStyles = makeStyles((_theme) =>
({
  ...onlyClasse,
 hotelCard:{
   verticalAlign:'top'
 }
}));

export default useStyles;