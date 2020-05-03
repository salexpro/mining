/* global $ */
import hotels from '../data/_hotels';

$('.reveal_map_point').click(function(){
    const hotel = $(this).data('hotel');
    $('#hotelPopup .dropdown_content').html(`
        <p class="dropdown_header">${hotels[hotel].name}</p>
        <p class="dropdown_text">${hotels[hotel].descr}</p>
        ${hotels[hotel].link ? `<a class="button hollow" href="${hotels[hotel].link}" target="_blank">Подробнее</a>` : ''}
    `)
})