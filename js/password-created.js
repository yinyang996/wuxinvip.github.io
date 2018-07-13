function getpw(length, upper, lower, numbers, special) {
    var chars = '';
    if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789';
    if (special) chars += '!#$%&*+-=?@^_~.,|';
    var pw = '';
    chars = chars.split('');
    for (var i = 0; i < length; i++) pw += chars[Math.floor(Math.random() * chars.length)];
    return pw
}

function generate() {
    var length = document.getElementById('length').value;
    var upper = lower = numbers = special = false;

    if (document.getElementById('upper').checked) upper = true;
    if (document.getElementById('lower').checked) lower = true;
    if (document.getElementById('numbers').checked) numbers = true;
    if (document.getElementById('special').checked) special = true;
    var Password = '';
    var reg = /^[0-9]*$/;
    if (!reg.test(length)) alert('请输入0-50的数字！');
    if (length <= 0 || length > 50) alert('请输入0-50的数字！');

    else if (!upper && !lower && !numbers && !special) alert('请选择字符集！');
    else Password += getpw(length, upper, lower, numbers, special) + '\r\n';

    document.getElementById('password').value = Password.substring(0, Password.length - 2)
}