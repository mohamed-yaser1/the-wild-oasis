import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {

  const {signUp,isPending} = useSignUp()
  const { register, formState:{errors} , getValues ,handleSubmit , reset} = useForm();

  function onSubmit({fullName,email,password}){
    signUp({fullName,email,password},{
      onSettled:()=>{
        reset();
      }
    })
    // console.log(data);
  }
  
  if(errors) console.log(errors)
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "this field is required" })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", { required: "this field is required" ,pattern:{
            value:/\S+@\S+\.\S+/,
            message:"enter a valid email"
          }})}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", { required: "this field is required",minLength:{
            value:8,
            message:"password must be at least 8 chars"
          } })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", { required: "this field is required" , validate:(value)=>{
            return value === getValues().password || "passwords need to be matched"
          }})}
          disabled={isPending}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" size="medium">
          Cancel
        </Button>
        <Button variation="primary" size="medium" disabled={isPending}>
          Create new user
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
