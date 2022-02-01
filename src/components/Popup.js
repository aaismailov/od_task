import React from 'react';
import { Tags } from "./Tags";
import { observer } from "../index";
import { Payments } from "./Payments";
import '../css/Popup.css';
import close from '../images/Close.png';

export let Popup = (props) => {

    // Min height for window
    let minh = "calc(100vh - 32px)"
    if (window.innerWidth <= 480)
        minh = window.innerHeight - 32 + 'px'
    return (
        <div style={{ minHeight: minh }} className="Popup">

            <div className="titleRow">
                <div className="titleText">
                    Налоговый вычет
                </div>
                <img
                    onClick={() => { props.store.closePopup(); observer() }}
                    width={'40px'}
                    height={'40px'}
                    src={close}
                    alt="close Popup"
                    className="close" />
            </div>

            <div className="explanation">
                Используйте налоговый вычет чтобы погасить ипотеку досрочно.<br />
                Размер налогового вычета составляет не более 13% от своего официального годового дохода.
            </div>

            <div className="salary">
                <div className="inputText">
                    Ваша зарплата в месяц
                </div>
                <input type='text' placeholder={'Введите данные'} className="inputSalary"></input>
                <div onClick={() => { props.store.calcPayments(); observer() }} className="calculate">
                    Рассчитать
                </div>
            </div>

            <Payments clickCheck={props.store.check} paymentsData={props.store.Payments}></Payments>

            <div className="tagsRow">
                <div className="tagsText">
                    Что уменьшаем?
                </div>
                <div className="tagsButtons">
                    <Tags store={props.store} styleProps={`16px;${props.store.tags.paymentTag.background};${props.store.tags.paymentTag.color}`}
                        flagTag={true} text={'Платёж'}></Tags>
                    <Tags store={props.store} styleProps={`;${props.store.tags.termTag.background};${props.store.tags.termTag.color}`}
                        flagTag={false} text={'Срок'}></Tags>
                </div>
            </div>

            <div
                onClick={() => { props.store.printConsole(); props.store.closePopup(); observer() }}
                className="addDeduction">
                Добавить
            </div>

        </div>
    );
}