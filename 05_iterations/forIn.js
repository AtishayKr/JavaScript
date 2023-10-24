//forIn loop it will print key by default work on both array and Object But does not work on Map

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject) {
    console.log(key);
    console.log(`${key} : ${myObject[key]}`);
}