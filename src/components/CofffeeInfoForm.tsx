import { Button, FormControl, TextField } from "@mui/material";
import { ComponentProps } from "react";
import { Control, Controller, FieldError, useForm } from "react-hook-form";
import { CoffeeInfoProps } from "../CoffeeInfoProps";


export function CoffeeInfoForm() {
  const { handleSubmit, control } = useForm<CoffeeInfoProps>();
  const onValid = (data: CoffeeInfoProps) => console.log(data);
  const onSubmit = handleSubmit(onValid, (errors) => console.log(errors));

  return (
    <FormControl component="form" onSubmit={onSubmit}>
      <CoffeePropertyTextField name="name" label="Název" control={control} />
      <CoffeePropertyTextField name="country" label="Země" control={control} />
      <CoffeePropertyTextField
        name="taste1"
        label="Chuťový profil 1"
        control={control}
      />
      <CoffeePropertyTextField
        name="taste2"
        label="Chuťový profil 2"
        control={control}
      />
      <CoffeePropertyTextField
        name="taste3"
        label="Chuťový profil 3"
        control={control}
      />
      <CoffeePropertyTextField name="farmer" label="Farmer" control={control} />
      <CoffeePropertyTextField
        name="location"
        label="Lokace"
        control={control}
      />
      <CoffeePropertyTextField
        name="sea_height_min"
        label="Výška nad mořem (od)"
        control={control}
      />
      <CoffeePropertyTextField
        name="sea_height_max"
        label="Výška nad mořem (do)"
        control={control}
      />
      <CoffeePropertyTextField
        name="variety"
        label="Odrůda"
        control={control}
      />
      <CoffeePropertyTextField
        name="process"
        label="Zpracování"
        control={control}
      />
      <CoffeePropertyTextField name="score" label="Skóre" control={control} />

      <Button type="submit" variant="contained">
        Ukázat
      </Button>
    </FormControl>
  );
}

type RegisterFormTextFieldProps = {
  name: keyof CoffeeInfoProps;
  label: string;
  error?: FieldError | Partial<FieldError> | undefined;
  control: Control<CoffeeInfoProps>;
} & Omit<ComponentProps<typeof TextField>, "error">;

function CoffeePropertyTextField(props: RegisterFormTextFieldProps) {
  const { name, label, error, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...rest}
          error={error ? true : false}
          helperText={error?.message as string}
          label={label}
          variant="filled"
          data-cy={"register-" + name}
        />
      )}
    />
  );
}
