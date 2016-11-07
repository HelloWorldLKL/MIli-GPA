var colClassName = document.querySelector('#col-class-name');
var colPoint = document.querySelector('#col-point');
var colCredit = document.querySelector('#col-credit');
var calculateBtn = document.querySelector('#calculate-btn');
var addNewBtn = document.querySelector('#add-new-btn');
var deleteBtn = document.querySelector('#delete-a-btn');
var resetBtn = document.querySelector('#reset-btn');
var questionBtn = document.querySelector('#question-btn');
var connectBtn = document.querySelector('#connect-with-me');
var answerModel = document.querySelector('#calculateAnswer .modal-body p');
var titleModel = document.querySelector('#calculateAnswer .modal-title');
window.onload = function() {
    addNewBtn.addEventListener('click', addNewItem, false);
    deleteBtn.addEventListener('click', removeItem, false);
    resetBtn.addEventListener('click', resetItem, false);
    questionBtn.addEventListener('click', questionAnswerModel, false);
    calculateBtn.addEventListener('click', calculateGPA, false);
    connectBtn.addEventListener('click', connectWithMeModel, false);
    colPoint.addEventListener('focusout', testPointInput, false);
    colCredit.addEventListener('focusout', testCreditInput, false);
}

function addNewItem() {
    event.preventDefault();
    if (deleteBtn.hasAttribute('disabled')) {
        deleteBtn.removeAttribute('disabled');
    }
    var item1Str = colClassName.lastElementChild.firstElementChild.placeholder.substr(-1, 1);
    var item1 = document.createElement('div');
    item1.className = 'form-group has-feedback';
    item1.innerHTML = '<input type="text" class="form-control input-sm"' + 'placeholder="&#x8BFE;&#x7A0B;' + (parseInt(item1Str) + 1) + '">';
    var item2 = document.createElement('div');
    item2.className = 'form-group has-feedback';
    item2.innerHTML = '<input type="text" class="form-control input-sm"><span></span>';
    var item3 = document.createElement('div');
    item3.className = 'form-group has-feedback';
    item3.innerHTML = '<input type="text" class="form-control input-sm"><span></span>';
    colClassName.appendChild(item1);
    colPoint.appendChild(item2);
    colCredit.appendChild(item3);
}

function removeItem(event) {
    event.preventDefault();
    colClassName.removeChild(colClassName.lastElementChild);
    colPoint.removeChild(colPoint.lastElementChild);
    colCredit.removeChild(colCredit.lastElementChild);
    if (colClassName.children.length === 1) {
        deleteBtn.disabled = 'disabled';
    }
}

function resetItem(event) {
    var pointDomArr = document.querySelectorAll('#col-point input');
    var creditDomArr = document.querySelectorAll('#col-credit input');
    for (var i = 0; i < colClassName.children.length; i++) {
        pointDomArr[i].parentElement.className = 'form-group has-feedback';
        pointDomArr[i].parentElement.lastElementChild.className = '';
        creditDomArr[i].parentElement.className = 'form-group has-feedback';
        creditDomArr[i].parentElement.lastElementChild.className = '';

    }
}

function getGpaFromPoint(point) {
    var gpa = 0;
    switch (true) {
        case (point <= 100) && (point >= 90):
            gpa = 4;
            break;
        case (point < 90) && (point >= 85):
            gpa = 3.7;
            break;
        case (point < 85) && (point >= 82):
            gpa = 3.3;
            break;
        case (point < 82) && (point >= 78):
            gpa = 3;
            break;
        case (point < 78) && (point >= 75):
            gpa = 2.7;
            break;
        case (point < 75) && (point >= 72):
            gpa = 2.3;
            break;
        case (point < 72) && (point >= 68):
            gpa = 2;
            break;
        case (point < 68) && (point >= 66):
            gpa = 1.7;
            break;
        case (point < 66) && (point >= 64):
            gpa = 1.5;
            break;
        case (point < 64) && (point >= 60):
            gpa = 1;
            break;
        case (point < 60) && (point >= 0):
            gpa = 0;
            break;
        default:
            gpa = -1;
            break;
    }
    return gpa;
}

function testPointInput(event) {
    var e = arguments[0] || window.event,
        target = e.srcElement ? e.srcElement : e.target;
    //在这里是实际绑定的事件
    if (target.nodeName == "INPUT") {
        if (isNaN(parseInt(target.value)) || target.value < 0 || target.value > 100) {
            target.parentElement.className = 'form-group has-error has-feedback';
            target.parentElement.lastElementChild.className = 'glyphicon glyphicon-remove form-control-feedback';
        } else {
            target.parentElement.className = 'form-group has-feedback';
            target.parentElement.lastElementChild.className = '';
        }
    }
}

function testCreditInput(event) {
    var e = arguments[0] || window.event,
        target = e.srcElement ? e.srcElement : e.target;
    //在这里是实际绑定的事件
    if (target.nodeName == "INPUT") {
        if (isNaN(parseInt(target.value)) || target.value < 0 || target.value > 10) {
            target.parentElement.className = 'form-group has-error has-feedback';
            target.parentElement.lastElementChild.className = 'glyphicon glyphicon-remove form-control-feedback';
        } else {
            target.parentElement.className = 'form-group has-feedback';
            target.parentElement.lastElementChild.className = '';
        }
    }
}

function getCreditArr() {
    var creditInput = document.querySelectorAll('#col-credit input');
    var arr = [];
    for (var i = 0; i < creditInput.length; i++) {
        if (creditInput[i].value === '') {
            arr.push(undefined);
        } else {
            arr.push(parseInt(creditInput[i].value, 10));
        }
    }
    return arr;
}

function getPointArr() {
    var pointInput = document.querySelectorAll('#col-point input');
    var arr = [];
    for (var i = 0; i < pointInput.length; i++) {
        if (pointInput[i].value === '') {
            arr.push(undefined);
        } else {
            arr.push(parseInt(pointInput[i].value, 10));
        }
    }
    return arr;

}

function calculateGPA(event) {
    event.preventDefault();
    var i = 0;
    var flag = 1;
    var up = 0;
    var down = 0;
    var pointArr = getPointArr();
    var creditArr = getCreditArr();
    for (i = 0; i < colClassName.children.length; i++) {
        if(pointArr[i]==undefined && creditArr[i]==undefined){
            continue;
        }
        if (colPoint.children[i].className.indexOf('has-error') !== -1 || colCredit.children[i].className.indexOf('has-error') !== -1) {
            flag = 0;
            break;
        }
        up += (getGpaFromPoint(pointArr[i]) * creditArr[i]);
        down += creditArr[i];
    }
    if (flag == 0 || isNaN(((up / down).toFixed(2)))) {
        titleModel.innerHTML = '查询失败';
        answerModel.innerHTML = '请检查您的数据的有效性';
    } else {
        titleModel.innerHTML = '查询成功';
        answerModel.innerHTML = '您的平均学分绩点为' + ((up / down).toFixed(2));
    }
    $('#calculateAnswer').modal('show');
}

function questionAnswerModel(event) {
    event.preventDefault();
    $('#questionAnswer').modal('show');
}

function connectWithMeModel(event) {
    event.preventDefault();
    $('#connectAnswer').modal('show');
}
