const inputRange = document.querySelector('#font-size-control');
// console.log(inputRange.value);
const textAbracadabra = document.querySelector('#text');
// console.log(textAbracadabra);

function onChangeRange() {
    // console.log(inputRange.value);
    // textAbracadabra.style.fontSize = `40px`;
    textAbracadabra.style.fontSize = `${inputRange.value}px`;
    // console.log(`"${inputRange.value}px"`);
}

inputRange.addEventListener('change', onChangeRange);