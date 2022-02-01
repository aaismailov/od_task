import React from 'react';
import { observer } from "../index";
import '../css/Payments.css'

export let Payments = (props) => {

    if (!props.paymentsData.length)
        return (
            <div className="payments" />
        );
    else {
        let divPayments = []
        for (let i = 0; i < props.paymentsData.length; i++) {
            divPayments.push(
                <div className="payment" key={i + 1}>
                    <div className="checkbox">
                        <div onClick={() => { props.clickCheck(i); observer() }} style={{ background: props.paymentsData[i].background }} className="checkboxChoose"></div>
                        <div className="checkboxSum">{props.paymentsData[i].sum.toLocaleString()} рублей</div>
                        <div className="checkboxYear"> в {i + 1}-й год</div>
                    </div>
                    <div className="marginRect">
                        <svg className="paymentRect">
                            <rect></rect>
                        </svg>
                    </div>
                </div>
            )
        }
        return (
            <div className="payments">
                <div className="paymentText">
                    Итого можете внести в качестве досрочных:
                </div>
                <div>{divPayments}</div>
            </div>
        );
    }
}