import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'
import '../sass/main.scss';
$(()=>{
    function showGreeting(){
        alert('Buonasera ' + $('.input-name').val())
    }
    $('.btn-greeting').click(showGreeting)
})