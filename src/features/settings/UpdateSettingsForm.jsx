import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditSettings } from './useEditSettings';
import useSettings from './useSettings';

function UpdateSettingsForm() {
  const {data:settings,isLoading} = useSettings();
  const {
    minBookingLength,
    maxBookingLength,
    maxguestsPerBooking,
    breakfastPrice
  } = settings || {};

  const {isPending,mutate} = useEditSettings();

  function handleEditing(e,fieldName){
    const {value} = e.target;
    const currentValue = settings?.[fieldName];

    if(value == currentValue ) return
    if(!value) return;
    mutate({[fieldName]:value})
  }

  if(isLoading) return <Spinner/>
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e)=>handleEditing(e,"minBookingLength")} disabled={isPending}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={(e)=>handleEditing(e,"maxBookingLength")} disabled={isPending}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests'  defaultValue={maxguestsPerBooking} onBlur={(e)=>handleEditing(e,"maxguestsPerBooking")} disabled={isPending}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={(e)=>handleEditing(e,"breakfastPrice")} disabled={isPending}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
