import './ExpenseForm.css'
import { useState } from 'react'
const ExpenseForm = (props) => {
    const [getTitle,setTitle] =  useState('')
    const [getAmount,setAmount] =  useState('')
    const [getDate,setDate] =  useState('')
    const titleChangeHandler = (event) =>{
        setTitle(event.target.value)
        console.log(getTitle)
    } 
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.onSaveExpenseData({
            title : getTitle,
            amount : getAmount,
            date: getDate
        })
    }
    return (
<form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={getTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={getAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={getDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
    )
}
export default ExpenseForm
