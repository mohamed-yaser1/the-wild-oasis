import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
// import Spinner from "../../ui/Spinner";
import { useLogin } from "./useLogin";

function LoginForm() {
  
  const [email, setEmail] = useState("mo@gmail.com");
  const [password, setPassword] = useState("123456789");
  const {login,isPending} = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login({email,password},{
      onSettled:()=>{
        setPassword("");
        setEmail("");
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit} >
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isPending}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isPending}
        />
      </FormRow>
      <FormRow>
        <Button size="large" variation="primary">Log In</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
