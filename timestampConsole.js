module.exports = {
  timestampConsole: function() {
    let date = new Date();
    let mins = date.getMinutes();
    let hours = date.getHours();
    mins < 10 ? (mins = '0' + mins.toString()) : null;
    hours < 10 ? (hours = '0' + hours.toString()) : null;
    return `${hours}:${mins}`;
  }
};
