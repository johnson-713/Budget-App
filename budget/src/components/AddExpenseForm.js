import React, { useRef } from 'react';
import { useFetcher } from 'react-router-dom';

const AddExpenseForm = ({budgets}) => {
    const fetcher = useFetcher();
    const formRef = useRef();
    const focusRef = useRef();

  return (
    <div className='form-wrapper'>
      <h2 className='h3'>
        Add new {" "} <span className='accent'>
            {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>
        {" "} Expense
      </h2>
      <fetcher.Form 
        method='post'
        className='grid-sm'
        ref={formRef}
        >
        <div className='expense-inputs'>
            <div className='grid-xs'>
                <label htmlFor='newExpense'>Expense</label>
                <input
                    type='text'
                    name='newExpense'
                    id='newExpense'
                    placeholder='e.g., Coffee'
                    ref={focusRef}
                    required
                />
            </div>
            <div className='grid-xs'>
                <label htmlFor='newExpenseAmount'>Amount</label>
                <input
                    type='number'
                    step='0.01'
                    inputMode='decimal'
                    name='newExpenseAmount'
                    id='newExpenseAmount'
                    placeholder='e.g., &#8377; 500'
                    required
                />
            </div>
        </div>
      </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm;
