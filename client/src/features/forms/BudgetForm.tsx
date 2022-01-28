export default function BudgetForm() {
  return (
    <form>
      <label htmlFor=''>Enter Amount</label>
      <input className='spend' type='text' />
      <label htmlFor=''>Select Account</label>
      <input className='account' type='text' />
    </form>
  );
}
