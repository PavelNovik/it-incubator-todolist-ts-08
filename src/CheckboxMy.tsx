import React, {ChangeEvent, FC} from 'react';
import {Checkbox} from "@mui/material";

type CheckboxType = {
    checked: boolean
    onChange: (isDone: boolean) => void
}
export const CheckboxMy: FC<CheckboxType> = (props) => {

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.checked)

   }
    return (
        <>
            <Checkbox
                checked={props.checked}
                color="primary"
                onChange={onChangeHandler}
            />
        </>
    );
};

