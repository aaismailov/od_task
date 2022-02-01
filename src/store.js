import check from './images/CheckBox.png'

export let Store = function () {

    this.togglePopup = false
    let that = this
    this.tags = {
        paymentTag: {
            background: 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56',
            color: '#FFFFFF'
        },
        termTag: {
            background: '#EEF0F2',
            color: '#000000'
        }
    }
    this.Payments = []

    // Popup open-close
    this.showPopup = function () {
        that.togglePopup = true
        document.querySelector('.App').style.background = 'rgba(0, 0, 0, 0.3)'
    }
    this.closePopup = function () {
        that.Payments = []
        that.togglePopup = false;
        document.querySelector('.App').style.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56'  
    }

    // Tags states
    this.clickTags = function (flagTag) {
        if (flagTag) {
            that.tags.paymentTag.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56'
            that.tags.paymentTag.color = '#FFFFFF'
            that.tags.termTag.background = '#EEF0F2'
            that.tags.termTag.color = '#000000'
        } else {
            that.tags.termTag.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56'
            that.tags.termTag.color = '#FFFFFF'
            that.tags.paymentTag.background = '#EEF0F2'
            that.tags.paymentTag.color = '#000000'
        }
    }
    this.hoverTags = function (flagTag) {
        if (flagTag && that.tags.paymentTag.background == '#EEF0F2')
            that.tags.paymentTag.background = '#DFE3E6';
        else if (!flagTag && that.tags.termTag.background == '#EEF0F2')
            that.tags.termTag.background = '#DFE3E6';
    }
    this.leaveTags = function (flagTag) {
        if (flagTag && that.tags.paymentTag.background == '#DFE3E6')
            that.tags.paymentTag.background = '#EEF0F2';
        else if (!flagTag && that.tags.termTag.background == '#DFE3E6')
            that.tags.termTag.background = '#EEF0F2';
    }

    // Calculating payments
    this.calcPayments = function () {
        let Salary = document.querySelector('.inputSalary').value
        if (Salary != 0 && !isNaN(Salary)) {
            that.Payments = []
            let maxSum = 260000

            while (0 < maxSum) {
                let deduction = Salary * 0.13 * 12

                if (deduction < maxSum) {
                    that.Payments.push({
                        sum: deduction,
                        checkFlag: false,
                        background: ''
                    })
                } else {
                    that.Payments.push({
                        sum: maxSum,
                        checkFlag: false,
                        background: ''
                    })
                }
                maxSum -= deduction
            }

            if (document.querySelector('.errorAlert')) {
                document.querySelector('.salary').removeChild(document.querySelector('.errorAlert'))
                document.querySelector('.inputSalary').style.border = '1px solid #DFE3E6'
            }
        } else {
            if (document.querySelector('.errorAlert'))
                document.querySelector('.salary').removeChild(document.querySelector('.errorAlert'))
            if (!document.querySelector('.errorAlert')) {
                let error = document.createElement('div')
                error.classList.add('errorAlert')
                if (isNaN(Salary)) 
                    error.textContent = 'Данные должны быть числовыми'
                else
                    error.textContent = 'Поле обязательно для заполнения'
                error.style.color = '#EA0029'
                error.style.fontSize = '10px';
                error.style.lineHeight = '12px';
                error.style.fontWeight = 'normal';
                document.querySelector('.salary').insertBefore(error, document.querySelector('.calculate'))
                document.querySelector('.inputSalary').style.border = '1px solid #EA0029'
            }
        }
    }

    // Check click on checkbox
    this.check = function (checkboxId) {
        if (that.Payments[checkboxId].checkFlag) {
            that.Payments[checkboxId].checkFlag = false
            that.Payments[checkboxId].background = ''
            that.Payments[checkboxId].border = '1px solid black'
        } else {
            that.Payments[checkboxId].checkFlag = true
            that.Payments[checkboxId].background = `no-repeat 0 0/20px 20px url(${check})`
            that.Payments[checkboxId].border = '0 solid black'
        }
    }

    // Print chosen payments to console
    this.printConsole = function () {
        that.chosenPayments = []
        let yearNum = 1
        that.Payments.forEach((elem) => {
            if (elem.checkFlag)
                that.chosenPayments.push({
                    sum: elem.sum,
                    year: yearNum
                })
            yearNum += 1
        })
        that.Payments = []
        if (!that.chosenPayments.length)
            console.log('Вы не выбрали выплаты\n')
        else {
            console.log('Выплаты:\n')
            that.chosenPayments.forEach(elem => console.log(`${elem.sum.toLocaleString()} рублей в ${elem.year}-й год`))
        }
    }
}

export let store = new Store()