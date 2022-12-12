import { useForm } from "react-hook-form";
import useAppContext from "../hooks/useAppContext";

const SignUp = () => {
  const { state } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("state", state);

  const onSubmit = (data) => console.log("data", data);

  return (
    <div>
      <h1>SignUp page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("example", { required: true })} />
        {errors.example && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
