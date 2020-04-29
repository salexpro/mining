
/* global $ */
import 'jquery-countdown/dist/jquery.countdown.min';

const declOfNum = (number, labels) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return (labels.length == 2) ? labels[number === 1 ? 0 : 1] : (labels[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]);
}

$('.map_countdown_time').countdown('2020/05/04 10:00', ({ target, offset: { days, hours, minutes}}) => {
    $(target).text(`${days} ${declOfNum(days, ['день', 'дня', 'дней'])} ${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} ${minutes} ${declOfNum(minutes, ['минуту', 'минуты', 'минут'])}`);
});