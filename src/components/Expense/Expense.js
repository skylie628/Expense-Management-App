import './Expense.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'
import { useState } from 'react'
const Expense = (props) => {
   const [filterYear,setFilterYear]= useState('2020')
   const handleChangeExpenseFilter = (chosenYear) =>{
    setFilterYear(chosenYear)
   }
   const filterExpenseList = props.items.filter( expense => expense.date.getFullYear() == filterYear )
return (
    <Card className = 'expenses'>
      <ExpenseChart expenses = {filterExpenseList}/>
      <ExpenseFilter selectedValue = {filterYear} handleExpenseFilter = {handleChangeExpenseFilter}></ExpenseFilter>
      <ExpenseList items = {filterExpenseList}/>
    </Card>);

}

export default Expense