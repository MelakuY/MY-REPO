const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = () => {
  navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.onclick = () => {
    listItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  }
})

$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
  });