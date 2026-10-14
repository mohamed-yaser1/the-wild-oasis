import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} ,closeModal}) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSessions = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSessions ? editValues : {},
  });
  const { errors } = formState;


  const {isPending,mutate} = useCreateCabin();
  const {editCabin,isEditing} = useEditCabin();
  
  

  const isWorking = isEditing || isPending;
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    console.log(image)

    if (isEditSessions)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            closeModal?.()
          },
        }
      );
    else
      mutate(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            closeModal?.()
          },
        }
      );
  }


  // function onSubmit(data) {
  //   // console.log(data)
  //   const image = typeof data.image === "string" ? data.image : data.image[0];
  //   if (isEditSessions) editCabin({ newCabin: { ...data, image }, id: editId },{
  //     onSuccess:()=>reset()
  //   });

  //   else mutate({ ...data, image: image },{
  //     onSuccess:()=> reset()
  //   });
  // }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="name" error={errors?.name?.message} disabled={isWorking}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "this field is requird",
          })}
        />
      </FormRow>

      <FormRow
        error={errors?.maxCapcity?.message}
        label="Maximum capacity"
        disabled={isWorking}
      >
        <Input
          type="number"
          id="maxCapcity"
          {...register("maxCapcity", {
            required: "this field is requird",
            min: { value: 1, message: "cabacity should be at least one" },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={errors?.regularPrice?.message}
        disabled={isWorking}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "this field is requird",
          })}
        />
      </FormRow>

      <FormRow
        label="Discount"
        error={errors?.discount?.message}
        disabled={isWorking}
      >
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is requird",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should be less than pricr",
          })}
        />
      </FormRow>

      <FormRow
        error={errors?.description?.message}
        label="Description"
        disabled={isWorking}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "this field is requird",
          })}
        />
      </FormRow>

      <FormRow
        label="Capin photo"
        error={errors?.image?.message}
        disabled={isWorking}
      >
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSessions ? false : "this field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" size="medium" type="reset" onClick={()=>closeModal?.()}>
          Cancel
        </Button>
        <Button variation="primary" size="medium" disabled={isPending}>
          {isEditSessions ? "Edit" : "Add Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
