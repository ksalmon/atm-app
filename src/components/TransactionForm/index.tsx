import React from "react";
import { useSelector, useDispatch } from "react-redux";
import addTransaction from "actions/transactions/addTransaction";
import { useForm } from "react-hook-form";

interface IFormData {
  withdrawAmount: string;
}

const TransactionForm: React.FC<any> = () => {
  const dispatch = useDispatch();

  const account = useSelector((state: any) => state.account);

  const { register, handleSubmit, errors, setError, reset } = useForm();
  const onHandleSubmit = (data: IFormData) => {
    const withdrawAmount = parseInt(data.withdrawAmount);
    const currentAmmount = parseInt(account.balance);
    const nextAmmount = currentAmmount - withdrawAmount;
    let hasError = false;

    const setFormError = (message: string) => {
      setError("withdrawAmount", { message: message });
      hasError = true;
    };

    if (withdrawAmount <= 0) setFormError("Cannot withdraw this amount");
    if (!(withdrawAmount % 20 === 0))
      setFormError("Withdraw amount must be divisible by 20");
    if (Math.sign(nextAmmount) < 0)
      setFormError(
        "Withdraw amount is greater than the current account balance"
      );

    if (hasError) return;

    reset();
    dispatch(addTransaction({ amount: withdrawAmount, name: "ATM Withdraw" }));
  };

  return (
    <form className="account-form" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="input-container">
        <input
          type="number"
          name="withdrawAmount"
          ref={register({ required: true })}
          placeholder="Enter withdraw amount"
        />
      </div>
      <input type="submit" />

      {errors.withdrawAmount && <div>{errors.withdrawAmount.message}</div>}
    </form>
  );
};

export default TransactionForm;
