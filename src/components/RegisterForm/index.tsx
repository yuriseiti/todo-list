import { TextField } from "@mui/material";
import { RegisterFormContainer, InputContainer, SubmitButton } from "./styles";
import { useForm } from "react-hook-form";

//Define the type of the form inputs
type RegisterFormInputs = {
  email: string;
  password: string;
};

export default function RegisterForm() {
  //Create a form with react-hook-form
  const form = useForm<RegisterFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //Extract the register, handleSubmit and formState from the form
  const { register, handleSubmit, formState } = form;

  //Extract the errors from the formState
  const { errors } = formState;

  //Define the onSubmit function
  function onSubmit(data: RegisterFormInputs) {
    console.log(data);
  }

  return (
    <RegisterFormContainer>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputContainer>
          <TextField
            variant="outlined"
            required
            label="Email"
            type="email"
            {...register("email", { required: "Digite um email" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            {...register("password", { required: "Digite uma senha" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <SubmitButton>Submit</SubmitButton>
        </InputContainer>
      </form>
    </RegisterFormContainer>
  );
}
