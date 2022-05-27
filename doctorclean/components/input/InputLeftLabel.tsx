import { Box, Typography, TypographyVariant, makeStyles, Grid, GridSize, useTheme, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import React from 'react'
import { LayoutGrade } from "recoilStates/layout";
import { onlyClasse } from 'public/common'
import RadiusInput from "./radiusInput";
export type RadiusProps =
    | 'rounded'
    | 'noneRound'
    | 'defaultRadius'
    ;

export type defaultProps = {
    labelTextSize?: TypographyVariant,
    readOnlyFlag?: Boolean,
    radius?: RadiusProps,
    labelTxt: string,
    inputTxt?: string,
    inputName?: string,
    mobileGridSize?: Array<GridSize>,
    pcGridSize?: Array<GridSize>,
    handleChange?: Function
}

const useStyles = makeStyles((theme) => ({
    ...onlyClasse,
    width80: {
        width: '80%'
    },
    textFiled: {
        border: 0,
        backgroundColor: '#F3F3F3',
        borderRadius: '20px', padding: 0
    },
    input: {
        padding: theme.spacing(2), height: 'auto'
    },
    activeBg: {
        backgroundColor: 'white', border: '1px solid #707070'
    },
    defaultRadius: {
        borderRadius: '8px'
    },
    noneRound: {
        borderRadius: '0'
    },
    rounded: {
        borderRadius: '100px'
    },
    label: {
        marginBottom: theme.spacing(2)
    }
}))
const InputLefrtLabel = ({ radius = "defaultRadius", labelTextSize = "body2", handleChange, inputName = 'temp', labelTxt, mobileGridSize = [12, 12], pcGridSize = [3, 9], inputTxt, readOnlyFlag = false }: defaultProps) => {

    const classes = useStyles();
    const readFlag = readOnlyFlag ? true : false
    const theme = useTheme();
    const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.SM));
    const inputSize= mobileFlag?"sm":"lg"

    const radiusClass = classes[radius];
    const inputActiveBg = !readOnlyFlag ? classes.activeBg : ""
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (handleChange) {
            handleChange(e)
        }
    }
    return (
        <Box width="100%" display="flex" alignItems="center">
            <Grid className={classes.width100} container>
                <Grid className={classes.label} item xs={mobileGridSize[0]} sm={pcGridSize[0]}>
                    <Typography variant={labelTextSize}> {labelTxt}</Typography>
                </Grid>
                <Grid item xs={mobileGridSize[1]} sm={pcGridSize[1]}>
                    <RadiusInput value={inputTxt ? inputTxt : ''} onChange={inputChange} name={inputName} fullWidth={true}
                        inputProps={{  className: clsx(radiusClass, inputActiveBg, classes.textFiled), readOnly: readFlag}}
                        size={inputSize} radius="lg"></RadiusInput>
                    {/* <TextField value={inputTxt ? inputTxt : ''} onChange={inputChange} name={inputName} className={classes.width100}
                        InputProps={{ disableUnderline: true, className: clsx(radiusClass, inputActiveBg, classes.textFiled), readOnly: readFlag }}
                        inputProps={{ className: classes.input }}/> */}
                </Grid>
            </Grid>
        </Box>
    )
}
export default InputLefrtLabel;