import React, {useState, FormEventHandler, FormEvent, ChangeEventHandler, ChangeEvent} from 'react';
import { useRouter } from 'next/router';


const CreateBudgetForm = () => {
  const router = useRouter();

const [ budget, setBudget ] = useState({budget:''}) 

const handleChange: ChangeEventHandler = (e: ChangeEvent) => {
  const {name, value} = e.target as typeof e.target & {
    name: string,
    value: string
  };
  setBudget({...budget, [name] : value});
}

const handleSubmit: FormEventHandler = (e: FormEvent) => {
  e.preventDefault();
  router.push({pathname:'/dashboard'});
}

  return (
    <form onSubmit={handleSubmit}>
    <input 
      required
      autoComplete="off"
      placeholder="Weekly budget..."
      type="number"
      name="budget"
      onChange={handleChange} />
    <button type="submit" value="Continue"/>
  </form>
    
  )
}

export default CreateBudgetForm;