
//The Switch Statement 

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('Go to work.');
        console.log('Watch some TV.');
        break;
    case 'tuesday':
        console.log('Spend the day with Freddie.');
        break;
    case 'wednesday':
        console.log('Take Freddie to Nursery.');
        console.log('Head to the office.');
        break;
    case 'thursday':
        console.log('Work from home.');
        break;
    case 'friday':
        console.log('Meet up with friends.');
        break;
    case 'saturday':
        console.log('Mum comes over to see Freddie');
        break;
    case 'sunday':
        console.log('Day of rest.');
        break;
    default:
        console.log('Not a day in the week.')
}

// Quick Challange
//Write the above switch statement as a if/else statement. 

if (day === 'monday') {
    console.log('Go to work.');
    console.log('Watch some TV.');

} else if (day === 'tuesday') {
    console.log('Spend the day with Freddie.');

} else if (day === 'wednesday') {
    console.log('Take Freddie to Nursery.');
    console.log('Head to the office.');

} else if (day === 'thursday') {
    console.log('Work from home.');

} else if (day === 'friday') {
    console.log('Meet up with friends.');

} else if (day === 'saturday') {
    console.log('Mum comes over to see Freddie');

} else if (day === 'sunday') {
    console.log('Day of rest.');

} else {
    console.log('Not a day in the week.')

}