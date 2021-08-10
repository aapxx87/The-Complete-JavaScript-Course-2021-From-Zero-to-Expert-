const day = 'saturday'

switch (day) {

  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to meeting');
    break;

  case 'tuesday':
    console.log('{Prepare videos');
    break;

  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;

  case 'friday':
    console.log('Record videos');
    break;

  default:
    console.log('Not a valid day');

}