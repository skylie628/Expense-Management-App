import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData  = {...newExpenseData,id : Math.random().toString()}
        props.onAddNewExpense(expenseData)
    }
    return (
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    )

}
export default NewExpense