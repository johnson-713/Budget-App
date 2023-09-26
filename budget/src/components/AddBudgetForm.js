import { CurrencyRupeeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Form, useFetcher } from 'react-router-dom';

const AddBudgetForm = () => {
  const fetcher = useFetcher();

  return (
    <div className='form-wrapper'>
      <h2 className='h3'>
        Create budget
      </h2>
      <fetcher.Form
        method='post'
        className='grid-sm'
      >
        <div className='grid-xs'>
            <label htmlFor='newBudget'>Budget Name</label>
            <input 
                type='text' 
                id='newBudget' 
                name='newBudget' 
                placeholder='e.g., Groceries'
                required
            />
        </div>
        <div className='grid-xs'>
            <label htmlFor='newBudgetAmount'>Amount</label>
            <input
                type='number'
                step='0.01'
                name='newBudgetAmount'
                id='newBudgetAmount'
                placeholder='e.g., &#8377; 200'
                required
                inputMode='decimal'
            />
        </div>
        <input
          type='hidden'
          name='_action'
          value="createBudget"
        />
        <button type='submit' className='btn btn-dark'>
            <span>Create budget</span>
            <CurrencyRupeeIcon width={20} />
        </button>
      </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm;
