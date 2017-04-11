function authorization(username, password)
{
    var usernames_passwords = [['admin', '12345'], ['user', '1111']];
    for (var i = 0; i < usernames_passwords.length; i++) {
        for (var j = 0; j < usernames_passwords[i].length; j++) {
            if (username === usernames_passwords[i][j] && password === usernames_passwords[i][++j]) {
                return "Wellcome!";
            }
        }
    }
    return "Incorrect user name or password";
}

function weather()
{
    var weather = prompt("what is the weather today?");
    document.write(weather);
}