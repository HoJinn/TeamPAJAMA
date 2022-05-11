import { Box, Typography, TypographyVariant, makeStyles, Grid, GridSize, useTheme, useMediaQuery } from "@material-ui/core";
import { ExpandMoreSharp } from '@material-ui/icons'
import clsx from "clsx";
import React from 'react'
import { LayoutGrade } from "recoilStates/layout";
import { onlyClasse } from 'public/common'
import { RadiusSelect } from "./radiusSelect";
export type RadiusProps =
    | 'rounded'
    | 'noneRound'
    | 'defaultRadius'
    ;

export type optionsProps = {
    value: string, title: string
}
export type defaultProps = {
    labelTextSize?: TypographyVariant,
    radius?: RadiusProps,
    labelTxt: string,
    inputName?: string,
    selectValue?: string,
    handleChange: Function,
    mobileGridSize?: Array<GridSize>,
    pcGridSize?: Array<GridSize>,
    options: Array<optionsProps>
}

const useStyles = makeStyles((theme) => ({
    ...onlyClasse,
    
    
    activeBg: {
        backgroundColor: 'white', border: '1px solid #707070'
    },
  
    label: {
        marginBottom: theme.spacing(2)
    },
    select: {
        '& .MuiSelect-icon': {
            color: theme.palette.primary.main
        }
    }
}))
const SelectLeftLabel = ({ selectValue = "",inputName, handleChange, options, labelTextSize = "body2", labelTxt, mobileGridSize = [12, 12], pcGridSize = [3, 9] }: defaultProps) => {

    const classes = useStyles();
    const optionItem = options.map((info: optionsProps, i: number) => <option className={classes.pointer} key={i} value={info.value}>{info.title}</option>)
    const onChange = (e: React.ChangeEvent<{ name?: string; value: unknown | number }>) => {
        if (handleChange) handleChange(e);
    }
    const theme = useTheme();
    const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.SM));
    const selectSize = mobileFlag?"sm":"lg"
    return (
        <Box width="100%" display="flex" alignItems="center">
            <Grid className={classes.width100} container>
                <Grid className={classes.label} item xs={mobileGridSize[0]} sm={pcGridSize[0]}>
                    <Typography variant={labelTextSize}> {labelTxt}</Typography>
                </Grid>
                <Grid item xs={mobileGridSize[1]} sm={pcGridSize[1]}>
                    <RadiusSelect size={selectSize} fullWidth radius="lg" defaultValue={options[0].value} value={selectValue} onChange={onChange} name={inputName}
                        className={clsx(classes.select, classes.activeBg,)}
                        disableUnderline={true} IconComponent={ExpandMoreSharp}>
                        {optionItem}
                    </RadiusSelect>

                </Grid>
            </Grid>

        </Box>
    )
}
export default SelectLeftLabel;