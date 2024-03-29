const toggleswitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleswitch.checked = true;
    }
}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
    }
}

toggleswitch.addEventListener('change', switchTheme, false);

userNameBox.addEventListener('click', function() {
    localStorage.setItem('Username', username);
});